import { BlogPost } from '@/types/blog';

const baseMockBlogs: any[] = [
  {
    id: 1,
    documentId: 'dummy-1',
    title: 'The Future of Live Streaming: Trends to Watch in 2026',
    slug: 'future-of-live-streaming-2026',
    excerpt: 'Explore the cutting-edge technologies and emerging trends that are set to redefine the live streaming landscape over the next few years. From AI-driven interactions to hyper-realistic virtual environments.',
    content: [
      {
        type: 'paragraph',
        children: [{ type: 'text', text: 'Live streaming is evolving at an unprecedented pace. As we move deeper into 2026, the boundaries between creator and audience are blurring. Interactive tools, AI-powered real-time translation, and virtual reality integration are no longer just concepts—they are becoming the standard.' }]
      },
      {
        type: 'heading',
        level: 2,
        children: [{ type: 'text', text: 'AI-Driven Interactivity' }]
      },
      {
        type: 'paragraph',
        children: [{ type: 'text', text: 'Artificial Intelligence is revolutionizing how creators interact with their audience. Smart moderation, automated personalized shoutouts, and dynamic content adaptation based on viewer sentiment are maximizing engagement without requiring additional effort from the streamer.' }]
      }
    ],
    author: 'Sarah Jenkins',
    publishedDate: '2026-08-10',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1516280440502-a2f1b0a70196?q=80&w=2000&auto=format&fit=crop',
      alternativeText: 'Live streaming setup with neon lights'
    }
  },
  {
    id: 2,
    documentId: 'dummy-2',
    title: 'How to Build a Loyal Community from Scratch',
    slug: 'build-loyal-community-from-scratch',
    excerpt: 'Building a community is more than just getting viewers; it is about creating meaningful connections. Learn the proven strategies top creators use to turn casual viewers into dedicated superfans.',
    content: [
      {
        type: 'paragraph',
        children: [{ type: 'text', text: 'The secret to long-term success in live streaming isn\'t just talent—it\'s community building. A loyal community will support you through platform changes, algorithm shifts, and content pivots.' }]
      }
    ],
    author: 'Marcus Chen',
    publishedDate: '2026-08-05',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop',
      alternativeText: 'Group of people laughing together'
    }
  },
  {
    id: 3,
    documentId: 'dummy-3',
    title: 'Maximizing Revenue: Beyond Platform Subscriptions',
    slug: 'maximizing-revenue-beyond-subscriptions',
    excerpt: 'Don\'t leave money on the table. Discover alternative revenue streams including brand sponsorships, exclusive merchandise, and specialized coaching for upcoming talent.',
    content: [
      {
        type: 'paragraph',
        children: [{ type: 'text', text: 'Relying solely on platform subscriptions is a risky strategy. Diversification is key.' }]
      }
    ],
    author: 'Elena Rodriguez',
    publishedDate: '2026-07-28',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2000&auto=format&fit=crop',
      alternativeText: 'Person analyzing financial charts'
    }
  },
  {
    id: 4,
    documentId: 'dummy-4',
    title: 'The Ultimate Guide to Lighting for Live Streams',
    slug: 'ultimate-guide-to-streaming-lighting',
    excerpt: 'Good lighting can make a budget camera look professional, while bad lighting can ruin the most expensive setup. A comprehensive guide to three-point lighting, RGB accents, and natural light integration.',
    content: [
      {
        type: 'paragraph',
        children: [{ type: 'text', text: 'Lighting is the unsung hero of production value.' }]
      }
    ],
    author: 'David Kim',
    publishedDate: '2026-07-15',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2000&auto=format&fit=crop',
      alternativeText: 'Professional studio lighting'
    }
  },
  {
    id: 5,
    documentId: 'dummy-5',
    title: 'Mental Health Strategies for Content Creators',
    slug: 'mental-health-strategies-for-creators',
    excerpt: 'Burnout is a real threat in the fast-paced world of live streaming. Learn how to set healthy boundaries, manage screen time, and deal with online negativity effectively.',
    content: [
      {
        type: 'paragraph',
        children: [{ type: 'text', text: 'Taking care of your mind is just as important as upgrading your hardware.' }]
      }
    ],
    author: 'Dr. Emily Watson',
    publishedDate: '2026-07-02',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop',
      alternativeText: 'Peaceful meditation scene'
    }
  },
  {
    id: 6,
    documentId: 'dummy-6',
    title: 'Case Study: From Zero to Top 1% in 6 Months',
    slug: 'case-study-zero-to-top-1-percent',
    excerpt: 'An in-depth look at how one of our agency partners leveraged LIVENGAGE\'s proprietary toolkit to scale a brand new talent roster into global leaders in record time.',
    content: [
      {
        type: 'paragraph',
        children: [{ type: 'text', text: 'Success leaves clues. Here is the exact blueprint used to achieve explosive growth.' }]
      }
    ],
    author: 'Alex Mercer',
    publishedDate: '2026-06-20',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
      alternativeText: 'Graph showing exponential growth'
    }
  }
];

// Duplicate to create 12 dummy posts so we can test pagination (9 per page)
export const mockBlogs: BlogPost[] = [
  ...baseMockBlogs,
  ...baseMockBlogs.map(blog => ({
    ...blog,
    id: blog.id + 6,
    documentId: `dummy-${blog.id + 6}`,
    title: `${blog.title} (Part 2)`,
    slug: `${blog.slug}-part-2`
  }))
];
