import { StrategicAnalyticsContent } from '@/types/growth-strategy';

export function StrategicAnalytics({
  heading,
  description,
  features,
}: StrategicAnalyticsContent) {
  return (
    <section className="py-section pt-[80px] pb-[80px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-section reveal-on-scroll">
          <h2 className="font-headline-xl text-headline-xl text-primary dark:text-white font-bold transition-colors">
            {heading}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-white/70 max-w-2xl mx-auto mt-stack-sm transition-colors pb-[40px]">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          {/* Text Content */}
          <div className="md:col-span-5 reveal-on-scroll">
            <div className="space-y-stack-md">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-stack-sm">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      feature.colorClass === 'primary'
                        ? 'bg-primary-fixed text-primary'
                        : 'bg-tertiary-fixed text-tertiary'
                    }`}
                  >
                    <span className="material-symbols-outlined" aria-hidden="true">
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-lg text-body-lg font-bold text-on-surface dark:text-white transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-on-surface-variant dark:text-white/70 transition-colors">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract HUD Visual */}
          <div className="md:col-span-7 mt-12 md:mt-0 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="bg-surface-container/50 dark:bg-surface-container/10 border border-outline-variant/30 dark:border-white/10 backdrop-blur-md rounded-[18px] p-8 aspect-video relative overflow-hidden flex items-center justify-center transition-transform duration-500 hover:scale-[1.02] shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              
              {/* Decorative HUD Elements */}
              <div className="absolute top-4 left-4 p-3 bg-primary/10 rounded-lg border border-primary/20 backdrop-blur-md">
                <div className="text-[10px] text-primary font-bold uppercase tracking-widest">
                  Active Creators
                </div>
                <div className="text-xl font-mono font-bold text-on-surface dark:text-white">10,000+</div>
              </div>
              
              <div className="absolute bottom-4 right-4 p-3 bg-secondary/10 rounded-lg border border-secondary/20 backdrop-blur-md">
                <div className="text-[10px] text-secondary font-bold uppercase tracking-widest">
                  Global Apps
                </div>
                <div className="text-xl font-mono font-bold text-on-surface dark:text-white">5+ Top Tier</div>
              </div>
              
              {/* Central Abstract Ring */}
              <div className="w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center relative">
                <div className="w-24 h-24 rounded-full border border-tertiary/40 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-0 rounded-full border border-secondary/30 animate-[spin_15s_linear_infinite_reverse]" />
                <span className="material-symbols-outlined text-4xl text-primary/50 absolute">
                  radar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
