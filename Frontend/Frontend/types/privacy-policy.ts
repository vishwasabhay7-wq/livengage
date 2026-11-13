import { ReactNode } from 'react';

export interface PrivacyNavItem {
  id: string;
  title: string;
}

export interface PrivacySection {
  id: string;
  title: string;
  content: ReactNode;
}

export interface PrivacyHeroContent {
  badge: string;
  title: string;
  lastUpdated: string;
  description: string;
}

export interface PrivacyCTAContent {
  heading: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}
