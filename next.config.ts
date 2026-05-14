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

export default nextConfig;
