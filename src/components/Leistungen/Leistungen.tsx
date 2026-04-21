import { ArrowRight } from 'lucide-react';
import styles from './Leistungen.module.css';

export default function Leistungen() {
  return (
    <section id="leistungen" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="eyebrow">Was wir machen</div>
          <h2>Drei Gewerke. Eine Anlaufstelle.</h2>
        </div>
        <div className={styles.grid}>
          <div className={`${styles.main} reveal`}>
            <div className={styles.img}>
              <img
                src="https://picsum.photos/700/480?random=11"
                alt="Fensterbau Schwarzwald"
              />
            </div>
            <div className={styles.body}>
              <div className={styles.tag}>Fensterbau</div>
              <div className={styles.title}>Fenster, die dicht halten und gut aussehen</div>
              <p className={styles.desc}>
                Einbau, Tausch und Komplettmontage. Wir arbeiten mit Herstellern aus Deutschland
                keine Kompromisse bei U-Werten. Altbau, Neubau, denkmalgeschützt: wir haben das
                schon gemacht.
              </p>
              <a className={styles.cta}>
                Details ansehen <ArrowRight />
              </a>
            </div>
          </div>
          <div className={`${styles.small} reveal reveal-delay-1`}>
            <div className={styles.img}>
              <img src="https://picsum.photos/280/300?random=22" alt="Dachsanierung" />
            </div>
            <div className={styles.bodySmall}>
              <div>
                <div className={styles.tag}>Dachsanierung</div>
                <div className={styles.title}>Dichtes Dach, keine halben Sachen</div>
                <p className={styles.desc}>
                  Eindeckung, Dämmung, Sturmschadenreparatur. Schwarzwald-Wetter ist keine Theorie
                  wir wissen, was ein Dach aushalten muss.
                </p>
              </div>
              <a className={styles.cta}>
                Details ansehen <ArrowRight />
              </a>
            </div>
          </div>
          <div className={`${styles.small} reveal reveal-delay-2`}>
            <div className={styles.img}>
              <img src="https://picsum.photos/280/300?random=33" alt="Innenausbau" />
            </div>
            <div className={styles.bodySmall}>
              <div>
                <div className={styles.tag}>Innenausbau</div>
                <div className={styles.title}>Räume, die sich anfühlen wie gemacht</div>
                <p className={styles.desc}>
                  Trockenbau, Böden, Türen, Raumtrenner. Wir denken mit und machen die Baustelle
                  hinterher wieder sauber.
                </p>
              </div>
              <a className={styles.cta}>
                Details ansehen <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
