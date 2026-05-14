import Link from "next/link";
import { Phone, MapPin, Clock, FacebookLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background-secondary">
      {/* Decorative top accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-accent">
                <span className="font-display text-lg font-bold text-charcoal">B</span>
              </div>
              <span className="font-display text-xl font-bold text-foreground-strong">
                Bar-B-Que Wagon
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-muted">
              Slow smoked over real hickory wood. No shortcuts. No compromises. Just honest barbecue
              made the way it was meant to be.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/p/Bar-B-Que-Wagon-100057395082072/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Facebook"
              >
                <FacebookLogo size={20} weight="light" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Instagram"
              >
                <InstagramLogo size={20} weight="light" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-accent">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/menu", label: "Our Menu" },
                { href: "/about", label: "Our Story" },
                { href: "/catering", label: "Catering" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-accent">
              Hours
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground-muted">
              <li className="flex items-start gap-2">
                <Clock size={16} weight="light" className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p>Tues - Sat: 11am - 8pm</p>
                  <p>Sunday: 11am - 6pm</p>
                  <p className="mt-1 text-foreground-muted/60">Closed Monday</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-accent">
              Find Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground-muted">
              <li className="flex items-start gap-2">
                <MapPin size={16} weight="light" className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p>610 Main St</p>
                  <p>Bryson City, NC 28713</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} weight="light" className="shrink-0 text-accent" />
                <a href="tel:+18284889521" className="transition-colors hover:text-accent">
                  (828) 488-9521
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-foreground-muted/60">
            &copy; {new Date().getFullYear()} Bar-B-Que Wagon. All rights reserved.
          </p>
          <p className="text-xs text-foreground-muted/40">
            Crafted with fire and pride in Bryson City, NC
          </p>
        </div>
      </div>
    </footer>
  );
}
