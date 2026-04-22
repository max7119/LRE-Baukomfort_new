-- ============================================================
-- Rate Limiting via IP-Adresse
-- Max. 3 Einträge pro IP innerhalb von 60 Minuten
-- IP wird serverseitig per Trigger gesetzt (Client kann nichts fälschen)
-- ============================================================

-- ip_address Spalten ergänzen
ALTER TABLE kontakt_anfragen ADD COLUMN IF NOT EXISTS ip_address text;
ALTER TABLE bewerbungen      ADD COLUMN IF NOT EXISTS ip_address text;

-- Hilfsfunktion: IP aus PostgREST-Request-Headers extrahieren
-- x-forwarded-for kann mehrere IPs enthalten → nur erste nehmen
CREATE OR REPLACE FUNCTION get_client_ip()
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    trim(split_part(
      current_setting('request.headers', true)::json->>'x-forwarded-for',
      ',', 1
    )),
    current_setting('request.headers', true)::json->>'x-real-ip',
    'unknown'
  );
$$;

-- Trigger-Funktion: setzt ip_address beim INSERT (überschreibt Client-Wert)
CREATE OR REPLACE FUNCTION trg_set_ip_address()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.ip_address := get_client_ip();
  RETURN NEW;
END;
$$;

-- Trigger auf kontakt_anfragen
DROP TRIGGER IF EXISTS set_ip_kontakt ON kontakt_anfragen;
CREATE TRIGGER set_ip_kontakt
  BEFORE INSERT ON kontakt_anfragen
  FOR EACH ROW EXECUTE FUNCTION trg_set_ip_address();

-- Trigger auf bewerbungen
DROP TRIGGER IF EXISTS set_ip_bewerbung ON bewerbungen;
CREATE TRIGGER set_ip_bewerbung
  BEFORE INSERT ON bewerbungen
  FOR EACH ROW EXECUTE FUNCTION trg_set_ip_address();

-- Rate-Check-Funktionen (SECURITY DEFINER → liest ohne RLS)
CREATE OR REPLACE FUNCTION check_kontakt_rate_limit()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COUNT(*) < 3
  FROM kontakt_anfragen
  WHERE ip_address = get_client_ip()
    AND created_at > now() - interval '1 hour';
$$;

CREATE OR REPLACE FUNCTION check_bewerbung_rate_limit()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COUNT(*) < 3
  FROM bewerbungen
  WHERE ip_address = get_client_ip()
    AND created_at > now() - interval '1 hour';
$$;

-- Index für schnelle Rate-Limit-Abfragen
CREATE INDEX IF NOT EXISTS idx_kontakt_ip_time
  ON kontakt_anfragen (ip_address, created_at);

CREATE INDEX IF NOT EXISTS idx_bewerbung_ip_time
  ON bewerbungen (ip_address, created_at);

-- Policies mit IP-Rate-Limit
DROP POLICY IF EXISTS "anon_insert_kontakt"    ON kontakt_anfragen;
DROP POLICY IF EXISTS "anon_insert_bewerbungen" ON bewerbungen;

CREATE POLICY "anon_insert_kontakt"
  ON kontakt_anfragen
  FOR INSERT
  TO anon
  WITH CHECK (
    datenschutz_akzeptiert = true
    AND check_kontakt_rate_limit()
  );

CREATE POLICY "anon_insert_bewerbungen"
  ON bewerbungen
  FOR INSERT
  TO anon
  WITH CHECK (
    datenschutz_akzeptiert = true
    AND check_bewerbung_rate_limit()
  );

-- Berechtigungen
GRANT EXECUTE ON FUNCTION get_client_ip()              TO anon;
GRANT EXECUTE ON FUNCTION check_kontakt_rate_limit()   TO anon;
GRANT EXECUTE ON FUNCTION check_bewerbung_rate_limit() TO anon;
