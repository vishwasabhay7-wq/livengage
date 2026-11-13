import Link from 'next/link';

interface Props {
  data?: any;
}

export function Services({ data }: Props) {
  const servicesArray = (data as any)?.services || [];
  if (servicesArray.length === 0) return null;

  return (
    <section className="py-[80px] bg-surface-container-lowest mesh-gradient dark:!bg-none dark:bg-transparent relative">
      <div className="hidden dark:block absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[150px] -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          {(data as any)?.heading && (
            <h2 className="font-display-md text-display-md mb-6 text-on-surface dark:text-white">{(data as any).heading}</h2>
          )}
          {(data as any)?.description && (
            <p className="font-body-lg text-on-surface-variant">{(data as any).description}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesArray.map((service: any, idx: number) => {
            // Service 2: Staggered with btn-gradient
            if (idx === 1) {
              return (
                <div key={idx} className="btn-gradient dark:!bg-none dark:glass-card border border-primary/20 dark:border-secondary-container/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] p-10 rounded-xl flex flex-col justify-between h-[450px] md:translate-y-8 hover:border-primary/50 dark:hover:border-secondary-container/50 transition-all group text-white reveal-on-scroll glowing-border">
                  <div>
                    <div className="w-16 h-16 rounded-lg bg-white/20 dark:bg-secondary-container/20 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform dark:border dark:border-secondary-container/50 dark:shadow-[0_0_20px_rgba(218,38,118,0.2)]">
                      <span className="material-symbols-outlined text-3xl">{service.icon || 'hub'}</span>
                    </div>
                    {service.title && <h3 className="font-headline-lg text-3xl font-bold mb-4 text-white">{service.title}</h3>}
                    {service.description && <p className="text-white/90 dark:text-on-surface-variant">{service.description}</p>}
                  </div>
                  {service.linkText && (
                    <Link href={service.href || '#'} className="inline-flex items-center gap-2 font-bold text-white dark:group-hover:text-secondary-container transition-colors group">
                      {service.linkText} <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  )}
                </div>
              );
            }

            // Normal Services
            return (
              <div key={idx} className="glass-card p-10 rounded-xl flex flex-col justify-between h-[450px] hover:border-primary/50 dark:hover:border-primary-container/50 transition-all group reveal-on-scroll shadow-xl">
                <div>
                  <div className="w-16 h-16 rounded-lg bg-primary-container/50 dark:bg-surface-container-lowest flex items-center justify-center text-primary dark:text-white mb-8 group-hover:scale-110 transition-transform border border-primary/20 dark:border-outline-variant dark:group-hover:shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                    <span className="material-symbols-outlined text-3xl">{service.icon || 'star'}</span>
                  </div>
                  {service.title && <h3 className="font-headline-lg text-3xl font-bold mb-4 text-on-surface dark:text-white">{service.title}</h3>}
                  {service.description && <p className="text-on-surface-variant">{service.description}</p>}
                </div>
                {service.linkText && (
                  <Link href={service.href || '#'} className="inline-flex items-center gap-2 font-bold text-primary dark:text-white dark:group-hover:text-primary-container transition-colors group">
                    {service.linkText} <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
