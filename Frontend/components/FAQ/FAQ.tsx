interface Props {
  data?: any;
}

export function FAQ({ data }: Props) {
  const faqData = data as any;
  if (!faqData || !faqData.faqs || faqData.faqs.length === 0) return null;

  return (
    <section className="py-[80px] bg-surface-container-lowest mesh-gradient dark:!bg-none dark:bg-transparent relative">
      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">
        {faqData.heading && (
          <h2 className="font-display-md text-display-md mb-16 text-center text-on-surface dark:text-white">{faqData.heading}</h2>
        )}
        <div className="space-y-6">
          {faqData.faqs.map((faq: any, idx: number) => (
            <details key={idx} className="glass-card rounded-2xl overflow-hidden group marker:hidden border border-outline-variant dark:border-white/10 dark:hover:border-primary-container/50 transition-colors shadow-lg dark:shadow-none reveal-on-scroll">
              <summary className="cursor-pointer w-full px-8 py-8 flex items-center justify-between text-left transition-colors list-none select-none dark:hover:bg-white/5">
                <span className="font-headline-lg text-xl font-bold text-on-surface dark:text-white pr-8">{faq.question}</span>
                <div className="w-12 h-12 rounded-full bg-primary-container/30 dark:bg-surface-container-lowest flex items-center justify-center shrink-0 border border-primary/20 dark:border-outline-variant group-open:bg-primary group-open:dark:bg-primary group-open:border-transparent transition-all group-open:rotate-180">
                  <span className="material-symbols-outlined text-primary group-open:text-white transition-colors">keyboard_arrow_down</span>
                </div>
              </summary>
              <div className="pb-8 pt-0 text-on-surface-variant dark:text-white/70 leading-relaxed text-lg border-t border-outline-variant/50 dark:border-white/10 mt-2 mx-8 opacity-90">
                <div className="pt-6">
                  {faq.answer}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
