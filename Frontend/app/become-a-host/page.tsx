import type { Metadata } from 'next';

import { HeroSection } from '@/components/BecomeAHost/HeroSection';
import { StatsSection } from '@/components/BecomeAHost/StatsSection';
import { RequirementsSection } from '@/components/BecomeAHost/RequirementsSection';
import { BenefitsSection } from '@/components/BecomeAHost/BenefitsSection';
import { ApplicationSection } from '@/components/BecomeAHost/ApplicationSection';
import { fetchAPI, getBecomeAHostPageQuery } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Become a Professional Live Streamer | LIVENGAGE',
  description:
    "Take center stage on the world's leading streaming platforms. Join LIVENGAGE to represent premium global apps with professional support, high-end training, and guaranteed growth.",
};
export const revalidate = 0; // Disable caching for testing

export default async function BecomeAHostPage() {
  const query = getBecomeAHostPageQuery();
  const strapiRes = await fetchAPI(`/api/become-a-host-page?${query}`);
  
  // Support both Strapi v4 (data.attributes) and Strapi v5 (data directly)
  const raw = strapiRes?.data?.attributes || strapiRes?.data || {};

  // Schema uses PascalCase at top level — normalize to camelCase for components
  // Also normalize nested PascalCase: Requirements.Items, Benefits.Items, ApplicationSection.Steps
  const rawRequirements = raw.Requirements || raw.requirements;
  const rawBenefits     = raw.Benefits     || raw.benefits;
  const rawAppSection   = raw.ApplicationSection || raw.applicationSection;

  const pageData = {
    hero: raw.Hero || raw.hero,
    stats: raw.Stats || raw.stats,
    requirements: rawRequirements
      ? { ...rawRequirements, items: rawRequirements.Items || rawRequirements.items }
      : null,
    benefits: rawBenefits
      ? { ...rawBenefits, items: rawBenefits.Items || rawBenefits.items }
      : null,
    applicationSection: rawAppSection
      ? { ...rawAppSection, steps: rawAppSection.Steps || rawAppSection.steps }
      : null,
  };

  const hasContent = !!(
    pageData.hero ||
    pageData.stats ||
    pageData.requirements ||
    pageData.benefits ||
    pageData.applicationSection
  );

  return (
    <main className="min-h-screen bg-background">
      {!hasContent ? (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 md:px-12 bg-surface-container-lowest relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="font-display-lg text-6xl md:text-[120px] leading-tight text-on-surface mb-2 tracking-tight">
              Coming Soon
            </h1>
            <h2 className="font-display-lg text-6xl md:text-[120px] leading-tight text-primary italic mb-8 tracking-tight">
              To the stage.
            </h2>
            <p className="font-body-lg text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              We are currently crafting our story. The content for this page will be available shortly. Stay tuned for an experience that redefines live entertainment.
            </p>
          </div>
        </div>
      ) : (
        <>
          <HeroSection data={pageData.hero} />
          <StatsSection data={pageData.stats} />
          <RequirementsSection data={pageData.requirements} />
          <BenefitsSection data={pageData.benefits} />
          <ApplicationSection data={pageData.applicationSection} />
        </>
      )}
    </main>
  );
}
