import {
  EcosystemCTAContent,
  EcosystemHeroContent,
  EcosystemStat,
  PartnershipTier,
} from '@/types/agent-ecosystem';

export const ECOSYSTEM_HERO_DATA: EcosystemHeroContent = {
  badge: 'Official Agency Partner',
  title: 'Build Your Own Sub-Agency. Start Earning Today.',
  description:
    "Join Livengage as an Official Partner Agent. Leverage our direct app partnerships to recruit hosts, build your sub-agency, and earn the highest commissions in the industry—with zero startup costs or hidden fees.",
  primaryButtonText: 'Register as an Agent',
  secondaryButtonText: 'View Agent Benefits',
  imageUrl:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop',
  imageAlt:
    'A sophisticated analytics dashboard showing global streaming data and team growth.',
};

export const PARTNERSHIP_TIERS: PartnershipTier[] = [
  {
    id: 'tier-1',
    number: '01',
    title: 'Top-Tier Commissions & Fast Payouts',
    subtitle: 'Daily & Weekly Settlements',
    features: [
      'Earn directly from official app commission structures.',
      'Enjoy fast, secure daily or weekly payouts.',
      'Zero hidden fees—you keep what you and your team earn.',
    ],
  },
  {
    id: 'tier-2',
    number: '02',
    title: 'Build Your Sub-Agency',
    subtitle: 'Limitless Scaling',
    isHighlight: true,
    features: [
      'Recruit and manage your own network of sub-agents and hosts.',
      'Access official real-time agency dashboards.',
      'Track your team\'s streaming hours and daily revenue transparently.',
    ],
  },
  {
    id: 'tier-3',
    number: '03',
    title: 'Official Partner Support',
    subtitle: 'Dedicated Training',
    features: [
      'Direct access to official app events and VIP host promotions.',
      'Extensive training on recruitment and host retention strategies.',
      '24/7 priority operational support from Livengage headquarters.',
    ],
  },
];

export const ECOSYSTEM_STATS: EcosystemStat[] = [
  { value: '0%', label: 'Startup Fees' },
  { value: 'Daily', label: 'Fast Payouts' },
  { value: '24/7', label: 'Official Support' },
  { value: '100%', label: 'Transparent Earnings' },
];

export const ECOSYSTEM_CTA_DATA: EcosystemCTAContent = {
  title: 'Ready to Build Your Agency Empire?',
  description:
    'Partner with Livengage today and get direct access to the world\'s top live-streaming applications. Start recruiting and watch your commission grow.',
  buttonText: 'Join as an Agent',
  footerText: '100% Free to join. Fast onboarding within 24 hours.',
};
