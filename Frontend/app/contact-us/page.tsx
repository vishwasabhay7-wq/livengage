import type { Metadata } from 'next';
import {
  ContactHero,
  ContactForm,
  ContactInfoCards,
  OperationalNetworks,
  GlobalMap,
} from '@/components/contact';
import {
  CONTACT_HERO,
  CONTACT_CHANNELS,
  OPERATIONAL_NETWORKS,
  GLOBAL_MAP_DATA,
} from '@/constants/contact';

export const metadata: Metadata = {
  title: "LIVENGAGE | Let's Connect Globally",
  description:
    "Whether you are expanding operations or launching a new project, our expert team is here to support you at every step.",
};

export default function ContactPage() {
  const showForm = true;

  return (
    <main className="bg-[#F8FAFC] dark:bg-gradient-to-b dark:from-[#160126] dark:to-[#0B0114] text-on-background overflow-x-hidden pt-20 min-h-screen">
      <ContactHero data={CONTACT_HERO} />

      {/* Contact Channels & Form Grid */}
      <section className="max-w-[1280px] mx-auto px-[32px] mb-[80px] mt-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Inquiry Form */}
          {showForm && (
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          )}
          {/* Right: Contact Channels */}
          <div className={showForm ? "lg:col-span-4" : "lg:col-span-12"}>
            <ContactInfoCards data={{ items: CONTACT_CHANNELS as any }} />
          </div>
        </div>
      </section>

      {/* Operational Networks Section */}
      <section className="bg-surface-container-low dark:bg-[#150222] py-[80px]">
        <div className="max-w-[1280px] mx-auto px-[32px]">
          <OperationalNetworks data={{ networks: OPERATIONAL_NETWORKS as any }} />
          <GlobalMap data={GLOBAL_MAP_DATA} />
        </div>
      </section>
    </main>
  );
}
