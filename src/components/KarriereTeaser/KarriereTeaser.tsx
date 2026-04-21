import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import styles from './KarriereTeaser.module.css';

export default function KarriereTeaser() {
  return (
    <section id="karriere-teaser" className={`${styles.section} topo-bg`}>
      <div className="container">
        <div className={`${styles.inner} reveal`}>
          <div className={styles.text}>
            <div className={`eyebrow ${styles.eyebrowWrap}`}>Karriere</div>
            <h2>Handwerk mit Zukunft. Wir suchen Verstärkung.</h2>
            <p>
              Facharbeiter oder Quereinsteiger wenn du gerne gute Arbeit machst, bist du bei uns
              richtig. Kein endloser Bewerbungsprozess. Einfach melden.
            </p>
            <div className={styles.jobs}>
              <span className={styles.jobBadge}>Fenstermonteur (m/w/d)</span>
              <span className={styles.jobBadge}>Dachdecker / Helfer</span>
              <span className={styles.jobBadge}>Trockenbauer</span>
              <span className={styles.jobBadge}>Initiativbewerbung</span>
            </div>
          </div>
          <div>
            <Link to="/karriere" className="btn btn-dark btn-lg">
              <Briefcase />
              Alle Stellen ansehen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
