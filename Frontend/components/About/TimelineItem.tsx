import { getMediaUrl } from '@/lib/api';
import Image from 'next/image';

interface TimelineItemProps {
  year?: string;
  title?: string;
  description?: string;
  image?: any;
  statValue?: string;
  statLabel?: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  layout?: 'left' | 'right';
}

export function TimelineItem({
  year,
  title,
  description,
  image,
  statValue,
  statLabel,
  color,
  layout,
}: TimelineItemProps) {
  // Handle null values from CMS, since default params only handle undefined
  const safeColor = color || 'primary';
  const safeLayout = layout || 'left';
  
  const isLeft = safeLayout === 'left';
  const imageUrl = getMediaUrl(image?.url || image?.data?.attributes?.url) || null;

  const colorMap = {
    primary: {
      bg: 'bg-primary-container',
      darkBg: 'dark:bg-primary-container',
      darkBorder: 'dark:border-primary-container',
      text: 'text-primary-container dark:text-primary',
      border: 'border-primary-container',
      shadow: 'dark:shadow-[0_0_15px_rgba(255,75,137,0.8)]'
    },
    secondary: {
      bg: 'bg-secondary-container',
      darkBg: 'dark:bg-secondary-container',
      darkBorder: 'dark:border-secondary-container',
      text: 'text-secondary-container dark:text-secondary',
      border: 'border-secondary-container',
      shadow: 'dark:shadow-[0_0_15px_rgba(93,3,202,0.8)]'
    },
    tertiary: {
      bg: 'bg-tertiary-container',
      darkBg: 'dark:bg-tertiary-container',
      darkBorder: 'dark:border-tertiary-container',
      text: 'text-tertiary-container dark:text-tertiary',
      border: 'border-tertiary-container',
      shadow: 'dark:shadow-[0_0_15px_rgba(0,160,170,0.8)]'
    },
  };
  const theme = colorMap[safeColor] || colorMap.primary;
  const renderContent = () => (
    <>
      {year && (
        <div className={`inline-block px-4 py-1.5 rounded-full ${theme.bg} dark:glass-card ${theme.darkBorder} text-white font-label-md text-label-md mb-4 shadow-md`}>
          {year}
        </div>
      )}
      {title && (
        <h3 className={`font-display-sm text-2xl font-bold ${theme.text} dark:text-white mb-3 tracking-tight`}>
          {title}
        </h3>
      )}
      {description && (
        <p className="font-body-md text-body-md text-on-surface-variant">
          {description}
        </p>
      )}
    </>
  );

  const renderVisual = () => {
    if (imageUrl) {
      return (
        <div className="glass-card p-2 rounded-2xl shadow-xl">
          <Image width={500} height={300} alt={title || 'Timeline image'} className="w-full h-auto rounded-xl" src={imageUrl} />
        </div>
      );
    }
    if (statValue || statLabel) {
      return (
        <div className={`text-center glass-card p-6 rounded-2xl`}>
          {statValue && (
            <div className={`font-display-md md:text-[64px] font-extrabold ${theme.text} dark:text-white dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-none`}>
              {statValue}
            </div>
          )}
          {statLabel && (
            <div className="font-label-md text-label-md text-on-surface-variant tracking-widest uppercase mt-2">
              {statLabel}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative flex flex-col md:flex-row md:items-center justify-between group mb-12 md:mb-0 pb-12 gap-8 md:gap-0">
      {/* Left Column (Content if layout is 'left', Visual if layout is 'right') */}
      <div className={`w-full pl-14 text-left md:pl-0 md:w-[45%] md:text-right md:pr-8`}>
        {isLeft ? renderContent() : renderVisual()}
      </div>

      {/* Center Node */}
      <div className={`absolute left-4 md:left-1/2 -ml-2 md:-ml-2 w-4 h-4 rounded-full bg-white ${theme.darkBg} border-4 dark:border-2 dark:border-white ${theme.border} shadow-lg ${theme.shadow} group-hover:scale-125 transition-transform z-10 hidden md:block`}></div>
      <div className={`absolute left-4 top-0 w-4 h-4 rounded-full bg-white ${theme.darkBg} border-4 dark:border-2 dark:border-white ${theme.border} shadow-lg ${theme.shadow} group-hover:scale-125 transition-transform z-10 md:hidden`}></div>


      {/* Right Column (Visual if layout is 'left', Content if layout is 'right') */}
      <div className={`w-full pl-14 text-left md:w-[45%] md:text-left md:pl-8`}>
        {isLeft ? renderVisual() : renderContent()}
      </div>
    </div>
  );
}
