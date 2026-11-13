import type { Metadata } from 'next';

import { JoinHeroSection } from '@/components/JoinUs/JoinHeroSection';
import { BenefitsSection } from '@/components/JoinUs/BenefitsSection';
import { JoinStats } from '@/components/JoinUs/JoinStats';
import { fetchAPI, getJoinUsPageQuery } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Join Us | LIVENGAGE — Premium Live Streaming & Talent Agency',
  description:
    'Join LIVENGAGE as a host or agent and start growing your live streaming career on the world\'s top platforms. Weekly payouts, elite training, and global placements.',
};

export default async function JoinUsPage() {
  const query = getJoinUsPageQuery();
  const strapiRes = await fetchAPI(`/api/join-us-page?${query}`, { next: { revalidate: 10 } });
  
  // Strapi 5: data is flat, no .attributes wrapper
  const pageData = strapiRes?.data || {};

  const hasContent = !!(
    pageData.hero ||
    pageData.roleCards ||
    pageData.benefits ||
    pageData.stats
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC] dark:bg-gradient-to-b dark:from-[#160126] dark:to-[#0B0114] pb-24 flex flex-col relative overflow-x-hidden">
      {!hasContent ? (
        <div className="flex flex-col items-center justify-center flex-grow text-center px-4 md:px-10 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-6xl md:text-[120px] font-extrabold leading-tight text-on-surface dark:text-white mb-2 tracking-tight">
              Coming Soon
            </h1>
            <h2 className="text-6xl md:text-[120px] font-extrabold leading-tight text-primary italic mb-8 tracking-tight">
              To the stage.
            </h2>
            <p className="text-xl md:text-2xl text-on-surface-variant dark:text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
              We are currently crafting our story. The content for this page will be available shortly. Stay tuned for an experience that redefines live entertainment.
            </p>
          </div>
        </div>
      ) : (
        <>
          <JoinHeroSection 
            heroData={pageData.hero} 
            roleCardsData={pageData.roleCards} 
          />
          <BenefitsSection data={pageData.benefits} />
          <JoinStats data={pageData.stats} />
        </>
      )}
    </main>
  );
}
