'use client';

import { useScrollSpy } from '@/hooks/useScrollSpy';
import { TermsNavItem, TermsSection } from '@/types/terms-and-conditions';
import { TermsSidebar } from './TermsSidebar';

interface TermsContentProps {
  navItems: TermsNavItem[];
  sections: TermsSection[];
}

export function TermsContent({ navItems, sections }: TermsContentProps) {
  // Get array of section IDs to observe
  const sectionIds = navItems.map((item) => item.id);
  // Get the currently active section ID via scroll spy
  const activeId = useScrollSpy(sectionIds, 150);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-section">
      <div className="flex flex-col md:flex-row gap-gutter">
        {/* Side Navigation (Sticky) */}
        <TermsSidebar navItems={navItems} activeId={activeId} />

        {/* Main Legal Content */}
        <article className="w-full md:w-3/4 max-w-3xl space-y-section">
          {sections.map((section, index) => (
            <div key={section.id}>
              <div
                id={section.id}
                className="scroll-mt-32 reveal-on-scroll pb-8 pt-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h2 className="font-headline-lg text-headline-lg mb-stack-lg text-on-surface">
                  {section.title}
                </h2>
                {section.content}
              </div>
              <div className="mt-section h-[1px] bg-outline-variant w-full"></div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
