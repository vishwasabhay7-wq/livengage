import Image from 'next/image';
import { HOME_PAGE_DATA } from '@/data/home';
import { getMediaUrl } from '@/lib/strapi/client';

interface Props {
  data?: any;
}

export function Testimonials({ data: propsData }: Props) {
  const data = propsData as any;
  if (!data || !data.testimonials || data.testimonials.length === 0) return null;

  return (
    <section className="py-[80px] bg-surface-container-lowest mesh-gradient dark:!bg-none dark:bg-transparent relative">
      <div className="hidden dark:block absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant dark:glass-card dark:border-none mb-4">
            <span className="text-[12px] font-bold uppercase tracking-widest text-primary dark:text-on-surface-variant">{data?.badge}</span>
          </div>
          <h2 className="font-display-md text-display-md text-on-surface dark:text-white">{data.heading}</h2>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 -mx-4 px-4 sm:-mx-8 sm:px-8 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {data.testimonials.map((testimonial: any, idx: number) => (
            <div key={idx} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333333%-1.33rem)] shrink-0 snap-center glass-card p-8 rounded-xl flex flex-col gap-6 reveal-on-scroll border border-outline-variant dark:border-white/10 dark:hover:border-secondary-container/50 transition-colors">
              <div className="flex text-primary dark:text-secondary-container dark:drop-shadow-[0_0_8px_rgba(218,38,118,0.8)]">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined">star</span>
                ))}
              </div>
              <p className="text-on-surface-variant italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                {testimonial.avatar?.src?.url ? (
                  <img alt={testimonial.avatar.alt || testimonial.author} width={48} height={48} className="w-12 h-12 rounded-full object-cover border border-outline-variant dark:border-white/20" src={getMediaUrl(testimonial.avatar.src.url) as string} />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary-container/50 dark:bg-secondary-container/20 border border-primary/30 dark:border-secondary-container/30 flex items-center justify-center text-primary dark:text-secondary-container font-bold">
                    {testimonial.author.substring(0, 2).toUpperCase()}
                  </div>
                )}
                <div>
                  <p className="font-bold text-on-surface dark:text-white">{testimonial.author}</p>
                  <p className="text-xs font-label-md text-primary dark:text-secondary-container uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
