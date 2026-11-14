import Link from 'next/link';
import Image from 'next/image';
import { getMediaUrl } from '@/lib/api';

interface AboutHeroProps {
  data?: {
    badge?: string;
    heading?: string;
    description?: string;
    bgImage?: any;
    primaryCtaLabel?: string;
    primaryCtaHref?: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
  }
}

export function AboutHero({ data }: AboutHeroProps) {
  if (!data) return null;

  const {
    badge,
    heading,
    description,
    bgImage,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
  } = data;

  const imageUrl = getMediaUrl(bgImage?.url || bgImage?.data?.attributes?.url) || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  return (
    <section className="relative min-h-[716px] flex items-center pt-32 pb-[80px] overflow-hidden bg-surface-container-low dark:bg-transparent mesh-gradient dark:bg-none transform-gpu">
      {/* Animated Floating Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-container/20 dark:bg-primary/10 rounded-full blur-[120px] dark:blur-[150px] kinetic-shape"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary-container/20 dark:bg-secondary-container/10 rounded-full blur-[100px] dark:blur-[150px] kinetic-shape" style={{ animationDelay: '-5s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Content Side */}
        <div className="space-y-6 z-10 order-last md:order-first mt-8 md:mt-0">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest dark:bg-white/5 border border-outline-variant/20 dark:border-white/10 shadow-sm">
              <span className="font-label-sm md:text-[12px] font-bold uppercase tracking-widest text-primary dark:text-on-surface-variant">{badge}</span>
            </div>
          )}
          
          <h1 className="font-display-lg text-display-md md:text-display-lg text-on-surface dark:text-white leading-tight">
            {heading}
          </h1>
          
          {description && (
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            {primaryCtaLabel && primaryCtaHref && (
              <Link href={primaryCtaHref} className="btn-gradient text-white font-label-md text-label-md px-8 py-4 rounded-full shadow-lg dark:shadow-[0_0_20px_rgba(218,38,118,0.4)] hover:scale-105 transition-transform flex items-center justify-center gap-2 group">
                {primaryCtaLabel}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">arrow_forward</span>
              </Link>
            )}
            {secondaryCtaLabel && secondaryCtaHref && (
              <Link href={secondaryCtaHref} className="glass-card dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 text-on-surface dark:text-white font-label-md text-label-md px-8 py-4 rounded-full hover:bg-surface-container transition-colors flex items-center justify-center">
                {secondaryCtaLabel}
              </Link>
            )}
          </div>
        </div>

        {/* Image Side */}
        <div className="relative h-[350px] md:h-[500px] w-full rounded-3xl overflow-hidden glass-card dark:bg-white/5 dark:border-white/10 p-2 glowing-border shadow-xl z-10 order-first md:order-last">
          <Image width={800} height={800} className="w-full h-full object-cover rounded-2xl" alt={heading || "About Studio"} src={imageUrl} />
        </div>
      </div>
    </section>
  );
}
