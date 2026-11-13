type AccentColor = 'primary' | 'secondary' | 'tertiary' | 'outline';

interface PartnerAppTileProps {
  icon?: string;
  title?: string;
  badge?: string;
  name?: string;
  description?: string;
  accentColor?: AccentColor;
}

const colorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-[#2563EB]', // equivalent to text-blue-600
  outline: 'text-gray-800',
};

export function PartnerAppTile({ icon, title, badge, name, description, accentColor = 'primary' }: PartnerAppTileProps) {
  const iconColor = colorMap[accentColor] || colorMap.primary;

  // Map Strapi fields (name = badge, description = title) to component expectations
  const displayBadge = badge || name;
  const displayTitle = (title || description)?.trim();

  let displayIcon = icon;
  if (!displayIcon && displayTitle) {
    const t = displayTitle.toLowerCase();
    if (t.includes('chamet')) displayIcon = 'videocam';
    else if (t.includes('poppo')) displayIcon = 'forum';
    else if (t.includes('niki')) displayIcon = 'star';
    else displayIcon = 'more_horiz';
  }

  return (
    <div className="bg-surface-container-lowest dark:bg-white rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(124,58,237,0.1)] transition-all duration-300 border border-outline-variant/20 dark:border-transparent">
      {displayIcon && (
        <div className={`w-16 h-16 rounded-full bg-white dark:bg-primary/10 shadow-sm dark:shadow-none flex items-center justify-center ${iconColor}`}>
          <span
            className="material-symbols-outlined text-3xl"
            aria-hidden="true"
          >
            {displayIcon}
          </span>
        </div>
      )}
      {displayBadge && <span className="text-xs font-semibold text-gray-500 dark:text-[#475569] uppercase tracking-widest">{displayBadge}</span>}
      {displayTitle && <h4 className="font-bold text-lg dark:text-[#0F172A]">{displayTitle}</h4>}
    </div>
  );
}
