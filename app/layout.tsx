import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Providers } from "@/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bar-B-Que Wagon | Slow Smoked BBQ in Bryson City, NC",
    template: "%s | Bar-B-Que Wagon",
  },
  description:
    "Authentic slow-smoked barbecue in Bryson City, North Carolina. Hand-pulled pork, tender brisket, fall-off-the-bone ribs, and homemade sides. Dine in, take out, or let us cater your next event.",
  keywords: [
    "BBQ",
    "barbecue",
    "Bryson City NC",
    "smoked meat",
    "brisket",
    "pulled pork",
    "ribs",
    "catering",
    "restaurant",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bar-B-Que Wagon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dmSans.variable} min-h-screen bg-background font-body text-foreground antialiased`}
      >
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-charcoal focus:outline-none"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
