import { BenefitCard } from './BenefitCard';

type BenefitSpan = 'single' | 'wide';

interface BenefitItem {
  id?: number;
  icon?: string;
  title?: string;
  description?: string;
  span?: BenefitSpan;
}

interface BenefitsSectionProps {
  data?: {
    eyebrow?: string;
    heading?: string;
    items?: BenefitItem[];
  }
}

/**
 * BenefitsSection — "Why Live Stream with Us?" bento grid.
 * Renders BenefitCard components in a responsive 3-column grid.
 * Cards with `span="wide"` automatically span 2 columns on desktop.
 *
 * Server Component.
 */
export function BenefitsSection({ data }: BenefitsSectionProps) {
  if (!data || !data.items || data.items.length === 0) return null;

  const { eyebrow, heading, items } = data;

  return (
    <section
      className="max-w-[1280px] mx-auto px-[32px] mb-[80px]"
      aria-labelledby="benefits-heading"
    >
      {/* Section header */}
      {(eyebrow || heading) && (
        <div className="text-center mb-16 reveal-on-scroll">
          {eyebrow && (
            <span className="text-tertiary font-semibold text-sm uppercase tracking-wider mb-2 block">
              {eyebrow}
            </span>
          )}
          {heading && (
            <h2 id="benefits-heading" className="text-4xl md:text-5xl font-bold text-on-surface dark:text-white">
              {heading}
            </h2>
          )}
        </div>
      )}

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <BenefitCard key={item.id || index} {...item} />
        ))}
      </div>
    </section>
  );
}
