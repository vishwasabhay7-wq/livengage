'use client';

import { useState } from 'react';
import Link from 'next/link';

import { getMediaUrl } from '@/lib/strapi/client';

interface Props {
  data?: any;
}

export function PartnerApps({ data }: Props) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  
  const appsData = data as any;
  if (!appsData || !appsData.apps || appsData.apps.length === 0) return null;

  return (
    <section className="py-[100px] overflow-hidden bg-[#F4F6FF] dark:bg-[#060913] relative border-y border-outline-variant/20 dark:border-white/5 transform-gpu">
      {/* Premium Fancy Background */}
      <div className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05] dark:opacity-[0.15]"></div>
      
      {/* Glowing Ambient Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-primary/30 dark:bg-primary/30 rounded-full blur-[120px] opacity-70 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#E11D48]/30 dark:bg-[#E11D48]/20 rounded-full blur-[120px] opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[20%] left-[40%] w-[300px] h-[300px] bg-secondary/40 dark:bg-secondary-container/20 rounded-full blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {appsData.heading && (
          <h2 className="font-display-md text-display-md mb-16 text-center text-on-surface dark:text-white">{appsData.heading}</h2>
        )}
        <div className={`flex flex-col lg:flex-row lg:h-[600px] gap-4 ${appsData.apps.length > 4 ? 'lg:overflow-x-auto lg:snap-x lg:snap-mandatory lg:pb-4 [&::-webkit-scrollbar]:hidden' : ''}`}>
          
          {appsData.apps.map((app: any, idx: number) => {
            const hero = app.hero || {};
            const videoPreview = app.videoPreview || {};
            const bgUrl = hero.heroImage?.url;
            const videoUrl = videoPreview.video?.url;
            const isExpanded = expandedIdx === idx;
            
            return (
              <div 
                key={idx} 
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                className={`app-wheel-card relative flex-1 min-w-[200px] rounded-2xl overflow-hidden p-6 lg:p-8 group cursor-pointer block shadow-lg transition-all duration-500 ease-in-out
                  ${appsData.apps.length > 4 ? 'lg:flex-none lg:w-[280px] lg:snap-center' : ''}
                  ${isExpanded ? 'h-[350px]' : 'h-[120px]'} lg:h-full
                `}
              >
                
                {/* Background Image (Default) */}
                {bgUrl && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 lg:group-hover:scale-105"
                    style={{ backgroundImage: `url('${getMediaUrl(bgUrl)}')` }}
                  ></div>
                )}

                {/* Hover Video */}
                {videoUrl && (
                  <video 
                    src={getMediaUrl(videoUrl) as string}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0
                      ${isExpanded ? 'max-lg:opacity-100' : ''} 
                      lg:group-hover:opacity-100
                    `}
                  />
                )}

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  
                  {/* Top / Header section */}
                  <div className={`flex w-full lg:flex-col lg:items-start items-center gap-4 lg:gap-0 transition-transform duration-500 ${isExpanded ? 'max-lg:-translate-y-2' : ''}`}>
                    <div className="w-12 h-12 lg:w-16 lg:h-16 shrink-0 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center lg:mb-8 border border-white/30 lg:group-hover:bg-white lg:group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-2xl lg:text-3xl text-white lg:group-hover:text-primary transition-colors">star</span>
                    </div>
                    <h4 className="font-headline-lg text-xl lg:text-2xl font-black uppercase tracking-tighter text-white drop-shadow-md lg:mb-4">{app.title}</h4>
                    
                    {/* Accordion +/- Indicator (Mobile Only) */}
                    <div className="ml-auto lg:hidden w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shrink-0 transition-transform duration-300">
                      <span className="material-symbols-outlined text-white text-xl">
                        {isExpanded ? 'remove' : 'add'}
                      </span>
                    </div>
                  </div>

                  {/* Expanded / Hover Content */}
                  <div className={`flex flex-col gap-4 transition-all duration-500 
                    ${isExpanded ? 'max-lg:translate-y-0 max-lg:opacity-100 max-lg:max-h-[200px]' : 'max-lg:translate-y-4 max-lg:opacity-0 max-lg:max-h-0 max-lg:overflow-hidden'}
                    lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100
                  `}>
                    <p className="text-white/80 max-w-xs drop-shadow text-sm lg:text-base line-clamp-3">
                      {hero.description}
                    </p>
                    {hero.primaryCtaLabel && (
                      <Link 
                        href={`/partner-apps/${app.slug}`} 
                        onClick={(e) => e.stopPropagation()} // Prevent toggling accordion when clicking CTA
                        className="cursor-pointer w-full py-3 lg:py-4 rounded-full bg-white text-primary font-bold hover:bg-primary-container hover:text-on-primary-container shadow-lg text-center"
                      >
                        Get more detail
                      </Link>
                    )}
                  </div>

                </div>
                
                {/* Index Number */}
                <div className="hidden lg:block absolute top-6 right-6 lg:top-8 lg:right-8 text-3xl lg:text-4xl font-display-md text-white/50 lg:group-hover:text-white/80 transition-colors drop-shadow-md">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
