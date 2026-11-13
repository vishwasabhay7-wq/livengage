import Link from 'next/link';

type AccentColor = 'primary' | 'tertiary';
type CardVariant = 'primary' | 'dark';

interface RoleCardProps {
  icon?: string;
  decorativeIcon?: string;
  title?: string;
  description?: string;
  features?: Array<string | { id?: number; text: string }>;
  ctaLabel?: string;
  ctaHref?: string;
  accentColor?: AccentColor;
  variant?: CardVariant;
}

const accentMap: Record<AccentColor, { iconBg: string; iconText: string; checkText: string; btnClass: string }> = {
  primary: {
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    checkText: 'text-primary',
    btnClass: 'btn-gradient text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] border-none',
  },
  tertiary: {
    iconBg: 'bg-tertiary/10',
    iconText: 'text-tertiary',
    checkText: 'text-tertiary',
    btnClass: '.bg-surface-container border border-outline-variant text-on-surface dark:text-white',
  },
};

export function RoleCard({
  icon,
  decorativeIcon,
  title,
  description,
  features,
  ctaLabel,
  ctaHref,
  accentColor = 'primary',
  variant = 'primary',
}: RoleCardProps) {
  const accent = accentMap[accentColor] || accentMap.primary;

  return (
    <article className="bg-surface dark:bg-[#1F0233] border border-outline-variant/20 dark:border-transparent dark:electric-border p-8 rounded-xl flex flex-col h-full relative group transition-all duration-300 dark:hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:shadow-xl reveal-on-scroll z-0">
      
      {/* Decorative background icon */}
      {decorativeIcon && (
        <div
          className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-110 transition-transform pointer-events-none select-none -z-10"
          aria-hidden="true"
        >
          <span className="material-symbols-outlined text-[120px]">{decorativeIcon}</span>
        </div>
      )}

      <div className="relative z-10 flex-grow">
        {/* Icon */}
        {icon && (
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${accent.iconBg} ${accent.iconText}`}
            aria-hidden="true"
          >
            <span className="material-symbols-outlined text-2xl">
              {icon}
            </span>
          </div>
        )}

        {/* Title */}
        {title && <h2 className="text-3xl font-bold text-on-surface dark:text-white mb-4">{title}</h2>}

        {/* Description */}
        {description && (
          <p className="text-base text-on-surface-variant dark:text-[#94A3B8] mb-8">
            {description}
          </p>
        )}

        {/* Feature list */}
        {features && features.length > 0 && (
          <ul className="space-y-4 mb-8" aria-label={`${title} benefits`}>
            {features.map((feature, idx) => {
              const featureText = typeof feature === 'string' ? feature : feature.text;
              const key = typeof feature === 'string' ? feature : feature.id || idx;

              return (
                <li key={key} className="flex items-center gap-3">
                  <span
                    className={`material-symbols-outlined ${accent.checkText}`}
                    aria-hidden="true"
                  >
                    check_circle
                  </span>
                  <span className="text-base text-on-surface dark:text-[#E2E8F0]">{featureText}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* CTA Button */}
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className={`relative z-10 w-full py-4 rounded-full font-semibold text-center transition-all hover:opacity-90 ${accent.btnClass}`}
        >
          {ctaLabel}
        </Link>
      )}
    </article>
  );
}
