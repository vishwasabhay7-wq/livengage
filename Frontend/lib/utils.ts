/**
 * Merges class names, filtering out falsy values.
 * Lightweight drop-in for clsx when a full dependency is not warranted.
 *
 * @example
 *   cn('base-class', isActive && 'active', undefined) // → 'base-class active'
 */
export function cn(...classes: (string | undefined | null | false | 0)[]): string {
  return classes.filter(Boolean).join(' ');
}
