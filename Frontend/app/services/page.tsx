import type { Metadata } from 'next';

import { ServicesHero } from '@/components/Services/sections/ServicesHero';
import { ServicesGrid } from '@/components/Services/sections/ServicesGrid';
import { PartnerAppsSection } from '@/components/Services/sections/PartnerAppsSection';
import { ServicesStats } from '@/components/Services/sections/ServicesStats';
import { ServicesCTA } from '@/components/Services/sections/ServicesCTA';
import { fetchAPI, getServicesPageQuery } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Services | LIVENGAGE — Live Streaming Solutions',
  description:
    'Explore LIVENGAGE services — talent recruitment, agent training, career management, and elite platform partnerships for live streaming creators worldwide.',
};
export const revalidate = 0; // Disable caching for testing

export default async function ServicesPage() {
  const query = getServicesPageQuery();
  const strapiRes = await fetchAPI(`/api/services-page?${query}`);
  
  // Support both Strapi v4 (data.attributes) and Strapi v5 (data directly)
  const pageData = strapiRes?.data?.attributes || strapiRes?.data || {};

  const heroData = pageData.hero || pageData.Hero || null;
  const servicesListData = pageData.servicesList || pageData.ServicesList || null;
  const partnerAppsData = pageData.partnerApps || pageData.PartnerApps || null;
  const statsData = pageData.stats || pageData.Stats || null;
  const ctaData = pageData.cta || pageData.CTA || null;

  const hasContent = !!(
    heroData ||
    servicesListData ||
    partnerAppsData ||
    statsData ||
    ctaData
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0114] relative overflow-x-hidden">
      {!hasContent ? (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-12 bg-surface-container-lowest relative overflow-hidden">
          {/* Subtle background glow */}
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
          <ServicesHero data={heroData} />
          <ServicesGrid data={servicesListData} />
          <PartnerAppsSection data={partnerAppsData} />
          <ServicesStats data={statsData} />
          <ServicesCTA data={ctaData} />
        </>
      )}
    </main>
  );
}
