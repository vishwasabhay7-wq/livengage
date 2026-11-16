import { strapiFetch, buildQueryString } from '../client';

export const partnerAppService = {
  /**
   * Fetch featured partner apps for the homepage.
   */
  async getFeaturedPartnerApps() {
    const params = [
      'filters[isFeatured][$eq]=true',
      'populate[hero][populate][heroImage][populate]=*',
      'populate[videoPreview][populate][video][populate]=*'
    ];
    
    // In Strapi 5, fetching a collection returns an array in `data`
    return strapiFetch<any[]>(`/api/partner-apps${buildQueryString(params)}`);
  },
  
  /**
   * Fetch all partner apps.
   */
  async getAllPartnerApps() {
    const params = [
      'populate[hero][populate][heroImage][populate]=*',
    ];
    return strapiFetch<any[]>(`/api/partner-apps${buildQueryString(params)}`);
  },

  /**
   * Fetch a single partner app by slug.
   */
  async getPartnerAppBySlug(slug: string) {
    const params = [
      `filters[slug][$eq]=${slug}`,
      'populate[hero][populate][heroImage][populate]=*',
      'populate[benefits][populate]=*',
      'populate[videoPreview][populate]=*',
      'populate[professionalTools][populate]=*',
      'populate[monetizationTiers][populate]=*',
      'populate[testimonials][populate]=*',
      'populate[onboardingSteps][populate]=*',
      'populate[faqs][populate]=*',
      'populate[supportHub][populate]=*',
      'populate[technicalRequirements][populate]=*',
    ];
    
    const response = await strapiFetch<any[]>(`/api/partner-apps${buildQueryString(params)}`);
    // Return the first match or null
    return response?.data?.[0] || null;
  }
};
