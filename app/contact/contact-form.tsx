"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";

const inputClasses =
  "w-full rounded-md border border-input-border bg-input-bg px-4 py-2.5 text-sm text-foreground placeholder:text-foreground-muted/50 transition-colors focus:border-accent focus:outline-none";

const labelClasses = "block text-sm font-medium text-foreground-muted mb-1.5";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card-bg p-6 sm:p-8"
    >
      <h2 className="font-display text-xl font-bold text-foreground-strong">
        Send Us a Message
      </h2>
      <p className="mt-1 text-sm text-foreground-muted">
        We will get back to you within one business day.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Full Name
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email Address
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            placeholder="(336) 555-0000"
            className={inputClasses}
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="contact-subject" className={labelClasses}>
            Subject
          </label>
          <select
            id="contact-subject"
            name="subject"
            required
            className={inputClasses}
          >
            <option value="">Select a topic</option>
            <option value="general">General Inquiry</option>
            <option value="feedback">Feedback</option>
            <option value="catering">Catering Question</option>
            <option value="large-order">Large Order</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message — full width */}
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder="How can we help?"
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      {/* Submit — bottom-right aligned */}
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
