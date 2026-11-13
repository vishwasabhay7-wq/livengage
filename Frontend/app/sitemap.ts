import { MetadataRoute } from 'next';
import { blogService } from '@/lib/strapi/services/blogs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.livengage.com';

  // 1. Static Pages
  const staticPages = [
    '',
    '/about-us',
    '/services',
    '/agent-ecosystem',
    '/growth-strategy',
    '/talent-recruitment',
    '/become-a-host',
    '/become-an-agent',
    '/join-us',
    '/contact-us',
    '/blogs',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Blog Pages
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    // Fetch top 100 blogs for the sitemap
    const strapiRes = await blogService.getBlogs(1, 100); 
    const blogs = strapiRes?.data || [];
    
    blogPages = blogs.map((blog) => {
      const titleSlug = (blog.title || 'post')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      const urlSlug = `${titleSlug}--${blog.documentId}`;
      
      return {
        url: `${baseUrl}/blogs/${urlSlug}`,
        lastModified: new Date(blog.updatedAt || blog.publishedAt || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      };
    });
  } catch (error) {
    console.error('[Sitemap] Blog fetch failed', error);
  }

  return [...staticPages, ...blogPages];
}
