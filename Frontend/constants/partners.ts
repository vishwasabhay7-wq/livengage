import { PartnerPageData } from '@/types/partners';

export const MOCK_PARTNERS_DB: Record<string, PartnerPageData> = {
  ecosystem: {
    hero: {
      badge: 'App Partners',
      title: 'Top Live Streaming Apps',
      description:
        "Livengage provides direct access and representation across the world's most lucrative streaming ecosystems. We connect elite talent with the best platforms to maximize growth.",
      primaryButtonText: 'Apply as a Host',
      secondaryButtonText: 'Become an Agent',
    },
    platforms: [
      {
        id: 'poppo',
        type: 'main',
        name: 'Poppo Live',
        shortName: 'P',
        description:
          'Deep community integration and superior host support structures for long-term growth and stable earnings.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBFcpsJ7aLjnYZMVmALkXy-uN6G8-7YD22UzRIaiFeQxQSiG19gsDuTMZuskvFSCEo_2AwmQBW5BiQh_fYmFY5Ejbe2OavYIQddRocFW7z9E9xLJzY0eMhvlSTvir3lBE4n4P0s2jHUhz4fe0Lyrq-OcIXh4_GbUhxdAVIVRt8CCwkaZk7VqXuzNw7uJFhzaRCr_EKup7dw8JCrymL_KdrL8Y7w0KHFJFz18irpCZZtPowgx72_Ile5yHRIToZa2V3jDkhnQcxpHA',
        stats: [
          { value: 'High', label: 'Engagement' },
        ],
      },
      {
        id: 'chamet',
        type: 'community',
        name: 'Chamet',
        shortName: 'C',
        description:
          'Unmatched global reach with a focus on high-engagement visual interaction. Build connections without language barriers.',
        highlight: 'Connect worldwide via free video chat.',
      },
      {
        id: 'niki',
        type: 'innovation',
        name: 'Niki Live',
        shortName: 'N',
        description:
          'A high-energy global platform designed for fun and interactive streaming.',
        stats: [{ value: 'Top Tier', label: 'Reach' }],
      },
      {
        id: 'taka',
        type: 'emerging',
        name: 'Taka Live',
        shortName: 'T',
        description:
          'Explosive growth in emerging digital markets. Turn chats into an adventure with real-time video chats.',
        highlight: 'Non-stop entertainment',
      },
    ],
    integration: {
      title: 'Why These Apps?',
      description:
        'We carefully select partner apps that provide the highest revenue shares, most engaged audiences, and most reliable payouts for our hosts and agents.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAKPrU8R1E7axf8tAHy9illl5sKEpnS9pg-8Hy2OXAuI4CdUHMo553byp_u8eVlvQ7Iw-Xq8HYj7OJr9N7uJsODjAfukucT170ASgjIvpg4_p5OOep3VXuJ7GFiYiXQYAcc3mutfaCB79TwHHPGm32yBKsN6sT_CNWUdu7Xypm9DPaZOI_FzIgNKmFRzQcCxfRP1JZxdhyv9b-vcJt7QHTKXXwf2h-0Qp4wJd-3T3CmBeHN_nUfM1PtFavQSKCJo3ic0I7miSU2sw',
      features: [
        {
          icon: 'api',
          title: 'Direct Representation',
          description:
            'We work directly with app developers to get our hosts the best contracts.',
        },
        {
          icon: 'support_agent',
          title: 'Priority Support',
          description:
            'Fast-tracked troubleshooting and issue resolution within these apps.',
        },
        {
          icon: 'payments',
          title: 'Secure Payouts',
          description:
            'Guaranteed secure and reliable weekly payouts.',
        },
      ],
    },
    successMetrics: {
      title: 'Our Ecosystem Impact',
      metrics: [
        { value: '10k+', label: 'Active Hosts' },
        { value: '24/7', label: 'Support' },
        { value: '5+', label: 'Top Apps' },
      ],
    },
    cta: {
      title: 'Ready to Shine on Top Platforms?',
      description:
        'Join Livengage and get matched with the perfect app for your talent.',
      primaryButtonText: 'Become a Host',
      secondaryButtonText: 'Register Agency',
    },
  },
};

export const DEFAULT_PARTNER_DATA = MOCK_PARTNERS_DB['ecosystem'];
