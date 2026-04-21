interface LogoProps {
  size?: number;
}

export default function Logo({ size = 30 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#1C2FA0" />
      <rect x="6" y="6" width="8" height="20" fill="#F8F7F4" />
      <rect x="17" y="6" width="9" height="9" fill="#E8157D" />
      <rect x="17" y="18" width="9" height="8" fill="rgba(248,247,244,0.25)" />
    </svg>
  );
}
