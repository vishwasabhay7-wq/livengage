'use client';

import { useScrollSpy } from '@/hooks/useScrollSpy';
import { PrivacyNavItem, PrivacySection } from '@/types/privacy-policy';
import { PrivacySidebar } from './PrivacySidebar';

interface PrivacyContentProps {
  navItems: PrivacyNavItem[];
  sections: PrivacySection[];
}

export function PrivacyContent({ navItems, sections }: PrivacyContentProps) {
  // Get array of section IDs to observe
  const sectionIds = navItems.map((item) => item.id);
  // Get the currently active section ID via scroll spy
  const activeId = useScrollSpy(sectionIds, 150);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-section">
      <div className="flex flex-col md:flex-row gap-gutter">
        {/* Sidebar Nav (Desktop only) */}
        <PrivacySidebar navItems={navItems} activeId={activeId} />

        {/* Policy Text */}
        <article className="w-full md:w-3/4 max-w-3xl space-y-section">
          {sections.map((section, index) => (
            <>
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-32 reveal-on-scroll pb-8 pt-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h2 className="font-headline-lg text-headline-lg mb-stack-lg text-on-surface">
                  {section.title}
                </h2>
                {section.content}
              </div>
              {/* Divider (skip on the last item if desired, but following HTML, there's a divider after every section) */}
              <div className="mt-section h-[1px] bg-outline-variant w-full"></div>
            </>

          ))}
        </article>
      </div>
    </section>
  );
}
