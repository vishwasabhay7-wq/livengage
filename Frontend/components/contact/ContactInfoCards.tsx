interface ContactChannelItem {
  id?: number;
  icon?: string;
  themeColor?: 'primary' | 'secondary' | 'tertiary';
  title?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
}

interface ContactInfoCardsProps {
  data?: {
    items?: ContactChannelItem[];
  }
}

export function ContactInfoCards({ data }: ContactInfoCardsProps) {
  if (!data || !data.items || data.items.length === 0) return null;

  return (
    <div className="space-y-gutter">
      {data.items.map((channel, index) => {
        const bgClass = channel.themeColor === 'secondary' ? 'bg-secondary/10' : channel.themeColor === 'tertiary' ? 'bg-tertiary/10' : 'bg-primary/10';
        const colorClass = channel.themeColor === 'secondary' ? 'text-secondary' : channel.themeColor === 'tertiary' ? 'text-tertiary' : 'text-primary';
        
        return (
          <div
            key={channel.id || channel.title || index}
            className="bg-surface dark:bg-[#1F0233] border border-outline-variant/20 dark:border-white/10 p-stack-lg rounded-[18px] hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all duration-300 reveal-on-scroll"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {channel.icon && (
              <div
                className={`w-16 h-16 ${bgClass} rounded-2xl flex items-center justify-center ${colorClass} mb-stack-md`}
              >
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{
                    fontVariationSettings: channel.icon === 'location_on' ? "'FILL' 1" : undefined,
                  }}
                  aria-hidden="true"
                >
                  {channel.icon}
                </span>
              </div>
            )}
            {channel.title && <h3 className="text-2xl font-bold mb-2 text-on-surface dark:text-white">{channel.title}</h3>}
            {channel.description && <p className="text-base text-on-surface-variant dark:text-[#94A3B8] mb-4">{channel.description}</p>}
            {channel.linkText && channel.linkHref && (
              <a
                className={`${colorClass} font-semibold hover:underline transition-all`}
                href={channel.linkHref}
              >
                {channel.linkText}
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}
