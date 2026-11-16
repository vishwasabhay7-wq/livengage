import { EcosystemStat } from '@/types/agent-ecosystem';

interface EcosystemStatsProps {
  stats: EcosystemStat[];
}

export function EcosystemStats({ stats }: EcosystemStatsProps) {
  return (
    <section className="py-12 bg-surface-container border-y border-outline-variant/50 dark:bg-surface-container/30 dark:border-outline-variant/30 dark:backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-between gap-12 text-center relative z-10">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="reveal-on-scroll relative group flex-1 min-w-[150px]" 
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="font-display-lg text-5xl md:text-6xl mb-4 font-black text-primary drop-shadow-[0_0_10px_rgba(124,58,237,0.5)] transition-all duration-500">
              {stat.value}
            </div>
            <div className="font-bold uppercase tracking-[0.2em] text-sm text-[#94A3B8] group-hover:text-white transition-colors duration-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
