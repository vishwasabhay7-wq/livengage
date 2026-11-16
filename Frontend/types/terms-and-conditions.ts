import { ReactNode } from 'react';

export interface TermsNavItem {
  id: string;
  title: string;
}

export interface TermsSection {
  id: string;
  title: string;
  content: ReactNode;
}

export interface TermsHeroContent {
  title: string;
  description: string;
}
