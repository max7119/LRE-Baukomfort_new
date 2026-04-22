import { useRef, useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Calendar, Send, UploadCloud } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import styles from './Kontakt.module.css';

const REGIONS = [
  'Villingen-Schwenningen',
  'Freiburg',
  'Titisee-Neustadt',
  'Hinterzarten',
  'Rottweil',
  'Hochschwarzwald',
];

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

export default function Kontakt() {
  const [name, setName] = useState('');
  const [telefon, setTelefon] = useState('');
  const [email, setEmail] = useState('');
  const [leistung, setLeistung] = useState('');
  const [beschreibung, setBeschreibung] = useState('');
  const [datenschutz, setDatenschutz] = useState(false);
  const [status, setStatus] = useState<SubmitState>('idle');
  const fileRef = useRef<HTMLInputElement>(null);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const datei_urls: string[] = [];
    const files = fileRef.current?.files;
    if (files) {
      for (const file of Array.from(files)) {
        const path = `${Date.now()}-${Math.random().toString(36).slice(2)}-${file.name}`;
        const { data } = await supabase.storage
          .from('kontakt-uploads')
          .upload(path, file);
        if (data) datei_urls.push(data.path);
      }
    }

    const { error } = await supabase.from('kontakt_anfragen').insert({
      name,
      telefon,
      email,
      leistung,
      beschreibung,
      datei_urls,
      datenschutz_akzeptiert: datenschutz,
    });

    if (error) {
      setStatus('error');
      alert(
        error.code === '42501'
          ? 'Sie haben bereits mehrere Anfragen gesendet. Bitte versuchen Sie es in einer Stunde erneut.'
          : 'Fehler beim Senden. Bitte versuchen Sie es erneut.'
      );
      return;
    }

    setStatus('success');
    setName('');
    setTelefon('');
    setEmail('');
    setLeistung('');
    setBeschreibung('');
    setDatenschutz(false);
    if (fileRef.current) fileRef.current.value = '';
  };

  const sent = status === 'success';

  return (
    <section id="kontakt" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className="eyebrow reveal">Kontakt</div>
            <h2 className={`${styles.h2} reveal`}>Projekt anfragen</h2>
            <p className={`${styles.intro} reveal`}>
              Kurze Beschreibung, Foto wenn vorhanden wir melden uns innerhalb von 24 Stunden.
            </p>
            <form
              onSubmit={submit}
              className="reveal"
              style={sent ? { opacity: 0.5, pointerEvents: 'none' } : undefined}
            >
              <div className={styles.formRow}>
                <div className={styles.fg}>
                  <label htmlFor="kontakt-name">Name</label>
                  <input
                    id="kontakt-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.fg}>
                  <label htmlFor="kontakt-tel">Telefon</label>
                  <input
                    id="kontakt-tel"
                    type="tel"
                    value={telefon}
                    onChange={(e) => setTelefon(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.fg}>
                <label htmlFor="kontakt-email">E-Mail</label>
                <input
                  id="kontakt-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.fg}>
                <label htmlFor="kontakt-leistung">Leistung</label>
                <select
                  id="kontakt-leistung"
                  value={leistung}
                  onChange={(e) => setLeistung(e.target.value)}
                >
                  <option value="">Bitte wählen …</option>
                  <option>Fensterbau</option>
                  <option>Dachsanierung</option>
                  <option>Innenausbau</option>
                  <option>Mehrere Gewerke</option>
                  <option>Noch nicht sicher</option>
                </select>
              </div>
              <div className={styles.fg}>
                <label htmlFor="kontakt-desc">Was planen Sie?</label>
                <textarea
                  id="kontakt-desc"
                  placeholder="Kurze Beschreibung Standort, Umfang, Zeitrahmen. Alles was hilft."
                  rows={4}
                  required
                  value={beschreibung}
                  onChange={(e) => setBeschreibung(e.target.value)}
                />
              </div>
              <div className={styles.fg}>
                <label htmlFor="kontakt-files">
                  Fotos / Skizzen hochladen (optional)
                </label>
                <div className={styles.upload}>
                  <input
                    id="kontakt-files"
                    ref={fileRef}
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    multiple
                  />
                  <UploadCloud />
                  <div className={styles.uzTitle}>
                    Bilder auswählen oder hierher ziehen
                  </div>
                  <div className={styles.uzSub}>JPG, PNG, PDF bis 10 MB</div>
                </div>
              </div>
              <label className={styles.optin}>
                <input
                  type="checkbox"
                  required
                  checked={datenschutz}
                  onChange={(e) => setDatenschutz(e.target.checked)}
                />
                <span className={styles.optinText}>
                  Ich habe die{' '}
                  <a href="/datenschutz" target="_blank" rel="noopener noreferrer">
                    Datenschutzerklärung
                  </a>{' '}
                  gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung
                  meiner Anfrage zu. *
                </span>
              </label>
              <div className={styles.submitRow}>
                <button
                  type="submit"
                  className="btn btn-pink btn-lg"
                  disabled={status === 'sending' || !datenschutz}
                >
                  <Send />
                  {status === 'sending' ? 'Wird gesendet…' : 'Anfrage absenden'}
                </button>
              </div>
            </form>
            <div className={`${styles.success} ${sent ? styles.successVisible : ''}`}>
              Ihre Anfrage ist eingegangen. Wir melden uns bald!
            </div>
          </div>

          <div className={`${styles.info} reveal reveal-delay-1`}>
            <div className="eyebrow">So erreichen Sie uns</div>
            <h3 className={styles.infoTitle}>Direkt ohne Warteschleife</h3>
            <div className={styles.item}>
              <div className={styles.icon}>
                <Phone />
              </div>
              <div>
                <div className={styles.label}>Telefon</div>
                <div className={styles.val}>
                  <a href="tel:+4915784187568">0157 / 84187568</a>
                </div>
                <div className={styles.sub}>Mo–Fr 7:00–17:00 Uhr</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <Mail />
              </div>
              <div>
                <div className={styles.label}>E-Mail</div>
                <div className={styles.val}>
                  <a href="mailto:info@lre-baukomfort.de">info@lre-baukomfort.de</a>
                </div>
                <div className={styles.sub}>Antwort innerhalb von 24 h</div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <MapPin />
              </div>
              <div>
                <div className={styles.label}>Standort</div>
                
                <div className={styles.val}>Haldenweg 15, 79853 Lenzkirch</div>
              </div>
            </div>
            <div className={styles.calendlyWrap}>
              <div className={styles.label} style={{ marginBottom: 12 }}>
                Lieber einen Termin buchen?
              </div>
              <a
                href="https://calendly.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
                style={{ display: 'inline-flex' }}
              >
                <Calendar />
                Online-Termin buchen
              </a>
              <div className={styles.calendlyNote}>Kostenlose Erstberatung · 30 Minuten</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
