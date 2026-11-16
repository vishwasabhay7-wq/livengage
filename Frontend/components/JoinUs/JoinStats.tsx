interface StatItem {
  id?: number;
  value?: string;
  label?: string;
}

interface JoinStatsProps {
  data?: {
    stats?: StatItem[];
  }
}

/**
 * JoinStats — 4-column white stats strip with large display numbers.
 * Uses a 2×4 responsive grid (2 cols on mobile, 4 on desktop).
 *
 * Server Component.
 */
export function JoinStats({ data }: JoinStatsProps) {
  if (!data || !data.stats || data.stats.length === 0) return null;

  return (
    <section className="border-y border-outline-variant/20 dark:border-[#3B0764]/30 bg-surface dark:bg-[#150222] py-16" aria-label="Key statistics">
      <div className="max-w-[1280px] mx-auto px-[32px] grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {data.stats.map((stat, index) => (
          <div key={stat.id || stat.label || index} className="reveal-on-scroll">
            {stat.value && (
              <div className="text-5xl font-bold text-primary mb-2 leading-none">
                {stat.value}
              </div>
            )}
            {stat.label && (
              <div className="text-sm font-semibold text-on-surface-variant dark:text-[#94A3B8] uppercase tracking-widest">
                {stat.label}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
