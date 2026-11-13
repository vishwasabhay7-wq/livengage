import type { Metadata } from 'next';

import {
  TermsHero,
  TermsContent,
} from '@/components/terms-and-conditions';

import {
  TERMS_HERO,
  TERMS_NAV_ITEMS,
  TERMS_SECTIONS,
} from '@/constants/terms-and-conditions';

export const metadata: Metadata = {
  title: 'Terms & Conditions | LIVENGAGE',
  description:
    'Please read these terms carefully before using the LIVENGAGE platform.',
};

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-background text-on-surface font-body-md pt-20 pb-section selection:bg-primary-container selection:text-on-primary-container">
      <TermsHero {...TERMS_HERO} />
      <TermsContent navItems={TERMS_NAV_ITEMS} sections={TERMS_SECTIONS} />
    </main>
  );
}
