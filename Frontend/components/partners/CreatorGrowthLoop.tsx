import { cn } from '@/lib/utils';

interface GrowthStep {
  id: number;
  icon: string;
  title: string;
  description: string;
  iconBackgroundColor?: string;
}

interface CreatorGrowthLoopProps {
  data?: {
    title: string;
    subtitle: string;
    steps: GrowthStep[];
  };
}

export function CreatorGrowthLoop({ data }: CreatorGrowthLoopProps) {
  if (!data || !data.steps || data.steps.length === 0) return null;

  const getStepColorClass = (index: number) => {
    const defaults = ['btn-gradient', 'bg-secondary', 'bg-tertiary'];
    return defaults[index % defaults.length];
  };

  return (
    <section className="py-section bg-surface">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="text-center mb-section">
          <h2 className="font-headline-xl text-3xl md:text-headline-xl text-on-surface mb-stack-md">
            {data.title || 'The Creator Growth Loop'}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {data.subtitle || 'How Chamet accelerates talent from discovery to global influence.'}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-tertiary opacity-20 hidden md:block" />
          
          <div className="space-y-12">
            {data.steps.map((step, i) => (
              <div key={step.id || i} className="relative flex flex-col md:flex-row gap-8 items-start">
                <div 
                  className={cn(
                    "w-16 h-16 rounded-full text-white flex items-center justify-center z-10 shrink-0 shadow-lg",
                    getStepColorClass(i)
                  )}
                >
                  <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-headline-lg text-2xl md:text-headline-lg mb-2 text-on-surface">{step.title}</h3>
                  <p className="font-body-lg text-on-surface-variant">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
