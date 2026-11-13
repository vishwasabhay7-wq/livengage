import { notFound } from 'next/navigation';
import { fetchAPI, getPartnerAppBySlugQuery, getAllPartnerAppsQuery } from '@/lib/api';
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
  PartnerAppTechReqs
} from '@/components/PartnerAppDetail';

export async function generateStaticParams() {
  const query = getAllPartnerAppsQuery();
  const res = await fetchAPI(`/api/partner-apps?${query}`);
  
  if (!res || !res.data) {
    return [];
  }
  
  return res.data.map((app: any) => ({
    slug: app.slug,
  }));
}

export default async function PartnerAppPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const query = getPartnerAppBySlugQuery(resolvedParams.slug);
  const res = await fetchAPI(`/api/partner-apps?${query}`, { cache: 'no-store' });
  
  if (!res || !res.data || res.data.length === 0) {
    console.error("PartnerAppPage: No data found for slug", resolvedParams.slug, res);
    notFound();
  }
  
  const appData = res.data[0];

  return (
    <main className="overflow-x-hidden bg-background dark:bg-[#0B0114] min-h-screen">
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
