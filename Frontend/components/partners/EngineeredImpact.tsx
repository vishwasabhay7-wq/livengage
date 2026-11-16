import { getMediaUrl } from '@/lib/api';
import { cn } from '@/lib/utils';

interface EngineeredImpactProps {
  data?: any;
}

export function EngineeredImpact({ data }: EngineeredImpactProps) {
  if (!data) return null;

  const card1ImageUrl = data.card1Image?.url 
    ? getMediaUrl(data.card1Image.url)
    : "https://lh3.googleusercontent.com/aida-public/AB6AXuApolzF1L9nMcYmnI7k67Zv5mb6NonmBl9_k6ev-KjkFJr6AWJHrUQY_lgXwSTQdsZrgMWbrYHSgVS8qHpkpsksO6vukLgbIVWHE5t-yldIywzvKZy_wRQp1qYO6UlaZESa8aj4xEVdMI136M40kq8n3ejraG0VhaxIxu2Az8Zm6vOQ9vOikc4Pz9_20vLU7HLVpmvpISHng-z6n71_l-Lnmjb1ttoQALMGKqrc5oWElAvGSvm2fkA";

  const card3ImageUrl = data.card3Image?.url 
    ? getMediaUrl(data.card3Image.url)
    : "https://lh3.googleusercontent.com/aida-public/AB6AXuATLsYTh3hPnVG4OysTLXWy6BaTr-5VY-Y-cvf_i3BzpjcCnZSOmZvyNBo2vmuQolwws9BOvqZBJmmQOVdC1Z21kZFZPjH3xIbqL4JuKRKFxfBKirc6U7ne_oT7km1AK1yrHiQV2LybrG6bZLyugr7rj2tDQVwa_s5dnA4HeGoOZ5ARKqgiUwJIotbhG8oCDZp6T06Op3R2S1AYEIL2Qzd84Dhfu6eYGkyz4XuNxT9TfQ8dXkBQwkM";

  return (
    <section className="py-section bg-surface-container-highest/30 dark:bg-surface/50 overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        <div className="mb-section text-center max-w-2xl mx-auto">
          <h2 className="font-headline-xl text-3xl md:text-headline-xl text-on-surface mb-stack-md">
            {data.title || 'Engineered for Impact'}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {data.subtitle || 'Sophisticated solutions designed for the high-stakes environment of global brand activation and live digital streaming.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          
          {/* Card 1: AI Moderation */}
          <div className="md:col-span-7 group relative rounded-[32px] overflow-hidden glass-card h-[480px]">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: `url('${card1ImageUrl}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-stack-lg flex flex-col justify-end">
              <div className="max-w-md">
                <span className="material-symbols-outlined text-primary mb-stack-sm text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                <h3 className="font-headline-lg text-2xl md:text-headline-lg text-white mb-stack-sm">
                  {data.card1Title || 'AI Moderation'}
                </h3>
                <p className="font-body-md text-white/80">
                  {data.card1Description || 'Real-time content filtering powered by advanced computer vision, ensuring a safe and premium environment for creators and users alike across 50+ languages.'}
                </p>
              </div>
            </div>
          </div>
          
          {/* Card 2: 1-on-1 Video */}
          <div className="md:col-span-5 glass-card rounded-[32px] p-stack-lg flex flex-col justify-between hover-lift border border-white/20 dark:border-white/10">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-stack-lg">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>videocam</span>
              </div>
              <h3 className="font-headline-lg text-2xl md:text-headline-lg mb-stack-md text-on-surface">
                {data.card2Title || '1-on-1 Video'}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {data.card2Description || 'Low-latency HD communication protocols that bridge the gap between continents, creating intimate, meaningful social experiences.'}
              </p>
            </div>
            <div className="mt-stack-lg pt-stack-lg border-t border-outline-variant">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-surface bg-slate-300" />
                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-surface bg-slate-400" />
                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-surface bg-slate-500" />
                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-surface bg-primary flex items-center justify-center text-white text-xs font-bold">
                  {data.card2MetricValue || '+2M'}
                </div>
              </div>
              <p className="text-label-md font-label-md mt-stack-md text-on-surface-variant uppercase">
                {data.card2MetricLabel || 'Active Daily Rooms'}
              </p>
            </div>
          </div>
          
          {/* Card 3: Global Gifting */}
          <div className="md:col-span-12 glass-card rounded-[32px] overflow-hidden p-0 flex flex-col md:flex-row min-h-[400px] border border-white/20 dark:border-white/10">
            <div className="md:w-1/2 p-stack-lg flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-stack-lg">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>card_giftcard</span>
              </div>
              <h3 className="font-headline-xl text-3xl md:text-headline-xl mb-stack-md text-on-surface">
                {data.card3Title || 'Global Gifting'}
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
                {data.card3Description || 'Integrated blockchain-backed gifting system allowing seamless value transfer between fans and creators. Interactive 3D gifts that enhance engagement and foster community loyalty.'}
              </p>
              
              <ul className="space-y-stack-sm">
                {(data.card3Features || [
                  { id: 1, icon: 'check_circle', title: 'Multi-currency instant conversion' },
                  { id: 2, icon: 'check_circle', title: '3D Augmented Reality Gift Assets' },
                  { id: 3, icon: 'check_circle', title: 'Creator-centric revenue distribution' }
                ]).map((feature: any, i: number) => (
                  <li key={feature.id || i} className="flex items-center gap-3 text-on-surface">
                    <span className="material-symbols-outlined text-primary">{feature.icon || 'check_circle'}</span>
                    {feature.title}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2 h-full relative min-h-[300px]">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url('${card3ImageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent hidden md:block" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
