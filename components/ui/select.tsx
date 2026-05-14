import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-md border border-input-border bg-input-bg px-4 py-2.5 text-sm text-foreground placeholder:text-foreground-muted/50 transition-colors focus:border-accent focus:outline-none";

/** Native select styled to match the shadcn-like local controls. */
export function Select({
  className,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(fieldClasses, className)} {...props} />;
}
