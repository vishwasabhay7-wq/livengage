import type { BlogPost } from '@/types/blog';

/**
 * Clean keyword URLs and SEO copy for blog posts.
 *
 * Posts are matched by their CMS documentId, so the CMS doesn't need to change.
 * Old /blogs/<title>--<id> URLs 301 to these paths (see next.config.ts).
 *
 * New posts: set a clean `slug` in the CMS (e.g. "how-to-earn-on-vone") and the
 * post is served at /blog/<slug> automatically — no entry needed here.
 */
export interface BlogRoute {
  documentId: string;
  /** Path after /blog/, may contain a folder, e.g. "chill-chat/how-to-earn…". */
  slug: string;
  title: string;
  description: string;
  /** Optional on-page heading override, used to fix typos/caps in the CMS title. */
  heading?: string;
}

export const BLOG_ROUTES: BlogRoute[] = [
  {
    documentId: 'di7bl9tg757iv0f67y1qys2r',
    slug: 'live-streaming-camera-setup-tips',
    title: 'Live Streaming Camera Setup: 9 Phone-Only Tips',
    description:
      '9 phone-only tips for clearer live streams: lighting, camera height, distance, background and a pre-stream routine any host can follow.',
    heading: 'Live Streaming Camera Setup: 9 Phone-Only Tips',
  },
  {
    documentId: 'e5uu012hylv4zwp79ev1hcqa',
    slug: 'how-to-build-a-live-streaming-agency',
    title: 'How to Build a Successful Live Streaming Agency',
    description:
      'A practical guide to building a live streaming agency: finding hosts, training them, supporting them and growing your team step by step.',
    heading: 'A Practical Guide to Building a Successful Live Streaming Agency',
  },
  {
    documentId: 'zz6oflbahujw7ks2l5fiejcv',
    slug: 'chill-chat/how-to-earn-on-chill-chat-chamet',
    title: 'How to Earn on Chill Chat (Chamet): Host Guide 2026',
    description:
      'How Chill Chat (formerly Chamet) hosts earn: private calls, virtual gifts, PK events and daily tasks, plus how beans turn into cash in India.',
    heading: 'How to Earn on Chill Chat (Chamet): A Host Guide',
  },
  {
    documentId: 'eiw2h8vk3866catol3n6j9dl',
    slug: 'how-to-start-live-streaming-and-earn',
    title: 'How to Start Live Streaming, Build an Audience & Earn',
    description:
      'New to live streaming? Set up your profile, go live with confidence, build a loyal audience and start earning on Chill Chat and Vone.',
  },
];

/** CMS slugs that are placeholders ("blog", "blog-1", …) rather than real URLs. */
const PLACEHOLDER_SLUG = /^blog(-\d+)?$/;

export function getBlogRouteByDocumentId(documentId: string | undefined) {
  return BLOG_ROUTES.find((r) => r.documentId === documentId);
}

export function getBlogRouteBySlug(slug: string) {
  return BLOG_ROUTES.find((r) => r.slug === slug);
}

function titleSlug(title: string) {
  return (title || 'post')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Public URL of a blog post. */
export function blogHref(blog: Pick<BlogPost, 'documentId' | 'slug' | 'title'>): string {
  const route = getBlogRouteByDocumentId(blog.documentId);
  if (route) return `/blog/${route.slug}`;
  if (blog.slug && !PLACEHOLDER_SLUG.test(blog.slug)) return `/blog/${blog.slug}`;
  return `/blog/${titleSlug(blog.title)}--${blog.documentId}`;
}

/** Heading shown on cards and the post page. */
export function blogHeading(blog: Pick<BlogPost, 'documentId' | 'title'>): string {
  return getBlogRouteByDocumentId(blog.documentId)?.heading || blog.title;
}
