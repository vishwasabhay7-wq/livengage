import Link from 'next/link';

export function PartnerAppSupport({ data }: { data: any }) {
  if (!data) return null;
  const {
    badgeText,
    title,
    description,
    primaryCtaLabel,
    primaryCtaUrl,
    secondaryCtaLabel,
    secondaryCtaUrl,
    phone,
    email
  } = data;

  const showPrimaryBtn = primaryCtaLabel && primaryCtaUrl;
  const showSecondaryBtn = secondaryCtaLabel && secondaryCtaUrl;

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-background dark:bg-transparent">
      <div className="bg-gradient-to-br from-primary/5 via-surface to-primary/5 dark:from-[#0B0114] dark:via-[#1a0a2e] dark:to-[#0B0114] rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-lg dark:shadow-[0_0_50px_rgba(124,58,237,0.1)] border border-outline-variant dark:border-white/10 reveal-on-scroll">
        {/* Animated Glows */}
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-tertiary/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        {/* Inner Border Glow */}
        <div className="absolute inset-0 border border-primary/10 dark:border-white/5 rounded-[40px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="max-w-xl">
            {badgeText && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-8 font-bold text-xs text-primary uppercase tracking-[0.2em] backdrop-blur-md border border-primary/20">
                <span className="material-symbols-outlined text-sm">support_agent</span>
                {badgeText}
              </div>
            )}
            
            {title && <h2 className="font-display-lg text-4xl md:text-5xl font-bold text-on-surface dark:text-white mb-6 tracking-tight">{title}</h2>}
            
            {description && (
              <p className="font-body-lg text-lg text-on-surface-variant dark:text-[#94A3B8] leading-relaxed mb-10">{description}</p>
            )}
            
            {(showPrimaryBtn || showSecondaryBtn) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {showPrimaryBtn && (
                  <Link href={primaryCtaUrl} className="btn-gradient px-8 py-4 rounded-full text-white font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-[0_4px_15px_rgba(124,58,237,0.3)] dark:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    <span className="material-symbols-outlined text-[20px]">phone_callback</span>
                    {primaryCtaLabel}
                  </Link>
                )}
                {showSecondaryBtn && (
                  <Link href={secondaryCtaUrl} className="px-8 py-4 rounded-full border border-outline dark:border-white/20 bg-surface dark:bg-surface-container-lowest/10 backdrop-blur-md text-on-surface dark:text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-surface-container-lowest dark:hover:bg-white/10 transition-colors shadow-lg">
                    <svg className="w-5 h-5 text-[#25D366] drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                    </svg>
                    {secondaryCtaLabel}
                  </Link>
                )}
              </div>
            )}
          </div>
          
          {(phone || email) && (
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/40 dark:border-white/10 w-full max-w-sm shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] relative group hover:-translate-y-2 transition-transform duration-500">
              {/* Inner ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]"></div>

              {phone && (
                <div className={`flex items-center gap-5 relative z-10 ${email ? 'mb-6 pb-6 border-b border-outline-variant/30 dark:border-white/10' : ''}`}>
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30 shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl drop-shadow-md">contact_phone</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-widest text-on-surface-variant dark:text-[#94A3B8] mb-1">Direct Line</p>
                    <p className="font-bold text-on-surface dark:text-white text-xl">{phone}</p>
                  </div>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-14 h-14 bg-tertiary/20 rounded-2xl flex items-center justify-center border border-tertiary/30 shrink-0">
                    <span className="material-symbols-outlined text-tertiary text-2xl drop-shadow-md">mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-widest text-on-surface-variant dark:text-[#94A3B8] mb-1">Email Support</p>
                    <p className="font-bold text-on-surface dark:text-white text-xl">{email}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
