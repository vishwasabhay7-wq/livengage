import { partnerAppHref } from './partner-app-routes';

/**
 * Rewrites links typed into the CMS that point at URLs which now redirect,
 * so visitors and Google go straight to the final page (no redirect hop).
 */
export function normalizeHref(href: string | null | undefined): string {
  if (!href) return '#';
  const trimmed = href.trim();

  if (/^\/?join-us\/?$/.test(trimmed)) return '/become-a-host';
  if (/^\/?blogs\/?$/.test(trimmed)) return '/blog';
  if (/^\/?(?:blogs|partner-apps)\/agent-ecosystem\/?$/.test(trimmed)) return '/agent-ecosystem';

  const app = trimmed.match(/^\/?partner-apps\/([^/?#]+)\/?$/);
  if (app) return partnerAppHref(app[1]);

  // Relative paths like "agent-ecosystem" break inside sub-folders.
  if (/^[a-z0-9-]+(\/[a-z0-9-]+)*\/?$/i.test(trimmed) && !trimmed.includes('.')) return `/${trimmed}`;

  return trimmed;
}
