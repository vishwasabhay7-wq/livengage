import { JoinHero } from './JoinHero';
import { RoleCard } from './RoleCard';

type AccentColor = 'primary' | 'tertiary';
type CardVariant = 'primary' | 'dark';

interface HeroData {
  headingPart1?: string;
  headingHighlight?: string;
  description?: string;
}

interface RoleCardData {
  id?: number;
  icon?: string;
  decorativeIcon?: string;
  title?: string;
  description?: string;
  features?: Array<{ id: number; text: string }>;
  ctaLabel?: string;
  ctaHref?: string;
  accentColor?: AccentColor;
  variant?: CardVariant;
}

interface JoinHeroSectionProps {
  heroData?: HeroData;
  roleCardsData?: {
    items?: RoleCardData[];
  };
}

export function JoinHeroSection({ heroData, roleCardsData }: JoinHeroSectionProps) {
  if (!heroData && (!roleCardsData?.items || roleCardsData.items.length === 0)) {
    return null;
  }

  return (
    <>
      <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden bg-surface-container-low dark:bg-transparent mesh-gradient dark:bg-none transform-gpu mb-24">
        {/* Animated Floating Orbs */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] dark:opacity-[0.1] mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-container/30 dark:bg-primary/20 rounded-full blur-[120px] dark:blur-[150px] kinetic-shape pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary-container/30 dark:bg-secondary-container/20 rounded-full blur-[100px] dark:blur-[150px] kinetic-shape pointer-events-none" style={{ animationDelay: '-5s' }}></div>

        <div className="max-w-[1280px] mx-auto px-[32px] text-center relative z-10">
          {heroData && <JoinHero {...heroData} />}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-[32px] grid grid-cols-1 md:grid-cols-2 gap-8 mb-[80px]">
        {roleCardsData?.items && roleCardsData.items.map((card, index) => (
          <RoleCard key={card.id || index} {...card} />
        ))}
      </section>
    </>
  );
}
