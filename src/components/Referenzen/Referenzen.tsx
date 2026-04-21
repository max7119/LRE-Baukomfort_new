import { ArrowRight } from 'lucide-react';
import { scrollToId } from '../../lib/scroll';
import styles from './Referenzen.module.css';

interface RefItem {
  label: string;
  sub: string;
  image: string;
  delay?: 1 | 2;
}

const ITEMS: RefItem[] = [
  {
    label: 'Fensteraustausch Altbau',
    sub: 'Villingen-Schwenningen · 2024',
    image: 'https://picsum.photos/500/280?random=51',
    delay: 1,
  },
  {
    label: 'Innenausbau Neubau',
    sub: 'Rottweil · 2023',
    image: 'https://picsum.photos/500/240?random=62',
    delay: 2,
  },
  {
    label: 'Hebe-Schiebe-Türen Terrasse',
    sub: 'Hinterzarten · 2024',
    image: 'https://picsum.photos/500/240?random=73',
    delay: 1,
  },
  {
    label: 'Trockenbau & Raumkonzept',
    sub: 'Freiburg · 2023',
    image: 'https://picsum.photos/500/240?random=84',
    delay: 2,
  },
];

export default function Referenzen() {
  return (
    <section id="referenzen" className={`${styles.section} topo-bg`}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="eyebrow">Referenzprojekte</div>
          <h2>Arbeiten, die für sich sprechen.</h2>
        </div>
        <div className={styles.grid}>
          <div
            className={`${styles.item} ${styles.featured} reveal`}
            title="Hover für Vorher/Nachher"
          >
            <div className={styles.baContainer}>
              <div className={styles.baBefore}>
                <img src="https://picsum.photos/800/560?grayscale&random=40" alt="Vorher" />
              </div>
              <div className={styles.baAfter}>
                <img src="https://picsum.photos/800/560?random=40" alt="Nachher" />
              </div>
              <div className={`${styles.baLabel} ${styles.baBeforeLabel}`}>Vorher</div>
              <div className={`${styles.baLabel} ${styles.baAfterLabel}`}>Nachher</div>
              <div className={styles.baDivider} />
            </div>
            <div className={styles.overlay}>
              <div>
                <div className={styles.label}>Dachsanierung Einfamilienhaus</div>
                <div className={styles.sub}>
                  Titisee-Neustadt · 2024 · Hover für Vorher/Nachher
                </div>
              </div>
            </div>
          </div>
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className={`${styles.item} reveal reveal-delay-${item.delay ?? 1}`}
            >
              <img src={item.image} alt={item.label} />
              <div className={styles.overlay}>
                <div>
                  <div className={styles.label}>{item.label}</div>
                  <div className={styles.sub}>{item.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.ctaRow} reveal`}>
          <button className="btn btn-outline" onClick={() => scrollToId('kontakt')}>
            Eigenes Projekt anfragen <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
