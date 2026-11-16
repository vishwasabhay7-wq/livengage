import { notFound } from 'next/navigation';
import { fetchAPI, getPartnerAppBySlugQuery, getMediaUrl } from '@/lib/api';
import { JsonLd } from '@/components/JsonLd';
import { absoluteUrl, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { getPartnerAppRoute } from '@/lib/partner-app-routes';
import {
  PartnerAppHero,
  PartnerAppBenefits,
  PartnerAppVideo,
  PartnerAppTools,
  PartnerAppTiers,
  PartnerAppTestimonials,
  PartnerAppSteps,
  PartnerAppFaq,
  PartnerAppSupport,
  PartnerAppTechReqs,
} from './index';

export async function getPartnerAppData(cmsSlug: string) {
  const query = getPartnerAppBySlugQuery(cmsSlug);
  const res = await fetchAPI(`/api/partner-apps?${query}`, { next: { revalidate: 60 } });
  return res?.data?.[0] || null;
}

/** Full partner app page, shared by the keyword-URL routes. */
export async function PartnerAppPage({ cmsSlug }: { cmsSlug: string }) {
  const appData = await getPartnerAppData(cmsSlug);
  if (!appData) {
    console.error('PartnerAppPage: No data found for slug', cmsSlug);
    notFound();
  }

  const route = getPartnerAppRoute(cmsSlug);
  const path = route?.path || `/partner-apps/${cmsSlug}`;
  const name = route?.name || appData.title;
  const heroImage = getMediaUrl(appData.hero?.heroImage?.url);

  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    ...(route?.alternateNames?.length ? { alternateName: route.alternateNames } : {}),
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: 'Android, iOS',
    url: absoluteUrl(path),
    ...(appData.hero?.description ? { description: appData.hero.description } : {}),
    ...(heroImage ? { image: heroImage } : {}),
    ...(appData.hero?.primaryCtaUrl ? { downloadUrl: appData.hero.primaryCtaUrl } : {}),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  };

  return (
    <main className="overflow-x-hidden bg-background dark:bg-[#0B0114] min-h-screen">
      <JsonLd
        data={[
          softwareApp,
          faqSchema(appData.faqs?.faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: name, path },
          ]),
        ]}
      />
      <PartnerAppHero data={appData.hero} />
      <PartnerAppBenefits data={appData.benefits} />
      <PartnerAppVideo data={appData.videoPreview} />
      <PartnerAppTools data={appData.professionalTools} />
      <PartnerAppTiers data={appData.monetizationTiers} />
      <PartnerAppTestimonials data={appData.testimonials} />
      <PartnerAppSteps data={appData.onboardingSteps} />
      <PartnerAppFaq data={appData.faqs} />
      <PartnerAppSupport data={appData.supportHub} />
      <PartnerAppTechReqs data={appData.technicalRequirements} />
    </main>
  );
}
