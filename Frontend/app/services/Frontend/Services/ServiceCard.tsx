import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { getMediaUrl } from '@/lib/api';
import type { ServiceCardProps } from './Services.types';

/**
 * Individual service card.
 *
 * Supports two visual variants:
 * - "default": glassmorphic card with primary-coloured link
 * - "primary": solid primary-blue card for the highlighted middle service
 *
 * The optional `staggered` prop adds `md:translate-y-12` to create the
 * masonry offset effect in the 3-column grid.
 */
export function ServiceCard({
  title,
  description,
  iconImage,
  linkText,
  href,
  variant = 'default',
  staggered = false,
}: ServiceCardProps) {
  const isPrimary = variant === 'primary';

  return (
    <div
      className={cn(
        // Base layout — glass-card intentionally excluded from primary variant:
        // glass-card sets its own `background` in unlayered CSS which wins over
        // Tailwind's bg-primary utility (in @layer utilities), making the card
        // appear transparent-white instead of solid blue.
        'p-10 rounded-[2rem] flex flex-col justify-between h-[450px]',
        'transition-all group reveal-on-scroll',
        isPrimary
          ? 'bg-primary text-on-primary shadow-2xl shadow-primary/20'
          : 'glass-card hover:border-primary/30',
        staggered && 'md:mt-12'
      )}
    >
      {/* Icon block */}
      <div>
        <div
          className={cn(
            'relative w-16 h-16 rounded-2xl flex items-center justify-center mb-8 overflow-hidden',
            'group-hover:scale-110 transition-transform',
            isPrimary ? 'bg-on-primary/10 text-on-primary' : 'bg-primary-fixed/30 text-primary'
          )}
          aria-hidden="true"
        >
          {iconImage?.url && (
            <Image
              src={getMediaUrl(iconImage.url) || ''}
              alt={iconImage.alternativeText || 'Service icon'}
              fill
              className="object-cover"
              sizes="64px"
            />
          )}
        </div>

        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className={cn(isPrimary ? 'text-on-primary/80' : 'text-on-surface-variant')}>
          {description}
        </p>
      </div>

      {/* CTA link */}
      <Link
        href={href}
        className={cn(
          'inline-flex items-center gap-2 font-bold group',
          isPrimary ? 'text-on-primary' : 'text-primary'
        )}
        aria-label={`${linkText} — ${title}`}
      >
        {linkText}
        <span
          className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
          aria-hidden="true"
        >
          arrow_forward
        </span>
      </Link>
    </div>
  );
}
