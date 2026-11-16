import type { Metadata } from 'next';

import {
  EcosystemHero,
  EcosystemFeatures,
  PartnershipTiers,
  EcosystemStats,
  EcosystemCTA,
} from '@/components/agent-ecosystem';

import {
  ECOSYSTEM_HERO_DATA,
  PARTNERSHIP_TIERS,
  ECOSYSTEM_STATS,
  ECOSYSTEM_CTA_DATA,
} from '@/constants/agent-ecosystem';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: "Live Streaming Sub-Agency Program – Livengage",
  description:
    "Build a sub-agency with Livengage: recruit hosts, use our agency dashboard, get fast payouts and 24/7 partner support. Zero startup fees.",
  path: '/agent-ecosystem',
});

export default function AgentEcosystemPage() {
  return (
    <main className="bg-background text-on-background font-body-md antialiased pt-20 selection:bg-primary-fixed selection:text-on-primary-fixed">
      <EcosystemHero {...ECOSYSTEM_HERO_DATA} />
      <EcosystemFeatures />
      <PartnershipTiers tiers={PARTNERSHIP_TIERS} />
      <EcosystemStats stats={ECOSYSTEM_STATS} />
      <EcosystemCTA {...ECOSYSTEM_CTA_DATA} />
    </main>
  );
}
