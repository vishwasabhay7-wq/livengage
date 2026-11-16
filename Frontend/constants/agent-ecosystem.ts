import {
  EcosystemCTAContent,
  EcosystemHeroContent,
  EcosystemStat,
  PartnershipTier,
} from '@/types/agent-ecosystem';

export const ECOSYSTEM_HERO_DATA: EcosystemHeroContent = {
  badge: 'Livengage Sub-Agency Program',
  title: 'Build a Live Streaming Sub-Agency with Livengage',
  description:
    "Join Livengage as a sub-agency partner. Recruit live streaming hosts for apps like Vone (Poppo Live), Chill Chat (Chamet) and Niki Live, manage your team from one dashboard and earn tiered commission—with zero startup costs or hidden fees.",
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
    subtitle: 'Transparent Settlements',
    features: [
      'Earn commission based on your team\'s performance on each partner app.',
      'Receive payouts on each app\'s settlement schedule, with India payment support.',
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
    title: 'Dedicated Partner Support',
    subtitle: 'Dedicated Training',
    features: [
      'Access to app events and host promotions as they become available.',
      'Extensive training on recruitment and host retention strategies.',
      '24/7 priority operational support from Livengage headquarters.',
    ],
  },
];

export const ECOSYSTEM_STATS: EcosystemStat[] = [
  { value: '0%', label: 'Startup Fees' },
  { value: 'Free', label: 'To Join' },
  { value: '24/7', label: 'Partner Support' },
  { value: 'Live', label: 'Team Dashboard' },
];

export const ECOSYSTEM_CTA_DATA: EcosystemCTAContent = {
  title: 'Ready to Build Your Agency Empire?',
  description:
    'Partner with Livengage today and get direct access to the world\'s top live-streaming applications. Start recruiting and watch your commission grow.',
  buttonText: 'Join as an Agent',
  footerText: 'Free to join. Fast onboarding with a dedicated manager.',
};
