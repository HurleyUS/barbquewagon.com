/**
 * Providers Index public module surface.
 */
"use client";

import { Toaster } from "sonner";
import { PostHogProvider } from "@/providers/posthog-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--card-bg)",
            color: "var(--foreground)",
            border: "1px solid var(--border)",
          },
        }}
      />
    </PostHogProvider>
  );
}
