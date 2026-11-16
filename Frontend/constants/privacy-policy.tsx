import {
  PrivacyHeroContent,
  PrivacyNavItem,
  PrivacySection,
  PrivacyCTAContent,
} from '@/types/privacy-policy';

export const PRIVACY_HERO: PrivacyHeroContent = {
  badge: 'LEGAL DOCUMENTATION',
  title: 'Privacy Policy',
  lastUpdated: 'Last updated: October 24, 2024.',
  description:
    'Your privacy is paramount at Livengage. This policy outlines how we handle your data with the precision, transparency, and integrity our agency represents.',
};

export const PRIVACY_NAV_ITEMS: PrivacyNavItem[] = [
  { id: 'collection', title: 'Information Collection' },
  { id: 'usage', title: 'Data Usage' },
  { id: 'third-party', title: 'Third-Party Sharing' },
  { id: 'rights', title: 'User Rights' },
];

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: 'collection',
    title: '1. Information Collection',
    content: (
      <div className="space-y-stack-lg text-on-surface-variant leading-relaxed">
        <p>
          Livengage collects information to provide better services to our talent, hosts, and partner agents. We collect information in the following ways:
        </p>
        <ul className="list-none space-y-stack-md ml-0">
          <li className="flex gap-stack-md items-start">
            <span className="material-symbols-outlined text-primary mt-1" aria-hidden="true">
              check_circle
            </span>
            <span>
              <strong>Personal Information:</strong> Includes your name, email address, phone number, social media handles, streaming platform user IDs, and payment details required for commission payouts.
            </span>
          </li>
          <li className="flex gap-stack-md items-start">
            <span className="material-symbols-outlined text-primary mt-1" aria-hidden="true">
              check_circle
            </span>
            <span>
              <strong>Performance Data:</strong> Data retrieved from partner applications, including streaming hours, audience engagement metrics, and virtual gift revenue.
            </span>
          </li>
          <li className="flex gap-stack-md items-start">
            <span className="material-symbols-outlined text-primary mt-1" aria-hidden="true">
              check_circle
            </span>
            <span>
              <strong>Cookies & Tracking:</strong> We use various technologies to collect and store information when you visit the Livengage website to improve your browsing experience.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'usage',
    title: '2. Data Usage & Integration',
    content: (
      <div className="space-y-stack-lg text-on-surface-variant leading-relaxed">
        <p>
          We use the information we collect to manage your agency relationship, ensure accurate payouts, and improve our services. This includes processing for:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter py-stack-lg">
          <div className="p-stack-lg bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h4 className="font-label-md text-label-md text-primary mb-2">Platform Matching</h4>
            <p className="text-body-md">
              Using your profile and social data to align you with the third-party streaming application where you have the highest earning potential.
            </p>
          </div>
          <div className="p-stack-lg bg-surface-container-low rounded-xl border border-outline-variant/30">
            <h4 className="font-label-md text-label-md text-primary mb-2">Commission Processing</h4>
            <p className="text-body-md">
              Securely processing your streaming statistics to calculate and distribute your daily or weekly commission payouts.
            </p>
          </div>
        </div>
        <p>
          Livengage processes personal information on secure servers. We take data protection seriously and ensure your payout details are encrypted.
        </p>
      </div>
    ),
  },
  {
    id: 'third-party',
    title: '3. Third-Party Sharing',
    content: (
      <div className="space-y-stack-lg text-on-surface-variant leading-relaxed">
        <p>
          We do not sell your personal information. We only share information with external organizations under the following circumstances:
        </p>
        <ul className="space-y-stack-md">
          <li className="p-4 border-l-4 border-secondary bg-secondary-container/10">
            <strong>Streaming App Partners:</strong> We share necessary profile identifiers (like your ID and agency tag) with official third-party streaming platforms to verify your agency status and secure your increased commission rates.
          </li>
          <li className="p-4 border-l-4 border-secondary bg-secondary-container/10">
            <strong>Payment Processors:</strong> We securely transmit necessary financial data to our trusted payment providers to ensure you receive your payouts on time.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'rights',
    title: '4. User Rights & Controls',
    content: (
      <div className="space-y-stack-lg text-on-surface-variant leading-relaxed">
        <p>
          Depending on your jurisdiction, you have significant rights regarding your information:
        </p>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-high transition-colors cursor-default">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined" aria-hidden="true">
                visibility
              </span>
            </div>
            <div>
              <p className="font-label-md text-on-surface">Right to Access</p>
              <p className="text-body-md text-on-surface-variant">
                Request a copy of the personal data we hold about you.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-high transition-colors cursor-default">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined" aria-hidden="true">
                edit_square
              </span>
            </div>
            <div>
              <p className="font-label-md text-on-surface">Right to Rectification</p>
              <p className="text-body-md text-on-surface-variant">
                Correct inaccurate payment details or profile information.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-high transition-colors cursor-default">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined" aria-hidden="true">
                delete_forever
              </span>
            </div>
            <div>
              <p className="font-label-md text-on-surface">Right to Erasure</p>
              <p className="text-body-md text-on-surface-variant">
                Ask us to remove your profile from our agency network and delete your data.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const PRIVACY_CTA: PrivacyCTAContent = {
  heading: 'Questions about your data?',
  description:
    'Our dedicated support team is ready to assist you with any inquiries regarding our privacy practices or your data.',
  primaryButtonText: 'Email Data Officer',
  primaryButtonLink: 'mailto:official.livengage@gmail.com',
  secondaryButtonText: 'Contact Support',
  secondaryButtonLink: '/contact-us',
};
