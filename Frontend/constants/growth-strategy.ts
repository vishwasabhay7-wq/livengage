import {
  GrowthCTAContent,
  GrowthHeroContent,
  RevenueArchitectureContent,
  StrategicAnalyticsContent,
} from '@/types/growth-strategy';

export const GROWTH_HERO_DATA: GrowthHeroContent = {
  badge: 'Growth Strategy',
  title: 'Accelerate Your Streaming Career',
  description:
    "Success in live streaming isn't just luck—it's strategy. Livengage provides hosts and agents with proven frameworks to build a global fanbase, dominate app algorithms, and multiply your daily earnings.",
  primaryButtonText: 'Become a Host',
  secondaryButtonText: 'Become an Agent',
};

export const STRATEGIC_ANALYTICS_DATA: StrategicAnalyticsContent = {
  heading: 'Our Proven Growth Approach',
  description:
    'We don\'t just recruit you; we guide you. We provide expert mentorship, actionable feedback, and support to ensure you thrive on platforms like Chamet, Poppo, and Niki Live.',
  features: [
    {
      title: 'Performance & Engagement Reviews',
      description:
        'We conduct 1-on-1 sessions to review your streams. Learn how to increase viewer retention, master PK battles, and achieve your daily targets faster.',
      icon: 'analytics',
      colorClass: 'primary',
    },
    {
      title: 'Algorithm & App Strategy',
      description:
        'Stay ahead of the curve. We keep you updated on the latest app algorithms, high-paying official events, and strategies to attract high-spending gifters.',
      icon: 'monitoring',
      colorClass: 'tertiary',
    },
  ],
};

export const REVENUE_ARCHITECTURE_DATA: RevenueArchitectureContent = {
  heading: 'Scaling Your Earnings',
  description:
    "From a casual streamer to a full-time agency lead, we provide the roadmap for a highly profitable digital career with unlimited earning potential.",
  stat1Value: '20%',
  stat1Label: 'Agent Commissions',
  stat2Value: '24/7',
  stat2Label: 'Expert Support',
  timelineSteps: [
    {
      title: 'Targeted Platform Placement',
      description:
        'We match you with the right app (Poppo, Chamet, Niki Live) based on your content style and audience demographic for maximum impact.',
    },
    {
      title: 'Audience & Fanbase Growth',
      description:
        'Dedicated mentors teach you the ins and outs of app algorithms to maximize exposure, followers, and engagement.',
    },
    {
      title: 'Build Your Own Agency',
      description:
        'Ready to scale? We give agents the tools to recruit hosts, manage sub-agents, and earn lucrative passive income.',
    },
  ],
};

export const GROWTH_CTA_DATA: GrowthCTAContent = {
  heading: 'Ready to Command the Market?',
  description:
    'Join Livengage today to multiply your earnings and expand your influence globally.',
  buttonText: 'Join Us',
  footerText: 'Your data is 100% secure.',
};
