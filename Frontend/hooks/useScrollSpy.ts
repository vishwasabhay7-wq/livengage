'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to track which section is currently visible on the screen.
 * Used for updating the active state of sidebar navigation links.
 */
export function useScrollSpy(
  sectionIds: string[],
  offset: number = 150
): string {
  const [activeId, setActiveId] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If no sections are provided, do nothing
    if (sectionIds.length === 0) return;

    // Use IntersectionObserver to track sections entering/leaving the viewport
    observer.current = new IntersectionObserver(
      (entries) => {
        // Find the first entry that is intersecting
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: `-${offset}px 0px 0px 0px`, // Trigger when the top of the section hits the offset
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    // Observe each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && observer.current) {
        observer.current.observe(element);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [sectionIds, offset]);

  // Fallback: If page is loaded at the very top, set the first section as active
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < offset && sectionIds.length > 0) {
        setActiveId(sectionIds[0]);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
