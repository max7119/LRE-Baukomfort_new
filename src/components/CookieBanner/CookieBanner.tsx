import { useState, useEffect } from 'react';
import { useCookieConsent } from './useCookieConsent';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
  const { showBanner, accept, revoke } = useCookieConsent();

  useEffect(() => {
    (window as typeof window & { openCookieSettings?: () => void }).openCookieSettings = revoke;
    return () => {
      delete (window as typeof window & { openCookieSettings?: () => void }).openCookieSettings;
    };
  }, [revoke]);
  const [details, setDetails] = useState(false);

  if (!showBanner) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Cookie-Einstellungen">
      <div className={styles.banner}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="4" fill="#1C2FA0" />
              <rect x="6" y="6" width="8" height="20" fill="#F8F7F4" />
              <rect x="17" y="6" width="9" height="9" fill="#E8157D" />
              <rect x="17" y="18" width="9" height="8" fill="rgba(248,247,244,0.25)" />
            </svg>
            <span>LRE Baukomfort</span>
          </div>

          <p className={styles.text}>
            Wir verwenden technisch notwendige Cookies um
            Ihre Darstellungseinstellungen zu speichern. Es werden keine Tracking-Dienste
            oder Werbenetzwerke eingebunden.{' '}
            <button
              type="button"
              className={styles.toggleBtn}
              onClick={() => setDetails((d) => !d)}
            >
              {details ? 'Weniger anzeigen ↑' : 'Details anzeigen ↓'}
            </button>
          </p>

          {details && (
            <div className={styles.details}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Eintrag</th>
                    <th>Zweck</th>
                    <th>Speicherdauer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>lre_cookie_consent</td>
                    <td>Speichert Ihre Cookie-Einwilligung</td>
                    <td>365 Tage</td>
                  </tr>
                  <tr>
                    <td>lre_theme</td>
                    <td>Bevorzugter Farbmodus (Hell / Dunkel)</td>
                    <td>Bis zur Löschung</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.detailsNote}>
                Weitere Informationen finden Sie in unserer{' '}
                <a href="/datenschutz" className={styles.link}>
                  Datenschutzerklärung
                </a>
                .
              </p>
            </div>
          )}
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.btn} ${styles.btnNecessary}`}
            onClick={() => accept('necessary')}
          >
            Nur notwendige
          </button>
          <button
            type="button"
            className={`${styles.btn} ${styles.btnAll}`}
            onClick={() => accept('all')}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
