/**
 * Keyword URLs for the partner app pages.
 *
 * The CMS still stores the old slugs (partner-app, partner-app-1, …); this map
 * connects each CMS slug to its public URL and SEO copy. The old
 * /partner-apps/<slug> URLs 301 to these paths (see next.config.ts).
 */
export interface PartnerAppRoute {
  cmsSlug: string;
  path: string;
  /** Display name used on cards, e.g. "Vone App (Poppo Live)". */
  name: string;
  alternateNames: string[];
  title: string;
  description: string;
}

export const PARTNER_APP_ROUTES: PartnerAppRoute[] = [
  {
    cmsSlug: 'partner-app',
    path: '/vone-app-agency',
    name: 'Vone App (Poppo Live)',
    alternateNames: ['Vone', 'Poppo Live', 'PoppoLive'],
    title: 'Vone App (Poppo Live) Agency India – Livengage',
    description:
      'Join the Vone app (Poppo Live) as a host or agent in India. How Vone works, how hosts earn, payouts via UPI and bank, and free registration with Livengage.',
  },
  {
    cmsSlug: 'partner-app-1',
    path: '/chill-chat-agency',
    name: 'Chill Chat (Chamet)',
    alternateNames: ['Chill Chat', 'Chamet'],
    title: 'Chill Chat (Chamet) Agency India: Host Registration',
    description:
      'Chamet is now Chill Chat in India. Join Chill Chat as a host or agent with Livengage: how it works, how hosts earn, and free registration with full support.',
  },
  {
    cmsSlug: 'partner-app-2',
    path: '/niki-live-agency',
    name: 'Niki Live',
    alternateNames: ['Niki Live', 'Niki'],
    title: 'Niki Live Agency – Host Registration & Earnings',
    description:
      'Become a Niki Live host or agent with Livengage. How Niki Live works, how hosts earn from gifts and calls, and how to register for free.',
  },
];

export function getPartnerAppRoute(cmsSlug: string | undefined | null) {
  return PARTNER_APP_ROUTES.find((r) => r.cmsSlug === cmsSlug);
}

/** Public URL for a partner app; falls back to the old pattern for new apps. */
export function partnerAppHref(cmsSlug: string | undefined | null): string {
  return getPartnerAppRoute(cmsSlug)?.path || `/partner-apps/${cmsSlug}`;
}
