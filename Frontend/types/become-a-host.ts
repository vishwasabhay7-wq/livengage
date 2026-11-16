export interface HeroContent {
  badge: string;
  heading: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  imageAlt: string;
  imageUrl: string;
}

export interface Stat {
  title: string;
  subtitle: string;
}

export interface Requirement {
  icon: string;
  iconColorClass: string;
  iconBgClass: string;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon?: string; // Optional because the first block doesn't have an icon in the same way
  iconColorClass?: string;
  layoutVariant: 'featured-top' | 'standard' | 'featured-bottom';
}

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

export interface ApplicationSectionData {
  heading: string;
  description: string;
  steps: ProcessStep[];
}
