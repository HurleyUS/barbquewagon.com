/**
 * Next.js client instrumentation hook.
 */
import * as Sentry from "@sentry/nextjs";
import "./sentry.client.config";

export const onRouterTransitionStart =
  Sentry.captureRouterTransitionStart ??
  (() => {
    // Older Next/Sentry combinations do not expose router transition capture.
  });
