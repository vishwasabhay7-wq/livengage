import { HOME_PAGE_DATA } from './home';

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
  


  return null;
}
