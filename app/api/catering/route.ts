/**
 * App Api Catering Route public module surface.
 */
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { saveLead } from "@/lib/lead-store";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

const OWNER_EMAIL = process.env.OWNER_EMAIL ?? "info@barbquewagon.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "noreply@barbquewagon.com";

const cateringSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7),
  date: z.string().min(1),
  guests: z.string().min(1),
  eventType: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = cateringSchema.safeParse(body);

    if (!result.success) return invalidFormData();

    await processCateringInquiry(result.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Catering form error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 },
    );
  }
}

function invalidFormData() {
  return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
}

async function processCateringInquiry(inquiry: z.infer<typeof cateringSchema>) {
  await saveLead({
    email: inquiry.email,
    message: cateringDetails(inquiry),
    name: inquiry.name,
    phone: inquiry.phone,
    source: "barbquewagon.com",
    type: "catering",
  });

  await getResend().emails.send({
    from: FROM_EMAIL,
    to: OWNER_EMAIL,
    replyTo: inquiry.email,
    subject: `[Barb-Que Wagon] Catering Inquiry — ${inquiry.eventType} on ${inquiry.date}`,
    text: cateringEmail(inquiry),
  });
}

function cateringDetails(inquiry: z.infer<typeof cateringSchema>) {
  return [
    `Event Date: ${inquiry.date}`,
    `Guest Count: ${inquiry.guests}`,
    `Event Type: ${inquiry.eventType}`,
    "",
    inquiry.message ?? "No additional notes.",
  ].join("\n");
}

function cateringEmail(inquiry: z.infer<typeof cateringSchema>) {
  return [
    `From: ${inquiry.name} <${inquiry.email}>`,
    `Phone: ${inquiry.phone}`,
    cateringDetails(inquiry),
  ].join("\n");
}
