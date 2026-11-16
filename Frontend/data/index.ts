import { HOME_PAGE_DATA } from './home';
import { MOCK_PARTNER_APPS } from './partner-apps';
import { mockBlogs } from '../lib/mockBlogs';

// Import all dummy data from constants
import * as AboutData from '../constants/about';
import * as ServicesData from '../constants/services';
import * as JoinUsData from '../constants/join-us';
import * as HostData from '../constants/become-a-host';
import * as AgentData from '../constants/agent-ecosystem';
import * as ContactData from '../constants/contact';

export function getDummyDataForPath(path: string) {
  if (path.includes('/api/home-page')) {
    return { data: HOME_PAGE_DATA };
  }
  
  if (path.includes('/api/about-us-page')) {
    return { 
      data: {
        hero: AboutData.ABOUT_HERO,
        missionVision: AboutData.MISSION_VISION,
        coreValues: AboutData.CORE_VALUES,
        timeline: AboutData.TIMELINE_MILESTONES,
        leadership: AboutData.LEADERSHIP_TEAM,
        cta: AboutData.ABOUT_CTA
      }
    };
  }

  if (path.includes('/api/join-us-page')) {
    return {
      data: {
        hero: JoinUsData.JOIN_HERO,
        roleCards: { items: JoinUsData.JOIN_ROLE_CARDS },
        benefits: JoinUsData.JOIN_BENEFITS,
        stats: { stats: JoinUsData.JOIN_STATS }
      }
    };
  }

  if (path.includes('/api/contact-us-page')) {
    return {
      data: {
        Hero: ContactData.CONTACT_HERO,
        ContactChannels: { items: ContactData.CONTACT_CHANNELS },
        OperationalNetworks: { networks: ContactData.OPERATIONAL_NETWORKS },
        GlobalMap: ContactData.GLOBAL_MAP_DATA
      }
    };
  }

  if (path.includes('/api/become-a-host-page')) {
    return {
      data: {
        Hero: HostData.HOST_HERO,
        Stats: { stats: HostData.HOST_STATS },
        Requirements: { Items: HostData.HOST_REQUIREMENTS },
        Benefits: { Items: HostData.HOST_BENEFITS },
        ApplicationSection: HostData.HOST_APPLICATION_DATA,
      }
    };
  }

  if (path.includes('/api/services-page')) {
    return {
      data: {
        hero: ServicesData.SERVICES_HERO,
        servicesList: { services: ServicesData.SERVICES_LIST },
        partnerApps: ServicesData.PARTNER_APPS_SECTION,
        stats: { stats: ServicesData.SERVICES_STATS },
        cta: ServicesData.SERVICES_CTA,
      }
    };
  }

  if (path.includes('/api/become-an-agent-page')) {
    return {
      data: {
        Hero: {
          badge: 'Livengage Agent Program',
          headingPart1: 'Build Your Own',
          headingHighlight: 'Live Streaming',
          headingPart3: 'Agency.',
          description: AgentData.ECOSYSTEM_HERO_DATA.description,
          primaryCtaLabel: 'Apply as an Agent',
          primaryCtaHref: '#apply-now',
          secondaryCtaLabel: 'Explore Benefits',
          secondaryCtaHref: '#responsibilities',
          image: {
            url: AgentData.ECOSYSTEM_HERO_DATA.imageUrl,
            alternativeText: AgentData.ECOSYSTEM_HERO_DATA.imageAlt,
          },
        },
        ResponsibilitiesSection: {
          badge: 'Agency Model',
          heading: 'How You Succeed as an Agent',
          description: 'We give you the official agency dashboard, contracts, and training to recruit and manage top live streamers worldwide.',
          Items: [
            {
              icon: 'person_add',
              title: 'Recruit Talented Streamers',
              description: 'Onboard creators, singers, performers, and chat hosts onto top streaming apps.',
            },
            {
              icon: 'monitoring',
              title: 'Monitor & Mentor',
              description: 'Track streaming hours, engagement, and coach your creators to maximize revenue.',
            },
            {
              icon: 'payments',
              title: 'Earn High Commissions',
              description: 'Receive weekly/monthly commission payouts directly to your local bank or UPI.',
            },
          ],
        },
        revenueModelSection: {
          badge: 'Commissions',
          heading: 'Transparent Tiered Earnings',
          description: 'Earn consistent commissions from every host you manage.',
          projection: {
            title: 'Growth Projection',
            description: 'Scale from a solo agent to a full-fledged agency with dozens of high-earning hosts.',
            tiers: AgentData.PARTNERSHIP_TIERS,
          },
        },
        ApplicationSection: {
          title: 'Ready to Become an Official Agent?',
          description: 'Fill out the form below. Our agency directors will review your application and reach out within 24 hours.',
        },
      }
    };
  }

  if (path.includes('/api/partner-apps')) {
    // Check if searching for a specific slug
    const slugMatch = path.match(/filters\[slug\]\[\$eq\]=([^&]+)/);
    if (slugMatch) {
      const slug = decodeURIComponent(slugMatch[1]);
      const app = MOCK_PARTNER_APPS.find((a) => a.slug === slug);
      return { data: app ? [app] : [] };
    }
    return { data: MOCK_PARTNER_APPS };
  }

  if (path.includes('/api/blogs')) {
    // Check if searching by slug
    const slugMatch = path.match(/filters\[slug\]\[\$eq\]=([^&]+)/);
    if (slugMatch) {
      const slug = decodeURIComponent(slugMatch[1]);
      const blog = mockBlogs.find((b) => b.slug === slug);
      return { data: blog ? [blog] : [] };
    }
    // Check if searching by documentId
    const docIdMatch = path.match(/filters\[documentId\]\[\$eq\]=([^&]+)/);
    if (docIdMatch) {
      const docId = decodeURIComponent(docIdMatch[1]);
      const blog = mockBlogs.find((b) => b.documentId === docId);
      return { data: blog ? [blog] : [] };
    }
    return { data: mockBlogs };
  }

  return null;
}
