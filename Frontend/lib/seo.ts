import type { Metadata } from 'next';

/**
 * Shared SEO helpers.
 *
 * Every page builds its metadata with `buildMetadata` so that title,
 * description, canonical URL, Open Graph and Twitter tags always agree.
 */

export const SITE_URL = 'https://www.livengage.com';
export const SITE_NAME = 'Livengage';
export const DEFAULT_OG_IMAGE = '/og-image.png';

export const CONTACT_EMAIL = 'official.livengage@gmail.com';
export const WHATSAPP_NUMBER = '+918796802120';
export const WHATSAPP_URL = 'https://wa.me/918796802120';

/**
 * Official social profiles. Leave a value empty until the real profile URL
 * is confirmed — empty entries are hidden in the footer and left out of schema.
 */
export const SOCIAL_LINKS: { name: string; url: string }[] = [
  { name: 'Instagram', url: '' },
  { name: 'Facebook', url: '' },
  { name: 'YouTube', url: '' },
  { name: 'Telegram', url: '' },
];

export function absoluteUrl(path = '/'): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path === '/' ? '' : path.replace(/\/+$/, '');
  return `${SITE_URL}${clean.startsWith('/') || clean === '' ? clean : `/${clean}`}`;
}

interface BuildMetadataInput {
  /** Full page title, used exactly as written (no template is appended). */
  title: string;
  description: string;
  /** Path of the canonical URL, e.g. "/become-a-host". */
  path: string;
  image?: string | null;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  noindex,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image || DEFAULT_OG_IMAGE;
  const images = [
    image
      ? { url: ogImage, alt: imageAlt || title }
      : { url: ogImage, width: 1200, height: 630, alt: imageAlt || title },
  ];

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      images,
      ...(type === 'article'
        ? { type: 'article', publishedTime, modifiedTime, authors }
        : { type: 'website' }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/* ── Structured data (JSON-LD) ─────────────────────────────────────────── */

export function organizationSchema() {
  const sameAs = SOCIAL_LINKS.map((s) => s.url).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/icon.png'),
    email: CONTACT_EMAIL,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: WHATSAPP_NUMBER,
        email: CONTACT_EMAIL,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'en-IN',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

/** Strips markdown/emoji noise so FAQ answers read cleanly in search results. */
function plainText(text: string): string {
  return String(text || '')
    .replace(/[*_#>`]/g, '')
    .replace(/^[\s✅✔☑]+/u, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function faqSchema(faqs: { question?: string; answer?: string }[] | null | undefined) {
  const items = (faqs || []).filter((f) => f?.question && f?.answer);
  if (items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: plainText(f.question!),
      acceptedAnswer: { '@type': 'Answer', text: plainText(f.answer!) },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
