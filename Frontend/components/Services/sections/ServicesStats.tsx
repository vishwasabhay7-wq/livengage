interface StatItem {
  id?: number;
  value?: string;
  label?: string;
}

interface ServicesStatsProps {
  data?: {
    stats?: StatItem[];
  }
}

export function ServicesStats({ data }: ServicesStatsProps) {
  const normalized = {
    ...data,
    stats: ((data as any).Stats || data?.stats) as NonNullable<ServicesStatsProps['data']>['stats'],
  };

  if (!normalized || !normalized.stats || normalized.stats.length === 0) return null;

  return (
    <section className="py-[80px] border-t border-outline-variant/20 dark:border-[#3B0764]/30 dark:border-b" aria-label="Service key statistics">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center dark:divide-y dark:md:divide-y-0 dark:md:divide-x dark:divide-[#3B0764]/50">
          {normalized.stats.map((stat, index) => (
            <div key={stat.id || stat.label || index} className="dark:pt-8 dark:md:pt-0">
              {stat.value && (
                <div className="text-6xl font-extrabold text-primary mb-2">
                  {stat.value}
                </div>
              )}
              {stat.label && (
                <div className="text-sm font-bold text-gray-600 dark:text-[#94A3B8] uppercase tracking-widest">
                  {stat.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
