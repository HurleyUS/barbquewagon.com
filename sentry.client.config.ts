/**
 * Browser-side Sentry initialization.
 */
import * as Sentry from "@sentry/nextjs";
import { isValidSentryDsn, sentryEnabled } from "@/lib/sentry-config";

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;
const hasValidDsn = isValidSentryDsn(SENTRY_DSN);

Sentry.init({
  dsn: hasValidDsn ? SENTRY_DSN : undefined,
  enabled: sentryEnabled(SENTRY_DSN),
  environment: process.env.NODE_ENV,
  release: process.env.VERCEL_GIT_COMMIT_SHA,
  tracesSampleRate: hasValidDsn ? 0.1 : 0,
});
