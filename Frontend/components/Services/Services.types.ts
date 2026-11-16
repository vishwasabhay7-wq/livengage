export type ServiceVariant = 'default' | 'primary';

export interface ServiceCardProps {
  title: string;
  description: string;
  /** Optional image for the icon from the CMS */
  iconImage?: any;
  linkText: string;
  href: string;
  /** "primary" renders the highlighted blue card; "default" renders the glass card. */
  variant?: ServiceVariant;
  /** Applies md:translate-y-12 for the masonry stagger effect on the middle card. */
  staggered?: boolean;
}
