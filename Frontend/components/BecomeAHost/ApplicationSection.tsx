import { HostApplicationForm } from './HostApplicationForm';

interface ApplicationStep {
  id?: number;
  icon?: string;
  title?: string;
  description?: string;
}

interface ApplicationSectionProps {
  data?: {
    heading?: string;
    description?: string;
    steps?: ApplicationStep[];
  }
}

export function ApplicationSection({ data }: ApplicationSectionProps) {
  if (!data) return null;

  const { heading, description, steps } = data;

  return (
    <section className="py-section bg-surface dark:bg-[#0B0114] pb-[80px] mt-[80px]" id="apply-now">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2 reveal-on-scroll">
          {heading && (
            <h2 className="font-display-lg text-4xl md:text-5xl font-black mb-6 text-on-surface dark:text-white tracking-tight leading-[1.1]">
              {heading.includes(' ') ? (
                <>
                  {heading.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="text-gradient italic pr-2">{heading.split(' ').slice(-1)}</span>
                </>
              ) : (
                heading
              )}
            </h2>
          )}
          {description && (
            <p className="font-body-lg text-lg text-on-surface-variant dark:text-[#94A3B8] mb-12 leading-relaxed max-w-md">
              {description}
            </p>
          )}
          
          {steps && steps.length > 0 && (
            <div className="relative border-l-2 border-primary/20 dark:border-[#7C3AED]/30 ml-6 space-y-12 pb-4 mt-12">
              {steps.map((step, idx) => {
                const displayIcon = step.icon || 'bolt'; // Fallback icon for a dynamic feel
                return (
                  <div key={step.id || step.title || idx} className="relative pl-10 reveal-on-scroll group" style={{ transitionDelay: `${idx * 100}ms` }}>
                    {/* Glowing Timeline Node */}
                    <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-[#F8FAFC] dark:bg-[#0B0114] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300 z-10">
                      <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-[#A78BFA] shadow-inner">
                        <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          {displayIcon}
                        </span>
                      </div>
                    </div>
                    
                    {step.title && <h4 className="font-bold text-xl mb-2 text-on-surface dark:text-white group-hover:text-primary dark:group-hover:text-[#A78BFA] transition-colors">{step.title}</h4>}
                    {step.description && (
                      <p className="text-on-surface-variant dark:text-[#94A3B8] text-base leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="lg:col-span-3">
          <HostApplicationForm />
        </div>
      </div>
    </section>
  );
}
