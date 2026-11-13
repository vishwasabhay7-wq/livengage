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

export const metadata: Metadata = {
  title: 'Agent Ecosystem | LIVENGAGE Agency',
  description:
    'The Infrastructure for Global Agencies. Empowering sub-agencies with the most advanced event staffing platform.',
};

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
