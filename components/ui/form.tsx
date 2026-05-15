"use client";

import type { ReactNode } from "react";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

/** Provides react-hook-form context using shadcn's `Form` naming convention. */
export const Form = FormProvider;

/** Binds a controlled field to the nearest `Form` provider. */
export function FormField<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
  props: Omit<ControllerProps<TFieldValues, TName>, "control">,
) {
  const { control } = useFormContext<TFieldValues>();
  return <Controller control={control} {...props} />;
}

/** Groups a label, control, and validation message. */
export function FormItem({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

/** Labels a form control. */
export function FormLabel({ children, htmlFor }: { children: ReactNode; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-foreground-muted">
      {children}
    </label>
  );
}

/** Wraps a form control for API parity with shadcn/ui. */
export function FormControl({ children }: { children: ReactNode }) {
  return children;
}

/** Renders a field validation message. */
export function FormMessage({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-500">{message}</p>;
}
