import { useReveal } from '../hooks/useReveal';
import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';
import MountainDivider from '../components/MountainDivider/MountainDivider';
import Leistungen from '../components/Leistungen/Leistungen';
import Referenzen from '../components/Referenzen/Referenzen';
import Schwarzwald from '../components/Schwarzwald/Schwarzwald';
import UeberUns from '../components/UeberUns/UeberUns';
import KarriereTeaser from '../components/KarriereTeaser/KarriereTeaser';
import Kontakt from '../components/Kontakt/Kontakt';
import Footer from '../components/Footer/Footer';

export default function Home() {
  useReveal();

  return (
    <>
      <Nav ctaVariant="anfragen" activePage="home" />
      <Hero />
      <MountainDivider variant="hero" />
      <Leistungen />
      <Referenzen />
      <Schwarzwald />
      <UeberUns />
      <KarriereTeaser />
      <Kontakt />
      <Footer variant="full" />
    </>
  );
}
