export const SERVICES_HERO = {
  badge: 'Livengage Support',
  heading: 'Elevating Talent,\nEmpowering Agents',
  description:
    'At Livengage, we provide end-to-end support to ensure you succeed in the digital broadcasting world. Discover how we can help you scale.',
};

export const SERVICES_LIST = [
  {
    icon: 'person_search',
    title: 'Talent Incubation',
    description:
      'We don\'t just connect you to apps; we provide the training, resources, and continuous support needed to maximize your audience engagement and multiply your earnings.',
    features: [
      'Audience retention training',
      'Content quality improvement',
      'Continuous 1-on-1 support',
    ],
    linkText: 'Get Started',
    href: '/talent-recruitment',
    accentColor: 'primary' as const,
  },
  {
    icon: 'groups',
    title: 'Agency Management',
    description:
      'Build your empire. We supply agents with the tools, operational frameworks, and high-commission structures required to manage large teams of successful streamers.',
    features: [
      'Sub-agent scaling',
      'High revenue share models',
      'Advanced tracking dashboards',
    ],
    linkText: 'Learn More',
    href: '/agent-ecosystem',
    accentColor: 'secondary' as const,
  },
  {
    icon: 'trending_up',
    title: 'Strategic Matchmaking',
    description:
      'We pair the right talent with the right platforms, ensuring a perfect fit for your content style and audience demographics.',
    features: [
      'App compatibility analysis',
      'Global demographic targeting',
      'Cross-platform transitions',
    ],
    linkText: 'View Paths',
    href: '/growth-strategy',
    accentColor: 'tertiary' as const,
  },
];

export const PARTNER_APPS_SECTION = {
  heading: 'Elite Partner Apps',
  description:
    'We provide direct access and representation across the world\'s most lucrative streaming ecosystems.',
  apps: [
    {
      icon: 'videocam',
      title: 'Poppo Live',
      badge: 'High Earning',
    },
    {
      icon: 'forum',
      title: 'Chamet',
      badge: 'Global Reach',
    },
    {
      icon: 'star',
      title: 'Niki Live',
      badge: 'Top Tier',
    },
    {
      icon: 'more_horiz',
      title: 'Taka & Crush',
      badge: 'Rapid Growth',
    },
  ],
};

export const SERVICES_STATS = [
  { value: '10k+', label: 'Active Streamers' },
  { value: '24/7', label: 'Priority Support' },
  { value: '5k+', label: 'Global Agents' },
];

export const SERVICES_CTA = {
  heading: 'Ready to Change Your Life?',
  description:
    'Join thousands of creators and agency leaders who trust Livengage to power their growth on the world\'s top platforms.',
  primaryCtaLabel: 'Apply as a Host',
  primaryCtaHref: '/become-a-host',
  secondaryCtaLabel: 'Register as an Agent',
  secondaryCtaHref: '/become-an-agent',
};
