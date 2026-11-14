import Image from 'next/image';
import Link from 'next/link';
import { getMediaUrl } from '@/lib/api';

export function PartnerAppHero({ data }: { data: any }) {
  if (!data) return null;

  const {
    badgeText,
    titlePart1,
    titleHighlight,
    description,
    primaryCtaLabel,
    primaryCtaUrl,
    secondaryCtaLabel,
    secondaryCtaUrl,
    statsValue,
    statsLabel,
    heroImage,
    avatars
  } = data;

  const showPrimaryBtn = primaryCtaLabel && primaryCtaUrl;
  const showSecondaryBtn = secondaryCtaLabel && secondaryCtaUrl;

  return (
    <section className="relative min-h-[900px] flex items-center pt-[160px] pb-28 lg:pb-section px-6 md:px-12 w-full overflow-hidden bg-background dark:bg-[#0B0114]">
      {/* ── Premium Mesh Gradient Background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 dark:from-primary/20 dark:via-[#0B0114] dark:to-secondary/20 mix-blend-overlay"></div>
      
      {/* ── Animated Orbs ── */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary-container/30 rounded-full blur-[120px] kinetic-shape pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary-container/30 rounded-full blur-[100px] kinetic-shape pointer-events-none z-0"
        style={{ animationDelay: '-5s' }}
        aria-hidden="true"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 w-full items-center max-w-7xl mx-auto">
        <div className="space-y-8 max-w-2xl reveal-on-scroll order-2 lg:order-1">
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="font-bold text-xs text-primary uppercase tracking-[0.2em]">{badgeText}</span>
            </div>
          )}
          
          <h1 className="font-display-lg text-5xl md:text-[70px] lg:text-[80px] font-black text-on-background dark:text-white mb-8 leading-[1.05] tracking-tight whitespace-pre-wrap dark:drop-shadow-[0_0_15px_rgba(218,38,118,0.5)]">
            {titlePart1 && <>{titlePart1} <br/></>}
            {titleHighlight && <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{titleHighlight}</span>}
          </h1>
          
          {description && (
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant dark:text-[#94A3B8] max-w-xl leading-relaxed">
              {description}
            </p>
          )}
          
          {(showPrimaryBtn || showSecondaryBtn) && (
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {showPrimaryBtn && (
                <Link href={primaryCtaUrl} className="btn-gradient px-8 py-4 rounded-full text-white font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-[0_4px_15px_rgba(124,58,237,0.3)] dark:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                  <span className="material-symbols-outlined">download</span>
                  {primaryCtaLabel}
                </Link>
              )}
              {showSecondaryBtn && (
                <Link href={secondaryCtaUrl} className="px-8 py-4 rounded-full border-2 border-primary/20 dark:border-white/20 text-primary dark:text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/5 dark:hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined">play_circle</span>
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          )}
          
          {(avatars?.data?.length > 0 || (statsValue && statsLabel)) && (
            <div className="pt-8 flex items-center gap-6 text-on-surface-variant dark:text-[#94A3B8]">
              {avatars?.data?.length > 0 && (
                <div className="flex -space-x-4">
                  {avatars.data.map((avatar: any) => (
                    <img 
                      key={avatar.id}
                      className="w-12 h-12 rounded-full border-2 border-background dark:border-[#0B0114] object-cover shadow-lg" 
                      src={getMediaUrl(avatar.url) || ''} 
                      alt={avatar.alternativeText || 'Avatar'}
                    />
                  ))}
                </div>
              )}
              {(statsValue || statsLabel) && (
                <div className="font-bold text-sm flex flex-col">
                  {statsValue && <span className="text-2xl text-on-background dark:text-white dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">{statsValue} </span>}
                  <span className="uppercase tracking-widest text-xs opacity-80 mt-1">{statsLabel}</span>
                </div>
              )}
            </div>
          )}
        </div>
        
        {heroImage?.url && (
          <div className="relative h-[500px] md:h-[700px] w-full hidden lg:block perspective-1000 reveal-on-scroll order-1 lg:order-2" style={{ transitionDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[40px] transform rotate-2 border border-white/10 dark:border-white/10 backdrop-blur-3xl shadow-[0_20px_50px_rgba(124,58,237,0.2)] dark:shadow-[0_0_50px_rgba(124,58,237,0.2)]"></div>
            <div className="absolute inset-4 rounded-[32px] overflow-hidden border border-white/20 dark:border-white/5 bg-black/10 dark:bg-black/50 transform -rotate-1 hover:rotate-0 transition-transform duration-700 shadow-xl">
               <img 
                className="w-full h-full object-cover opacity-100 dark:opacity-90 group-hover:scale-105 transition-transform duration-700" 
                src={getMediaUrl(heroImage.url) || ''} 
                alt={heroImage.alternativeText || 'App screenshot'}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
