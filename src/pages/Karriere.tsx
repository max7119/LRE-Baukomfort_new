import { useRef, useState, FormEvent } from 'react';
import {
  Euro,
  Clock,
  HardHat,
  GraduationCap,
  Users,
  MapPin,
  Briefcase,
  Mail,
  Plus,
  Send,
  UploadCloud,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { supabase } from '../lib/supabase';
import Nav from '../components/Nav/Nav';
import MountainDivider from '../components/MountainDivider/MountainDivider';
import Footer from '../components/Footer/Footer';
import styles from './Karriere.module.css';

type JobBadge = { label: string; variant: 'sofort' | 'flexibel' };
type JobLocation = { text: string; icon: 'map-pin' | 'briefcase' | 'euro' };
type JobMeta = JobLocation[];

interface Job {
  id: string;
  title: string;
  badge?: JobBadge;
  meta: JobMeta;
  bringst: string[];
  machst: string[];
  revealDelay?: 1 | 2;
}

const JOBS: Job[] = [
  {
    id: 'job-1',
    title: 'Fenstermonteur / Tischler (m/w/d)',
    badge: { label: 'ab sofort', variant: 'sofort' },
    meta: [
      { icon: 'map-pin', text: 'Schwarzwald-Baar' },
      { icon: 'briefcase', text: 'Vollzeit' },
      { icon: 'euro', text: 'nach Qualifikation' },
    ],
    bringst: [
      'Ausbildung als Tischler, Schreiner, Fensterbauer oder ähnlich — oder mehrere Jahre Erfahrung im Einbau',
      'Handwerkliches Geschick und sorgfältige Arbeitsweise',
      'Führerschein Klasse B',
      'Du kommst pünktlich, kommunizierst klar, hinterlässt eine saubere Baustelle',
    ],
    machst: [
      'Einbau, Tausch und Justage von Fenstern, Türen und Hebe-Schiebe-Elementen',
      'Montage bei Privat- und Gewerbekunden in der Region',
      'Gelegentlich Aufmaß und Vorbereitung gemeinsam mit dem Projektleiter',
    ],
  },
  {
    id: 'job-2',
    title: 'Dachdecker / Helfer Dachsanierung (m/w/d)',
    badge: { label: 'flexibler Einstieg', variant: 'flexibel' },
    meta: [
      { icon: 'map-pin', text: 'Raum Freiburg & Schwarzwald' },
      { icon: 'briefcase', text: 'Vollzeit' },
    ],
    bringst: [
      'Ausbildung als Dachdecker von Vorteil — aber kein Muss',
      'Schwindelfrei, körperlich fit, zuverlässig',
      'Führerschein und Lust auf Arbeit im Freien, auch im Schwarzwald-Winter',
    ],
    machst: [
      'Dacheindeckung, Dämmung, Anschlussarbeiten',
      'Sturmschaden-Notfallreparaturen und Wartungsarbeiten',
      'Arbeit auf Privat- und Gewerbegebäuden in der Region',
    ],
    revealDelay: 1,
  },
  {
    id: 'job-3',
    title: 'Trockenbauer / Innenausbau (m/w/d)',
    badge: { label: 'Vollzeit / Teilzeit', variant: 'flexibel' },
    meta: [
      { icon: 'map-pin', text: 'Hochschwarzwald' },
      { icon: 'briefcase', text: 'Vollzeit oder Teilzeit' },
    ],
    bringst: [
      'Erfahrung im Trockenbau, Bodenbelägen oder Türenmontage',
      'Sorgfalt und Eigeninitiative — wir erklären einmal, dann läuft es',
      'Führerschein Klasse B',
    ],
    machst: [
      'Trockenbauarbeiten, Deckenabhängungen, Raumtrenner',
      'Bodenbeläge, Sockelleisten, Innentüren',
      'Übergabe der Baustelle in Besenzustand — das ist bei uns Standard',
    ],
    revealDelay: 2,
  },
];

const WHY = [
  {
    icon: <Euro />,
    title: 'Faire Bezahlung',
    desc: 'Tariforientiert, pünktlich, mit Zuschlägen für Überstunden. Keine Spielchen mit dem Lohnzettel.',
  },
  {
    icon: <Clock />,
    title: 'Geregelte Arbeitszeiten',
    desc: 'Mo–Fr, kein Wochenendeinsatz ohne Absprache. Feierabend ist Feierabend — wir schreiben keine Nachrichten nachts.',
    delay: 1,
  },
  {
    icon: <HardHat />,
    title: 'Eigenes Werkzeug & Fahrzeug',
    desc: 'Ordentliches Werkzeug, saubere Arbeitskleidung, Firmenfahrzeug für die Montage. Kein Eigeninvestment.',
    delay: 2,
  },
  {
    icon: <GraduationCap />,
    title: 'Weiterbildung möglich',
    desc: 'Wer sich entwickeln will, bekommt Unterstützung — Herstellerschulungen, Meisterkurs, was sinnvoll ist.',
  },
  {
    icon: <Users />,
    title: 'Kleines Team, kurze Wege',
    desc: 'Du kennst alle beim Namen. Probleme werden direkt gelöst, nicht durch drei Abteilungen geschoben.',
    delay: 1,
  },
  {
    icon: <MapPin />,
    title: 'Regional, nicht pendeln',
    desc: 'Wir arbeiten im Schwarzwald — kurze Anfahrten, kein wochenlanger Montage-Einsatz weit weg von zu Hause.',
    delay: 2,
  },
];

const MetaIcon = ({ icon }: { icon: JobLocation['icon'] }) => {
  if (icon === 'map-pin') return <MapPin />;
  if (icon === 'briefcase') return <Briefcase />;
  return <Euro />;
};

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

export default function Karriere() {
  useReveal();
  const [openJob, setOpenJob] = useState<string | null>(null);

  const [vorname, setVorname] = useState('');
  const [nachname, setNachname] = useState('');
  const [stelle, setStelle] = useState('');
  const [kontakt, setKontakt] = useState('');
  const [beschreibung, setBeschreibung] = useState('');
  const [status, setStatus] = useState<SubmitState>('idle');
  const fileRef = useRef<HTMLInputElement>(null);

  const toggleJob = (id: string) => {
    setOpenJob((cur) => (cur === id ? null : id));
  };

  const scrollToForm = () => {
    const el = document.getElementById('bewerbung');
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  const prefillJob = (title: string) => {
    setStelle(title);
    scrollToForm();
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const datei_urls: string[] = [];
    const files = fileRef.current?.files;
    if (files) {
      for (const file of Array.from(files)) {
        const path = `${Date.now()}-${Math.random().toString(36).slice(2)}-${file.name}`;
        const { data } = await supabase.storage
          .from('bewerbung-uploads')
          .upload(path, file);
        if (data) datei_urls.push(data.path);
      }
    }

    const { error } = await supabase.from('bewerbungen').insert({
      vorname,
      nachname,
      stelle,
      kontakt,
      beschreibung,
      datei_urls,
    });

    if (error) {
      setStatus('error');
      alert('Fehler beim Senden. Bitte versuchen Sie es erneut.');
      return;
    }

    setStatus('success');
  };

  const sent = status === 'success';

  return (
    <>
      <Nav ctaVariant="bewerben" activePage="karriere" />

      {/* HERO */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGradient} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Karriere bei LRE Baukomfort</div>
            <h1 className={styles.heroH1}>
              Gute Arbeit.
              <br />
              <em>Guter Arbeitgeber.</em>
            </h1>
            <p className={styles.heroSub}>
              Wir sind ein Handwerksbetrieb aus dem Schwarzwald. Kein Konzern, keine
              Versprechen aus dem Hochglanzprospekt. Wenn es passt, weißt du es nach dem
              ersten Tag.
            </p>
          </div>
        </div>
      </section>

      <MountainDivider variant="small" />

      {/* WARUM LRE */}
      <section id="warum" className={styles.warum}>
        <div className="container">
          <div className="reveal">
            <div className="eyebrow">Warum LRE</div>
            <h2>Was dich erwartet — ohne Marketing-Sprech</h2>
          </div>
          <div className={styles.whyGrid}>
            {WHY.map((w, i) => (
              <div
                key={i}
                className={`${styles.whyCard} reveal ${
                  w.delay === 1 ? 'reveal-delay-1' : w.delay === 2 ? 'reveal-delay-2' : ''
                }`}
              >
                <div className={styles.whyIcon}>{w.icon}</div>
                <div className={styles.whyTitle}>{w.title}</div>
                <p className={styles.whyDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFENE STELLEN */}
      <section id="stellen" className={styles.stellen}>
        <div className="container">
          <div className="reveal">
            <div className="eyebrow">Offene Stellen</div>
            <h2>Was wir gerade suchen</h2>
          </div>

          <div className={styles.jobsGrid}>
            {JOBS.map((job) => {
              const isOpen = openJob === job.id;
              return (
                <div
                  key={job.id}
                  className={`${styles.jobCard} reveal ${
                    job.revealDelay === 1
                      ? 'reveal-delay-1'
                      : job.revealDelay === 2
                      ? 'reveal-delay-2'
                      : ''
                  } ${isOpen ? styles.jobCardOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.jobHeader}
                    onClick={() => toggleJob(job.id)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.jobHeaderLeft}>
                      <div className={styles.jobHeaderTitle}>
                        <div className={styles.jobTitle}>{job.title}</div>
                        {job.badge && (
                          <span
                            className={`${styles.jobBadge} ${
                              job.badge.variant === 'sofort'
                                ? styles.badgeSofort
                                : styles.badgeFlexibel
                            }`}
                          >
                            {job.badge.label}
                          </span>
                        )}
                      </div>
                      <div className={styles.jobMeta}>
                        {job.meta.map((m, i) => (
                          <span
                            key={i}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                          >
                            <MetaIcon icon={m.icon} />
                            {m.text}
                            {i < job.meta.length - 1 && (
                              <span className={styles.jobMetaSep}>·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.jobToggle}>
                      <Plus style={{ width: 14, height: 14 }} />
                    </div>
                  </button>
                  <div className={styles.jobBody}>
                    <div className={styles.jobBodyInner}>
                      <div className={styles.jobSectionTitle}>Was du mitbringst</div>
                      <ul className={styles.jobList}>
                        {job.bringst.map((li, i) => (
                          <li key={i}>{li}</li>
                        ))}
                      </ul>
                      <div className={styles.jobSectionTitle}>Was du machst</div>
                      <ul className={styles.jobList}>
                        {job.machst.map((li, i) => (
                          <li key={i}>{li}</li>
                        ))}
                      </ul>
                      <div className={styles.jobApplyRow}>
                        <button
                          type="button"
                          className="btn btn-pink"
                          onClick={() => prefillJob(job.title)}
                        >
                          <Send />
                          Jetzt bewerben
                        </button>
                        <span className={styles.orPhone}>
                          Oder anrufen:{' '}
                          <a href="tel:+4977200000000">07720 000 000</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Initiativbewerbung */}
            <div
              className={`${styles.jobCard} ${styles.jobCardInit} reveal ${
                openJob === 'job-init' ? styles.jobCardOpen : ''
              }`}
            >
              <button
                type="button"
                className={styles.jobHeader}
                onClick={() => toggleJob('job-init')}
                aria-expanded={openJob === 'job-init'}
              >
                <div className={styles.jobHeaderLeft}>
                  <div className={`${styles.jobTitle} ${styles.jobTitleMuted}`}>
                    Nichts passt — aber Handwerk liegt dir?
                  </div>
                  <div className={styles.jobMeta}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      <Mail />
                      Initiativbewerbung jederzeit willkommen
                    </span>
                  </div>
                </div>
                <div className={styles.jobToggle}>
                  <Plus style={{ width: 14, height: 14 }} />
                </div>
              </button>
              <div className={styles.jobBody}>
                <div className={styles.jobBodyInner}>
                  <p className={styles.jobInitText}>
                    Schick uns drei Sätze — was du kannst, was du suchst. Kein Anschreiben,
                    kein PDF-Lebenslauf nötig. Wenn es passt, melden wir uns.
                  </p>
                  <button
                    type="button"
                    className="btn btn-pink btn-sm"
                    onClick={() => prefillJob('Initiativbewerbung')}
                  >
                    <Send />
                    Kurz melden
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEWERBUNGSPROZESS + FORMULAR */}
      <section id="bewerbung" className={styles.bewerbung}>
        <div className="container">
          <div className={styles.bewerbungGrid}>
            <div className={styles.bewerbungText}>
              <div className="reveal">
                <div className="eyebrow">So läuft es ab</div>
                <h2>Kein Bewerbungs-Marathon</h2>
                <p>
                  Wir verschwenden keine Zeit — weder deine noch unsere. Drei Schritte,
                  fertig.
                </p>
              </div>
              <div className={`${styles.processSteps} reveal reveal-delay-1`}>
                <div className={styles.processStep}>
                  <div className={styles.stepNum}>1</div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepTitle}>Kurze Nachricht</div>
                    <div className={styles.stepDesc}>
                      Formular ausfüllen oder anrufen — ein paar Zeilen reichen. Kein
                      Anschreiben, kein Bewerbungsfoto.
                    </div>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <div className={styles.stepNum}>2</div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepTitle}>Kurzes Gespräch</div>
                    <div className={styles.stepDesc}>
                      Telefonat oder persönliches Treffen — 30 Minuten, damit wir uns ein
                      Bild machen können. Beide Seiten.
                    </div>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <div className={styles.stepNum}>3</div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepTitle}>Probetag (optional)</div>
                    <div className={styles.stepDesc}>
                      Wer möchte, kann einen Tag mitfahren. Bezahlt. Kein Test, einfach
                      schauen ob es passt.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.bewerbungForm} reveal reveal-delay-1`}>
              <h3>Kurz bewerben</h3>
              <form
                onSubmit={submit}
                style={sent ? { opacity: 0.5, pointerEvents: 'none' } : undefined}
              >
                <div className={styles.formRow}>
                  <div className={styles.fg}>
                    <label htmlFor="bw-vorname">Vorname</label>
                    <input
                      id="bw-vorname"
                      type="text"
                      placeholder="Max"
                      required
                      value={vorname}
                      onChange={(e) => setVorname(e.target.value)}
                    />
                  </div>
                  <div className={styles.fg}>
                    <label htmlFor="bw-nachname">Nachname</label>
                    <input
                      id="bw-nachname"
                      type="text"
                      placeholder="Mustermann"
                      required
                      value={nachname}
                      onChange={(e) => setNachname(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.fg}>
                  <label htmlFor="bw-stelle">Stelle</label>
                  <select
                    id="bw-stelle"
                    value={stelle}
                    onChange={(e) => setStelle(e.target.value)}
                  >
                    <option value="">Stelle wählen …</option>
                    <option>Fenstermonteur / Tischler (m/w/d)</option>
                    <option>Dachdecker / Helfer Dachsanierung (m/w/d)</option>
                    <option>Trockenbauer / Innenausbau (m/w/d)</option>
                    <option>Initiativbewerbung</option>
                  </select>
                </div>
                <div className={styles.fg}>
                  <label htmlFor="bw-kontakt">Telefon oder E-Mail</label>
                  <input
                    id="bw-kontakt"
                    type="text"
                    placeholder="07720 123456 oder max@muster.de"
                    required
                    value={kontakt}
                    onChange={(e) => setKontakt(e.target.value)}
                  />
                </div>
                <div className={styles.fg}>
                  <label htmlFor="bw-desc">Drei Sätze über dich (optional)</label>
                  <textarea
                    id="bw-desc"
                    placeholder="Was machst du gerade, was interessiert dich, was kannst du?"
                    rows={3}
                    value={beschreibung}
                    onChange={(e) => setBeschreibung(e.target.value)}
                  />
                </div>
                <div className={styles.fg}>
                  <label htmlFor="bw-files">Lebenslauf / Zeugnisse (optional)</label>
                  <div className={styles.upload}>
                    <input
                      id="bw-files"
                      ref={fileRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                      multiple
                    />
                    <UploadCloud />
                    <div className={styles.uzTitle}>
                      Datei auswählen oder hierher ziehen
                    </div>
                    <div className={styles.uzSub}>PDF, DOC, JPG bis 10 MB</div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-pink"
                  disabled={status === 'sending'}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}
                >
                  <Send />
                  {status === 'sending' ? 'Wird gesendet…' : 'Bewerbung absenden'}
                </button>
              </form>
              <div
                className={`${styles.success} ${sent ? styles.successVisible : ''}`}
              >
                Danke! Wir melden uns innerhalb von 2 Werktagen bei dir.
              </div>
              <div className={styles.fallbackNote}>
                Oder direkt: <a href="tel:+4977200000000">07720 000 000</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="mini" />
    </>
  );
}
