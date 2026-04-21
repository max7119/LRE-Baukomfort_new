export type Theme = 'light' | 'dark';

export interface NavItem {
  label: string;
  to: string;
  kind: 'link' | 'hash';
}
