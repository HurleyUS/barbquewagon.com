"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputClasses =
  "w-full rounded-md border border-input-border bg-input-bg px-4 py-2.5 text-sm text-foreground placeholder:text-foreground-muted/50 transition-colors focus:border-accent focus:outline-none";

const labelClasses = "block text-sm font-medium text-foreground-muted mb-1.5";
const errorClasses = "text-xs text-red-500 mt-1";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors(undefined);
    setSubmitError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string | undefined,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error(await res.text());
      toast.success("Message sent! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error("Contact form submission error:", err);
      setSubmitError(
        "Something went wrong sending your message. Please try again or call us directly.",
      );
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card-bg p-6 sm:p-8">
      <h2 className="font-display text-xl font-bold text-foreground-strong">Send Us a Message</h2>
      <p className="mt-1 text-sm text-foreground-muted">
        We will get back to you within one business day.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Full Name
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            aria-describedby={errors?.name ? "name-error" : undefined}
            placeholder="Your name"
            className={inputClasses}
          />
          {errors?.name && (
            <p id="name-error" className={errorClasses}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email Address
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            aria-describedby={errors?.email ? "email-error" : undefined}
            placeholder="you@example.com"
            className={inputClasses}
          />
          {errors?.email && (
            <p id="email-error" className={errorClasses}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            placeholder="(828) 555-0000"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className={labelClasses}>
            Subject
          </label>
          <select
            id="contact-subject"
            name="subject"
            required
            aria-describedby={errors?.subject ? "subject-error" : undefined}
            className={inputClasses}
          >
            <option value="">Select a topic</option>
            <option value="general">General Inquiry</option>
            <option value="feedback">Feedback</option>
            <option value="catering">Catering Question</option>
            <option value="large-order">Large Order</option>
            <option value="other">Other</option>
          </select>
          {errors?.subject && (
            <p id="subject-error" className={errorClasses}>
              {errors.subject}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            aria-describedby={errors?.message ? "message-error" : undefined}
            placeholder="How can we help?"
            className={`${inputClasses} resize-none`}
          />
          {errors?.message && (
            <p id="message-error" className={errorClasses}>
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {submitError && (
        <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">
          {submitError}
        </p>
      )}

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
