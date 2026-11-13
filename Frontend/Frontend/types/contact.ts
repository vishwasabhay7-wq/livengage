export interface ContactHeroContent {
  titleStart: string;
  highlightWord: string;
  description: string;
}

export interface ContactChannel {
  icon: string;
  iconBgClass: string;
  iconColorClass: string;
  title: string;
  description: React.ReactNode;
  linkText: string;
  linkHref: string;
}

export interface RegionNode {
  region: string;
  cities: string[];
}

export interface MapData {
  backgroundImageUrl: string;
  statusLabel: string;
  statusValue: string;
  statusSubtext: string;
}
