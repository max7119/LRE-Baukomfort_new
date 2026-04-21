import { ShieldCheck, Users, MapPin } from 'lucide-react';
import styles from './UeberUns.module.css';

export default function UeberUns() {
  return (
    <section id="ueber-uns" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.img} reveal`}>
            <div className={styles.imgMain}>
              <img src="https://picsum.photos/600/750?random=90" alt="LRE Baukomfort Team" />
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeN}>100%</div>
              <div className={styles.badgeL}>
                eigene Mitarbeiter keine Subunternehmer
              </div>
            </div>
          </div>
          <div className={`${styles.text} reveal reveal-delay-1`}>
            <div className="eyebrow">Über uns</div>
            <h2>
              Wir bauen hier.
              <br />
              Wir leben hier.
            </h2>
            <p>
              LRE Baukomfort ist kein Konzern. Wir sind ein Handwerksbetrieb aus dem Schwarzwald
              mit Leuten, die morgens in Villingen-Schwenningen aufstehen und abends wissen, was
              sie geleistet haben.
            </p>
            <p>
              Keine Subunternehmerkette. Keine Telefonzentrale irgendwo. Wer anruft, spricht mit
              jemandem, der das Projekt kennt.
            </p>
            <div className={styles.values}>
              <div className={styles.value}>
                <div className={styles.valueIcon}>
                  <ShieldCheck />
                </div>
                <div className={styles.valueText}>
                  <strong>Deutsche Materialien</strong>
                  <span>
                    Fenster, Dachprodukte und Innenausbaumaterial aus regionaler und nationaler
                    Produktion
                  </span>
                </div>
              </div>
              <div className={styles.value}>
                <div className={styles.valueIcon}>
                  <Users />
                </div>
                <div className={styles.valueText}>
                  <strong>Eigene Monteure</strong>
                  <span>
                    Alle, die auf Ihrer Baustelle arbeiten, sind Mitarbeiter von LRE ausgebildet,
                    versichert, zuverlässig
                  </span>
                </div>
              </div>
              <div className={styles.value}>
                <div className={styles.valueIcon}>
                  <MapPin />
                </div>
                <div className={styles.valueText}>
                  <strong>Regional verwurzelt</strong>
                  <span>
                    Schwarzwald-Baar, Freiburg, Hochschwarzwald kurze Wege, schnelle Reaktion
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.teamRow}>
              <div className={styles.teamCard}>
                <div className={styles.teamAvatar}>
                  <img src="https://picsum.photos/44/44?random=101" alt="Thomas Vogel" />
                </div>
                <div>
                  <div className={styles.teamName}>Thomas Vogel</div>
                  <div className={styles.teamRole}>Geschäftsführer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
