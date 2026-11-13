'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface ScrollRevealProviderProps {
  children: React.ReactNode;
}

/**
 * Global scroll-reveal orchestrator.
 *
 * Wraps the page and uses a single IntersectionObserver to add the `.active`
 * class to every `.reveal-on-scroll` element as it enters the viewport.
 *
 * Re-runs on every client-side route change (usePathname dependency) so that
 * elements on newly navigated pages are correctly observed instead of staying
 * hidden until a hard refresh.
 *
 * Server Components can simply add `reveal-on-scroll` as a className — no
 * additional Client Component wrapper is needed per element.
 *
 * Must be a Client Component because it uses useEffect / browser APIs.
 */
export function ScrollRevealProvider({ children }: ScrollRevealProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Disconnect any previous observer and reset active state so elements
    // on the new page animate in cleanly rather than being pre-revealed.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Stop observing once revealed — no need to watch further.
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    // Small RAF delay allows the new page DOM to fully paint before we scan.
    const raf = requestAnimationFrame(() => {
      const elements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
      elements.forEach((el) => {
        // Remove stale `.active` from a previous page visit on this element.
        el.classList.remove('active');
        observer.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [pathname]); // ← re-run on every route change

  return <>{children}</>;
}
