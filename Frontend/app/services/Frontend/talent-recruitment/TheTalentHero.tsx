import Image from 'next/image';
import Link from 'next/link';
import { TalentHeroContent } from '@/types/talent-recruitment';

export function TalentHero({
  badge,
  titleLight,
  titleHighlight,
  description,
  primaryButtonText,
  secondaryButtonText,
  imageUrl,
  imageAlt,
  retentionRate,
}: TalentHeroContent) {
  return (
    <section className="relative pt-[160px] pb-28 lg:pb-section px-6 md:px-12 overflow-hidden min-h-[921px] flex items-center mesh-gradient">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary-container/30 rounded-full blur-[120px] kinetic-shape pointer-events-none"></div>
      <div 
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary-container/30 rounded-full blur-[100px] kinetic-shape pointer-events-none" 
        style={{ animationDelay: '-5s' }}
      ></div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 reveal-on-scroll order-2 lg:order-1">
          {badge && (
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container/20 border border-secondary-container/30 text-secondary text-label-md font-medium mb-6 uppercase tracking-wider">
              {badge}
            </span>
          )}
          <h1 className="font-display-lg text-6xl md:text-[80px] lg:text-[90px] font-black text-on-surface dark:text-white mb-8 leading-[1.05] tracking-tighter whitespace-pre-wrap dark:drop-shadow-[0_0_15px_rgba(218,38,118,0.5)]">
            {titleLight} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic dark:drop-shadow-[0_0_20px_rgba(124,58,237,0.8)] pr-2">
              {titleHighlight}
            </span>
          </h1>
          {description && (
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant dark:text-[#94A3B8] mb-10 max-w-xl leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryButtonText && (
              <Link
                className="btn-gradient px-8 py-4 rounded-full text-white font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg dark:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                href="/become-a-host"
              >
                {primaryButtonText}
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            )}
            {secondaryButtonText && (
              <Link
                className="px-8 py-4 rounded-full border-2 border-outline-variant text-on-surface dark:text-white font-bold text-lg flex items-center justify-center hover:bg-surface-container dark:hover:border-primary-container transition-colors"
                href="/become-an-agent"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
        
        <div
          className="relative h-[500px] md:h-[700px] w-full rounded-[40px] overflow-hidden glass-card p-4 reveal-on-scroll order-1 lg:order-2"
          style={{ transitionDelay: '200ms' }}
        >
          <div className="w-full h-full rounded-[32px] overflow-hidden relative group">
            <Image
              alt={imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              src={imageUrl}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none"></div>
          </div>
          {/* Stats Overlay */}
          <div className="absolute bottom-10 left-10 right-10 glass-card p-6 rounded-2xl flex justify-around items-center border border-white/30 backdrop-blur-xl">
            <div className="text-center">
              <div className="text-primary font-bold text-3xl md:text-4xl">{retentionRate}</div>
              <div className="text-on-surface-variant text-xs uppercase tracking-wider font-semibold mt-1">
                Host Retention Rate
              </div>
            </div>
            <div className="h-12 w-[1px] bg-outline-variant/50"></div>
            <div className="text-center">
              <div className="text-primary font-bold text-3xl md:text-4xl">24/7</div>
              <div className="text-on-surface-variant text-xs uppercase tracking-wider font-semibold mt-1">
                Agency Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
