/** Joins conditional class names without adding a runtime styling dependency. */
export function cn(...classes: Array<false | null | string | undefined>) {
  return classes.filter(Boolean).join(" ");
}
