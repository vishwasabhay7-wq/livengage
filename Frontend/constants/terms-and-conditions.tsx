import {
  TermsHeroContent,
  TermsNavItem,
  TermsSection,
} from '@/types/terms-and-conditions';

export const TERMS_HERO: TermsHeroContent = {
  title: 'Terms & Conditions',
  description:
    'Effective Date: January 1, 2024. Please read these terms carefully before joining the Livengage agency network.',
};

export const TERMS_NAV_ITEMS: TermsNavItem[] = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'conduct', title: '2. Agency Conduct' },
  { id: 'payment', title: '3. Payout Terms' },
  { id: 'platform', title: '4. Third-Party Platforms' },
  { id: 'termination', title: '5. Termination' },
  { id: 'liability', title: '6. Limitation of Liability' },
];

export const TERMS_SECTIONS: TermsSection[] = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: (
      <div className="space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
        <p>
          Welcome to Livengage. These Terms and Conditions (&quot;Terms&quot;) govern your participation in the Livengage agency network as a Host or an Agent.
        </p>
        <p>
          By submitting an application or signing up to be managed by Livengage on any partner streaming application, you agree to be bound by these Terms. If you do not agree, you may not join our network.
        </p>
        <div className="flex items-start gap-4 bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
            info
          </span>
          <p className="text-primary font-medium">
            Livengage acts as an official talent agency connecting creators with third-party live streaming applications. We do not own or operate the streaming platforms themselves.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'conduct',
    title: '2. Agency Conduct',
    content: (
      <div className="space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
        <p>
          To maintain our official partnership status with top-tier apps, all Livengage talent and sub-agents must adhere to the following standards:
        </p>
        <ul className="list-none space-y-4">
          <li className="flex gap-4">
            <span className="material-symbols-outlined text-secondary shrink-0" aria-hidden="true">
              check_circle
            </span>
            <span>
              <strong>Authenticity:</strong> You must not use bots, click-farms, or fraudulent methods to inflate your viewership or virtual gifts.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="material-symbols-outlined text-secondary shrink-0" aria-hidden="true">
              check_circle
            </span>
            <span>
              <strong>Compliance:</strong> You must strictly adhere to the Community Guidelines and Terms of Service of whichever third-party application you are streaming on.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="material-symbols-outlined text-secondary shrink-0" aria-hidden="true">
              check_circle
            </span>
            <span>
              <strong>Professionalism:</strong> Agents managing their own sub-teams under Livengage must pay their hosts fairly and on time, maintaining transparent communication.
            </span>
          </li>
        </ul>
        <div className="relative h-64 w-full rounded-xl overflow-hidden mt-8">
          <div
            className="bg-cover bg-center w-full h-full"
            aria-label="Two professionals shaking hands in a modern office, representing professional agency conduct."
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop')",
            }}
          ></div>
        </div>
      </div>
    ),
  },
  {
    id: 'payment',
    title: '3. Payout Terms',
    content: (
      <div className="space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
        <p>Livengage guarantees secure and fast commission transfers based on your performance on partner applications.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="border border-outline-variant p-6 rounded-xl bg-surface-container-low">
            <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined" aria-hidden="true">payments</span> Host Payouts
            </h4>
            <p className="text-sm">
              Your earnings are calculated based on the virtual gifts received and hours streamed. Livengage facilitates these payouts based on the specific app's settlement cycle (daily or weekly).
            </p>
          </div>
          <div className="border border-outline-variant p-6 rounded-xl bg-surface-container-low">
            <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined" aria-hidden="true">account_balance_wallet</span> Agent Commissions
            </h4>
            <p className="text-sm">
              Agents earn a percentage of their recruited hosts' revenue. Payouts are dispatched promptly once funds are cleared from the respective streaming platform.
            </p>
          </div>
        </div>
        <p className="mt-4 italic text-sm">
          Note: Livengage is not responsible for delayed payouts caused by the third-party platforms withholding funds due to suspected fraudulent activity.
        </p>
      </div>
    ),
  },
  {
    id: 'platform',
    title: '4. Third-Party Platforms',
    content: (
      <div className="space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
        <p>
          Livengage places you on independent platforms (e.g., Chamet, Poppo, Bigo Live, etc.). We do not control these applications.
        </p>
        <p>
          If your account is suspended or banned by a third-party app for violating their rules, Livengage will attempt to appeal on your behalf as an official agency. However, we cannot guarantee account reinstatement and we hold no liability for lost earnings resulting from platform bans.
        </p>
      </div>
    ),
  },
  {
    id: 'termination',
    title: '5. Termination',
    content: (
      <div className="space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
        <p>
          We reserve the right to remove you from the Livengage agency network at our sole discretion if you violate these Terms, engage in fraudulent activity, or harm the agency's reputation with our partner apps.
        </p>
        <p>
          You may also leave the agency at any time, subject to the unbinding rules of the specific streaming application you are hosted on (which often require a 30-day notice or manual approval).
        </p>
      </div>
    ),
  },
  {
    id: 'liability',
    title: '6. Limitation of Liability',
    content: (
      <div className="space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
        <p>
          Livengage is provided &quot;as is&quot;. We shall not be liable for any indirect, incidental, or consequential damages resulting from your participation in our agency, including but not limited to lost profits from app bans or technical glitches on partner apps.
        </p>
        <p>
          Our total liability for any claim arising out of these Terms shall not exceed the total commission earned by Livengage from your activity during the month preceding the claim.
        </p>
      </div>
    ),
  },
];
