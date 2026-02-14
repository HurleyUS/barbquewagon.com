"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";

const inputClasses =
  "w-full rounded-md border border-input-border bg-input-bg px-4 py-2.5 text-sm text-foreground placeholder:text-foreground-muted/50 transition-colors focus:border-accent focus:outline-none";

const labelClasses = "block text-sm font-medium text-foreground-muted mb-1.5";

export function CateringForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Inquiry sent! We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card-bg p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="catering-name" className={labelClasses}>
            Full Name
          </label>
          <input
            type="text"
            id="catering-name"
            name="name"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="catering-email" className={labelClasses}>
            Email Address
          </label>
          <input
            type="email"
            id="catering-email"
            name="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="catering-phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            type="tel"
            id="catering-phone"
            name="phone"
            required
            placeholder="(336) 555-0000"
            className={inputClasses}
          />
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="catering-date" className={labelClasses}>
            Event Date
          </label>
          <input
            type="date"
            id="catering-date"
            name="date"
            required
            className={inputClasses}
          />
        </div>

        {/* Guest Count */}
        <div>
          <label htmlFor="catering-guests" className={labelClasses}>
            Estimated Guest Count
          </label>
          <select
            id="catering-guests"
            name="guests"
            required
            className={inputClasses}
          >
            <option value="">Select a range</option>
            <option value="10-25">10 - 25 guests</option>
            <option value="25-50">25 - 50 guests</option>
            <option value="50-100">50 - 100 guests</option>
            <option value="100+">100+ guests</option>
          </select>
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="catering-event-type" className={labelClasses}>
            Event Type
          </label>
          <select
            id="catering-event-type"
            name="eventType"
            required
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
        </div>

        {/* Message — full width */}
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

      {/* Submit — bottom-right aligned */}
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
