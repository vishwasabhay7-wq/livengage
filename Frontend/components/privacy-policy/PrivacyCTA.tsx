import { PrivacyCTAContent } from '@/types/privacy-policy';

export function PrivacyCTA({
  heading,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: PrivacyCTAContent) {
  return (
    <section className="py-[80px] bg-background dark:bg-transparent relative overflow-hidden reveal-on-scroll">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="relative bg-surface border border-outline-variant dark:bg-surface-container-lowest dark:glass-card dark:border-none rounded-[40px] overflow-hidden px-8 py-16 md:px-16 md:py-24 text-center shadow-xl dark:shadow-2xl glowing-border group transform-gpu">
          {/* Background mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 mix-blend-overlay"></div>
          <div className="absolute -top-[10%] -left-[10%] md:-top-1/4 md:-left-1/4 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-primary-container/30 rounded-full blur-[80px] md:blur-[120px]"></div>
          <div className="absolute -bottom-[10%] -right-[10%] md:-bottom-1/4 md:-right-1/4 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-secondary-container/30 rounded-full blur-[80px] md:blur-[120px]"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="font-display-lg text-4xl md:text-7xl text-on-surface dark:text-white mb-10 leading-tight">
              {heading}
            </h2>
            <p className="font-body-lg text-on-surface-variant dark:text-[#94A3B8] text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              {primaryButtonText && primaryButtonLink && (
                <a
                  href={primaryButtonLink}
                  className="cursor-pointer btn-gradient text-white px-12 py-6 rounded-full font-black text-lg hover:shadow-lg hover:scale-105 transition-all"
                >
                  {primaryButtonText}
                </a>
              )}
              {secondaryButtonText && secondaryButtonLink && (
                <a
                  href={secondaryButtonLink}
                  className="cursor-pointer bg-surface-container-high border border-outline-variant text-primary dark:bg-surface-container/20 backdrop-blur-xl dark:border-white/20 dark:text-white px-12 py-6 rounded-full font-black text-lg hover:bg-surface-container-highest dark:hover:bg-white/10 transition-all"
                >
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
