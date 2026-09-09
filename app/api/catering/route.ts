/**
 * App Api Catering Route public module surface.
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { saveLead } from "@/lib/lead-store";
import { sendOwnerEmail } from "@/lib/owner-email";

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
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return invalidFormData();
  }

  const result = cateringSchema.safeParse(body);
  if (!result.success) return invalidFormData();

  const captured = await processCateringInquiry(result.data);
  if (!captured) {
    return NextResponse.json(
      { error: "Could not send right now. Call (828) 488-9521." },
      { status: 503 },
    );
  }

  return NextResponse.json({ success: true });
}

function invalidFormData() {
  return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
}

async function processCateringInquiry(inquiry: z.infer<typeof cateringSchema>) {
  const saved = await saveLead({
    email: inquiry.email,
    message: cateringDetails(inquiry),
    name: inquiry.name,
    phone: inquiry.phone,
    source: "barbquewagon.com",
    type: "catering",
  });
  const emailed = await sendOwnerEmail({
    replyTo: inquiry.email,
    subject: `[Barb-Que Wagon] Catering Inquiry — ${inquiry.eventType} on ${inquiry.date}`,
    text: cateringEmail(inquiry),
  });
  return saved || emailed;
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
