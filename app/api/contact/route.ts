/**
 * App Api Contact Route public module surface.
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { saveLead } from "@/lib/lead-store";
import { leadCaptureConfigured, sendOwnerEmail } from "@/lib/owner-email";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(10).max(2000),
});

export async function POST(request: NextRequest) {
  try {
    if (!leadCaptureConfigured()) {
      return NextResponse.json({ error: "Lead capture is not configured" }, { status: 503 });
    }

    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const { name, email, phone, subject, message } = result.data;

    await saveLead({
      email,
      message: `Subject: ${subject}\n\n${message}`,
      name,
      phone,
      source: "barbquewagon.com",
      type: "contact",
    });

    await sendOwnerEmail({
      replyTo: email,
      subject: `[Barb-Que Wagon] Contact: ${subject}`,
      text: [
        `From: ${name} <${email}>`,
        phone ? `Phone: ${phone}` : null,
        `Subject: ${subject}`,
        ``,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
