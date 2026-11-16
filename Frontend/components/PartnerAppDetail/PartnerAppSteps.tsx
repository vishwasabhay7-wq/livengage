export function PartnerAppSteps({ data }: { data: any }) {
  if (!data?.steps || data.steps.length === 0) return null;
  const { title, titleHighlight, description, steps } = data;

  return (
    <section className="py-24 bg-background dark:bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-background dark:bg-[#0B0114] -z-10"></div>
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        {(title || titleHighlight || description) && (
          <div className="text-center max-w-2xl mx-auto mb-20 reveal-on-scroll">
            <h2 className="font-display-lg text-4xl md:text-5xl text-on-background dark:text-white mb-6 tracking-tight">
              {title && <>{title} </>}
              {titleHighlight && <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{titleHighlight}</span>}
            </h2>
            {description && (
              <p className="font-body-lg text-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">{description}</p>
            )}
          </div>
        )}

        <div className="relative">
          {/* Glowing Timeline Line */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-outline-variant/30 dark:bg-white/5 -z-10">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-tertiary to-secondary opacity-50 blur-[2px]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step: any, idx: number) => {
              const isLast = idx === 3;
              const numberBg = isLast ? "bg-gradient-to-br from-primary to-secondary shadow-[0_0_20px_rgba(124,58,237,0.6)] border-transparent text-white" : "bg-surface dark:bg-[#0B0114] border-outline-variant dark:border-white/20 text-on-background dark:text-white dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]";
              const cardClass = isLast ? "bg-primary/10 border-primary/30" : "bg-surface dark:bg-surface-container-lowest/5 border-outline-variant dark:border-white/10 hover:bg-surface-container-lowest dark:hover:bg-surface-container-lowest/10";
              const iconColors = ['text-secondary', 'text-tertiary', 'text-primary', 'text-on-background dark:text-white'];
              const iconColor = iconColors[idx % 4];
              const defaultIcons = ['download_for_offline', 'app_registration', 'verified_user', 'sensors'];
              const displayIcon = step.icon || defaultIcons[idx % 4];

              return (
                <div key={step.id || idx} className="relative flex flex-col items-center text-center group reveal-on-scroll" style={{ transitionDelay: `${idx * 150}ms` }}>
                  {/* Step Number Badge */}
                  <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 relative z-20 shadow-sm ${numberBg}`}>
                    <span className="font-display-sm text-2xl font-bold tracking-tight">{idx + 1}</span>
                    {isLast && <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>}
                  </div>
                  
                  {/* Step Content Card */}
                  <div className={`relative backdrop-blur-xl rounded-[24px] w-full p-8 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-lg dark:group-hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)] border ${cardClass}`}>
                    {displayIcon && (
                      <span className={`material-symbols-outlined text-4xl mb-6 block drop-shadow-md transition-transform duration-500 group-hover:scale-110 ${iconColor}`} style={isLast ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                        {displayIcon}
                      </span>
                    )}
                    {step.title && (
                      <h4 className="font-display-sm text-xl font-bold text-on-background dark:text-white mb-3 tracking-wide">{step.title}</h4>
                    )}
                    {step.description && (
                      <p className="font-body-md text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">{step.description}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
