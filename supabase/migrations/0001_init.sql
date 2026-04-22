-- ============================================================
-- LRE Baukomfort · Initial Schema
-- ============================================================

-- Kontaktanfragen
CREATE TABLE IF NOT EXISTS kontakt_anfragen (
  id                     uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at             timestamptz NOT NULL DEFAULT now(),
  name                   text NOT NULL,
  telefon                text,
  email                  text NOT NULL,
  leistung               text,
  beschreibung           text NOT NULL,
  datei_urls             text[] NOT NULL DEFAULT '{}',
  datenschutz_akzeptiert boolean NOT NULL DEFAULT false
);

ALTER TABLE kontakt_anfragen ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_kontakt"
  ON kontakt_anfragen
  FOR INSERT
  TO anon
  WITH CHECK (datenschutz_akzeptiert = true);

-- Bewerbungen
CREATE TABLE IF NOT EXISTS bewerbungen (
  id                     uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at             timestamptz NOT NULL DEFAULT now(),
  vorname                text NOT NULL,
  nachname               text NOT NULL,
  stelle                 text,
  kontakt                text NOT NULL,
  beschreibung           text,
  datei_urls             text[] NOT NULL DEFAULT '{}',
  datenschutz_akzeptiert boolean NOT NULL DEFAULT false
);

ALTER TABLE bewerbungen ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_bewerbungen"
  ON bewerbungen
  FOR INSERT
  TO anon
  WITH CHECK (datenschutz_akzeptiert = true);

-- ============================================================
-- Storage Buckets (Datei-Uploads)
-- ============================================================
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'kontakt-uploads',
  'kontakt-uploads',
  false,
  10485760,
  ARRAY['image/jpeg','image/png','image/webp','application/pdf']
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'bewerbung-uploads',
  'bewerbung-uploads',
  false,
  10485760,
  ARRAY['image/jpeg','image/png','application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
ON CONFLICT (id) DO NOTHING;

-- Storage: nur Uploads erlaubt (kein Lesen ohne Service-Role)
CREATE POLICY "anon_upload_kontakt"
  ON storage.objects
  FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'kontakt-uploads');

CREATE POLICY "anon_upload_bewerbung"
  ON storage.objects
  FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'bewerbung-uploads');
