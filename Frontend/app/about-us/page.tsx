import { Metadata } from 'next';
import { AboutHero } from '@/components/About/AboutHero';
import { MissionVisionSection } from '@/components/About/MissionVisionSection';
import { ValuesGrid } from '@/components/About/ValuesGrid';
import { Timeline } from '@/components/About/Timeline';
import { TeamSection } from '@/components/About/TeamSection';
import { AboutCTA } from '@/components/About/AboutCTA';
import { pageService } from '@/lib/strapi/services/pages';

export const metadata: Metadata = {
  title: 'About Us | LIVENGAGE',
  description: 'Our journey from a boutique agency to a global leader in live-streaming talent management.',
};

export const revalidate = 0; // Disable caching for testing

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

