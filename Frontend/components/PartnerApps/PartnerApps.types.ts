export interface PartnerAppProps {
  /** Decorative card number (e.g. "01") */
  number: string;
  title: string;
  description: string;
  /** Material Symbols icon name */
  icon: string;
  /** Text for the apply CTA button */
  applyLabel: string;
  /** Unsplash URL used as a CSS background-image overlay on hover */
  bgImage: string;
  /** Video URL to autoplay on hover */
  videoUrl?: string;
  /** Link to dynamic partner app page */
  slug?: string;
}
