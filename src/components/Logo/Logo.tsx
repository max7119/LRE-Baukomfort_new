import logoUrl from '../../assets/logo.svg';

interface LogoProps {
  size?: number;
}

export default function Logo({ size = 50 }: LogoProps) {
  return (
    <img
      src={logoUrl}
      width={size}
      height={size}
      alt="LRE Baukomfort Logo"
      style={{ objectFit: 'contain', display: 'block' }}
    />
  );
}
