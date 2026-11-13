export interface TalentHeroContent {
  badge: string;
  titleLight: string;
  titleHighlight: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  imageUrl: string;
  imageAlt: string;
  retentionRate: string;
}

export interface ScoutingProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface ValuePropositionContent {
  heading: string;
  description: string;
  brandDealsImageUrl: string;
  brandDealsImageAlt: string;
}

export interface TalentCTAContent {
  heading: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  footerText: string;
}
