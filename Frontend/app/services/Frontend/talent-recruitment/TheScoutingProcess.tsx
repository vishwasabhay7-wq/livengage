import { ScoutingProcessStep } from '@/types/talent-recruitment';

interface ScoutingProcessProps {
  steps: ScoutingProcessStep[];
}

export function ScoutingProcess({ steps }: ScoutingProcessProps) {
  return (
    <section className="py-section px-6 md:px-12 bg-surface-container-low dark:bg-[#0B0114] pb-[80px] pt-[80px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-stack-md reveal-on-scroll">
          <h2 className="font-display-lg text-4xl text-on-surface dark:text-white mb-4">The Scouting Process</h2>
          <p className="font-body-lg text-lg text-on-surface-variant dark:text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Precision engineering for human potential. Our 3-step system ensures we only onboard and nurture the most dedicated streaming talent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter relative">
          {steps.map((step, index) => {
            const borderClass = step.color === 'secondary' ? 'border-secondary' : step.color === 'tertiary' ? 'border-tertiary' : 'border-primary';
            const bgClass = step.color === 'secondary' ? 'bg-secondary-container/10 text-secondary' : step.color === 'tertiary' ? 'bg-tertiary-container/10 text-tertiary' : 'bg-primary-container/10 text-primary';
            const textClass = step.color === 'secondary' ? 'text-secondary' : step.color === 'tertiary' ? 'text-tertiary' : 'text-primary';
            
            const toColor = step.color === 'secondary' ? 'secondary' : step.color === 'tertiary' ? 'tertiary' : 'primary';

            return (
              <div
                key={step.id}
                className={`relative overflow-hidden p-stack-lg rounded-[32px] soft-lift border ${borderClass} dark:border-opacity-50 border-opacity-30 reveal-on-scroll group transition-all duration-500 hover:-translate-y-2 dark:hover:shadow-[0_0_40px_rgba(218,38,118,0.3)] bg-gradient-to-br from-white via-white to-${toColor}/5 dark:from-[#0B0114] dark:via-[#1F0233]/80 dark:to-black backdrop-blur-xl`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-${toColor}/10 dark:to-${toColor}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl ${bgClass} flex items-center justify-center mb-8 shadow-inner dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
                  >
                    <span
                      className="material-symbols-outlined text-4xl"
                      style={step.icon === 'verified' ? { fontVariationSettings: "'FILL' 1" } : {}}
                      aria-hidden="true"
                    >
                      {step.icon}
                    </span>
                  </div>
                  <div className={`${textClass} font-bold text-headline-lg mb-2 opacity-50`}>
                    {step.number}
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-on-surface dark:text-white group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="font-body-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
