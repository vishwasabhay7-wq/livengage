export interface AvatarItem {
  src: string;
  alt: string;
}

export interface HeroProps {
  /** Avatar images for the social-proof stack. Defaults to the static array. */
  avatars?: AvatarItem[];
  /** Creator count label shown next to the avatar stack. */
  creatorCount?: string;
}
