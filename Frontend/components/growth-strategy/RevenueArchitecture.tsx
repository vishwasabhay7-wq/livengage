import { RevenueArchitectureContent } from '@/types/growth-strategy';

export function RevenueArchitecture({
  timelineSteps,
  heading,
  description,
  stat1Value,
  stat1Label,
  stat2Value,
  stat2Label,
}: RevenueArchitectureContent) {
  return (
    <section className="py-section relative overflow-hidden pt-[80px] pb-[80px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-section reveal-on-scroll">
          <h2 className="font-headline-xl text-headline-xl text-primary dark:text-white font-bold transition-colors">
            {heading}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-white/70 max-w-2xl mx-auto mt-stack-sm transition-colors pb-[40px]">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          
          {/* Timeline Process */}
          <div className="relative reveal-on-scroll">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-sky-100 rounded-full"></div>
            <div className="space-y-section">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative pl-12 reveal-on-scroll" style={{ transitionDelay: `${index * 150}ms` }}>
                  {/* Circle Node */}
                  <div className="absolute -left-6 top-0 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-tertiary border-4 border-white"></div>
                  {/* Connecting line pseudo-element would go here if needed via Tailwind arbitrary variants, but HTML handled it via CSS. Let's use a simpler approach if needed, or rely on the left border */}
                  <h4 className="font-headline-lg text-headline-lg text-primary dark:text-white mb-2 font-bold transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-on-surface-variant dark:text-white/70 max-w-sm transition-colors">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
            <div className="bg-surface-container/30 dark:bg-surface-container/10 border border-outline-variant/30 dark:border-white/10 backdrop-blur-md rounded-[18px] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-colors">
              <div className="grid grid-cols-2 gap-stack-lg">
                <div>
                  <div className="font-display-lg text-[48px] font-bold text-primary">{stat1Value}</div>
                  <div className="font-label-md text-label-md text-on-surface-variant dark:text-white/50 uppercase tracking-widest mt-1">
                    {stat1Label}
                  </div>
                </div>
                <div>
                  <div className="font-display-lg text-[48px] font-bold text-secondary">{stat2Value}</div>
                  <div className="font-label-md text-label-md text-on-surface-variant dark:text-white/50 uppercase tracking-widest mt-1">
                    {stat2Label}
                  </div>
                </div>
              </div>
              
              <div className="mt-stack-lg p-6 bg-surface-container/50 dark:bg-white/5 rounded-xl border border-outline-variant/30 dark:border-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-4xl" aria-hidden="true">
                    monitoring
                  </span>
                  <div>
                    <div className="font-bold text-on-surface dark:text-white">Global Network Tracking</div>
                    <p className="text-sm text-on-surface-variant dark:text-white/70">
                      Monitor your hosts, sub-agents, and daily earnings instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
