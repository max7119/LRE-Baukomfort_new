type Variant = 'hero' | 'small' | 'slim';

interface MountainDividerProps {
  variant?: Variant;
}

const PATHS: Record<Variant, { viewBox: string; path: string }> = {
  hero: {
    viewBox: '0 0 1440 90',
    path: 'M0,90 L0,55 L120,20 L240,50 L360,10 L480,45 L560,5 L640,40 L720,15 L800,50 L880,22 L960,55 L1080,18 L1200,48 L1320,25 L1440,55 L1440,90 Z',
  },
  small: {
    viewBox: '0 0 1440 80',
    path: 'M0,80 L0,50 L100,18 L200,45 L320,8 L440,42 L540,12 L640,38 L760,5 L860,36 L960,16 L1080,45 L1200,20 L1320,48 L1440,28 L1440,80 Z',
  },
  slim: {
    viewBox: '0 0 1440 60',
    path: 'M0,60 L0,38 L120,12 L240,30 L360,8 L480,28 L600,10 L720,26 L840,6 L960,24 L1080,14 L1200,32 L1320,18 L1440,36 L1440,60 Z',
  },
};

export default function MountainDivider({ variant = 'hero' }: MountainDividerProps) {
  const { viewBox, path } = PATHS[variant];
  return (
    <div className="mountain-divider" style={{ background: 'var(--bd)' }}>
      <svg
        viewBox={viewBox}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: 'var(--bg)', display: 'block' }}
      >
        <path d={path} />
      </svg>
    </div>
  );
}
