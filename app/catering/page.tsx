import type { Metadata } from "next";
import { CateringForm } from "./catering-form";
import { Check, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Let Bar-B-Que Wagon cater your next event. Packages for 10 to 100+ guests with slow-smoked meats, homemade sides, and all the fixings.",
};

interface CateringPackage {
  name: string;
  size: string;
  priceRange: string;
  description: string;
  includes: string[];
  popular?: boolean;
}

const cateringPackages: CateringPackage[] = [
  {
    name: "The Gathering",
    size: "10 - 25 guests",
    priceRange: "$12 - $16 / person",
    description:
      "Perfect for office lunches, family get-togethers, and small celebrations. All the essentials, none of the stress.",
    includes: [
      "Choice of 2 smoked meats",
      "2 sides",
      "Fresh-baked cornbread",
      "House BBQ sauce & pickles",
      "Disposable plates & utensils",
      "Serving setup instructions",
    ],
  },
  {
    name: "The Party",
    size: "25 - 50 guests",
    priceRange: "$11 - $15 / person",
    description:
      "Built for birthday parties, graduation celebrations, and neighborhood cookouts. More meat, more sides, more fun.",
    includes: [
      "Choice of 3 smoked meats",
      "3 sides",
      "Fresh-baked cornbread",
      "House BBQ sauce, pickles & onions",
      "Sweet tea & lemonade (3 gal each)",
      "Disposable serviceware included",
      "Delivery within 15 miles",
    ],
    popular: true,
  },
  {
    name: "The Event",
    size: "50 - 100 guests",
    priceRange: "$10 - $14 / person",
    description:
      "Weddings, corporate events, church functions — we bring the full pit experience to your venue. Volume pricing means better value.",
    includes: [
      "Choice of 3 smoked meats",
      "4 sides",
      "Fresh-baked cornbread & rolls",
      "All sauces, pickles & condiments",
      "Sweet tea & lemonade (5 gal each)",
      "Banana pudding dessert",
      "Full disposable serviceware",
      "Delivery & basic setup included",
    ],
  },
  {
    name: "The Big Show",
    size: "100+ guests",
    priceRange: "Custom pricing",
    description:
      "Festivals, corporate retreats, reunion-level events. We bring the team, the smoker, and the full experience. Let us talk about what you need.",
    includes: [
      "Choice of 4 smoked meats",
      "5 sides",
      "Cornbread, rolls & biscuits",
      "Full condiment bar",
      "Beverages for all guests",
      "Dessert spread",
      "On-site staff for serving",
      "Delivery, setup & cleanup",
      "Custom menu consultation",
    ],
  },
];

export default function CateringPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-28">
        <div className="absolute inset-0 smoke-overlay" />
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-display text-sm font-medium tracking-[0.25em] uppercase text-accent">
              Catering
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-foreground-strong sm:text-5xl">
              Feed Your People Right
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted">
              From backyard parties to corporate events, we bring the same
              slow-smoked quality that made our restaurant famous — right to your
              venue. No heat lamps, no compromises.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-background pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cateringPackages.map((pkg) => (
              <article
                key={pkg.name}
                className={`group relative flex flex-col overflow-hidden rounded-lg border p-6 transition-colors ${
                  pkg.popular
                    ? "border-accent bg-card-bg"
                    : "border-border bg-card-bg hover:border-border-hover"
                }`}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <span className="absolute top-4 right-4 rounded-sm bg-accent px-2 py-0.5 text-xs font-semibold text-charcoal">
                    Most Popular
                  </span>
                )}

                {/* Header */}
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground-strong">
                    {pkg.name}
                  </h2>
                  <p className="mt-1 text-sm text-accent">{pkg.size}</p>
                  <p className="mt-3 font-display text-2xl font-bold text-foreground-strong">
                    {pkg.priceRange}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                  {pkg.description}
                </p>

                {/* Includes */}
                <div className="mt-6 flex-1">
                  <p className="text-xs font-semibold tracking-wider uppercase text-foreground-muted">
                    Includes
                  </p>
                  <ul className="mt-3 space-y-2">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground-muted"
                      >
                        <Check
                          size={14}
                          weight="bold"
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#catering-form"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-accent text-charcoal hover:bg-accent-hover"
                      : "border border-border text-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  Get a Quote
                  <ArrowRight size={14} weight="bold" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Inquiry Form — 2-column layout */}
      <section
        id="catering-form"
        className="relative bg-background-secondary py-24 lg:py-32"
      >
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left column — Description (2/5) */}
            <div className="lg:col-span-2">
              <p className="font-display text-sm font-medium tracking-[0.25em] uppercase text-accent">
                Get in Touch
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground-strong">
                Request a Catering Quote
              </h2>
              <p className="mt-4 leading-relaxed text-foreground-muted">
                Tell us about your event and we will put together a custom quote
                within 24 hours. No obligation, no pressure — just good food
                planning.
              </p>
              <div className="mt-8 space-y-4 text-sm text-foreground-muted">
                <div className="flex items-start gap-3">
                  <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-accent" />
                  <span>We typically respond within 24 hours</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-accent" />
                  <span>Custom menus available for events of 50+</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-accent" />
                  <span>Free delivery within 15 miles of Bryson City</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-accent" />
                  <span>On-site serving staff available for large events</span>
                </div>
              </div>
            </div>

            {/* Right column — Form (3/5) */}
            <div className="lg:col-span-3">
              <CateringForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
