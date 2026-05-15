/**
 * App Contact Page public module surface.
 */
import type { Metadata } from "next";
import { Phone, Envelope, MapPin, Clock, NavigationArrow } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Find Bar-B-Que Wagon at 610 Main St, Bryson City, NC. View our hours, get directions, or send us a message. We're open Tues-Sat 11am-8pm and Sunday 11am-6pm.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["610 Main St", "Bryson City, NC 28713"],
    href: "https://www.google.com/maps/dir/?api=1&destination=610+Main+St+Bryson+City+NC+28713",
    linkText: "Get Directions",
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["(828) 488-9521"],
    href: "tel:+18284889521",
    linkText: "Call Us",
  },
  {
    icon: Envelope,
    title: "Email",
    lines: ["bbqwagon@gmail.com"],
    href: "mailto:bbqwagon@gmail.com",
    linkText: "Send Email",
  },
];

const hours = [
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday", time: "11:00 AM - 8:00 PM", closed: false },
  { day: "Wednesday", time: "11:00 AM - 8:00 PM", closed: false },
  { day: "Thursday", time: "11:00 AM - 8:00 PM", closed: false },
  { day: "Friday", time: "11:00 AM - 8:00 PM", closed: false },
  { day: "Saturday", time: "11:00 AM - 8:00 PM", closed: false },
  { day: "Sunday", time: "11:00 AM - 6:00 PM", closed: false },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-28">
        <div className="absolute inset-0 smoke-overlay" />
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-display text-sm font-medium tracking-[0.25em] uppercase text-accent">
            Contact Us
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground-strong sm:text-5xl">
            Come See Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground-muted">
            Whether you have a question, want to place a large order, or just want to tell us how
            much you loved the brisket — we want to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section — 2-column */}
      <section className="bg-background pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left column — Contact info (2/5) */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-foreground-strong">
                Get in Touch
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Drop us a line or just stop by. We are always happy to talk barbecue.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <info.icon size={20} weight="light" className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground-strong">{info.title}</h3>
                      {info.lines.map((line) => (
                        <p key={line} className="text-sm text-foreground-muted">
                          {line}
                        </p>
                      ))}
                      <a
                        href={info.href}
                        className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                      >
                        {info.linkText}
                        <NavigationArrow size={12} weight="bold" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — Form (3/5) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="relative bg-background-secondary py-24 lg:py-32">
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Hours table */}
            <div>
              <div className="flex items-center gap-3">
                <Clock size={24} weight="light" className="text-accent" />
                <h2 className="font-display text-2xl font-bold text-foreground-strong">
                  Hours of Operation
                </h2>
              </div>
              <div className="mt-6 overflow-hidden rounded-lg border border-border">
                <table className="w-full">
                  <tbody>
                    {hours.map((row, index) => (
                      <tr
                        key={row.day}
                        className={`${
                          index !== hours.length - 1 ? "border-b border-border" : ""
                        } ${row.closed ? "bg-card-bg/50" : ""}`}
                      >
                        <td className="px-4 py-3 text-sm font-medium text-foreground-strong">
                          {row.day}
                        </td>
                        <td
                          className={`px-4 py-3 text-right text-sm ${
                            row.closed ? "text-foreground-muted/50 italic" : "text-foreground-muted"
                          }`}
                        >
                          {row.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-foreground-muted/60">
                * Hours may vary on holidays. Call ahead for holiday hours.
              </p>
            </div>

            {/* Map placeholder */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground-strong">Find Us</h2>
              <p className="mt-3 text-sm text-foreground-muted">
                Located on Main Street in Bryson City — in the heart of the Great Smoky Mountains.
                Look for the smoke.
              </p>
              <div className="mt-6 overflow-hidden rounded-lg border border-border bg-card-bg">
                {/* Map placeholder area */}
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 p-8 text-center">
                  <MapPin size={48} weight="light" className="text-accent/40" />
                  <div>
                    <p className="font-display text-lg font-semibold text-foreground-strong">
                      610 Main St
                    </p>
                    <p className="text-sm text-foreground-muted">Bryson City, NC 28713</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=610+Main+St+Bryson+City+NC+28713"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-accent-hover"
                  >
                    Open in Google Maps
                    <NavigationArrow size={14} weight="bold" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
