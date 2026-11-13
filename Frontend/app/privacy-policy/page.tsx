import type { Metadata } from 'next';

import {
  PrivacyHero,
  PrivacyContent,
  PrivacyCTA,
} from '@/components/privacy-policy';

import {
  PRIVACY_HERO,
  PRIVACY_NAV_ITEMS,
  PRIVACY_SECTIONS,
  PRIVACY_CTA,
} from '@/constants/privacy-policy';

export const metadata: Metadata = {
  title: 'Privacy Policy | LIVENGAGE',
  description:
    'Your privacy is paramount at LIVENGAGE. This policy outlines how we handle your data with precision and integrity.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background text-on-surface font-body-md pt-20 selection:bg-primary-fixed selection:text-on-primary-fixed">
      <PrivacyHero {...PRIVACY_HERO} />
      <PrivacyContent navItems={PRIVACY_NAV_ITEMS} sections={PRIVACY_SECTIONS} />
      <PrivacyCTA {...PRIVACY_CTA} />
    </main>
  );
}
