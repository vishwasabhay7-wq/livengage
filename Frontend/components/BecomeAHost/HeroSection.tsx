import { getMediaUrl } from '@/lib/api';

interface HeroData {
  badge?: string;
  heading?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  image?: any;
}

interface HeroSectionProps {
  data?: HeroData;
}

export function HeroSection({ data }: HeroSectionProps) {
  if (!data) return null;

  const {
    badge,
    heading,
    description,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
    image,
  } = data;

  // Strapi 5: image is a media object with .url directly (no .data.attributes wrapper)
  const imageUrl = getMediaUrl(image?.url || image?.data?.attributes?.url) || null;
  const imageAlt = image?.alternativeText || image?.data?.attributes?.alternativeText || 'Professional live streamer';

  return (
    <section className="relative pt-[160px] pb-[80px] min-h-[716px] flex items-center overflow-hidden mesh-gradient">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary-container/30 rounded-full blur-[120px] kinetic-shape pointer-events-none"></div>
      <div 
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary-container/30 rounded-full blur-[100px] kinetic-shape pointer-events-none" 
        style={{ animationDelay: '-5s' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-section grid md:grid-cols-2 gap-gutter items-center">
        {/* Content - Second on mobile, First on desktop */}
        <div className="text-on-surface dark:text-white reveal-on-scroll order-2 md:order-1 mt-8 md:mt-0">
          {badge && (
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/20 border border-secondary-container/30 text-secondary text-label-md font-medium mb-stack-md uppercase">
              {badge}
            </span>
          )}
          {heading && (
            <h1 className="font-display-lg text-6xl md:text-[80px] font-black text-on-surface dark:text-white mb-8 tracking-tight leading-[1.1] drop-shadow-sm">
              {heading.includes('\n') ? (
                heading.split('\n').map((line, i, arr) => (
                  <span 
                    key={i} 
                    className={i === arr.length - 1 ? 'text-gradient italic pr-4 block' : 'block mb-2'}
                  >
                    {line}
                  </span>
                ))
              ) : (
                (() => {
                  const words = heading.split(' ');
                  if (words.length <= 2) return <span className="text-gradient italic pr-4">{heading}</span>;
                  const firstPart = words.slice(0, -2).join(' ');
                  const lastPart = words.slice(-2).join(' ');
                  return (
                    <>
                      {firstPart}{' '}
                      <span className="text-gradient italic pr-4">{lastPart}</span>
                    </>
                  );
                })()
              )}
            </h1>
          )}
          {description && (
            <p className="text-on-surface-variant dark:text-[#94A3B8] text-lg max-w-xl mb-stack-lg leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-stack-md">
            {primaryCtaLabel && primaryCtaHref && (
              <a
                className="btn-gradient px-8 py-4 rounded-full text-white font-bold text-lg flex items-center gap-2 hover:scale-105 transition-all shadow-lg dark:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                href={primaryCtaHref}
              >
                {primaryCtaLabel}
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_forward
                </span>
              </a>
            )}
            {secondaryCtaLabel && secondaryCtaHref && (
              <a
                className="px-8 py-4 rounded-full border-2 border-outline-variant text-on-surface dark:text-white font-bold text-lg hover:bg-surface-container dark:hover:border-primary-container transition-colors"
                href={secondaryCtaHref}
              >
                {secondaryCtaLabel}
              </a>
            )}
          </div>
        </div>

        {/* Image - First on mobile, Second on desktop */}
        <div className="relative order-1 md:order-2 h-[350px] md:h-[500px] w-full reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-tertiary rounded-[2rem] opacity-20 blur-2xl pointer-events-none"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={imageAlt}
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl relative z-10"
            src={imageUrl || "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2000&auto=format&fit=crop"}
          />
        </div>
      </div>
    </section>
  );
}
