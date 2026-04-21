import { Link } from 'react-router-dom';
import { MapPin, Calendar } from 'lucide-react';
import Logo from '../Logo/Logo';
import { useSectionNav } from '../../lib/scroll';
import styles from './Footer.module.css';

type FooterVariant = 'full' | 'mini';
type LegalActive = 'impressum' | 'datenschutz' | 'agb' | null;

interface FooterProps {
  variant?: FooterVariant;
  legalActive?: LegalActive;
}

export default function Footer({ variant = 'full', legalActive = null }: FooterProps) {
  const goToSection = useSectionNav();
  const year = '2025';

  if (variant === 'mini') {
    return (
      <footer className={styles.footerMini}>
        <div className="container">
          <div className={styles.gridMini}>
            <div>
              <div className={styles.brandRowMini}>
                <Logo size={26} />
                LRE Baukomfort
              </div>
              <p className={styles.brandTextMini}>
                Handwerksbetrieb im Schwarzwald. Fensterbau, Dachsanierung, Innenausbau.
              </p>
            </div>
            <div>
              <div className={styles.colTitle}>Navigation</div>
              <div className={styles.links}>
                <Link to="/" className={styles.link}>
                  Startseite
                </Link>
                <Link to="/#leistungen" className={styles.link}>
                  Leistungen
                </Link>
                <Link to="/karriere" className={styles.link}>
                  Karriere
                </Link>
                <Link to="/#kontakt" className={styles.link}>
                  Kontakt
                </Link>
              </div>
            </div>
            <div>
              <div className={styles.colTitle}>Kontakt</div>
              <div className={styles.links}>
                <a className={styles.link} href="tel:+4915784187568">
                  0157 / 84187568
                </a>
                <a className={styles.link} href="mailto:info@lre-baukomfort.de">
                  info@lre-baukomfort.de
                </a>
                <span className={styles.link}>Mo–Fr 7:00–17:00 Uhr</span>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.copy}>© {year} LRE Baukomfort · Thomas Vogel</div>
            <div className={styles.legal}>
              <Link to="/impressum" className={legalActive === 'impressum' ? 'active' : ''}>
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                className={legalActive === 'datenschutz' ? 'active' : ''}
              >
                Datenschutz
              </Link>
              <Link to="/agb" className={legalActive === 'agb' ? 'active' : ''}>
                AGB
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brandRow}>
              <Logo size={28} />
              LRE Baukomfort
            </div>
            <p className={styles.brandText}>
              Handwerksbetrieb für Fensterbau, Dachsanierung und Innenausbau im Schwarzwald.
              Direkt, ehrlich, regional.
            </p>
            <div className={styles.socials}>
              <a
                className={styles.social}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Standort"
              >
                <MapPin />
              </a>
            </div>
          </div>
          <div>
            <div className={styles.colTitle}>Leistungen</div>
            <div className={styles.links}>
              <button className={styles.link} onClick={() => goToSection('leistungen')}>
                Fensterbau
              </button>
              <button className={styles.link} onClick={() => goToSection('leistungen')}>
                Dachsanierung
              </button>
              <button className={styles.link} onClick={() => goToSection('leistungen')}>
                Innenausbau
              </button>
              <button className={styles.link} onClick={() => goToSection('referenzen')}>
                Referenzprojekte
              </button>
            </div>
          </div>
          <div>
            <div className={styles.colTitle}>Unternehmen</div>
            <div className={styles.links}>
              <button className={styles.link} onClick={() => goToSection('ueber-uns')}>
                Über uns
              </button>
              <Link to="/karriere" className={styles.link}>
                Karriere
              </Link>
              <button className={styles.link} onClick={() => goToSection('kontakt')}>
                Kontakt
              </button>
            </div>
          </div>
          <div>
            <div className={styles.colTitle}>Kontakt</div>
            <div className={styles.links}>
              <a className={styles.link} href="tel:+4915784187568">
                0157 / 84187568
              </a>
              <a className={styles.link} href="mailto:info@lre-baukomfort.de">
                info@lre-baukomfort.de
              </a>
              <span className={styles.link}>Mo–Fr 7:00–17:00 Uhr</span>
            </div>
            <div style={{ marginTop: 20 }}>
              <a
                href="https://calendly.com/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pink btn-sm"
              >
                <Calendar />
                Termin buchen
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.copy}>© {year} LRE Baukomfort · Thomas Vogel</div>
          <div className={styles.legal}>
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/agb">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
