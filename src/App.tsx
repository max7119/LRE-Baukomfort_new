import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Karriere from './pages/Karriere';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';
import ScrollToTopOrHash from './components/ScrollToTopOrHash/ScrollToTopOrHash';
import CookieBanner from './components/CookieBanner/CookieBanner';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTopOrHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/karriere" element={<Karriere />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <CookieBanner />
    </ThemeProvider>
  );
}
