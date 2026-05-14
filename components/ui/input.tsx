import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-md border border-input-border bg-input-bg px-4 py-2.5 text-sm text-foreground placeholder:text-foreground-muted/50 transition-colors focus:border-accent focus:outline-none";

/** Smokehouse-themed shadcn-style input primitive. */
export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClasses, className)} {...props} />;
}
