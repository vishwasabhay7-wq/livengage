import Image from 'next/image';
import { ValuePropositionContent } from '@/types/talent-recruitment';

export function ValueProposition({
  heading,
  description,
  brandDealsImageUrl,
  brandDealsImageAlt,
}: ValuePropositionContent) {
  return (
    <section className="py-section px-6 md:px-12 bg-white dark:bg-[#1F0233] overflow-hidden pb-[80px] pt-[80px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
          
          {/* Header */}
          <div className="md:col-span-8 flex flex-col justify-center mb-12 md:mb-0 reveal-on-scroll">
            <h2 className="font-display-lg text-4xl mb-6 text-on-surface dark:text-white">{heading}</h2>
            <p className="font-body-lg text-lg text-on-surface-variant dark:text-[#94A3B8] max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* Bento Item 1: Direct Support */}
          <div className="md:col-span-6 lg:col-span-4 group cursor-default reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            <div className="relative z-10 p-10 h-full flex flex-col gap-8 rounded-[40px] bg-white/70 dark:bg-[#0B0114]/80 backdrop-blur-3xl border border-white dark:border-white/10 shadow-2xl dark:shadow-[0_0_50px_rgba(124,58,237,0.2)] overflow-hidden hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span
                className="material-symbols-outlined text-5xl text-primary drop-shadow-[0_0_10px_rgba(124,58,237,0.5)] relative z-10"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                support_agent
              </span>
              <div className="relative z-10">
                <h3 className="font-bold text-2xl mb-4 text-on-surface dark:text-white group-hover:text-primary transition-colors">Direct Support</h3>
                <p className="font-body-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
                  Personal manager available 24/7. From technical troubleshooting to creative block, we are your backbone.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Brand Deals */}
          <div className="md:col-span-6 lg:col-span-8 group cursor-default reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="relative z-10 p-10 h-full flex flex-col md:flex-row gap-10 items-center rounded-[40px] bg-white/70 dark:bg-[#0B0114]/80 backdrop-blur-3xl border border-white dark:border-white/10 shadow-2xl dark:shadow-[0_0_50px_rgba(218,38,118,0.2)] overflow-hidden hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent dark:from-secondary/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-full md:w-1/2 relative z-10">
                <span
                  className="material-symbols-outlined text-5xl text-secondary drop-shadow-[0_0_10px_rgba(218,38,118,0.5)] mb-8 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                  aria-hidden="true"
                >
                  workspace_premium
                </span>
                <h3 className="font-bold text-2xl mb-4 text-on-surface dark:text-white group-hover:text-secondary transition-colors">Premium Brand Deals</h3>
                <p className="font-body-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
                  Exclusive access to Tier-1 partnerships. We negotiate your value to ensure your influence is monetized at the highest levels.
                </p>
              </div>
              <div className="w-full md:w-1/2 rounded-3xl overflow-hidden aspect-video shadow-inner relative z-10 border border-outline-variant/30 dark:border-white/5">
                <Image
                  src={brandDealsImageUrl}
                  alt={brandDealsImageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Bento Item 3: Stats */}
          <div className="md:col-span-12 lg:col-span-5 group cursor-default reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
            <div className="relative z-10 p-12 h-full flex flex-col justify-center items-center text-center rounded-[40px] bg-gradient-to-br from-primary to-secondary text-white shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-white/20">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none group-hover:bg-white/30 transition-colors duration-700"></div>
              
              <div className="text-6xl md:text-7xl font-display-lg mb-2 relative z-10 drop-shadow-md">$12M+</div>
              <div className="font-bold text-xl opacity-90 relative z-10">Annual Payouts</div>
              <div className="mt-8 pt-8 border-t border-white/30 w-full relative z-10">
                <p className="font-body-md opacity-80">
                  Empowering over 500+ active hosts across 12 global platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Item 4: Training */}
          <div className="md:col-span-12 lg:col-span-7 group cursor-default reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
            <div className="relative z-10 p-10 h-full flex flex-col gap-8 rounded-[40px] bg-white/70 dark:bg-[#0B0114]/80 backdrop-blur-3xl border border-white dark:border-white/10 shadow-2xl dark:shadow-[0_0_50px_rgba(20,184,166,0.2)] overflow-hidden hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent dark:from-tertiary/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center gap-6 relative z-10">
                <span
                  className="material-symbols-outlined text-5xl text-tertiary drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                  aria-hidden="true"
                >
                  psychology
                </span>
                <h3 className="font-bold text-2xl text-on-surface dark:text-white group-hover:text-tertiary transition-colors">Technical & Personal Training</h3>
              </div>
              <p className="font-body-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed relative z-10">
                Access our private academy for workshops on lighting, audio engineering, audience psychology, and financial management. We build the complete creator.
              </p>
              <div className="flex gap-4 relative z-10 mt-auto">
                <div className="h-1.5 flex-1 bg-tertiary/20 dark:bg-tertiary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-3/4 shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
                </div>
                <div className="h-1.5 flex-1 bg-tertiary/20 dark:bg-tertiary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-1/2 shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
                </div>
                <div className="h-1.5 flex-1 bg-tertiary/20 dark:bg-tertiary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-4/5 shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
