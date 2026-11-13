import { GrowthHeroContent } from '@/types/growth-strategy';

export function GrowthHero({
  badge,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
}: GrowthHeroContent) {
  return (
    <section className="relative overflow-hidden pt-section pb-stack-lg min-h-[60vh] flex items-center justify-center reveal-on-scroll mesh-gradient pt-[80px]">
      {/* Glow Orb Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md mb-stack-md uppercase tracking-widest">
            {badge}
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-[80px] mb-stack-md text-on-surface dark:text-white leading-tight pb-2 font-bold tracking-tight transition-colors">
            {title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-white/80 mb-stack-lg max-w-2xl transition-colors">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-stack-md">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-headline-lg text-body-lg shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 active:scale-95 group">
              {primaryButtonText}{' '}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" aria-hidden="true">
                trending_up
              </span>
            </button>
            <button className="bg-surface-container-lowest dark:bg-white/5 border border-outline-variant/50 dark:border-white/10 px-8 py-4 rounded-xl font-headline-lg text-body-lg hover:bg-surface-container-low dark:hover:bg-white/10 transition-colors hover:-translate-y-1 active:scale-95 text-on-surface dark:text-white backdrop-blur-sm">
              {secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
