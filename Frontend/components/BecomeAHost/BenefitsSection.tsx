import { BenefitCard } from './BenefitCard';

type BenefitSpan = 'featured-top' | 'standard' | 'featured-bottom';

interface BenefitItem {
  id?: number;
  layoutVariant?: BenefitSpan;
  icon?: string;
  iconColorClass?: string;
  title?: string;
  description?: string;
}

interface BenefitsSectionProps {
  data?: {
    items?: BenefitItem[];
  }
}

export function BenefitsSection({ data }: BenefitsSectionProps) {
  if (!data || !data.items || data.items.length === 0) return null;

  return (
    <section className="py-section bg-surface-container-lowest pb-[80px] pt-[80px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {data.items.map((benefit, idx) => (
            <BenefitCard key={benefit.id || benefit.title || idx} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
