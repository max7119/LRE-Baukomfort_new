import { useReveal } from '../hooks/useReveal';
import Nav from '../components/Nav/Nav';
import MountainDivider from '../components/MountainDivider/MountainDivider';
import Footer from '../components/Footer/Footer';
import styles from './Legal.module.css';

const TOC = [
  { id: 'anbieter', label: 'Diensteanbieter' },
  { id: 'kontakt', label: 'Kontakt' },
  { id: 'berufsrechtliches', label: 'Berufsrechtliches' },
  { id: 'umsatzsteuer', label: 'Umsatzsteuer-ID' },
  { id: 'verantwortlich', label: 'Inhaltlich verantwortlich' },
  { id: 'streitbeilegung', label: 'Streitbeilegung' },
  { id: 'haftung', label: 'Haftung & Urheberrecht' },
];

export default function Impressum() {
  useReveal();
  return (
    <>
      <Nav ctaVariant="kontakt" activePage="legal" />

      <section id="hero" className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Rechtliches</div>
            <h1 className={styles.heroH1}>Impressum</h1>
            <p className={styles.heroSub}>
              Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18
              Medienstaatsvertrag (MStV).
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
              <h2 id="anbieter">Diensteanbieter</h2>
              <div className={styles.infoBlock}>
                <div className={styles.infoBlockLabel}>Firma &amp; Anschrift</div>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Firma</span>
                  <span className={styles.v}>LRE Baukomfort</span>
                </div>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Inhaber</span>
                  <span className={styles.v}>Thomas Vogel</span>
                </div>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Straße</span>
                  <span className={styles.v}>[Straße und Hausnummer]</span>
                </div>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Ort</span>
                  <span className={styles.v}>[PLZ] [Ort]</span>
                </div>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Deutschland</span>
                </div>
              </div>

              <h2 id="kontakt">Kontakt</h2>
              <div className={styles.infoBlock}>
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
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Erreichbarkeit</span>
                  <span className={styles.v}>Mo–Fr, 7:00–17:00 Uhr</span>
                </div>
              </div>

              <h2 id="berufsrechtliches">Berufsrechtliche Angaben</h2>
              <div className={styles.infoBlock}>
                <div className={styles.infoBlockLabel}>Handwerksbetrieb</div>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Eingetragen in</span>
                  <span className={styles.v}>
                    Handwerksrolle der Handwerkskammer [zuständige Kammer]
                  </span>
                </div>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Eintragungs-Nr.</span>
                  <span className={styles.v}>[Handwerksrollen-Nr.]</span>
                </div>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Gewerbe</span>
                  <span className={styles.v}>
                    [z. B. Tischlerhandwerk / Dachdeckerhandwerk]
                  </span>
                </div>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>Verliehen in</span>
                  <span className={styles.v}>Deutschland</span>
                </div>
              </div>
              <p>
                Zuständige Aufsichtsbehörde:{' '}
                <strong>Handwerkskammer [zuständige Kammer]</strong>, [Anschrift der
                Kammer]. Es gelten die Bestimmungen der Handwerksordnung (HwO). Diese
                kann unter{' '}
                <a
                  href="https://www.gesetze-im-internet.de/hwo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gesetze-im-internet.de/hwo
                </a>{' '}
                eingesehen werden.
              </p>

              <h2 id="umsatzsteuer">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              </p>
              <div className={styles.infoBlock}>
                <div className={styles.infoBlockRow}>
                  <span className={styles.k}>USt-IdNr.</span>
                  <span className={styles.v}>[DE000000000]</span>
                </div>
              </div>
              <p>
                <em>Alternativ — falls kein Eintrag besteht:</em> Kleinunternehmer
                gemäß § 19 UStG. Es wird keine Umsatzsteuer berechnet und
                ausgewiesen.
              </p>

              <h2 id="verantwortlich">
                Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV
              </h2>
              <p>
                Thomas Vogel
                <br />
                [Straße und Hausnummer]
                <br />
                [PLZ] [Ort]
              </p>

              <h2 id="streitbeilegung">Streitbeilegung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit, die Sie hier finden:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ec.europa.eu/consumers/odr
                </a>
                .
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              <p>
                <strong>
                  Verbraucherstreitbeilegung / Universalschlichtungsstelle:
                </strong>{' '}
                Wir sind nicht bereit und nicht verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>

              <h2 id="haftung">Haftung für Inhalte und Links</h2>
              <h3>Inhalte dieser Website</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
                §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                Inhalte umgehend entfernen.
              </p>

              <h3>Externe Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                erkennbar.
              </p>

              <h3>Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser
                Website unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
                wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>

              <div className={styles.legalMeta}>
                Stand: April 2026 · Dieses Impressum gilt auch für die folgenden
                Social-Media-Profile, sofern dort kein eigenes Impressum hinterlegt
                ist.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="mini" legalActive="impressum" />
    </>
  );
}
