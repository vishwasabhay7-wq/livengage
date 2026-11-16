export const MOCK_PARTNER_APPS = [
  {
    id: 1,
    title: 'Vone App (Poppo Live)',
    slug: 'partner-app',
    isFeatured: true,
    hero: {
      badgeText: 'Top Earning Partner App',
      titlePart1: 'Broadcast & Earn on',
      titleHighlight: 'Vone App (Poppo Live)',
      description: 'Join India\'s fastest-growing livestreaming network with guaranteed agency earnings, daily/weekly UPI payouts, and round-the-clock host protection.',
      primaryCtaLabel: 'Download Vone App',
      primaryCtaUrl: 'https://play.google.com/store/apps/details?id=com.vone.live',
      secondaryCtaLabel: 'Apply as Host',
      secondaryCtaUrl: '/become-a-host#apply-now',
      statsValue: '₹50,000+',
      statsLabel: 'Average Monthly Earnings',
      heroImage: {
        url: 'https://images.unsplash.com/photo-1516280440502-a2f1b0a70196?q=80&w=2000&auto=format&fit=crop',
        alternativeText: 'Vone Live Streamer'
      },
      avatars: {
        data: [
          { id: 1, url: 'https://i.pravatar.cc/150?u=1' },
          { id: 2, url: 'https://i.pravatar.cc/150?u=2' },
          { id: 3, url: 'https://i.pravatar.cc/150?u=3' },
          { id: 4, url: 'https://i.pravatar.cc/150?u=4' },
        ]
      }
    },
    benefits: {
      badge: 'Agency Perks',
      heading: 'Why Stream on Vone with Livengage',
      description: 'Get verified agency protection, instant gifts conversion, and algorithmic traffic boosts.',
      items: [
        { icon: 'payments', title: 'Daily & Weekly Payouts', description: 'Receive your earnings directly into your Indian bank account or via UPI without delays.' },
        { icon: 'verified', title: 'Official Agency Protection', description: 'Priority resolution for bans, account verification, and technical support.' },
        { icon: 'trending_up', title: 'Traffic Boosting', description: 'Front-page algorithmic recommendations and dedicated agency PK battle matchups.' }
      ]
    },
    videoPreview: {
      heading: 'Live Streaming in Action',
      description: 'See how creators broadcast, interact with gifters, and earn thousands every day.',
      video: {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-1232-large.mp4'
      }
    },
    professionalTools: {
      badge: 'Host Tools',
      heading: 'Everything You Need to Succeed',
      description: 'Streamline your broadcasts with professional tracking and audience engagement features.',
      tools: [
        { title: 'Real-Time Earnings Dashboard', description: 'Track your points, gifts, and hourly performance converted directly to INR.' },
        { title: 'Audience Analytics', description: 'Understand your top gifters, peak hours, and viewer retention metrics.' },
        { title: 'Multi-Guest Audio & Video Rooms', description: 'Host interactive panel streams with up to 9 creators at once.' }
      ]
    },
    monetizationTiers: {
      badge: 'Earnings Potential',
      heading: 'Estimated Host Income Tiers',
      description: 'The more consistently you broadcast, the higher your reward multipliers.',
      tiers: [
        { tierName: 'Rising Host', target: '10 hrs / week', earnings: '₹15,000 – ₹30,000 / mo' },
        { tierName: 'Pro Broadcaster', target: '25 hrs / week', earnings: '₹50,000 – ₹1,20,000 / mo', isPopular: true },
        { tierName: 'Elite Celebrity', target: '40 hrs / week', earnings: '₹2,00,000+ / mo' }
      ]
    },
    testimonials: {
      heading: 'Hear From Our Top Vone Creators',
      testimonials: [
        { name: 'Priya Sharma', role: 'Top Host – Delhi', comment: 'Livengage helped me set up my Vone account within 10 minutes. Within my first month, I earned over ₹65,000 with complete support.', avatar: { url: 'https://i.pravatar.cc/150?u=21' } },
        { name: 'Kavita Patel', role: 'Star Streamer – Mumbai', comment: 'Payouts are always on time via UPI, and my agency manager is always available when I have questions.', avatar: { url: 'https://i.pravatar.cc/150?u=22' } }
      ]
    },
    onboardingSteps: {
      badge: 'Simple Process',
      heading: 'How to Get Started on Vone',
      steps: [
        { stepNumber: '01', title: 'Submit Your Application', description: 'Fill out our 2-minute registration form with your basic details.' },
        { stepNumber: '02', title: 'Download & Bind Agency Code', description: 'Download Vone App from Play Store and enter our official agency ID.' },
        { stepNumber: '03', title: 'Complete Verification & Go Live', description: 'Perform quick face verification and start broadcasting with full agency support.' }
      ]
    },
    faqs: {
      faqs: [
        { question: 'Is it completely free to join Vone with Livengage?', answer: 'Yes! Livengage never charges hosts any registration, onboarding, or monthly fees.' },
        { question: 'How and when do I get paid?', answer: 'Payments are made weekly directly to your Indian bank account or UPI ID once your points are cleared.' },
        { question: 'Can I stream part-time?', answer: 'Absolutely. You choose your own schedule. Even 2 hours a day can generate significant earnings.' }
      ]
    },
    supportHub: {
      badge: '24/7 Care',
      title: 'Dedicated Agency Support',
      description: 'Our WhatsApp manager is available 24/7 to resolve queries, unblock accounts, and help you grow.',
      whatsappNumber: '+918796802120'
    },
    technicalRequirements: {
      badge: 'Setup Requirements',
      heading: 'What You Need to Start',
      requirements: [
        { title: 'Android or iOS Smartphone', description: 'A smartphone with a functional camera and microphone.' },
        { title: 'Stable Internet Connection', description: 'Wi-Fi or 4G/5G mobile data with decent upload speed.' },
        { title: 'Quiet, Well-Lit Space', description: 'A pleasant background and good lighting (ring light recommended).' }
      ]
    }
  },
  {
    id: 2,
    title: 'Chill Chat (Chamet)',
    slug: 'partner-app-1',
    isFeatured: true,
    hero: {
      badgeText: 'Global Video Chat Ecosystem',
      titlePart1: 'Connect Globally on',
      titleHighlight: 'Chill Chat (Chamet)',
      description: 'Connect with international audiences without language barriers. Earn from 1-on-1 calls, virtual gifts, and party rooms with India support.',
      primaryCtaLabel: 'Download Chill Chat',
      primaryCtaUrl: 'https://play.google.com/store/apps/details?id=com.chillchat.app',
      secondaryCtaLabel: 'Apply as Host',
      secondaryCtaUrl: '/become-a-host#apply-now',
      statsValue: '₹75,000+',
      statsLabel: 'Top Host Weekly Average',
      heroImage: {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop',
        alternativeText: 'Chill Chat Streamer'
      },
      avatars: {
        data: [
          { id: 5, url: 'https://i.pravatar.cc/150?u=5' },
          { id: 6, url: 'https://i.pravatar.cc/150?u=6' },
          { id: 7, url: 'https://i.pravatar.cc/150?u=7' },
        ]
      }
    },
    benefits: {
      badge: 'Creator Advantages',
      heading: 'Why Join Chill Chat with Livengage',
      description: 'Chamet is now Chill Chat in India. Enjoy premium international traffic and top-tier bean conversion rates.',
      items: [
        { icon: 'public', title: 'Global Reach', description: 'Connect with users from North America, Europe, the Middle East, and Asia.' },
        { icon: 'translate', title: 'Real-Time Translation', description: 'Built-in real-time text and speech translation so you can chat freely.' },
        { icon: 'lock', title: 'Privacy & Safety', description: 'Strict community guidelines, automatic screenshot blocking, and host protection.' }
      ]
    },
    videoPreview: {
      heading: 'Engaging Video Interactions',
      description: 'Explore the high-converting 1-on-1 and party video room formats.',
      video: {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-1232-large.mp4'
      }
    },
    professionalTools: {
      badge: 'Platform Tools',
      heading: 'Advanced Broadcasting Features',
      description: 'Empowering your conversations with high quality filters and gift animations.',
      tools: [
        { title: 'Beauty & AR Filters', description: 'Studio-grade video enhancements and virtual stickers for engaging video calls.' },
        { title: 'Call History & Earnings Tracker', description: 'Detailed breakdown of every minute streamed and points accumulated.' }
      ]
    },
    monetizationTiers: {
      badge: 'Income Structure',
      heading: 'Earning Opportunities on Chill Chat',
      description: 'Earn points per minute during video calls plus bonus gifts.',
      tiers: [
        { tierName: 'Part-Time Host', target: '2 hrs / day', earnings: '₹20,000 – ₹45,000 / mo' },
        { tierName: 'Full-Time Creator', target: '4 hrs / day', earnings: '₹60,000 – ₹1,50,000 / mo', isPopular: true },
        { tierName: 'Agency Top Earner', target: '6+ hrs / day', earnings: '₹2,50,000+ / mo' }
      ]
    },
    testimonials: {
      heading: 'Host Success Stories',
      testimonials: [
        { name: 'Sneha R.', role: 'Chill Chat Host – Pune', comment: 'The international user base means tips and gifts are very generous. Livengage provides prompt payout support every Monday without fail.', avatar: { url: 'https://i.pravatar.cc/150?u=23' } }
      ]
    },
    onboardingSteps: {
      badge: 'Quick Registration',
      heading: 'Join Chill Chat in 3 Steps',
      steps: [
        { stepNumber: '01', title: 'Apply on Livengage', description: 'Fill in your name and WhatsApp number.' },
        { stepNumber: '02', title: 'Download & Connect ID', description: 'Link your Chill Chat profile to our agency.' },
        { stepNumber: '03', title: 'Begin Streaming', description: 'Receive instant tips, calls, and start generating daily income.' }
      ]
    },
    faqs: {
      faqs: [
        { question: 'Is Chamet still working in India?', answer: 'Yes! The official application is now rebranded as Chill Chat with full India payout support.' },
        { question: 'Do I need professional cameras?', answer: 'No, a normal smartphone camera with clear audio is all you need.' }
      ]
    },
    supportHub: {
      badge: 'Assistance',
      title: 'WhatsApp Mentor Assistance',
      description: 'Get immediate answers to any streaming or account questions.',
      whatsappNumber: '+918796802120'
    },
    technicalRequirements: {
      badge: 'Device Specs',
      heading: 'System Requirements',
      requirements: [
        { title: 'Android 8.0+ or iOS 12+', description: 'Modern mobile operating system.' },
        { title: 'High-speed Connection', description: 'Stable 4G/5G or Wi-Fi.' }
      ]
    }
  },
  {
    id: 3,
    title: 'Niki Live',
    slug: 'partner-app-2',
    isFeatured: true,
    hero: {
      badgeText: 'High Energy Entertainment App',
      titlePart1: 'Party, Game & Stream on',
      titleHighlight: 'Niki Live',
      description: 'The energetic global platform designed for interactive party rooms, gaming broadcasts, and talent shows. Join as a host or agent today.',
      primaryCtaLabel: 'Download Niki Live',
      primaryCtaUrl: 'https://play.google.com/store/apps/details?id=com.nikilive.app',
      secondaryCtaLabel: 'Apply as Host',
      secondaryCtaUrl: '/become-a-host#apply-now',
      statsValue: '₹40,000+',
      statsLabel: 'Average Monthly Host Earnings',
      heroImage: {
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop',
        alternativeText: 'Niki Live Streamer'
      },
      avatars: {
        data: [
          { id: 8, url: 'https://i.pravatar.cc/150?u=8' },
          { id: 9, url: 'https://i.pravatar.cc/150?u=9' },
        ]
      }
    },
    benefits: {
      badge: 'Key Highlights',
      heading: 'Why Stream on Niki Live',
      description: 'Fun, dynamic party rooms and active gifter communities.',
      items: [
        { icon: 'celebration', title: 'Party Room Matchups', description: 'Collab with other streamers to combine audiences and maximize gift revenue.' },
        { icon: 'speed', title: 'Fast Onboarding', description: 'Instant verification for approved Livengage creators.' },
        { icon: 'savings', title: 'Reliable Settlements', description: 'Hassle-free UPI and bank transfers.' }
      ]
    },
    videoPreview: {
      heading: 'Dynamic Party Rooms',
      description: 'High energy games, music battles, and non-stop gifts.',
      video: {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-1232-large.mp4'
      }
    },
    professionalTools: {
      badge: 'Creator Suite',
      heading: 'Interactive Broadcast Tools',
      description: 'Host team games and virtual competitions directly from your phone.',
      tools: [
        { title: 'Interactive Mini-Games', description: 'Keep audiences engaged and playing alongside your stream.' }
      ]
    },
    monetizationTiers: {
      badge: 'Income Levels',
      heading: 'Host Earning Potential',
      description: 'Earn from gifts, party room entry fees, and agency bonuses.',
      tiers: [
        { tierName: 'Standard Host', target: '15 hrs / week', earnings: '₹12,000 – ₹28,000 / mo' },
        { tierName: 'Star Entertainer', target: '30 hrs / week', earnings: '₹40,000 – ₹90,000 / mo', isPopular: true }
      ]
    },
    testimonials: {
      heading: 'Creator Feedback',
      testimonials: [
        { name: 'Ananya D.', role: 'Niki Live Host – Kolkata', comment: 'The party rooms are so much fun! I stream with my friends and we make great earnings every week.', avatar: { url: 'https://i.pravatar.cc/150?u=24' } }
      ]
    },
    onboardingSteps: {
      badge: 'How to Join',
      heading: 'Start on Niki Live',
      steps: [
        { stepNumber: '01', title: 'Register Online', description: 'Submit your contact info on our website.' },
        { stepNumber: '02', title: 'Enter Agency ID', description: 'Add our official Livengage code inside Niki Live.' },
        { stepNumber: '03', title: 'Stream & Earn', description: 'Host party rooms and cash out weekly.' }
      ]
    },
    faqs: {
      faqs: [
        { question: 'What is the minimum age to stream on Niki Live?', answer: 'Hosts must be at least 18 years of age.' }
      ]
    },
    supportHub: {
      badge: 'Support',
      title: 'Direct WhatsApp Line',
      description: 'Talk to an agency representative today.',
      whatsappNumber: '+918796802120'
    },
    technicalRequirements: {
      badge: 'Requirements',
      heading: 'What You Need',
      requirements: [
        { title: 'Smartphone', description: 'Camera and microphone enabled.' }
      ]
    }
  }
];
