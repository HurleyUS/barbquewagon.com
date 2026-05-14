/**
 * Next.config public module surface.
 */
import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
} as NextConfig;

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT || "barbquewagon-com",
  silent: true,
});
