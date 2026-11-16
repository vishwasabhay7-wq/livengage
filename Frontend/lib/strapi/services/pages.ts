import { strapiFetch, buildQueryString } from '../client';

/**
 * Service for fetching Single-Type pages.
 */
export const pageService = {
  /**
   * Fetch data for the Homepage.
   */
  async getHomePage() {
    const params = [
      'populate[hero][populate]=*',
      'populate[stats][populate][stats]=*',
      'populate[services][populate][services][populate]=*',
      'populate[whyChooseUs][populate]=*',
      'populate[testimonials][populate][testimonials][populate][avatar][populate]=*',
      'populate[faq][populate][faqs]=*',
      'populate[cta][populate]=*'
    ];
    return strapiFetch<unknown>(`/api/home-page${buildQueryString(params)}`);
  },

  /**
   * Fetch data for the Become A Host page.
   */
  async getBecomeAHostPage() {
    const params = [
      'populate[Hero][populate][0]=image',
      'populate[Stats][populate][stats]=*',
      'populate[Requirements][populate][Items]=*',
      'populate[Benefits][populate][Items]=*',
      'populate[ApplicationSection][populate][Steps]=*'
    ];
    return strapiFetch<unknown>(`/api/become-a-host-page${buildQueryString(params)}`);
  },

  /**
   * Fetch data for the About Us page.
   */
  async getAboutUsPage() {
    const params = [
      'populate[Hero][populate]=*',
      'populate[MissionVision][populate]=*',
      'populate[CoreValues][populate][Items]=*',
      'populate[Timeline][populate][Items][populate]=*',
      'populate[Leadership][populate][Members][populate][0]=image',
      'populate[CTA][populate]=*'
    ];
    return strapiFetch<unknown>(`/api/about-us-page${buildQueryString(params)}`);
  }
};
