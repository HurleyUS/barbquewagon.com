/**
 * App Page public module surface.
 */
import Link from "next/link";
import Image from "next/image";
import { Fire, Timer, Heart, MapPin, Clock, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { JsonLd } from "@/components/json-ld";
import { getRestaurantSchema } from "@/lib/structured-data";

const featuredItems = [
  {
    name: "Smoked Brisket",
    description: "Slow-smoked 14 hours over hickory. Bark so good it should be illegal.",
    price: "$14.99",
    tag: "Fan Favorite",
    image: "/images/food/brisket-plate.jpg",
  },
  {
    name: "Pulled Pork",
    description:
      "Hand-pulled Carolina-style. Tender, smoky, and dressed in our house vinegar sauce.",
    price: "$12.99",
    tag: "Classic",
    image: "/images/food/pulled-pork-platter.jpg",
  },
  {
    name: "Baby Back Ribs",
    description: "Fall-off-the-bone tender. Dry rubbed, slow smoked, finished with a glaze.",
    price: "$16.99",
    tag: "Pitmaster Pick",
    image: "/images/food/pork-ribs.jpg",
  },
  {
    name: "Smoked Turkey",
    description: "Half pound of tender smoked turkey breast, served with your choice of sides.",
    price: "$13.99",
    tag: "House Special",
    image: "/images/food/smoked-turkey.jpg",
  },
];

const galleryImages = [
  { src: "/images/food/ribs-brisket.jpg", alt: "Ribs and brisket combo plate" },
  { src: "/images/food/combo-platter.jpg", alt: "BBQ combo platter" },
  { src: "/images/food/beef-sandwich-plate.jpg", alt: "BBQ beef sandwich with fries" },
  { src: "/images/exterior/building-3.jpg", alt: "Bar-B-Que Wagon exterior" },
  { src: "/images/food/chicken-pork-plate.jpg", alt: "Chicken and pork plate" },
  { src: "/images/food/pork-sandwich-fries.jpg", alt: "Pork sandwich with fries" },
];

const values = [
  {
    icon: Fire,
    title: "Real Wood. Real Smoke.",
    description:
      "We burn hickory and oak — not gas, not pellets. You can taste the difference in every bite.",
  },
  {
    icon: Timer,
    title: "Low & Slow",
    description:
      "Our brisket sees 14 hours of smoke before it hits your plate. You can not rush perfection.",
  },
  {
    icon: Heart,
    title: "Made with Soul",
    description:
      "Family recipes passed down through generations. Every side dish, every sauce, made from scratch daily.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={getRestaurantSchema()} />
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/exterior/building-1.jpg"
            alt="Bar-B-Que Wagon iconic sign with pig"
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />

        {/* Atmospheric overlays */}
        <div className="absolute inset-0 smoke-overlay opacity-40" />
        <div className="absolute inset-0 ember-overlay opacity-30" />
        <div className="grain absolute inset-0 opacity-50" />

        {/* Decorative ember dots */}
        <div
          className="absolute top-1/4 left-1/4 h-1.5 w-1.5 rounded-full bg-ember/40"
          style={{ animation: "ember-pulse 3s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/3 right-1/3 h-2 w-2 rounded-full bg-amber/30"
          style={{ animation: "ember-pulse 4s ease-in-out infinite 1s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-burnt-orange/35"
          style={{ animation: "ember-pulse 3.5s ease-in-out infinite 0.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 h-1 w-1 rounded-full bg-accent/20"
          style={{ animation: "ember-pulse 2.5s ease-in-out infinite 0.3s" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-44">
          <div className="max-w-3xl">
            {/* Overline */}
            <p className="animate-fade-up font-display text-sm font-medium tracking-[0.25em] uppercase text-accent">
              Bryson City, North Carolina
            </p>

            {/* Main headline */}
            <h1 className="animate-fade-up animate-delay-100 mt-6 font-display text-5xl leading-[1.1] font-bold tracking-tight text-foreground-strong sm:text-6xl lg:text-7xl">
              Slow Smoked.
              <br />
              <span className="text-gradient-warm">Hand Pulled.</span>
              <br />
              Soul Fed.
            </h1>

            {/* Sub copy */}
            <p className="animate-fade-up animate-delay-200 mt-8 max-w-xl text-lg leading-relaxed text-foreground-muted">
              Real hickory-smoked barbecue made the old-fashioned way — low, slow, and with love. No
              shortcuts. No compromises. Just meat, wood, fire, and time.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up animate-delay-300 mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-accent-hover"
              >
                View Our Menu
                <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                href="/catering"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Catering Services
              </Link>
            </div>

            {/* Quick info bar */}
            <div className="animate-fade-up animate-delay-400 mt-16 flex flex-wrap items-center gap-6 text-sm text-foreground-muted">
              <div className="flex items-center gap-2">
                <Clock size={16} weight="light" className="text-accent" />
                <span>Tues-Sat 11am-8pm</span>
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <div className="flex items-center gap-2">
                <MapPin size={16} weight="light" className="text-accent" />
                <span>Bryson City, NC</span>
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <div className="flex items-center gap-2">
                <Fire size={16} weight="light" className="text-accent" />
                <span>Smoked over real hickory</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ============================================
          FEATURED MENU SECTION
          ============================================ */}
      <section className="relative bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="max-w-2xl">
            <p className="font-display text-sm font-medium tracking-[0.25em] uppercase text-accent">
              From the Pit
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground-strong sm:text-4xl">
              What We&apos;re Smoking
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
              Every plate comes with your choice of two sides and a slice of fresh-baked cornbread.
              All meats smoked daily — when it&apos;s gone, it&apos;s gone.
            </p>
          </div>

          {/* Menu grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredItems.map((item) => (
              <article
                key={item.name}
                className="group relative overflow-hidden rounded-lg border border-border bg-card-bg transition-all duration-300 hover:border-border-hover hover:bg-card-bg-hover"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Tag overlay */}
                  <span className="absolute top-3 left-3 inline-block rounded-sm bg-accent px-2.5 py-1 text-xs font-medium text-charcoal">
                    {item.tag}
                  </span>
                </div>

                <div className="p-6">
                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-foreground-strong">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {item.description}
                  </p>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline justify-between">
                    <span className="font-display text-2xl font-bold text-accent">
                      {item.price}
                    </span>
                    <span className="text-xs text-foreground-muted/60">plate w/ 2 sides</span>
                  </div>
                </div>

                {/* Decorative bottom accent */}
                <div className="absolute right-0 bottom-0 left-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              See the full menu
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          VALUES / WHY US SECTION
          ============================================ */}
      <section className="relative bg-background-secondary py-24 lg:py-32">
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header — centered */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-sm font-medium tracking-[0.25em] uppercase text-accent">
              The Difference
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground-strong sm:text-4xl">
              Barbecue Done Right
            </h2>
          </div>

          {/* Values grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                  <value.icon size={28} weight="light" className="text-accent" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-foreground-strong">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PHOTO GALLERY
          ============================================ */}
      <section className="relative bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-sm font-medium tracking-[0.25em] uppercase text-accent">
              Fresh off the Pit
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground-strong sm:text-4xl">
              See What&apos;s Cooking
            </h2>
          </div>

          {/* Gallery grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, index) => (
              <div
                key={img.src}
                className={`group relative overflow-hidden rounded-lg ${
                  index === 3 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          OUR STORY PREVIEW
          ============================================ */}
      <section className="relative bg-background-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left — Text */}
            <div>
              <p className="font-display text-sm font-medium tracking-[0.25em] uppercase text-accent">
                Our Story
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground-strong sm:text-4xl">
                Over 20 Years of&nbsp;Smoke
              </h2>
              <div className="mt-6 space-y-4 text-foreground-muted">
                <p className="leading-relaxed">
                  For over 20 years, Pat Monteith has been tending fires before dawn on Main Street
                  in Bryson City, turning wood into flavor and patience into plates worth waiting
                  for. What started with a simple smoker has become a beloved destination in the
                  heart of the Great Smoky Mountains.
                </p>
                <p className="leading-relaxed">
                  We don&apos;t take shortcuts. We don&apos;t rush the process. Every brisket gets
                  its full 14 hours. Every rack of ribs earns its bark. That&apos;s not a slogan —
                  it&apos;s a promise we make every single morning at 4am when we light the pit.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                Read our full story
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>

            {/* Right — Atmospheric box */}
            <div className="relative overflow-hidden rounded-lg border border-border bg-card-bg p-8 lg:p-12">
              <div className="absolute inset-0 grain" />
              <div className="relative space-y-6">
                <blockquote className="font-display text-2xl leading-snug font-medium text-foreground-strong italic">
                  &ldquo;Good barbecue isn&apos;t made in a kitchen. It&apos;s made outside, next to
                  the fire, with your hands and your patience.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-sm text-accent">Pat Monteith, Pitmaster</span>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div className="text-center">
                    <p className="font-display text-3xl font-bold text-accent">20+</p>
                    <p className="mt-1 text-xs text-foreground-muted">Years Smoking</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-3xl font-bold text-accent">4am</p>
                    <p className="mt-1 text-xs text-foreground-muted">Fires Lit Daily</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-3xl font-bold text-accent">14hr</p>
                    <p className="mt-1 text-xs text-foreground-muted">Brisket Smoke</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          HOURS & LOCATION
          ============================================ */}
      <section className="relative bg-background-secondary py-24 lg:py-32">
        <div className="absolute inset-0 ember-overlay" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-medium tracking-[0.25em] uppercase text-accent">
              Come Hungry
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground-strong sm:text-4xl">
              Hours &amp; Location
            </h2>
            <p className="mt-4 text-foreground-muted">
              We&apos;re on Main Street in Bryson City — in the heart of the Great Smoky Mountains.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Hours card */}
            <div className="rounded-lg border border-border bg-card-bg p-8 text-center">
              <Clock size={28} weight="light" className="mx-auto text-accent" />
              <h3 className="mt-4 font-display text-lg font-bold text-foreground-strong">Hours</h3>
              <div className="mt-4 space-y-2 text-sm text-foreground-muted">
                <p>Tuesday - Saturday</p>
                <p className="font-semibold text-foreground">11:00 AM - 8:00 PM</p>
                <p className="mt-3">Sunday</p>
                <p className="font-semibold text-foreground">11:00 AM - 6:00 PM</p>
                <p className="mt-3 text-foreground-muted/60">Closed Monday</p>
              </div>
            </div>

            {/* Location card */}
            <div className="rounded-lg border border-border bg-card-bg p-8 text-center">
              <MapPin size={28} weight="light" className="mx-auto text-accent" />
              <h3 className="mt-4 font-display text-lg font-bold text-foreground-strong">
                Location
              </h3>
              <div className="mt-4 space-y-2 text-sm text-foreground-muted">
                <p>610 Main St</p>
                <p>Bryson City, NC 28713</p>
                <p className="mt-3">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=610+Main+St+Bryson+City+NC+28713"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    Get Directions
                  </a>
                </p>
              </div>
            </div>

            {/* Contact card */}
            <div className="rounded-lg border border-border bg-card-bg p-8 text-center">
              <Fire size={28} weight="light" className="mx-auto text-accent" />
              <h3 className="mt-4 font-display text-lg font-bold text-foreground-strong">
                Get in Touch
              </h3>
              <div className="mt-4 space-y-2 text-sm text-foreground-muted">
                <p>
                  <a href="tel:+18284889521" className="transition-colors hover:text-accent">
                    (828) 488-9521
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:bbqwagon@gmail.com"
                    className="transition-colors hover:text-accent"
                  >
                    bbqwagon@gmail.com
                  </a>
                </p>
                <p className="mt-3">
                  <Link
                    href="/contact"
                    className="font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA
          ============================================ */}
      <section className="relative overflow-hidden bg-background py-24 lg:py-32">
        <div className="absolute inset-0 smoke-overlay" />
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground-strong sm:text-4xl lg:text-5xl">
            Your Next Great Meal Is&nbsp;Waiting
          </h2>
          <p className="mt-6 text-lg text-foreground-muted">
            Whether it&apos;s a weekday lunch, a weekend family feast, or catering for your biggest
            event — we&apos;ve got the smoke, the sides, and the soul to make it unforgettable.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-accent-hover"
            >
              Explore the Menu
              <ArrowRight size={16} weight="bold" />
            </Link>
            <Link
              href="/catering"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Catering Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
