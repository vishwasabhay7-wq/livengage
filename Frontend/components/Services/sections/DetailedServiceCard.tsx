import Link from 'next/link';

type AccentColor = 'primary' | 'secondary' | 'tertiary';

interface DetailedServiceCardProps {
  icon?: string;
  title?: string;
  description?: string;
  features?: Array<string | { id?: number; text: string }>;
  linkText?: string;
  href?: string;
  accentColor?: AccentColor;
}

const accentMap: Record<AccentColor, {
  shadow: string;
  iconBg: string;
  iconText: string;
  checkText: string;
  linkText: string;
}> = {
  primary: {
    shadow: 'shadow-primary/5',
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    checkText: 'text-primary',
    linkText: 'text-primary',
  },
  secondary: {
    shadow: 'shadow-secondary/5',
    iconBg: 'bg-secondary/10',
    iconText: 'text-secondary',
    checkText: 'text-secondary',
    linkText: 'text-secondary',
  },
  tertiary: {
    shadow: 'shadow-tertiary-container/10', // user had blue-500, we'll map to tertiary
    iconBg: 'bg-tertiary-container/10',
    iconText: 'text-tertiary-container',
    checkText: 'text-tertiary-container',
    linkText: 'text-tertiary-container',
  },
};

export function DetailedServiceCard({
  icon,
  title,
  description,
  features,
  linkText,
  href,
  accentColor = 'primary',
  ...rest
}: DetailedServiceCardProps) {
  // Strapi v5 normalization for nested arrays
  const normalizedFeatures = features || (rest as any).Features;

  const accent = accentMap[accentColor] || accentMap.primary;

  // Hardcoded fallback icons based on title keywords if API doesn't provide one
  let displayIcon = icon;
  if (!displayIcon && title) {
    const t = title.toLowerCase();
    if (t.includes('recruitment') || t.includes('talent')) displayIcon = 'group_add';
    else if (t.includes('training') || t.includes('agent')) displayIcon = 'model_training';
    else if (t.includes('management') || t.includes('career')) displayIcon = 'trending_up';
    else if (t.includes('growth') || t.includes('scale')) displayIcon = 'rocket_launch';
    else if (t.includes('support')) displayIcon = 'support_agent';
    else displayIcon = 'workpaces';
  }

  return (
    <div
      className={`bg-surface dark:bg-[#1F0233]/60 dark:backdrop-blur-[16px] rounded-2xl p-8 shadow-xl ${accent.shadow} hover:-translate-y-2 transition-transform duration-300 border border-outline-variant/20 dark:border-[#7C3AED]/15 flex flex-col h-full reveal-on-scroll`}
    >
      {/* Icon */}
      {displayIcon && (
        <div
          className={`w-14 h-14 ${accent.iconBg} rounded-xl flex items-center justify-center mb-6`}
          aria-hidden="true"
        >
          <span className={`material-symbols-outlined text-2xl ${accent.iconText}`}>
            {displayIcon}
          </span>
        </div>
      )}

      {/* Title */}
      {title && (
        <h3 className="text-2xl font-bold text-on-surface dark:text-white mb-4">{title}</h3>
      )}

      {/* Description */}
      {description && (
        <p className="text-on-surface-variant dark:text-[#94A3B8] mb-8 flex-grow">
          {description}
        </p>
      )}

      {/* Feature list */}
      {normalizedFeatures && normalizedFeatures.length > 0 && (
        <ul className="space-y-3 mb-8" aria-label={`${title} features`}>
          {normalizedFeatures.map((feature: any, idx: number) => {
            const featureText = typeof feature === 'string' ? feature : feature.text;
            const key = typeof feature === 'string' ? feature : feature.id || idx;
            
            return (
              <li key={key} className="flex items-center gap-3 text-on-surface-variant dark:text-[#94A3B8]">
                <span
                  className={`material-symbols-outlined ${accent.checkText} text-sm`}
                  aria-hidden="true"
                >
                  check_circle
                </span>
                {featureText}
              </li>
            );
          })}
        </ul>
      )}

      {/* CTA */}
      {linkText && href && (
        <Link
          href={href}
          className={`inline-flex items-center gap-2 ${accent.linkText} font-semibold hover:gap-3 transition-all mt-auto`}
          aria-label={`${linkText} — ${title}`}
        >
          {linkText}
          <span
            className="material-symbols-outlined text-sm"
            aria-hidden="true"
          >
            arrow_forward
          </span>
        </Link>
      )}
    </div>
  );
}
