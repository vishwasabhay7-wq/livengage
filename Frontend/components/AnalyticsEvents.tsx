'use client';

import { useEffect } from 'react';
import { appFromUrl, currentApp, trackEvent } from '@/lib/analytics';

/**
 * One site-wide click listener for outbound conversion links, so every
 * WhatsApp button and app invite link is tracked without editing each one
 * (many of these links come from the CMS).
 */
export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as HTMLElement | null)?.closest?.('a');
      if (!link?.href) return;
      const href = link.href;

      if (/wa\.me|api\.whatsapp\.com|whatsapp:\/\//i.test(href)) {
        trackEvent('whatsapp_click', { app: currentApp(), page_path: window.location.pathname });
        return;
      }

      // App invite / download links (e.g. https://invite-vone.com/…).
      if (/invite|play\.google\.com|apps\.apple\.com/i.test(href) && !href.startsWith(window.location.origin)) {
        trackEvent('invite_link_click', {
          app: appFromUrl(href),
          link_url: href,
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
