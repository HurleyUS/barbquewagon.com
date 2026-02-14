import type { Metadata } from "next";
import {
  Fire,
  Timer,
  Heart,
  Users,
  TreeEvergreen,
  Handshake,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Over 20 years of slow-smoked barbecue in the Great Smoky Mountains. Learn about Pat Monteith, the fire, and the passion behind Bar-B-Que Wagon in Bryson City, NC.",
};

const timeline = [
  {
    year: "Early Days",
    title: "A Passion for Smoke",
    description:
      "It started the way all great barbecue stories do — with a pit, real wood, and a stubborn refusal to take shortcuts. Pat Monteith fell in love with the craft of slow smoking and never looked back.",
  },
  {
    year: "The Wagon",
    title: "Taking It to the People",
    description:
      "What was a personal obsession became a community fixture. The Bar-B-Que Wagon hit the road — a smoker, a handwritten menu, and meat that spoke for itself. Word spread fast in the Smoky Mountains.",
  },
  {
    year: "610 Main St",
    title: "A Home on Main Street",
    description:
      "Pat planted roots right on Main Street in Bryson City. Same recipes. Same wood. Same commitment to doing it the hard way — because the hard way is the only way that tastes this good.",
  },
  {
    year: "20+ Years",
    title: "Still Smoking",
    description:
      "Over two decades later, the pit still gets lit before dawn. Every shoulder is still hand-pulled. Every side is still made from scratch. The only thing that has changed is how many people we get to feed.",
  },
];

const values = [
  {
    icon: Fire,
    title: "Real Wood Fire",
    description:
      "We burn seasoned hickory and oak — never gas, never pellets, never shortcuts. The smoke is the flavor, and we will not fake it.",
  },
  {
    icon: Timer,
    title: "Time Is the Ingredient",
    description:
      "Our brisket takes 14 hours. Our pork shoulders take 12. Our beans simmer all day. You can not rush good barbecue, and we never will.",
  },
  {
    icon: Heart,
    title: "Family Recipes",
    description:
      "Every sauce, rub, and side dish comes from recipes perfected over two decades. We have never needed a cookbook — just a passion for getting it right.",
  },
  {
    icon: TreeEvergreen,
    title: "Locally Sourced",
    description:
      "Our produce comes from North Carolina farms. Our wood comes from local suppliers. Supporting the community that supports us is just how we do things.",
  },
  {
    icon: Handshake,
    title: "Community First",
    description:
      "We sponsor Little League teams, donate to food banks, and cater community events at cost. This town raised us. We give back every chance we get.",
  },
  {
    icon: Users,
    title: "A Family Operation",
    description:
      "No corporate owners. No investors. No franchise plans. This is Pat Monteith's restaurant, run the same way it has been for over 20 years. That is never changing.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-28">
        <div className="absolute inset-0 smoke-overlay" />
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-display text-sm font-medium tracking-[0.25em] uppercase text-accent">
              Our Story
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-foreground-strong sm:text-5xl lg:text-6xl">
              Two Decades.
              <br />
              One Fire.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted">
              Bar-B-Que Wagon is not a franchise. It is not a concept. It is
              Pat Monteith&apos;s life&apos;s work — over 20 years of wood
              smoke, early mornings, and mouthwatering barbecue right here in
              Bryson City. Everything we serve carries the weight of decades
              spent perfecting the craft in the heart of the Great Smoky
              Mountains.
            </p>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="relative bg-background-secondary py-16">
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <blockquote className="font-display text-2xl leading-relaxed font-medium text-foreground-strong italic sm:text-3xl">
            &ldquo;Barbecue is not something you make. It is something you tend.
            You give it time, you give it attention, and it gives back something
            you can not get any other way.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent" />
            <span className="text-sm font-medium text-accent">
              Pat Monteith, Pitmaster
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-sm font-medium tracking-[0.25em] uppercase text-accent">
              How We Got Here
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground-strong sm:text-4xl">
              From Backyard to Main Street
            </h2>
          </div>

          <div className="relative mt-16">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-8 hidden w-px bg-border md:left-1/2 md:block" />

            <div className="space-y-12 md:space-y-16">
              {timeline.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative md:flex md:items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-8 top-0 hidden md:left-1/2 md:block">
                    <div className="flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-background">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="rounded-lg border border-border bg-card-bg p-6 lg:p-8">
                      <span className="font-display text-2xl font-bold text-accent">
                        {event.year}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-bold text-foreground-strong">
                        {event.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-background-secondary py-24 lg:py-32">
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-sm font-medium tracking-[0.25em] uppercase text-accent">
              What We Believe
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground-strong sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-foreground-muted">
              These are not corporate values on a plaque. These are the things we
              actually do, every single day.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-border bg-card-bg p-6 transition-colors hover:border-border-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <value.icon size={24} weight="light" className="text-accent" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground-strong">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "20+", label: "Years of Smoke" },
              { stat: "4:00 AM", label: "Daily Pit Start" },
              { stat: "14 hrs", label: "Brisket Smoke Time" },
              { stat: "610", label: "Main Street, Bryson City" },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center"
              >
                <p className="font-display text-4xl font-bold text-accent">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm text-foreground-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
