import { strapiFetch, buildQueryString } from '../client';
import { BlogPost } from '@/types/blog';

/**
 * Service for fetching Blog entries.
 */
export const blogService = {
  /**
   * Fetch a paginated list of blogs.
   */
  async getBlogs(page: number = 1, pageSize: number = 9) {
    const params = [
      'populate=coverImage',
      'sort=publishedDate:desc',
      `pagination[page]=${page}`,
      `pagination[pageSize]=${pageSize}`
    ];
    
    return strapiFetch<BlogPost[]>(`/api/blogs${buildQueryString(params)}`);
  },

  /**
   * Fetch a single blog post by slug.
   */
  async getBlogBySlug(slug: string) {
    const params = [
      `filters[slug][$eq]=${slug}`,
      'populate=coverImage'
    ];
    
    return strapiFetch<BlogPost[]>(`/api/blogs${buildQueryString(params)}`);
  },

  /**
   * Fetch a single blog post by documentId.
   */
  async getBlogByDocumentId(documentId: string) {
    const params = [
      `filters[documentId][$eq]=${documentId}`,
      'populate=coverImage'
    ];
    
    return strapiFetch<BlogPost[]>(`/api/blogs${buildQueryString(params)}`);
  }
};
