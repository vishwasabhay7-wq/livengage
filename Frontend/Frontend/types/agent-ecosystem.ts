export interface EcosystemHeroContent {
  badge: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  imageUrl: string;
  imageAlt: string;
}

export interface PartnershipTier {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  isHighlight?: boolean;
  features: string[];
}

export interface EcosystemStat {
  value: string;
  label: string;
}

export interface EcosystemCTAContent {
  title: string;
  description: string;
  buttonText: string;
  footerText: string;
}
