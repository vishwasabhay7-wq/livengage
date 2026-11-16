export interface PartnerHeroContent {
  badge: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export interface PartnerStat {
  value: string;
  label: string;
}

export interface PartnerFeature {
  icon: string;
  title: string;
  description: string;
}

export interface PartnerPlatform {
  id: string;
  name: string;
  shortName: string;
  description: string;
  imageUrl?: string;
  stats?: PartnerStat[];
  features?: PartnerFeature[];
  highlight?: string;
  type: 'main' | 'community' | 'innovation' | 'emerging';
}

export interface IntegrationFeature {
  icon: string;
  title: string;
  description: string;
}

export interface IntegrationContent {
  title: string;
  description: string;
  features: IntegrationFeature[];
  imageUrl: string;
}

export interface SuccessMetricsContent {
  title: string;
  metrics: PartnerStat[];
}

export interface PartnerCTAContent {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export interface PartnerPageData {
  hero: PartnerHeroContent;
  platforms: PartnerPlatform[];
  integration: IntegrationContent;
  successMetrics: SuccessMetricsContent;
  cta: PartnerCTAContent;
}
