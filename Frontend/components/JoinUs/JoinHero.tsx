interface JoinHeroProps {
  headingPart1?: string;
  headingHighlight?: string;
  description?: string;
}

/**
 * JoinHero — centred two-line heading with gradient highlight text.
 * Server Component.
 */
export function JoinHero({ headingPart1, headingHighlight, description }: JoinHeroProps) {
  return (
    <div className="text-center reveal-on-scroll">
      {(headingPart1 || headingHighlight) && (
        <h1 className="text-5xl md:text-6xl font-extrabold text-on-surface dark:text-white mb-6 tracking-tight pt-[24px]">
          {headingPart1}{' '}
          {headingHighlight && <span className="text-primary dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-[#7C3AED] dark:to-[#EC4899]">{headingHighlight}</span>}
        </h1>
      )}
      {description && (
        <p className="text-lg text-on-surface-variant dark:text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
