import { getDummyDataForPath } from '../../data';
import { StrapiResponse } from './types';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

/**
 * Helper to build a query string from a parameters array.
 */
export function buildQueryString(params: string[]): string {
  if (!params || params.length === 0) return '';
  return `?${params.join('&')}`;
}

/**
 * Core fetch wrapper for Strapi.
 */
export async function strapiFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<StrapiResponse<T>> {
  try {
    const requestUrl = `${STRAPI_URL}${path}`;
    
    const defaultOptions = {
      next: { revalidate: 60 } // Default cache behavior
    };
    
    const mergedOptions: RequestInit = {
      ...defaultOptions,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    const response = await fetch(requestUrl, mergedOptions);
    
    if (!response.ok) {
      console.warn(`[Strapi Client] Fetch Error from ${requestUrl}: ${response.statusText}. Using fallback data.`);
      const dummyData = getDummyDataForPath(path);
      if (dummyData) {
        return dummyData as StrapiResponse<T>;
      }
      return { data: null };
    }
    
    const data = await response.json();
    if (!data?.data || (Array.isArray(data.data) && data.data.length === 0)) {
      const dummyData = getDummyDataForPath(path);
      if (dummyData) {
        return dummyData as StrapiResponse<T>;
      }
    }
    return data as StrapiResponse<T>;
  } catch (error) {
    console.warn(`[Strapi Client] Connection to Strapi failed (${path}). Using fallback data.`);
    const dummyData = getDummyDataForPath(path);
    if (dummyData) {
      return dummyData as StrapiResponse<T>;
    }
    return { data: null };
  }
}

/**
 * Resolves the full URL for media assets from Strapi.
 */
export function getMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }
  
  return `${STRAPI_URL}${url}`;
}
