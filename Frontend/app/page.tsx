import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { PartnerApps } from '@/components/PartnerApps';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';

import { pageService } from '@/lib/strapi/services/pages';
import { partnerAppService } from '@/lib/strapi/services/partnerApps';

/**
 * Homepage — composes all section components.
 *
 * Navbar / Footer / ScrollRevealProvider live in the root layout so every
 * route shares them.
 */
export default async function HomePage() {
  const [strapiRes, partnerAppsRes] = await Promise.all([
    pageService.getHomePage(),
    partnerAppService.getFeaturedPartnerApps()
  ]);
  
  const data: any = strapiRes?.data || {};
  const featuredPartnerApps = partnerAppsRes?.data || [];

  return (
    <>
      {data.hero && <Hero data={data.hero} />}
      {data.stats && <Stats data={data.stats} />}
      {data.services && <Services data={data.services} />}
      {featuredPartnerApps.length > 0 && <PartnerApps data={{ heading: "Featured Partner Apps", apps: featuredPartnerApps }} />}
      {data.whyChooseUs && <WhyChooseUs data={data.whyChooseUs} />}
      {data.testimonials && <Testimonials data={data.testimonials} />}
      {data.faq && <FAQ data={data.faq} />}
      {data.cta && <CTA data={data.cta} />}
    </>
  );
}
