import { useState } from 'react';

export type ConsentLevel = 'all' | 'necessary' | null;

const KEY = 'lre_cookie_consent';
const EXPIRY_MS = 365 * 24 * 60 * 60 * 1000;

function readStored(): ConsentLevel {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const { level, expires } = JSON.parse(raw) as { level: ConsentLevel; expires: number };
    if (Date.now() > expires) {
      localStorage.removeItem(KEY);
      return null;
    }
    return level;
  } catch {
    return null;
  }
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentLevel>(readStored);
  const [forceOpen, setForceOpen] = useState(false);

  const accept = (level: 'all' | 'necessary') => {
    localStorage.setItem(KEY, JSON.stringify({ level, expires: Date.now() + EXPIRY_MS }));
    setConsent(level);
    setForceOpen(false);
  };

  const revoke = () => {
    localStorage.removeItem(KEY);
    setConsent(null);
    setForceOpen(true);
  };

  return { consent, accept, revoke, showBanner: consent === null || forceOpen };
}
