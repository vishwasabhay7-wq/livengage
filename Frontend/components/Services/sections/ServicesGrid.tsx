import { DetailedServiceCard } from './DetailedServiceCard';

type AccentColor = 'primary' | 'secondary' | 'tertiary';

interface ServiceItem {
  id?: number;
  icon?: string;
  title?: string;
  description?: string;
  features?: Array<{ id: number; text: string }>;
  linkText?: string;
  href?: string;
  accentColor?: AccentColor;
}

interface ServicesGridProps {
  data?: {
    items?: ServiceItem[];
  }
}

export function ServicesGrid({ data }: ServicesGridProps) {
  const normalized = {
    ...data,
    items: ((data as any)?.Items || data?.items) as NonNullable<ServicesGridProps['data']>['items'],
  };

  if (!normalized || !normalized.items || normalized.items.length === 0) return null;

  return (
    <section className="py-[80px] max-w-[1280px] mx-auto px-[32px] relative z-20" aria-labelledby="services-grid-heading">
      {/* Dark mode full bleed background */}
      <div className="absolute inset-0 bg-[#150222]/50 -mx-[50vw] -z-10 py-24 hidden dark:block"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {normalized.items.map((service, index) => (
          <DetailedServiceCard key={service.id || index} {...service} />
        ))}
      </div>
    </section>
  );
}
