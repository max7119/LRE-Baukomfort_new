import { Link } from 'react-router-dom';
import { X, Send } from 'lucide-react';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onSectionClick: (id: string) => void;
  onCtaClick: () => void;
  ctaVariant: 'anfragen' | 'bewerben' | 'kontakt';
  activePage?: 'home' | 'karriere' | 'legal';
}

export default function MobileMenu({
  open,
  onClose,
  onSectionClick,
  onCtaClick,
  ctaVariant,
  activePage = 'home',
}: MobileMenuProps) {
  const ctaLabel =
    ctaVariant === 'bewerben'
      ? 'Jetzt bewerben'
      : ctaVariant === 'kontakt'
        ? 'Kontakt aufnehmen'
        : 'Jetzt anfragen';

  return (
    <div className={`${styles.menu} ${open ? styles.open : ''}`}>
      <button className={styles.close} onClick={onClose} aria-label="Menü schließen">
        <X style={{ width: 24, height: 24 }} />
      </button>
      <button className={styles.link} onClick={() => onSectionClick('leistungen')}>
        Leistungen
      </button>
      <button className={styles.link} onClick={() => onSectionClick('referenzen')}>
        Projekte
      </button>
      <button className={styles.link} onClick={() => onSectionClick('ueber-uns')}>
        Über uns
      </button>
      <Link
        to="/karriere"
        className={`${styles.link} ${activePage === 'karriere' ? styles.linkActive : ''}`}
        onClick={onClose}
      >
        Karriere
      </Link>
      <button className={styles.link} onClick={() => onSectionClick('kontakt')}>
        Kontakt
      </button>
      <button className="btn btn-pink" onClick={onCtaClick}>
        <Send />
        {ctaLabel}
      </button>
    </div>
  );
}
