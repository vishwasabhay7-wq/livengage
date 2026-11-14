import {
  ContactHeroContent,
  ContactChannel,
  RegionNode,
  MapData,
} from '@/types/contact';

export const CONTACT_HERO: ContactHeroContent = {
  titleStart: "Let's Connect",
  highlightWord: 'Globally',
  description:
    "Whether you are expanding operations or launching a new project, our expert team is here to support you at every step.",
};

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    icon: 'mail',
    iconBgClass: 'bg-primary/10',
    iconColorClass: 'text-primary',
    title: 'Email Support',
    description: 'Dedicated concierge for client inquiries and talent support.',
    linkText: 'official.livengage@gmail.com',
    linkHref: 'mailto:official.livengage@gmail.com',
  },

  {
    icon: 'forum',
    iconBgClass: 'bg-[#25D366]/10',
    iconColorClass: 'text-[#25D366]',
    title: 'WhatsApp Support',
    description: 'Instant chat support for urgent inquiries and quick assistance.',
    linkText: 'Chat on WhatsApp',
    linkHref: 'https://wa.me/918796802120?text=Hello%20Livengage%20Team!%20I%20would%20like%20to%20connect%20regarding%20your%20services.',
  },
    {
    icon: 'location_on',
    iconBgClass: 'bg-secondary/10',
    iconColorClass: 'text-secondary',
    title: 'Global Headquarters',
    description: (
      <>
        LIVENGAGE<br />
        1 Wallich St, Guocotower, Floor 1<br />
        Singapore 078881
      </>
    ),
    linkText: 'View on Map',
    linkHref: '#map',
  },
];

export const OPERATIONAL_NETWORKS: RegionNode[] = [
  {
    region: 'North America',
    cities: ['New York', 'Los Angeles', 'Chicago', 'Miami'],
  },
  {
    region: 'Europe & UK',
    cities: ['London', 'Paris', 'Berlin', 'Milan'],
  },
  {
    region: 'Asia Pacific',
    cities: ['Singapore', 'Hong Kong', 'Tokyo', 'Sydney'],
  },
  {
    region: 'Middle East',
    cities: ['Dubai', 'Abu Dhabi', 'Riyadh', 'Doha'],
  },
];

export const GLOBAL_MAP_DATA: MapData = {
  backgroundImageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD156XgUFV-B3wX7rgzSsEXQLUqU33mdVSfMNlry9lpnCGyKMLnBwF-xe9R7KU1-Jwvg5MeevSOwjYyA4_0_XLeSNuVD1ANAHZK4ycsSPje5u__ymk3sVWt5hR8QlaMlmnp3fPMizwfnmWZPmT2NZB4xcTJGxgt6RqxQqRGlYrSbPMCZpCo80UHcPQhbHxnBZunGovv9iMATwN33Yv6_eUfdBtf1JHfmF7iKGHn0HhGcp1NBrdzC4X7Ur_tebB4bYOKNhaQofV8wQ',
  statusLabel: 'Live Status',
  statusValue: '42',
  statusSubtext: 'Active Deployments in 12 Cities',
};
