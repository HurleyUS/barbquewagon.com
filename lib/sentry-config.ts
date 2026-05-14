/**
 * Shared Sentry runtime guards.
 */
export function isValidSentryDsn(dsn: string | undefined) {
  return !!dsn && dsn.includes("@") && dsn.includes("sentry.io");
}

/**
 * Returns true when Sentry should send events for this runtime.
 */
export function sentryEnabled(dsn: string | undefined) {
  return process.env.NODE_ENV === "production" && isValidSentryDsn(dsn);
}
