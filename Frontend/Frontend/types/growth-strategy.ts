export interface GrowthHeroContent {
  badge: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export interface StrategicAnalyticsFeature {
  title: string;
  description: string;
  icon: string;
  colorClass: 'primary' | 'tertiary';
}

export interface StrategicAnalyticsContent {
  heading: string;
  description: string;
  features: StrategicAnalyticsFeature[];
}

export interface RevenueTimelineStep {
  title: string;
  description: string;
}

export interface RevenueArchitectureContent {
  timelineSteps: RevenueTimelineStep[];
  heading: string;
  description: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
}

export interface GrowthCTAContent {
  heading: string;
  description: string;
  buttonText: string;
  footerText: string;
}
