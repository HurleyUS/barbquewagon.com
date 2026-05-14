"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useFormStatusStore } from "@/stores/form-status";

const contactSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000),
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const defaultValues: ContactFormData = {
  email: "",
  message: "",
  name: "",
  phone: "",
  subject: "",
};

const subjectOptions = [
  ["general", "General Inquiry"],
  ["feedback", "Feedback"],
  ["catering", "Catering Question"],
  ["large-order", "Large Order"],
  ["other", "Other"],
];

/** Collects general messages with shared form primitives and server-side delivery. */
export function ContactForm() {
  const form = useForm<ContactFormData>({
    defaultValues,
    resolver: zodResolver(contactSchema),
  });
  const isSubmitting = useFormStatusStore((state) => state.pending.contact);
  const setPending = useFormStatusStore((state) => state.setPending);

  async function onSubmit(data: ContactFormData) {
    setPending("contact", true);
    try {
      await submitContactForm(data);
      toast.success("Message sent! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setPending("contact", false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-lg border border-border bg-card-bg p-6 sm:p-8"
      >
        <h2 className="font-display text-xl font-bold text-foreground-strong">
          Send Us a Message
        </h2>
        <p className="mt-1 text-sm text-foreground-muted">
          We will get back to you within one business day.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <TextField name="name" label="Full Name" placeholder="Your name" />
          <TextField
            name="email"
            label="Email Address"
            placeholder="you@example.com"
            type="email"
          />
          <TextField
            name="phone"
            label="Phone Number"
            placeholder="(828) 555-0000"
            type="tel"
          />
          <SelectField
            name="subject"
            label="Subject"
            options={subjectOptions}
          />
          <MessageField />
        </div>
        <div className="mt-6 flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

async function submitContactForm(data: ContactFormData) {
  const response = await fetch("/api/contact", {
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
  if (!response.ok) throw new Error(await response.text());
}

function TextField(props: {
  label: string;
  name: "email" | "name" | "phone";
  placeholder: string;
  type?: string;
}) {
  const id = `contact-${props.name}`;
  return (
    <FormField<ContactFormData, typeof props.name>
      name={props.name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel htmlFor={id}>{props.label}</FormLabel>
          <FormControl>
            <Input
              id={id}
              placeholder={props.placeholder}
              type={props.type ?? "text"}
              {...field}
            />
          </FormControl>
          <FormMessage message={fieldState.error?.message} />
        </FormItem>
      )}
    />
  );
}

function SelectField(props: {
  label: string;
  name: "subject";
  options: string[][];
}) {
  const id = `contact-${props.name}`;
  return (
    <FormField<ContactFormData, typeof props.name>
      name={props.name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel htmlFor={id}>{props.label}</FormLabel>
          <FormControl>
            <Select id={id} {...field}>
              <option value="">Select a topic</option>
              {props.options.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormMessage message={fieldState.error?.message} />
        </FormItem>
      )}
    />
  );
}

function MessageField() {
  return (
    <div className="sm:col-span-2">
      <FormField<ContactFormData, "message">
        name="message"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel htmlFor="contact-message">Message</FormLabel>
            <FormControl>
              <Textarea
                id="contact-message"
                rows={5}
                placeholder="How can we help?"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage message={fieldState.error?.message} />
          </FormItem>
        )}
      />
    </div>
  );
}
