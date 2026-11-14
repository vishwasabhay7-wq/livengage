import { Fragment } from 'react';

export function PartnerAppBenefits({ data }: { data: any }) {
  if (!data?.benefits || data.benefits.length === 0) return null;

  const defaultIcons = ['groups', 'payments', 'tune'];

  return (
    <section className="py-24 bg-background dark:bg-[#0B0114] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-container/10 blur-[150px] pointer-events-none rounded-full"></div>
      
      <div className="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className={`grid grid-cols-1 ${data.benefits.length < 3 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8`}>
          {data.benefits.map((benefit: any, idx: number) => {
            const borderColor = idx === 0 ? 'border-primary' : idx === 1 ? 'border-tertiary' : 'border-secondary';
            const iconColor = idx === 0 ? 'text-primary' : idx === 1 ? 'text-tertiary' : 'text-secondary';
            const shadowColor = idx === 0 ? 'shadow-[0_8px_30px_rgba(124,58,237,0.15)]' : idx === 1 ? 'shadow-[0_8px_30px_rgba(236,72,153,0.15)]' : 'shadow-[0_8px_30px_rgba(14,165,233,0.15)]';
            const displayIcon = benefit.icon || defaultIcons[idx % 3];
            
            return (
              <div 
                key={benefit.id || idx} 
                className={`relative bg-surface dark:bg-surface-container-lowest/5 backdrop-blur-xl border border-outline-variant dark:border-white/10 rounded-[32px] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-surface-container-lowest dark:hover:bg-surface-container-lowest/10 group ${shadowColor}`}
              >
                {/* Glowing Top Border Accent */}
                <div className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-50 ${iconColor}`}></div>

                {displayIcon && (
                  <div className={`w-16 h-16 rounded-2xl bg-primary/10 dark:bg-white/5 border border-primary/20 dark:border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${iconColor}`}>
                    <span className="material-symbols-outlined text-3xl drop-shadow-md">
                      {displayIcon}
                    </span>
                  </div>
                )}
                {benefit.title && (
                  <h3 className="font-display-sm text-2xl font-bold text-on-background dark:text-white mb-4 tracking-tight group-hover:text-primary dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-white dark:group-hover:to-white/60 transition-colors">
                    {benefit.title}
                  </h3>
                )}
                {benefit.description && (
                  <p className="font-body-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
                    {benefit.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
