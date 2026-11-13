import { FeatureCard } from './FeatureCard';

interface RequirementItem {
  id?: number;
  icon?: string;
  iconColorClass?: string;
  iconBgClass?: string;
  title?: string;
  description?: string;
}

interface RequirementsSectionProps {
  data?: {
    items?: RequirementItem[];
  }
}

export function RequirementsSection({ data }: RequirementsSectionProps) {
  if (!data || !data.items || data.items.length === 0) return null;

  return (
    <section className="py-section bg-surface pt-[80px] pb-[80px]" id="requirements">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-stack-md">
            Streaming Requirements
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            We seek charismatic individuals who can captivate a global audience. Check if you have what it takes to be an EliteStaff streamer.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {data.items.map((req, idx) => (
            <FeatureCard key={req.id || req.title || idx} {...req} />
          ))}
        </div>
      </div>
    </section>
  );
}
