import {
  HeroContent,
  Stat,
  Requirement,
  Benefit,
  ApplicationSectionData,
} from '@/types/become-a-host';

export const HOST_HERO: HeroContent = {
  badge: 'Live Streaming Careers',
  heading: 'Step into the Spotlight. Broadcast to the World.',
  description:
    "Ready to showcase your talent? Whether you sing, dance, game, or just love chatting, Livengage helps you get paid for doing what you love. Join a global community of creators today.",
  primaryCtaLabel: 'Apply as a Host Now',
  primaryCtaHref: '#apply-now',
  secondaryCtaLabel: 'View Requirements',
  secondaryCtaHref: '#requirements',
  imageAlt:
    'A charismatic live streamer engaging with a global audience on a live streaming app',
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC1DGoPAxf8g-Vga7EUvFMu_K-wt7WktRi48d7bLceLNZCGkkJkzHKJPC_HI6OWZmIMPiwvOkmC6ksvQP-Ewu98dOsiraymDC94cKeaqdKz0uQjlM-DgifkMI9PSyGmYxGNOTrTpuuKsY41lQ5EiauEUGgfVmIQSlyl_X_MkKF6RVOohRptG-SqSvY5pZo2YJJpIdHjrBZ0luDuwkbba7gokB3bWGmei2hSsL3QmRYtvLUFlgH7OfvToA-8-ZrBImi-3_QxyvM0AA',
};

export const HOST_STATS: Stat[] = [
  { title: 'Global', subtitle: 'Audience Reach' },
  { title: '$0', subtitle: 'Startup Costs' },
  { title: 'Flexible', subtitle: 'Streaming Schedule' },
  { title: '1-on-1', subtitle: 'Dedicated Mentor' },
];

export const HOST_REQUIREMENTS: Requirement[] = [
  {
    icon: 'record_voice_over',
    iconColorClass: 'text-primary',
    iconBgClass: 'bg-primary/10',
    title: 'Engaging Communicators',
    description:
      'People who love talking, storytelling, and interacting with diverse audiences in real-time.',
  },
  {
    icon: 'auto_awesome',
    iconColorClass: 'text-secondary',
    iconBgClass: 'bg-secondary/10',
    title: 'Performers & Artists',
    description:
      'Singers, dancers, comedians, and musicians looking for a virtual stage to showcase their skills.',
  },
  {
    icon: 'face_5',
    iconColorClass: 'text-tertiary',
    iconBgClass: 'bg-tertiary/10',
    title: 'Driven Individuals',
    description:
      'Creators who are motivated to turn their passion into a consistent income stream with a positive attitude.',
  },
];

export const HOST_BENEFITS: Benefit[] = [
  {
    layoutVariant: 'featured-top',
    title: 'Zero Startup Costs',
    description:
      'Start streaming and earning immediately without any upfront fees or hidden charges. Your success is our success.',
  },
  {
    layoutVariant: 'standard',
    icon: 'public',
    iconColorClass: 'text-primary',
    title: 'Global Audience Reach',
    description:
      'Break geographical boundaries. Connect with millions of active users worldwide and build an international fanbase.',
  },
  {
    layoutVariant: 'standard',
    icon: 'schedule',
    iconColorClass: 'text-secondary',
    title: 'Flexible Schedule',
    description:
      'Be your own boss. You decide when, where, and how long you want to stream. Perfect for full-time creators or side-hustlers.',
  },
  {
    layoutVariant: 'featured-bottom',
    icon: 'support_agent',
    title: 'Dedicated Mentorship',
    description:
      'Get paired with an experienced manager who will guide you through best practices, algorithm secrets, and audience retention strategies.',
  },
];

export const HOST_APPLICATION_DATA: ApplicationSectionData = {
  heading: 'Start Your Streaming Career',
  description:
    'Submit your details and a short introductory video. Our talent scouts will review your profile and match you with the best app for your personality.',
  steps: [
    {
      icon: 'edit_document',
      title: 'Apply',
      description: 'Fill out our quick form with your basic details and experience level.',
    },
    {
      icon: 'video_camera_front',
      title: 'Review & Match',
      description: 'Our team reviews your profile and matches you to the right platform.',
    },
    {
      icon: 'rocket_launch',
      title: 'Onboarding & Earning',
      description: 'Receive your profile, go live, receive gifts, and get paid securely.',
    },
  ],
};
