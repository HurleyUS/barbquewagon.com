"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";

const cateringSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  date: z.string().min(1, "Please select an event date"),
  guests: z.string().min(1, "Please select a guest count"),
  eventType: z.string().min(1, "Please select an event type"),
  message: z.string().optional(),
});

type CateringFormData = z.infer<typeof cateringSchema>;

const inputClasses =
  "w-full rounded-md border border-input-border bg-input-bg px-4 py-2.5 text-sm text-foreground placeholder:text-foreground-muted/50 transition-colors focus:border-accent focus:outline-none";

const labelClasses = "block text-sm font-medium text-foreground-muted mb-1.5";
const errorClasses = "text-xs text-red-500 mt-1";

export function CateringForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] =
    useState<Partial<Record<keyof CateringFormData, string>>>();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors(undefined);
    setSubmitError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      date: formData.get("date") as string,
      guests: formData.get("guests") as string,
      eventType: formData.get("eventType") as string,
      message: (formData.get("message") as string) || undefined,
    };

    const result = cateringSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof CateringFormData, string>> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof CateringFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Replace with actual API call
      await new Promise<void>((resolve) => setTimeout(resolve, 1500));
      toast.success("Inquiry sent! We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error("Catering form submission error:", err);
      setSubmitError(
        "Something went wrong submitting your inquiry. Please try again or call us directly at (828) 269-8280."
      );
      toast.error("Failed to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card-bg p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="catering-name" className={labelClasses}>
            Full Name
          </label>
          <input
            type="text"
            id="catering-name"
            name="name"
            required
            aria-describedby={errors?.name ? "catering-name-error" : undefined}
            placeholder="Your name"
            className={inputClasses}
          />
          {errors?.name && (
            <p id="catering-name-error" className={errorClasses}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="catering-email" className={labelClasses}>
            Email Address
          </label>
          <input
            type="email"
            id="catering-email"
            name="email"
            required
            aria-describedby={errors?.email ? "catering-email-error" : undefined}
            placeholder="you@example.com"
            className={inputClasses}
          />
          {errors?.email && (
            <p id="catering-email-error" className={errorClasses}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="catering-phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            type="tel"
            id="catering-phone"
            name="phone"
            required
            aria-describedby={errors?.phone ? "catering-phone-error" : undefined}
            placeholder="(828) 555-0000"
            className={inputClasses}
          />
          {errors?.phone && (
            <p id="catering-phone-error" className={errorClasses}>
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="catering-date" className={labelClasses}>
            Event Date
          </label>
          <input
            type="date"
            id="catering-date"
            name="date"
            required
            aria-describedby={errors?.date ? "catering-date-error" : undefined}
            className={inputClasses}
          />
          {errors?.date && (
            <p id="catering-date-error" className={errorClasses}>
              {errors.date}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="catering-guests" className={labelClasses}>
            Estimated Guest Count
          </label>
          <select
            id="catering-guests"
            name="guests"
            required
            aria-describedby={errors?.guests ? "catering-guests-error" : undefined}
            className={inputClasses}
          >
            <option value="">Select a range</option>
            <option value="10-25">10 – 25 guests</option>
            <option value="25-50">25 – 50 guests</option>
            <option value="50-100">50 – 100 guests</option>
            <option value="100+">100+ guests</option>
          </select>
          {errors?.guests && (
            <p id="catering-guests-error" className={errorClasses}>
              {errors.guests}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="catering-event-type" className={labelClasses}>
            Event Type
          </label>
          <select
            id="catering-event-type"
            name="eventType"
            required
            aria-describedby={errors?.eventType ? "catering-event-type-error" : undefined}
            className={inputClasses}
          >
            <option value="">Select event type</option>
            <option value="corporate">Corporate Event</option>
            <option value="wedding">Wedding / Reception</option>
            <option value="birthday">Birthday / Anniversary</option>
            <option value="graduation">Graduation</option>
            <option value="family">Family Reunion</option>
            <option value="church">Church / Community</option>
            <option value="other">Other</option>
          </select>
          {errors?.eventType && (
            <p id="catering-event-type-error" className={errorClasses}>
              {errors.eventType}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="catering-message" className={labelClasses}>
            Tell Us About Your Event
          </label>
          <textarea
            id="catering-message"
            name="message"
            rows={4}
            placeholder="Any dietary needs, preferred meats, venue details, or questions..."
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      {submitError && (
        <p
          className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-600"
          role="alert"
        >
          {submitError}
        </p>
      )}

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Submit Inquiry"}
        </button>
      </div>
    </form>
  );
}
