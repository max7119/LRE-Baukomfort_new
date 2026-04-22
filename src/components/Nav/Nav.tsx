import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, Send } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useNavScroll } from '../../hooks/useNavScroll';
import { useSectionNav } from '../../lib/scroll';
import Logo from '../Logo/Logo';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './Nav.module.css';

type CtaVariant = 'anfragen' | 'bewerben' | 'kontakt';

interface NavProps {
  ctaVariant?: CtaVariant;
  activePage?: 'home' | 'karriere' | 'legal';
}

export default function Nav({ ctaVariant = 'anfragen', activePage = 'home' }: NavProps) {
  const scrolled = useNavScroll();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const goToSection = useSectionNav();
  const location = useLocation();

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleSection = (id: string) => {
    closeMenu();
    goToSection(id);
  };

  const scrollToBewerbung = () => {
    closeMenu();
    if (location.pathname === '/karriere') {
      const el = document.getElementById('bewerbung');
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth',
        });
      }
    } else {
      // Navigate to karriere then jump to bewerbung
      window.location.href = '/karriere#bewerbung';
    }
  };

  const ctaLabel =
    ctaVariant === 'bewerben' ? 'Bewerben' : ctaVariant === 'kontakt' ? 'Kontakt' : 'Anfragen';
  const onCtaClick =
    ctaVariant === 'bewerben' ? scrollToBewerbung : () => handleSection('kontakt');

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className="container">
          <div className={styles.inner}>
            <Link to="/" className={styles.logo}>
              <Logo />
              LRE Baukomfort
            </Link>
            <div className={styles.links}>
              <button
                className={`${styles.link} ${activePage === 'home' ? '' : ''}`}
                onClick={() => handleSection('leistungen')}
              >
                Leistungen
              </button>
              <button className={styles.link} onClick={() => handleSection('referenzen')}>
                Projekte
              </button>
              <button className={styles.link} onClick={() => handleSection('ueber-uns')}>
                Über uns
              </button>
              <Link
                to="/karriere"
                className={`${styles.link} ${activePage === 'karriere' ? styles.linkActive : ''}`}
              >
                Karriere
              </Link>
              <button className={styles.link} onClick={() => handleSection('kontakt')}>
                Kontakt
              </button>
            </div>
            <div className={styles.right}>
              <button
                className={styles.iconBtn}
                onClick={toggleTheme}
                title="Hell/Dunkel"
                aria-label="Farbmodus wechseln"
              >
                {theme === 'dark' ? <Moon /> : <Sun />}
              </button>
              <div className={styles.ctaWrap}>
                <button className="btn btn-pink btn-sm" onClick={onCtaClick}>
                  <Send />
                  {ctaLabel}
                </button>
              </div>
              <button
                className={`${styles.iconBtn} ${styles.hamburger}`}
                onClick={toggleMenu}
                aria-label="Menü öffnen"
              >
                <Menu style={{ width: 22, height: 22 }} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        onSectionClick={handleSection}
        ctaVariant={ctaVariant}
        onCtaClick={onCtaClick}
        activePage={activePage}
      />
    </>
  );
}
