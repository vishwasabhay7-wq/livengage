interface ValueCardProps {
  icon?: string;
  title?: string;
  description?: string;
  bgColor?: string;
  iconColor?: string;
  index?: number;
}

export function ValueCard({
  icon,
  title,
  description,
  bgColor,
  iconColor,
  index = 0,
}: ValueCardProps) {
  const fallbacks = [
    { bg: 'bg-secondary-fixed', icon: 'text-on-secondary-fixed' },
    { bg: 'bg-primary-fixed', icon: 'text-on-primary-fixed' },
    { bg: 'bg-tertiary-fixed', icon: 'text-on-tertiary-fixed' },
  ];
  
  const currentFallback = fallbacks[index % fallbacks.length];

  return (
    <div className="flex flex-col items-center text-center p-stack-lg">
      {icon && (
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mb-stack-md ${bgColor || currentFallback.bg}`}
        >
          <span
            className={`material-symbols-outlined ${iconColor || currentFallback.icon}`}
            data-weight="fill"
            aria-hidden="true"
          >
            {icon}
          </span>
        </div>
      )}
      {title && (
        <h4 className="font-headline-lg text-headline-lg text-primary mb-2">
          {title}
        </h4>
      )}
      {description && (
        <p className="text-on-surface-variant reveal-on-scroll">
          {description}
        </p>
      )}
    </div>
  );
}
