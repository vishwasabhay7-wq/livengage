/**
 * GA4 conversion events. Safe to call anywhere on the client: it does nothing
 * when gtag hasn't loaded (ad blockers, local preview without GA, etc.).
 *
 * Events: host_form_submit, agent_form_submit, contact_form_submit,
 * whatsapp_click, invite_link_click — each with an `app` parameter.
 */
type GtagFn = (command: 'event', name: string, params?: Record<string, unknown>) => void;

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag === 'function') {
    gtag('event', name, params);
  }
}

const APP_PATHS: Record<string, string> = {
  '/vone-app-agency': 'vone',
  '/chill-chat-agency': 'chill_chat',
  '/niki-live-agency': 'niki_live',
};

/** The partner app the visitor is looking at, from the URL, or "none". */
export function currentApp(): string {
  if (typeof window === 'undefined') return 'none';
  return APP_PATHS[window.location.pathname] || 'none';
}

/** Guesses the app from an invite link's domain, e.g. invite-vone.com → vone. */
export function appFromUrl(url: string): string {
  const u = url.toLowerCase();
  if (u.includes('vone') || u.includes('poppo')) return 'vone';
  if (u.includes('chill') || u.includes('chamet')) return 'chill_chat';
  if (u.includes('niki')) return 'niki_live';
  if (u.includes('bigo')) return 'bigo_live';
  return currentApp();
}
