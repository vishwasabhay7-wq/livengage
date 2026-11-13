import Link from 'next/link';
import type { PartnerAppProps } from './PartnerApps.types';

/**
 * Individual partner app card with CSS hover-expand effect.
 *
 * The `.app-wheel-card` CSS class (defined in globals.css) handles:
 * - `flex-grow: 2` on hover (creates the accordion/fan effect)
 * - Background colour transition to primary blue
 *
 * Tailwind `group-hover:` utilities handle content reveal (description +
 * apply button) inside the card independently.
 *
 * Background images are decorative overlays loaded via CSS background-image,
 * not next/image, because they serve as purely visual hover effects.
 */
export function AppCard({
  number,
  title,
  description,
  icon,
  applyLabel,
  bgImage,
  videoUrl,
  slug,
}: PartnerAppProps) {
  return (
    <div className="app-wheel-card relative flex-1 min-w-[200px] min-h-[280px] lg:h-full rounded-[2.5rem] bg-surface-container overflow-hidden p-8 group">
      {/* Background Image (Default) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0"
        style={{ backgroundImage: `url('${bgImage}')` }}
        aria-hidden="true"
      >
        {/* Dark overlay so text remains readable */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hover Video */}
      {videoUrl && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
            src={videoUrl}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Card content */}
      <div className="relative z-10 h-full flex flex-col justify-between text-white">
        <div>
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 shadow-sm border border-white/30">
            <span
              className="material-symbols-outlined text-3xl text-white transition-colors"
              aria-hidden="true"
            >
              {icon}
            </span>
          </div>

          {/* Title */}
          <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-lg">
            {title}
          </h4>

          {/* Description — revealed on hover */}
          <p className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 max-w-xs text-sm leading-relaxed text-white/90 drop-shadow-md">
            {description}
          </p>
        </div>

        {/* Apply CTA — revealed on hover */}
        {slug ? (
          <Link
            href={`/partner-apps/${slug}`}
            className="cursor-pointer text-center w-full py-4 rounded-full bg-white text-primary font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0"
          >
            {applyLabel}
          </Link>
        ) : (
          <button
            type="button"
            className="cursor-pointer w-full py-4 rounded-full bg-white text-primary font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0"
          >
            {applyLabel}
          </button>
        )}
      </div>

      {/* Decorative card number */}
      <div
        className="absolute top-8 right-8 text-4xl font-black opacity-10 group-hover:opacity-5 transition-opacity select-none"
        aria-hidden="true"
      >
        {number}
      </div>
    </div>
  );
}
