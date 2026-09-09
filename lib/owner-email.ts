/**
 * Lib Owner Email public module surface.
 */
import { Resend } from "resend";

type OwnerEmail = {
  replyTo: string;
  subject: string;
  text: string;
};

/** True when Convex or Resend can accept a lead. */
export function leadCaptureConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_CONVEX_URL || process.env.RESEND_API_KEY);
}

/** Sends the owner a Resend notification when mail env is set. Never throws. */
export async function sendOwnerEmail(email: OwnerEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FROM_EMAIL;
  if (!apiKey || !from) return;

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      replyTo: email.replyTo,
      subject: email.subject,
      text: email.text,
      to: process.env.OWNER_EMAIL ?? "bbqwagon@gmail.com",
    });
    if (error) console.error("Owner email failed:", error);
  } catch (error) {
    console.error("Owner email failed:", error);
  }
}
