type BenefitSpan = 'featured-top' | 'standard' | 'featured-bottom';

interface BenefitCardProps {
  layoutVariant?: BenefitSpan;
  icon?: string;
  iconColorClass?: string;
  title?: string;
  description?: string;
}

export function BenefitCard({ layoutVariant = 'standard', icon, iconColorClass = 'text-primary', title, description }: BenefitCardProps) {
  if (layoutVariant === 'featured-top') {
    return (
      <div className="md:col-span-2 bg-primary rounded-[1.5rem] p-12 text-white relative overflow-hidden group flex flex-col justify-end reveal-on-scroll">
        <div className="relative z-10">
          {title && <h3 className="font-headline-xl text-headline-xl mb-4">{title}</h3>}
          {description && (
            <p className="text-primary-fixed/80 text-body-lg max-w-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (layoutVariant === 'featured-bottom') {
    return (
      <div className="md:col-span-2 bg-tertiary-container rounded-[1.5rem] p-12 text-white relative overflow-hidden flex items-center reveal-on-scroll">
        <div className="flex-1 relative z-10">
          {title && <h3 className="font-headline-lg text-headline-lg mb-4">{title}</h3>}
          {description && (
            <p className="text-tertiary-fixed/80 text-body-md leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {icon && (
          <div className="hidden lg:block w-1/3 text-right" aria-hidden="true">
            <span className="material-symbols-outlined text-[120px] opacity-20">
              {icon}
            </span>
          </div>
        )}
      </div>
    );
  }

  // Standard square layout
  return (
    <div className="bg-surface-container p-10 rounded-[1.5rem] flex flex-col justify-between border border-outline-variant/30 reveal-on-scroll">
      {icon && (
        <div
          className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6"
          aria-hidden="true"
        >
          <span className={`material-symbols-outlined ${iconColorClass} text-3xl`}>
            {icon}
          </span>
        </div>
      )}
      <div>
        {title && <h3 className="font-headline-lg text-headline-lg mb-2 text-on-surface">{title}</h3>}
        {description && (
          <p className="text-on-surface-variant text-body-md leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
