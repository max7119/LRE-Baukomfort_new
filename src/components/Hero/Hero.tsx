import { Send, ChevronDown } from 'lucide-react';
import { scrollToId } from '../../lib/scroll';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.gradient} />
      <div className="container">
        <div className={styles.content}>
          <div className={styles.eyebrow}>Handwerk aus dem Schwarzwald</div>
          <h1 className={styles.h1}>
            Fenster. Dach. Innenausbau.
            <br />
            <em>Gemacht, um zu bleiben.</em>
          </h1>
          <p className={styles.sub}>
            Wir arbeiten in der Region von Villingen-Schwenningen bis Hochschwarzwald. Mit
            Materialien aus deutscher Produktion.
          </p>
          <div className={styles.actions}>
            <button className="btn btn-pink btn-lg" onClick={() => scrollToId('kontakt')}>
              <Send />
              Jetzt anfragen
            </button>
            <button
              className={`btn ${styles.ghost}`}
              onClick={() => scrollToId('referenzen')}
            >
              Projekte ansehen
            </button>
          </div>
          <div className={`${styles.stats} reveal`}>
            <div>
              <div className={styles.statN}>
                12<span>+</span>
              </div>
              <div className={styles.statL}>Jahre Erfahrung</div>
            </div>
            <div className={styles.statDivider} />
            <div>
              <div className={styles.statN}>
                400<span>+</span>
              </div>
              <div className={styles.statL}>Projekte im Schwarzwald</div>
            </div>
            <div className={styles.statDivider} />
            <div>
              <div className={styles.statN}>6</div>
              <div className={styles.statL}>Regionen</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scroll}>
        <span>Scrollen</span>
        <ChevronDown />
      </div>
    </section>
  );
}
