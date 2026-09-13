// ============================================================
// SOCIAL LINKS DATA — Update this file to add/edit links
// ============================================================

import { SITE } from '@/lib/constants';

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail' | 'twitter' | 'external';
  external: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: SITE.github,
    icon: 'github',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: SITE.linkedin,
    icon: 'linkedin',
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${SITE.email}`,
    icon: 'mail',
    external: false,
  },
];
