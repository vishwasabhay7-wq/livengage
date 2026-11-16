interface StatItem {
  id?: number;
  title?: string;
  subtitle?: string;
}

interface StatsSectionProps {
  data?: {
    stats?: StatItem[];
  }
}

export function StatsSection({ data }: StatsSectionProps) {
  if (!data || !data.stats || data.stats.length === 0) return null;

  return (
    <section className="bg-surface-container-low py-12 border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-gutter text-center">
        {data.stats.map((stat, idx) => (
          <div key={stat.id || stat.title || idx} className="reveal-on-scroll">
            {stat.title && (
              <div className="font-display-lg text-headline-xl text-primary leading-none mb-2">
                {stat.title}
              </div>
            )}
            {stat.subtitle && (
              <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
                {stat.subtitle}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
