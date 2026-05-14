/**
 * Components Layout Navbar public module surface.
 */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/catering", label: "Catering" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
          aria-label="Bar-B-Que Wagon — Home"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-warm-white p-1.5">
            <Image
              src="/logo.svg"
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg leading-tight font-bold tracking-wide text-foreground-strong">
              Bar-B-Que Wagon
            </span>
            <span className="text-xs tracking-widest uppercase text-foreground-muted">
              Smoke &bull; Soul &bull; Flavor
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-foreground-muted hover:bg-background-secondary hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA — Desktop */}
        <Link
          href="/contact"
          className="hidden rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-accent-hover md:inline-block"
        >
          Order Now
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground-muted transition-colors hover:bg-background-secondary hover:text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X size={24} weight="light" />
          ) : (
            <List size={24} weight="light" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="animate-fade-in border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-foreground-muted hover:bg-background-secondary hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 border-t border-border pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-accent-hover"
              >
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
