import { cn } from '@/lib/utils';

interface IntegrationFeature {
  id: number;
  icon: string;
  title: string;
  description?: string;
}

interface SeamlessIntegrationProps {
  data?: {
    title: string;
    description: string;
    Features?: IntegrationFeature[];
  };
}

export function SeamlessIntegration({ data }: SeamlessIntegrationProps) {
  if (!data) return null;

  return (
    <section className="py-section bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          
          <div>
            <h2 className="font-headline-xl text-3xl md:text-headline-xl text-on-surface mb-stack-md">
              {data.title || 'Seamless Integration'}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
              {data.description || 'EliteStaff provides the bridge between platform potential and executive staffing.'}
            </p>
            <div className="space-y-4">
              {(data.Features || []).map((feature, i) => (
                <div key={feature.id || i} className="flex items-center gap-3 p-4 rounded-xl glass-card">
                  <span className="material-symbols-outlined text-primary">
                    {feature.icon || 'check_circle'}
                  </span>
                  <span className="font-semibold text-on-surface">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative mt-8 md:mt-0">
            <div className="glass-card rounded-[32px] p-8 shadow-2xl border border-white/30 dark:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface">System Dashboard</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center gap-2 w-fit">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  API Status: Active
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="h-4 w-3/4 bg-on-surface/5 dark:bg-on-surface/10 rounded-full" />
                <div className="h-4 w-1/2 bg-on-surface/5 dark:bg-on-surface/10 rounded-full" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 rounded-xl bg-primary/5 dark:bg-primary/20" />
                  <div className="h-20 rounded-xl bg-secondary/5 dark:bg-secondary/20" />
                  <div className="h-20 rounded-xl bg-tertiary/5 dark:bg-tertiary/20" />
                </div>
                <div className="h-32 rounded-xl bg-on-surface/5 dark:bg-on-surface/10" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
