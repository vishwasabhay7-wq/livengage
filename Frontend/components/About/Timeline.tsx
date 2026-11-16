import { TimelineItem } from './TimelineItem';

interface TimelineProps {
  data?: {
    heading?: string;
    items?: Array<{
      id?: number;
      year?: string;
      title?: string;
      description?: string;
      image?: any;
      statValue?: string;
      statLabel?: string;
      color?: 'primary' | 'secondary' | 'tertiary';
      layout?: 'left' | 'right';
    }>;
  }
}

export function Timeline({ data }: TimelineProps) {
  if (!data) return null;

  const normalized = {
    ...data,
    items: ((data as any)?.Items || data?.items) as NonNullable<TimelineProps['data']>['items'],
  };

  if (!normalized.items || normalized.items.length === 0) return null;

  const { heading, items } = normalized;
  return (
    <section className="py-[80px] bg-surface-container-low dark:bg-transparent relative">
      <div className="absolute hidden dark:block top-1/2 left-0 w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[150px] -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 relative z-10">
          {heading && (
            <h2 className="font-display-md text-4xl md:text-5xl font-black text-on-surface dark:text-white mb-6 tracking-tight drop-shadow-sm">
              {heading}
            </h2>
          )}
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary-container mx-auto rounded-full shadow-sm"></div>
        </div>
        <div className="relative max-w-5xl mx-auto z-10">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-[50%] md:-translate-x-1/2 top-0 bottom-0 w-1 md:w-0.5 bg-gradient-to-b from-secondary-container via-primary-container to-secondary-container dark:to-tertiary-container opacity-30 dark:opacity-50 rounded-full"></div>
          
          <div className="space-y-32">
            {items.map((item, index) => (
              <TimelineItem key={item.id || index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
