import { PartnershipTier } from '@/types/agent-ecosystem';

interface PartnershipTiersProps {
  tiers: PartnershipTier[];
}

export function PartnershipTiers({ tiers }: PartnershipTiersProps) {
  return (
    <section className="py-section px-6 md:px-12 bg-background dark:bg-background relative overflow-hidden pb-[80px]">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 pt-7">
        <div className="text-center mb-20 space-y-4 reveal-on-scroll">
          <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface dark:text-white">
            Partnership Tiers
          </h2>
          <p className="font-body-lg text-lg text-on-surface-variant dark:text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Our growth framework is designed to reward high-performing sub-agencies with increased autonomy, higher margins, and priority access to enterprise leads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, index) => {
            const isHighlight = tier.isHighlight;
            
            return (
              <div 
                key={tier.id} 
                className={`relative group reveal-on-scroll ${isHighlight ? 'md:-translate-y-4' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Highlight Glow Behind Card */}
                {isHighlight && (
                  <div className="absolute inset-0 bg-primary rounded-[32px] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                )}
                
                <div 
                  className={`relative h-full flex flex-col p-10 rounded-[32px] transition-all duration-500 hover:-translate-y-2 backdrop-blur-3xl ${
                    isHighlight 
                      ? 'bg-gradient-to-b from-primary/20 to-surface-container border-2 border-primary/50 dark:border-primary shadow-2xl dark:shadow-[0_0_40px_rgba(124,58,237,0.3)]' 
                      : 'bg-white/70 dark:bg-[#0B0114]/80 border border-outline-variant/50 dark:border-white/10 shadow-xl'
                  }`}
                >
                  {isHighlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8 border-b border-outline-variant/30 dark:border-white/10 pb-8">
                    <div className="text-on-surface-variant dark:text-[#94A3B8] font-bold tracking-widest text-sm uppercase mb-2">
                      Tier {tier.number}
                    </div>
                    <h3 className={`font-display-lg text-3xl mb-2 ${isHighlight ? 'text-primary' : 'text-on-surface dark:text-white'}`}>
                      {tier.title}
                    </h3>
                    <div className="font-bold text-lg text-on-surface-variant dark:text-white/60">
                      {tier.subtitle}
                    </div>
                  </div>
                  
                  <ul className="space-y-5 text-on-surface dark:text-white/80 mb-10 flex-grow font-body-md">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span 
                          className={`material-symbols-outlined shrink-0 text-xl ${isHighlight ? 'text-primary' : 'text-secondary'}`}
                          style={{ fontVariationSettings: "'FILL' 1" }}
                          aria-hidden="true"
                        >
                          check_circle
                        </span> 
                        <span className="leading-tight pt-0.5">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                    isHighlight 
                      ? 'btn-gradient text-white shadow-lg hover:shadow-primary/50' 
                      : 'bg-surface-container-high dark:bg-white/5 text-on-surface dark:text-white hover:bg-surface-container-highest dark:hover:bg-white/10 border border-outline-variant/50 dark:border-white/10'
                  }`}>
                    Apply for {tier.title}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
