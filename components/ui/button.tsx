import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Smokehouse-themed shadcn-style button primitive. */
export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
