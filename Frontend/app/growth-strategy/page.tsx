import type { Metadata } from 'next';

import {
  GrowthHero,
  StrategicAnalytics,
  GlobalScalability,
  RevenueArchitecture,
} from '@/components/growth-strategy';

import { CTA } from '@/components/CTA';

import {
  GROWTH_HERO_DATA,
  STRATEGIC_ANALYTICS_DATA,
  REVENUE_ARCHITECTURE_DATA,
  GROWTH_CTA_DATA,
} from '@/constants/growth-strategy';

export const metadata: Metadata = {
  title: 'Growth Strategy | LIVENGAGE Agency',
  description:
    'Engineered Excellence in Scale. A high-fidelity strategy ecosystem designed for enterprise market penetration.',
};

export default function GrowthStrategyPage() {
  return (
    <main className="bg-surface-bright dark:bg-[#0B0114] text-on-surface dark:text-white font-body-md pt-20 selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-clip transition-colors duration-300">
      <GrowthHero {...GROWTH_HERO_DATA} />
      <StrategicAnalytics {...STRATEGIC_ANALYTICS_DATA} />
      <GlobalScalability />
      <RevenueArchitecture {...REVENUE_ARCHITECTURE_DATA} />
      <CTA 
        data={{
          headingPart1: 'Ready to',
          headingHighlight: 'Command the Market?',
          description: GROWTH_CTA_DATA.description,
          primaryCtaLabel: GROWTH_CTA_DATA.buttonText,
          primaryCtaHref: '/join-us',
        }} 
      />
    </main>
  );
}
