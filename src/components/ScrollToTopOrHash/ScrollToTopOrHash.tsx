import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToId } from '../../lib/scroll';

export default function ScrollToTopOrHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.startsWith('#') ? hash.slice(1) : hash;
      setTimeout(() => scrollToId(id), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  return null;
}
