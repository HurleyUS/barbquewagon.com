/**
 * App Api Contact Route public module surface.
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { saveLead } from "@/lib/lead-store";
import { sendOwnerEmail } from "@/lib/owner-email";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(10).max(2000),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const { name, email, phone, subject, message } = result.data;
  const saved = await saveLead({
    email,
    message: `Subject: ${subject}\n\n${message}`,
    name,
    phone,
    source: "barbquewagon.com",
    type: "contact",
  });
  const emailed = await sendOwnerEmail({
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

  if (!saved && !emailed) {
    return NextResponse.json(
      { error: "Could not send right now. Call (828) 488-9521." },
      { status: 503 },
    );
  }

  return NextResponse.json({ success: true });
}
