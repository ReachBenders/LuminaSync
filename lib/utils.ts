/**
 * Joins class names, skipping falsy values.
 * Intentionally lightweight — this project has no need for a
 * Tailwind-conflict-resolving classnames library.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
