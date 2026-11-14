import Link from 'next/link';

interface AboutCTAProps {
  data?: {
    heading?: string;
    description?: string;
    primaryCtaLabel?: string;
    primaryCtaHref?: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
  }
}

export function AboutCTA({ data }: AboutCTAProps) {
  if (!data) return null;

  const {
    heading,
    description,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
  } = data;

  if (!heading && !description && !primaryCtaLabel && !secondaryCtaLabel) {
    return null;
  }

  return (
    <section className="py-[120px] bg-surface-bright dark:bg-transparent relative overflow-hidden transform-gpu">
      {/* Outer ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-container/20 dark:bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="relative bg-gradient-to-br from-[#7C3AED] via-[#DA2676] to-[#FF5E89] dark:from-background dark:via-surface-container-low dark:to-surface-container rounded-[40px] overflow-hidden p-16 md:p-24 text-center shadow-[0_30px_60px_-15px_rgba(218,38,118,0.3)] dark:shadow-2xl dark:border dark:border-white/10 dark:glowing-border group transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(218,38,118,0.5)]">
          
          {/* Animated Background Textures inside the CTA */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
          
          {/* Dynamic inner orbs */}
          <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-white/20 dark:bg-primary/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-[2000ms]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#FFD166]/20 dark:bg-secondary-container/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-[2000ms]"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-white">
            {heading && (
              <h2 className="font-display-md text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tight drop-shadow-md">
                {heading}
              </h2>
            )}
            {description && (
              <p className="font-body-lg text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto font-medium text-white/90">
                {description}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {primaryCtaLabel && primaryCtaHref && (
                <Link
                  href={primaryCtaHref}
                  className="bg-white text-[#DA2676] dark:text-background px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1 transition-all duration-300"
                >
                  {primaryCtaLabel}
                </Link>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/20 hover:border-white/60 hover:-translate-y-1 transition-all duration-300"
                >
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
