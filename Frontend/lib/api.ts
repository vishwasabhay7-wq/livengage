const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

import { getDummyDataForPath } from '../data';

/**
 * Helper to fetch data from Strapi API
 */
export async function fetchAPI(path: string, options: RequestInit = {}) {
  // --- INJECT DUMMY DATA FOR LAYOUT TESTING ---
  // try {
  //   const dummyData = getDummyDataForPath(path);
  //   if (dummyData) {
  //     console.log(`[Mock API] Intercepted ${path} - Returning dummy data`);
  //     return dummyData;
  //   }
  // } catch (e) {
  //   console.warn('[Mock API Error]', e);
  // }
  // --------------------------------------------

  try {
    const requestUrl = `${STRAPI_URL}${path}`;
    
    // Add caching options if not provided
    const defaultOptions = {
      cache: 'no-store' as RequestCache
    };
    
    const mergedOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    const response = await fetch(requestUrl, mergedOptions);
    
    if (!response.ok) {
      console.error(`Error fetching from ${requestUrl}: ${response.statusText}`);
      throw new Error(`An error occurred please try again`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Fetch API Error:`, error);
    return null;
  }
}

/**
 * Resolves the full URL for media assets from Strapi
 */
export function getMediaUrl(url: string | null | undefined) {
  if (!url) {
    return null;
  }
  
  // Return the URL as is if it's already an absolute URL (e.g. from Cloudinary/S3)
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }
  
  // Otherwise, prefix it with the Strapi base URL
  return `${STRAPI_URL}${url}`;
}

/**
 * Construct deep population query for homepage
 */
export function getHomePageQuery() {
  // A custom query string to deeply populate the dynamic homepage single type
  const params = [
    'populate[hero][populate]=*',
    'populate[stats][populate][stats]=*',
    'populate[services][populate][services][populate]=*',
    'populate[whyChooseUs][populate]=*',
    'populate[testimonials][populate][testimonials][populate][avatar][populate]=*',
    'populate[faq][populate][faqs]=*',
    'populate[cta][populate]=*'
  ];
  
  return params.join('&');
}

/**
 * Construct deep population query for about us page
 */
export function getAboutUsPageQuery() {
  // Schema PascalCase at top level (Hero, MissionVision, CoreValues, Timeline, Leadership, CTA)
  // And PascalCase nested: CoreValues.Items, Timeline.Items, Leadership.Members
  const params = [
    'populate[Hero][populate]=*',
    'populate[MissionVision][populate]=*',
    'populate[CoreValues][populate][Items]=*',
    'populate[Timeline][populate][Items][populate]=*',
    'populate[Leadership][populate][Members][populate][0]=image',
    'populate[CTA][populate]=*'
  ];
  
  return params.join('&');
}

/**
 * Construct deep population query for services page
 */
export function getServicesPageQuery() {
  const params = [
    'populate[hero][populate]=*',
    'populate[servicesList][populate][items][populate][features]=*',
    'populate[partnerApps][populate][apps][populate]=*',
    'populate[stats][populate][stats]=*',
    'populate[cta][populate]=*'
  ];
  
  return params.join('&');
}

/**
 * Construct deep population query for join us page
 */
export function getJoinUsPageQuery() {
  const params = [
    'populate[hero][populate]=*',
    'populate[roleCards][populate][items][populate][features]=*',
    'populate[benefits][populate][items]=*',
    'populate[stats][populate][stats]=*'
  ];
  
  return params.join('&');
}

/**
 * Construct deep population query for become a host page
 */
export function getBecomeAHostPageQuery() {
  // Schema PascalCase: Hero (has image media), Stats.stats, Requirements.Items, Benefits.Items, ApplicationSection.Steps
  // Media fields need array-index populate syntax to avoid Strapi 5 'related' key error
  const params = [
    'populate[Hero][populate][0]=image',
    'populate[Stats][populate][stats]=*',
    'populate[Requirements][populate][Items][populate]=*',
    'populate[Benefits][populate][Items][populate]=*',
    'populate[ApplicationSection][populate][Steps][populate]=*'
  ];
  
  return params.join('&');
}

/**
 * Construct deep population query for become an agent page
 */
export function getBecomeAnAgentPageQuery() {
  // Schema: Hero (Pascal, has image media), ResponsibilitiesSection (Pascal, has Items),
  // revenueModelSection (camel, has tiers + Projection), ApplicationSection (Pascal)
  const params = [
    'populate[Hero][populate][0]=image',
    'populate[ResponsibilitiesSection][populate][Items][populate][checklist]=*',
    'populate[revenueModelSection][populate][tiers]=*',
    'populate[revenueModelSection][populate][Projection]=*',
    'populate[ApplicationSection]=*'
  ];
  
  return params.join('&');
}

/**
 * Construct deep population query for contact us page
 */
export function getContactUsPageQuery() {
  const params = [
    'populate[Hero][populate]=*',
    'populate[ContactChannels][populate][items]=*',
    'populate[OperationalNetworks][populate][networks][populate][cities]=*',
    'populate[GlobalMap][populate][0]=backgroundImage'
  ];
  
  return params.join('&');
}

/**
 * Construct deep population query for partner page by slug
 */
export function getPartnerPageBySlugQuery(slug: string) {
  const params = [
    `filters[slug][$eq]=${slug}`,
    'populate[Hero][populate]=*',
    'populate[RichMediaPlayer][populate]=*',
    'populate[TechSpecs][populate][metrics]=*',
    'populate[Integration][populate][Features]=*',
    'populate[GrowthLoop][populate][steps]=*',
    'populate[EngineeredImpact][populate]=*',
    'populate[CTA][populate]=*'
  ];
  
  return params.join('&');
}

/**
 * Construct deep population query for all partner page slugs
 */
export function getAllPartnerPagesQuery() {
  return 'fields[0]=slug';
}

/**
 * Construct deep population query for partner app by slug
 */
export function getPartnerAppBySlugQuery(slug: string) {
  const params = [
    `filters[slug][$eq]=${slug}`,
    'populate[hero][populate][0]=heroImage',
    'populate[hero][populate][1]=avatars',
    'populate[benefits][populate][benefits]=*',
    'populate[videoPreview][populate][0]=videoThumbnail',
    'populate[videoPreview][populate][1]=creatorAvatar',
    'populate[videoPreview][populate][2]=video',
    'populate[professionalTools][populate][tools][populate][features]=*',
    'populate[monetizationTiers][populate][tiers][populate][features]=*',
    'populate[testimonials][populate][testimonials][populate][0]=avatar',
    'populate[onboardingSteps][populate][steps]=*',
    'populate[faqs][populate][faqs]=*',
    'populate[supportHub][populate]=*',
    'populate[technicalRequirements][populate][requirements]=*'
  ];
  
  return params.join('&');
}

/**
 * Construct deep population query for all partner apps (slugs)
 */
export function getAllPartnerAppsQuery() {
  return 'fields[0]=slug';
}

/**
 * Construct deep population query for featured partner apps
 */
export function getFeaturedPartnerAppsQuery() {
  const params = [
    'filters[isFeatured][$eq]=true',
    'populate[hero][populate][0]=heroImage',
    'populate[videoPreview][populate][0]=videoThumbnail',
    'populate[videoPreview][populate][1]=video'
  ];
  return params.join('&');
}

/**
 * Construct population query for all blogs
 */
export function getBlogsQuery(page: number = 1, pageSize: number = 9) {
  const params = [
    'populate=coverImage',
    'sort=publishedDate:desc',
    `pagination[page]=${page}`,
    `pagination[pageSize]=${pageSize}`
  ];
  return params.join('&');
}

/**
 * Construct population query for a specific blog by slug
 */
export function getBlogBySlugQuery(slug: string) {
  const params = [
    `filters[slug][$eq]=${slug}`,
    'populate=coverImage'
  ];
  return params.join('&');
}
