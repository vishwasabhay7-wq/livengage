import { getMediaUrl } from '@/lib/api';

export function PartnerAppTestimonials({ data }: { data: any }) {
  if (!data?.testimonials || data.testimonials.length === 0) return null;
  const { title, titleHighlight, description, testimonials } = data;

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-background dark:bg-transparent">
      {(title || titleHighlight || description) && (
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
          <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface dark:text-white mb-6 tracking-tight">
            {title && <>{title} </>}
            {titleHighlight && <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{titleHighlight}</span>}
          </h2>
          {description && (
            <p className="font-body-lg text-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 -mx-4 px-4 sm:-mx-12 sm:px-12 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {testimonials.map((testimonial: any, idx: number) => (
          <div 
            key={testimonial.id || idx} 
            className="w-[90vw] md:w-[600px] lg:w-[calc(50%-1rem)] max-w-full shrink-0 snap-center relative bg-surface dark:bg-surface-container-lowest/5 backdrop-blur-xl border border-outline-variant dark:border-white/10 rounded-[32px] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 dark:hover:bg-surface-container-lowest/10 group shadow-lg dark:shadow-[0_0_30px_rgba(255,255,255,0.02)] dark:hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] flex flex-col md:flex-row gap-8 reveal-on-scroll"
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {testimonial.avatar?.url && (
              <div className="relative shrink-0 w-24 h-24">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[10px] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  alt="Testimonial author" 
                  className="relative w-full h-full rounded-full object-cover border-2 border-white/20 z-10" 
                  src={getMediaUrl(testimonial.avatar.url) || ''}
                />
              </div>
            )}
            <div>
              <div className="flex text-[#FFD700] mb-4">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-xl drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              {testimonial.quote && (
                <p className="font-body-lg text-on-surface-variant dark:text-[#CBD5E1] italic mb-6 leading-relaxed text-lg">"{testimonial.quote}"</p>
              )}
              {testimonial.author && (
                <p className="font-bold text-lg text-on-surface dark:text-white">{testimonial.author}</p>
              )}
              {testimonial.role && (
                <p className="text-sm font-medium uppercase tracking-widest text-primary mt-1">{testimonial.role}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
