export const JOIN_HERO = {
  headingPart1: 'Ready to Change',
  headingHighlight: 'Your Life?',
  description:
    'Choose your path below. Our talent managers will contact you within 24 hours to kickstart your journey with Livengage.',
};

export const JOIN_ROLE_CARDS = [
  {
    icon: 'live_tv',
    decorativeIcon: 'videocam',
    title: 'Become a Host',
    description:
      'Step into the spotlight. Build your personal brand, engage with global audiences, and get paid for doing exactly what you love.',
    features: [
      'Zero Startup Costs',
      'Global App Placements',
      'Dedicated Mentor',
    ],
    ctaLabel: 'Apply as Host',
    ctaHref: '/become-a-host',
    accentColor: 'primary' as const,
    variant: 'primary' as const,
  },
  {
    icon: 'hub',
    decorativeIcon: 'group',
    title: 'Become an Agent',
    description:
      'Build a digital empire. Join Livengage as an Agent and build a highly profitable business by recruiting and managing your own team.',
    features: [
      'Top-Tier Commissions',
      'Real-Time Analytics',
      'Comprehensive Training',
    ],
    ctaLabel: 'Register as Agent',
    ctaHref: '/become-an-agent',
    accentColor: 'tertiary' as const,
    variant: 'dark' as const,
  },
];

export const JOIN_BENEFITS = {
  eyebrow: 'Perks & Growth',
  heading: 'Why Partner With Livengage?',
  items: [
    {
      icon: 'public',
      title: 'Global Apps',
      description:
        'We partner with the world\'s biggest streaming platforms, giving you access to millions of viewers globally from day one.',
      span: 'single' as const,
    },
    {
      icon: 'payments',
      title: 'Fast Payouts',
      description:
        'Enjoy reliable, fast payments. Your success is instantly translated into secure earnings.',
      span: 'single' as const,
    },
    {
      icon: 'psychology',
      title: 'Expert Mentorship',
      description:
        'Learn algorithm secrets, framing, and viral techniques from veteran agents who\'ve seen it all.',
      span: 'single' as const,
    },
    {
      icon: 'rocket_launch',
      title: 'Seamless Onboarding',
      description:
        'Get matched with the perfect app and start streaming fast. Our team handles the heavy lifting so you can focus on creating.',
      span: 'wide' as const,
    },
    {
      icon: 'trending_up',
      title: 'Uncapped Growth',
      description:
        'From a casual streamer to full-time agency lead. We provide the roadmap for an escalating digital career.',
      span: 'single' as const,
    },
  ],
};

export const JOIN_STATS = [
  { value: '24hrs', label: 'Response Time' },
  { value: '10k+', label: 'Active Creators' },
  { value: '5+', label: 'Global Platforms' },
  { value: '100%', label: 'Free to Join' },
];
