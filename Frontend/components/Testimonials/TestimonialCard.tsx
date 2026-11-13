import Image from 'next/image';
import type { TestimonialProps } from './Testimonials.types';

/**
 * Individual testimonial card.
 *
 * Handles both image and initials avatar variants via the AvatarVariant
 * discriminated union — keeps the parent Testimonials component clean.
 *
 * Server Component — no interactivity.
 */
export function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  rating = 5,
}: TestimonialProps) {
  return (
    <article
      className="glass-card p-8 rounded-[2rem] flex flex-col gap-6 reveal-on-scroll"
      aria-label={`Testimonial from ${author}`}
    >
      {/* Star rating */}
      <div
        className="flex text-primary"
        aria-label={`${rating} out of 5 stars`}
      >
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="material-symbols-outlined" aria-hidden="true">
            star
          </span>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-on-surface-variant italic leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author block */}
      <div className="flex items-center gap-4 mt-auto">
        {avatar.type === 'image' ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
            <Image
              src={avatar.src}
              alt={avatar.alt}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
        ) : (
          <div
            className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold shrink-0"
            aria-hidden="true"
          >
            {avatar.initials}
          </div>
        )}
        <div>
          <p className="font-bold text-on-surface">{author}</p>
          <p className="text-xs font-medium text-primary uppercase tracking-widest">
            {role}
          </p>
        </div>
      </div>
    </article>
  );
}
