export function PartnerAppFaq({ data }: { data: any }) {
  if (!data?.faqs || data.faqs.length === 0) return null;
  const { title, titleHighlight, faqs } = data;

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-background dark:bg-transparent relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 blur-[150px] pointer-events-none -z-10 rounded-full"></div>

      {(title || titleHighlight) && (
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="font-display-lg text-4xl md:text-5xl text-on-surface dark:text-white mb-6 tracking-tight">
            {title && <>{title} </>}
            {titleHighlight && <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{titleHighlight}</span>}
          </h2>
        </div>
      )}

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq: any, idx: number) => (
          <div 
            key={faq.id || idx} 
            className="group relative bg-surface dark:bg-surface-container-lowest/5 backdrop-blur-md border border-outline-variant dark:border-white/10 rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-1 dark:hover:bg-surface-container-lowest/10 shadow-sm hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] reveal-on-scroll"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {/* Glowing left border accent on hover */}
            <div className="absolute top-8 bottom-8 left-0 w-1 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-full"></div>

            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary mt-1 shrink-0 drop-shadow-md">
                help
              </span>
              <div>
                {faq.question && (
                  <h4 className="font-display-sm text-xl font-bold text-on-surface dark:text-white mb-3 tracking-wide group-hover:text-primary transition-colors">{faq.question}</h4>
                )}
                {faq.answer && (
                  <p className="font-body-md text-on-surface-variant dark:text-[#94A3B8] leading-relaxed text-base">{faq.answer}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
