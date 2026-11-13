export function PartnerAppTiers({ data }: { data: any }) {
  if (!data?.tiers || data.tiers.length === 0) return null;
  const { title, titleHighlight, description, tiers } = data;

  return (
    <section className="py-32 relative bg-background dark:bg-[#0B0114] overflow-hidden">
      {/* ── Background Mesh ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background dark:from-[#0B0114] dark:via-primary/5 dark:to-[#0B0114] z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary-container/10 blur-[150px] pointer-events-none z-0 rounded-full"></div>
      
      <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        {(title || titleHighlight || description) && (
          <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
            <h2 className="font-display-lg text-4xl md:text-5xl text-on-background dark:text-white mb-6 tracking-tight">
              {title && <>{title} </>}
              {titleHighlight && <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{titleHighlight}</span>}
            </h2>
            {description && (
              <p className="font-body-lg text-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">{description}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier: any, idx: number) => {
            const isPopular = tier.isPopular;
            
            const baseClass = isPopular 
              ? "bg-surface dark:bg-surface-container-lowest/10 backdrop-blur-2xl rounded-[32px] p-10 border border-primary/30 shadow-[0_4px_30px_rgba(124,58,237,0.15)] dark:shadow-[0_0_50px_rgba(124,58,237,0.2)] relative transform md:-translate-y-4 hover:-translate-y-6 transition-all duration-500 z-20 group"
              : "bg-surface dark:bg-surface-container-lowest/5 backdrop-blur-xl rounded-[32px] p-8 border border-outline-variant dark:border-white/10 shadow-lg relative hover:-translate-y-2 hover:bg-surface-container-lowest dark:hover:bg-surface-container-lowest/10 transition-all duration-500 z-10 opacity-100 dark:opacity-90 hover:opacity-100 group";
              
            const headingClass = isPopular ? "text-primary drop-shadow-md" : idx === 2 ? "text-tertiary" : "text-on-surface-variant dark:text-[#94A3B8]";

            return (
              <div key={tier.id || idx} className={`${baseClass} reveal-on-scroll`} style={{ transitionDelay: `${idx * 150}ms` }}>
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                    Most Popular
                  </div>
                )}
                
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-[32px] transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none ${isPopular ? 'shadow-[inset_0_0_20px_rgba(124,58,237,0.1)] dark:shadow-[inset_0_0_40px_rgba(124,58,237,0.2)]' : 'dark:shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]'}`}></div>

                <div className="text-center mb-8 border-b border-outline-variant/30 dark:border-white/10 pb-8 relative z-10">
                  {tier.name && <h3 className={`font-display-sm text-2xl mb-2 font-bold tracking-wide ${headingClass}`}>{tier.name}</h3>}
                  {tier.splitText && <div className={`${isPopular ? 'text-5xl' : 'text-4xl'} font-black text-on-background dark:text-white mb-2 dark:drop-shadow-md`}>{tier.splitText}</div>}
                  {tier.subtitle && <p className="text-sm text-on-surface-variant dark:text-[#94A3B8] font-medium uppercase tracking-widest">{tier.subtitle}</p>}
                </div>
                
                {tier.features && tier.features.length > 0 && (
                  <ul className="space-y-5 mb-8 relative z-10">
                    {tier.features.map((feature: any) => (
                      <li key={feature.id} className="flex items-start gap-4 text-body-md text-on-surface-variant dark:text-[#CBD5E1]">
                        <span className={`material-symbols-outlined mt-0.5 text-xl ${isPopular ? 'text-primary drop-shadow-[0_0_8px_rgba(124,58,237,0.2)] dark:drop-shadow-[0_0_8px_rgba(124,58,237,0.8)]' : 'text-outline dark:text-white/40'}`}>
                          {isPopular ? 'check_circle' : 'check'}
                        </span>
                        <span className={`leading-relaxed ${isPopular && feature.id === tier.features[0]?.id ? "font-bold text-on-background dark:text-white" : ""}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
