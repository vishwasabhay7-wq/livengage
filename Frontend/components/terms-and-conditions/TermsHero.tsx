import { TermsHeroContent } from '@/types/terms-and-conditions';

export function TermsHero({ title, description }: TermsHeroContent) {
  return (
    <header className="max-w-7xl mx-auto px-6 md:px-12 pt-[100px] reveal-on-scroll">
      <div className="max-w-4xl">
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-stack-lg">
          {title}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant pb-[40px]">
          {description}
        </p>
      </div>
    </header>
  );
}
