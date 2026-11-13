import { PrivacyHeroContent } from '@/types/privacy-policy';

export function PrivacyHero({
  badge,
  title,
  lastUpdated,
  description,
}: PrivacyHeroContent) {
  return (
    <header className="max-w-7xl mx-auto px-6 md:px-12 pt-[100px] reveal-on-scroll">
      <div className="max-w-4xl">
        <p className="font-label-md text-label-md text-primary mb-stack-md">
          {badge}
        </p>
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-stack-lg">
          {title}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant pb-[40px]">
          <span className="font-semibold">{lastUpdated}</span> {description}
        </p>
      </div>
    </header>
  );
}
