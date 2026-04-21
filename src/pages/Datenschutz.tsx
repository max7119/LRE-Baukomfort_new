import { useReveal } from '../hooks/useReveal';
import Nav from '../components/Nav/Nav';
import MountainDivider from '../components/MountainDivider/MountainDivider';
import Footer from '../components/Footer/Footer';
import styles from './Legal.module.css';

const TOC = [
  { id: 'ueberblick', label: '1. Überblick' },
  { id: 'verantwortlicher', label: '2. Verantwortlicher' },
  { id: 'hosting', label: '3. Hosting & Logfiles' },
  { id: 'kontaktformular', label: '4. Kontaktformular' },
  { id: 'bewerbung', label: '5. Bewerbungen' },
  { id: 'cookies', label: '6. Cookies' },
  { id: 'dritte', label: '7. Dienste Dritter' },
  { id: 'rechte', label: '8. Ihre Rechte' },
  { id: 'beschwerde', label: '9. Beschwerderecht' },
  { id: 'aenderungen', label: '10. Änderungen' },
];

export default function Datenschutz() {
  useReveal();
  return (
    <>
      <Nav ctaVariant="kontakt" activePage="legal" />

      <section id="hero" className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Rechtliches</div>
            <h1 className={styles.heroH1}>Datenschutzerklärung</h1>
            <p className={styles.heroSub}>
              Wir gehen sparsam mit Ihren Daten um — nur, was für die Anfrage oder den
              Auftrag nötig ist. Hier steht, was genau passiert.
            </p>
          </div>
        </div>
      </section>

      <MountainDivider variant="slim" />

      <section id="legal" className={styles.legal}>
        <div className="container">
          <div className={styles.legalGrid}>
            <aside className={styles.legalToc}>
              <div className={styles.legalTocTitle}>Inhalt</div>
              {TOC.map((t) => (
                <a key={t.id} href={`#${t.id}`}>
                  {t.label}
                </a>
              ))}
            </aside>

            <div className={styles.legalContent}>
              <h2 id="ueberblick">1. Überblick &amp; allgemeine Hinweise</h2>
              <p>
                Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir behandeln
                Ihre Daten vertraulich und entsprechend der gesetzlichen
                Datenschutzvorschriften (DSGVO, BDSG, DDG) sowie dieser
                Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie unsere Website besuchen, werden verschiedene personenbezogene
                Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
                persönlich identifiziert werden können. Die vorliegende
                Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
                sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>

              <div className={styles.callout}>
                <p>
                  <strong>Kurz gesagt:</strong> Wir erheben Daten, die Sie uns selbst
                  mitteilen (z. B. über das Kontaktformular), und technische Daten,
                  die automatisch beim Besuch einer Website anfallen. Wir geben nichts
                  an Dritte weiter — außer an Dienstleister, die wir zur Erbringung
                  unserer Leistung benötigen (Hosting, E-Mail).
                </p>
              </div>

              <h2 id="verantwortlicher">2. Verantwortlicher</h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne
                des Art. 4 Nr. 7 DSGVO ist:
              </p>
              <div className={styles.infoBlock}>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Firma</span>
                  <span className={styles.v}>LRE Baukomfort · Thomas Vogel</span>
                </div>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Anschrift</span>
                  <span className={styles.v}>[Straße und Hausnummer], [PLZ] [Ort]</span>
                </div>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Telefon</span>
                  <span className={styles.v}>
                    <a href="tel:+4915784187568">0157 / 84187568</a>
                  </span>
                </div>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>E-Mail</span>
                  <span className={styles.v}>
                    <a href="mailto:info@lre-baukomfort.de">info@lre-baukomfort.de</a>
                  </span>
                </div>
              </div>
              <p>
                Ein Datenschutzbeauftragter ist gesetzlich nicht erforderlich. Fragen
                zum Datenschutz richten Sie bitte direkt an die oben genannten
                Kontaktdaten.
              </p>

              <h2 id="hosting">3. Hosting &amp; Server-Logfiles</h2>
              <p>
                Unsere Website wird bei einem externen Dienstleister gehostet ({' '}
                <strong>
                  [Name des Hosters, z. B. Hetzner Online GmbH, Gunzenhausen,
                  Deutschland]
                </strong>{' '}
                ). Die personenbezogenen Daten, die auf dieser Website erfasst
                werden, werden auf den Servern des Hosters gespeichert.
              </p>
              <p>
                Der Provider erhebt in sogenannten Logfiles automatisch Informationen,
                die Ihr Browser übermittelt. Dies sind:
              </p>
              <ul>
                <li>IP-Adresse (anonymisiert bzw. nach 7 Tagen gelöscht)</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Zeitzonendifferenz zur Greenwich Mean Time</li>
                <li>Inhalt der Anforderung (konkrete Seite)</li>
                <li>HTTP-Statuscode und übertragene Datenmenge</li>
                <li>Referrer-URL, Browsertyp, Betriebssystem</li>
              </ul>
              <p>
                Die Erfassung dieser Daten erfolgt auf Grundlage von{' '}
                <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Der Websitebetreiber hat
                ein berechtigtes Interesse an der technisch fehlerfreien Darstellung
                und der Optimierung seiner Website — hierzu müssen die Server-Logfiles
                erfasst werden. Eine Zusammenführung dieser Daten mit anderen
                Datenquellen findet nicht statt.
              </p>
              <p>
                Mit dem Hoster haben wir einen Auftragsverarbeitungsvertrag (AVV)
                gemäß <strong>Art. 28 DSGVO</strong> abgeschlossen.
              </p>

              <h2 id="kontaktformular">4. Kontaktformular &amp; E-Mail-Anfragen</h2>
              <p>
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inkl. der von Ihnen dort
                angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
                Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p>
                <strong>Verarbeitete Daten:</strong> Name, Telefonnummer oder
                E-Mail-Adresse, ggf. Angaben zum Projekt.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong>
              </p>
              <ul>
                <li>
                  Art. 6 Abs. 1 lit. b DSGVO — sofern Ihre Anfrage mit der Erfüllung
                  eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                  Maßnahmen erforderlich ist.
                </li>
                <li>
                  Art. 6 Abs. 1 lit. f DSGVO — in den übrigen Fällen beruht die
                  Verarbeitung auf unserem berechtigten Interesse an der effektiven
                  Bearbeitung der an uns gerichteten Anfragen.
                </li>
              </ul>
              <p>
                <strong>Speicherdauer:</strong> Die von Ihnen im Kontaktformular
                eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
                auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der
                Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener
                Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen —
                insbesondere Aufbewahrungsfristen — bleiben unberührt.
              </p>

              <h2 id="bewerbung">5. Bewerbungen</h2>
              <p>
                Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben (z. B.
                über unsere Karriere-Seite). Im Folgenden informieren wir Sie über
                Umfang, Zweck und Verwendung der im Rahmen des Bewerbungsprozesses
                erhobenen personenbezogenen Daten.
              </p>
              <p>
                <strong>Umfang und Zweck:</strong> Wenn Sie uns eine Bewerbung
                zukommen lassen, verarbeiten wir Ihre damit verbundenen
                personenbezogenen Daten (z. B. Kontakt- und Kommunikationsdaten,
                Bewerbungsunterlagen, Notizen aus Vorstellungsgesprächen), soweit
                dies zur Entscheidung über die Begründung eines
                Beschäftigungsverhältnisses erforderlich ist. Rechtsgrundlage hierfür
                ist <strong>§ 26 BDSG</strong> nach deutschem Recht,{' '}
                <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> und — sofern Sie eine
                Einwilligung erteilt haben —{' '}
                <strong>Art. 6 Abs. 1 lit. a DSGVO</strong>.
              </p>
              <p>
                <strong>Aufbewahrungsdauer:</strong> Kommt ein
                Beschäftigungsverhältnis nicht zustande, werden Ihre
                Bewerbungsunterlagen spätestens <strong>sechs Monate</strong> nach
                Bekanntgabe der Absage gelöscht, sofern einer Löschung keine
                sonstigen berechtigten Interessen des Verantwortlichen
                entgegenstehen (z. B. Beweispflicht im Rahmen eines Verfahrens nach
                dem AGG). Kommt das Beschäftigungsverhältnis zustande, werden die
                Bewerberdaten in unserem Personalinformationssystem weiterverarbeitet.
              </p>

              <h2 id="cookies">6. Cookies &amp; lokale Speicherung</h2>
              <p>
                Unsere Website verwendet{' '}
                <strong>keine Analyse-, Marketing- oder Tracking-Cookies</strong>.
                Einzige Ausnahme: Die Einstellung Ihres Farbschemas (Hell-/Dunkelmodus)
                wird in Ihrem Browser-eigenen <em>localStorage</em> gespeichert,
                verlässt Ihr Gerät aber nicht. Rechtsgrundlage:{' '}
                <strong>§ 25 Abs. 2 Nr. 2 TDDDG</strong> (unbedingt erforderlicher
                Speicherzugriff).
              </p>

              <h2 id="dritte">7. Einbindung externer Dienste</h2>
              <p>
                Zur Darstellung der Website laden wir einige Ressourcen von
                Drittanbietern nach. Dabei kann Ihre IP-Adresse an die jeweiligen
                Anbieter übermittelt werden. Dies ist technisch erforderlich, um die
                Inhalte in Ihrem Browser auszuliefern. Rechtsgrundlage ist{' '}
                <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse
                an der ansprechenden Darstellung).
              </p>

              <h3>Fontshare (Typografie)</h3>
              <p>
                Wir binden die Schriftarten <em>Boska</em> und <em>Satoshi</em> über
                den Dienst <strong>Fontshare</strong> (Indian Type Foundry, Ahmedabad,
                Indien) ein. Details:{' '}
                <a
                  href="https://www.fontshare.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fontshare.com/privacy-policy
                </a>
                .
              </p>

              <h3>unpkg (Icon-Bibliothek)</h3>
              <p>
                Für Icons laden wir die Bibliothek <strong>Lucide</strong> über das CDN{' '}
                <em>unpkg.com</em> (Cloudflare, Inc., USA). Details:{' '}
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cloudflare.com/privacypolicy
                </a>
                .
              </p>

              <h3>Platzhalterbilder (Picsum Photos)</h3>
              <p>
                In der Entwicklungs-/Vorschau-Version der Website werden
                Platzhalterbilder über <em>picsum.photos</em> geladen. Diese werden
                vor dem Produktivbetrieb durch eigene Bilder ersetzt.
              </p>

              <h3>Terminbuchung (Calendly)</h3>
              <p>
                Sofern Sie den Button „Online-Termin buchen" klicken, werden Sie auf
                die Website von <strong>Calendly LLC</strong> (Atlanta, USA)
                weitergeleitet. Es gelten dort die Datenschutzbestimmungen von
                Calendly:{' '}
                <a
                  href="https://calendly.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  calendly.com/privacy
                </a>
                . Die Datenübermittlung in die USA erfolgt auf Grundlage des EU-US
                Data Privacy Framework (Angemessenheitsbeschluss der EU-Kommission).
              </p>

              <h2 id="rechte">8. Ihre Rechte als betroffene Person</h2>
              <p>
                Sie haben jederzeit die folgenden Rechte uns gegenüber, die Sie per
                E-Mail an{' '}
                <a href="mailto:info@lre-baukomfort.de">info@lre-baukomfort.de</a>{' '}
                geltend machen können:
              </p>
              <ul>
                <li>
                  <strong>Auskunft</strong> über die zu Ihrer Person gespeicherten
                  Daten (Art. 15 DSGVO)
                </li>
                <li>
                  <strong>Berichtigung</strong> unrichtiger oder unvollständiger
                  Daten (Art. 16 DSGVO)
                </li>
                <li>
                  <strong>Löschung</strong> Ihrer bei uns gespeicherten Daten (Art.
                  17 DSGVO)
                </li>
                <li>
                  <strong>Einschränkung</strong> der Datenverarbeitung (Art. 18 DSGVO)
                </li>
                <li>
                  <strong>Datenübertragbarkeit</strong> — Herausgabe Ihrer Daten in
                  einem gängigen Format (Art. 20 DSGVO)
                </li>
                <li>
                  <strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)
                </li>
                <li>
                  <strong>Widerruf</strong> einer erteilten Einwilligung mit Wirkung
                  für die Zukunft (Art. 7 Abs. 3 DSGVO)
                </li>
              </ul>

              <h2 id="beschwerde">9. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
                Beschwerderecht bei einer Aufsichtsbehörde zu — insbesondere in dem
                Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
                oder des Orts des mutmaßlichen Verstoßes.
              </p>
              <p>Für Baden-Württemberg:</p>
              <div className={styles.infoBlock}>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Behörde</span>
                  <span className={styles.v}>
                    Der Landesbeauftragte für den Datenschutz und die
                    Informationsfreiheit Baden-Württemberg
                  </span>
                </div>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Anschrift</span>
                  <span className={styles.v}>
                    Lautenschlagerstraße 20, 70173 Stuttgart
                  </span>
                </div>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Web</span>
                  <span className={styles.v}>
                    <a
                      href="https://www.baden-wuerttemberg.datenschutz.de"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      baden-wuerttemberg.datenschutz.de
                    </a>
                  </span>
                </div>
              </div>

              <h2 id="aenderungen">10. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
                stets den aktuellen rechtlichen Anforderungen entspricht oder um
                Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
                z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch
                gilt dann die neue Datenschutzerklärung.
              </p>

              <div className={styles.legalMeta}>Stand: April 2026</div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="mini" legalActive="datenschutz" />
    </>
  );
}
