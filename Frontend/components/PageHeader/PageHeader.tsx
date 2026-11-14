import type { PageHeaderProps } from './PageHeader.types';

/**
 * Shared hero/header for interior (non-homepage) routes.
 *
 * Server Component — static markup only.
 */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="pt-40 pb-16 md:pt-48 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-display-lg-mobile md:text-display-lg font-headline-lg text-on-surface">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl mx-auto text-on-surface-variant leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
