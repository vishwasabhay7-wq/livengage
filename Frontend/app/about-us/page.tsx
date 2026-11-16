import { Metadata } from 'next';
import { AboutHero } from '@/components/About/AboutHero';
import { MissionVisionSection } from '@/components/About/MissionVisionSection';
import { ValuesGrid } from '@/components/About/ValuesGrid';
import { Timeline } from '@/components/About/Timeline';
import { TeamSection } from '@/components/About/TeamSection';
import { AboutCTA } from '@/components/About/AboutCTA';
import { pageService } from '@/lib/strapi/services/pages';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: "About Livengage – Our Story, Team & Creator Network",
  description:
    "Meet the team behind Livengage, a live streaming agency supporting creators in 50+ countries since 2018. Our story, values and how we support hosts.",
  path: '/about-us',
});

export const revalidate = 60; // Refresh CMS content at most once a minute

export default async function AboutPage() {
  // Fetch data from Strapi API
  const apiData = await pageService.getAboutUsPage() as any;
  // Support both Strapi v4 (data.attributes) and Strapi v5 (data directly)
  const strapiData = apiData?.data?.attributes || apiData?.data || {};

  // Map data directly from Strapi
  const heroData = strapiData.Hero || null;
  const missionVisionData = strapiData.MissionVision || null;
  const coreValuesData = strapiData.CoreValues || null;
  const timelineData = strapiData.Timeline || null;
  const leadershipData = strapiData.Leadership || null;
  const ctaData = strapiData.CTA || null;

  return (
    <main className="min-h-screen bg-background">

      <AboutHero data={heroData} />
      <MissionVisionSection data={missionVisionData} />
      <ValuesGrid data={coreValuesData} />
      <Timeline data={timelineData} />
      <TeamSection data={leadershipData} />
      <AboutCTA data={ctaData} />
    </main>
  );
}

