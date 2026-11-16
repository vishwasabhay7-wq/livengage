type BenefitSpan = 'single' | 'wide';

interface BenefitCardProps {
  icon?: string;
  title?: string;
  description?: string;
  span?: BenefitSpan;
}

/**
 * BenefitCard — white bordered card for the "Why Live Stream with Us?" grid.
 * `span="wide"` applies `md:col-span-2` and a horizontal layout (icon left,
 * text right) for the featured Accelerated Onboarding card.
 *
 * Server Component.
 */
export function BenefitCard({ icon, title, description, span = 'single' }: BenefitCardProps) {
  const isWide = span === 'wide';

  return (
    <div
      className={`bg-surface dark:bg-[#2A0545] p-6 rounded-xl border border-outline-variant/30 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/50 transition-colors reveal-on-scroll ${
        isWide ? 'md:col-span-2' : ''
      }`}
    >
      {isWide ? (
        /* Wide variant: horizontal icon + text layout */
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          {icon && (
            <span className="material-symbols-outlined text-primary mb-4 md:mb-0 text-5xl block flex-shrink-0">{icon}</span>
          )}
          <div>
            {title && <h3 className="text-2xl font-semibold text-on-surface dark:text-white mb-2">{title}</h3>}
            {description && (
              <p className="text-sm text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      ) : (
        /* Single variant: stacked icon + text layout */
        <>
          {icon && (
            <span className="material-symbols-outlined text-primary mb-4 text-4xl block">{icon}</span>
          )}
          {title && <h3 className="text-2xl font-semibold text-on-surface dark:text-white mb-2">{title}</h3>}
          {description && (
            <p className="text-sm text-on-surface-variant dark:text-[#94A3B8] leading-relaxed">
              {description}
            </p>
          )}
        </>
      )}
    </div>
  );
}
