import Link from 'next/link';
import { cn } from '@/lib/utils';

interface PartnerHeroProps {
  data?: any;
}

export function PartnerHero({ data }: PartnerHeroProps) {
  if (!data) return null;

  return (
    <header className="relative pt-32 pb-section hero-mesh overflow-hidden">
      {/* Decorative gradient overlay handled in CSS via .hero-mesh */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-fixed/20 to-transparent pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          {data.badge && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md mb-stack-md">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              {data.badge}
            </span>
          )}
          
          <h1 className="font-display-lg text-4xl md:text-[72px] text-on-surface mb-stack-md leading-tight">
            {data.title && `${data.title} `}
            <br className="hidden md:block" />
            {data.titleHighlight && <span className="text-primary">{data.titleHighlight}</span>}
            {data.titlePart3 && ` ${data.titlePart3}`}
          </h1>
          
          {data.description && (
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg leading-relaxed max-w-2xl">
              {data.description}
            </p>
          )}

          <div className="flex flex-wrap gap-stack-md">
            {data.primaryButtonText && (
              <button className="px-8 py-4 rounded-full btn-primary text-white font-semibold text-body-lg shadow-xl shadow-primary/20 hover-lift flex items-center gap-2 cursor-pointer">
                {data.primaryButtonText}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            )}
            
            {data.secondaryButtonText && (
              <button className="px-8 py-4 rounded-full glass-card text-on-surface font-semibold text-body-lg hover-lift flex items-center gap-2 cursor-pointer">
                {data.secondaryButtonText}
                <span className="material-symbols-outlined">description</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
