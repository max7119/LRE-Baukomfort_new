import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';

export function scrollToId(id: string, offset = 68) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - offset,
    behavior: 'smooth',
  });
}

/**
 * Navigates to a hash target. If already on the home page, scrolls smoothly.
 * If on another page, navigates to `/#id` so the ScrollToTopOrHash handler can pick it up.
 */
export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (id: string) => {
      if (location.pathname === '/') {
        scrollToId(id);
      } else {
        navigate(`/#${id}`);
      }
    },
    [navigate, location.pathname]
  );
}
