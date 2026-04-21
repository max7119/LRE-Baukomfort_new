import { CloudRain, Mountain, Home, Leaf, Send } from 'lucide-react';
import { scrollToId } from '../../lib/scroll';
import styles from './Schwarzwald.module.css';

interface Region {
  name: string;
  km: string;
  far?: boolean;
}

const REGIONS: Region[] = [
  { name: 'Villingen-Schwenningen', km: 'Heimatort' },
  { name: 'Rottweil', km: '~30 km' },
  { name: 'Titisee-Neustadt', km: '~45 km' },
  { name: 'Hinterzarten', km: '~50 km' },
  { name: 'Freiburg', km: '~65 km', far: true },
  { name: 'Hochschwarzwald', km: 'gesamte Region', far: true },
];

export default function Schwarzwald() {
  return (
    <section id="schwarzwald-strip" className={styles.section}>
      <div className={styles.topo} />
      <div className="container">
        <div className={styles.inner}>
          <div className={`${styles.text} reveal`}>
            <div className={styles.eyebrowLight}>Verwurzelt im Schwarzwald</div>
            <h2>Hier kennen wir jeden Hang, jedes Wetter, jeden Bauherren.</h2>
            <p>
              Der Schwarzwald ist kein Prospektbild für uns wir arbeiten hier jeden Tag. Kurze
              Anfahrt, direkte Kommunikation, schnelle Reaktion wenn etwas ist.
            </p>
            <div className={styles.badges}>
              <span className={styles.badge}>
                <CloudRain />
                Winterfestes Handwerk
              </span>
              <span className={styles.badge}>
                <Mountain />
                Hochlage-Erfahrung
              </span>
              <span className={styles.badge}>
                <Home />
                Altbau-Kompetenz
              </span>
              <span className={styles.badge}>
                <Leaf />
                Regionale Lieferkette
              </span>
            </div>
            <button className="btn btn-pink" onClick={() => scrollToId('kontakt')}>
              <Send />
              Projekt besprechen
            </button>
          </div>
          <div className={`${styles.map} reveal reveal-delay-1`}>
            <div className={styles.mapTitle}>Unser Arbeitsgebiet</div>
            <div className={styles.regionList}>
              {REGIONS.map((r, i) => (
                <div key={r.name}>
                  <div className={styles.region}>
                    <div
                      className={`${styles.dot} ${r.far ? styles.dotFar : ''}`}
                      style={r.far ? { backgroundColor: 'rgb(232, 21, 125)' } : undefined}
                    />
                    <div className={styles.regionName}>{r.name}</div>
                    <div className={styles.regionKm}>{r.km}</div>
                  </div>
                  {i < REGIONS.length - 1 && <div className={styles.line} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
