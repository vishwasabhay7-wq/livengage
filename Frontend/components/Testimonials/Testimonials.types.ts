/** Image-based avatar with explicit alt text. */
interface ImageAvatar {
  type: 'image';
  src: string;
  alt: string;
}

/** Initials-based avatar fallback (renders a coloured circle). */
interface InitialsAvatar {
  type: 'initials';
  initials: string;
}

export type AvatarVariant = ImageAvatar | InitialsAvatar;

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar: AvatarVariant;
  /** Star rating out of 5. Defaults to 5. */
  rating?: number;
}
