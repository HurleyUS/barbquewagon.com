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

const cateringSchema = z.object({
  date: z.string().min(1, "Please select an event date"),
  email: z.string().email("Please enter a valid email address"),
  eventType: z.string().min(1, "Please select an event type"),
  guests: z.string().min(1, "Please select a guest count"),
  message: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().min(7, "Please enter a valid phone number"),
});

type CateringFormData = z.infer<typeof cateringSchema>;

const defaultValues: CateringFormData = {
  date: "",
  email: "",
  eventType: "",
  guests: "",
  message: "",
  name: "",
  phone: "",
};

const guestOptions = [
  ["10-25", "10 - 25 guests"],
  ["25-50", "25 - 50 guests"],
  ["50-100", "50 - 100 guests"],
  ["100+", "100+ guests"],
];
const eventTypeOptions = [
  ["corporate", "Corporate Event"],
  ["wedding", "Wedding / Reception"],
  ["birthday", "Birthday / Anniversary"],
  ["graduation", "Graduation"],
  ["family", "Family Reunion"],
  ["church", "Church / Community"],
  ["other", "Other"],
];

/** Collects catering leads with shared form primitives and server-side delivery. */
export function CateringForm() {
  const form = useForm<CateringFormData>({
    defaultValues,
    resolver: zodResolver(cateringSchema),
  });
  const isSubmitting = useFormStatusStore((state) => state.pending.catering);
  const setPending = useFormStatusStore((state) => state.setPending);

  async function onSubmit(data: CateringFormData) {
    setPending("catering", true);
    try {
      await submitCateringForm(data);
      toast.success("Inquiry sent! We'll get back to you within 24 hours.");
      form.reset();
    } catch (error) {
      console.error("Catering form submission error:", error);
      toast.error("Failed to submit inquiry. Please try again.");
    } finally {
      setPending("catering", false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-lg border border-border bg-card-bg p-6 sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField name="name" label="Full Name" placeholder="Your name" />
          <TextField
            name="email"
            label="Email Address"
            placeholder="you@example.com"
            type="email"
          />
          <TextField name="phone" label="Phone Number" placeholder="(828) 555-0000" type="tel" />
          <TextField name="date" label="Event Date" placeholder="" type="date" />
          <SelectField name="guests" label="Estimated Guest Count" options={guestOptions} />
          <SelectField name="eventType" label="Event Type" options={eventTypeOptions} />
          <MessageField />
        </div>
        <div className="mt-6 flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

async function submitCateringForm(data: CateringFormData) {
  const response = await fetch("/api/catering", {
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
  if (!response.ok) throw new Error(await response.text());
}

function TextField(props: {
  label: string;
  name: "date" | "email" | "name" | "phone";
  placeholder: string;
  type?: string;
}) {
  const id = `catering-${props.name}`;
  return (
    <FormField<CateringFormData, typeof props.name>
      name={props.name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel htmlFor={id}>{props.label}</FormLabel>
          <FormControl>
            <Input id={id} placeholder={props.placeholder} type={props.type ?? "text"} {...field} />
          </FormControl>
          <FormMessage message={fieldState.error?.message} />
        </FormItem>
      )}
    />
  );
}

function SelectField(props: { label: string; name: "eventType" | "guests"; options: string[][] }) {
  const id = `catering-${props.name}`;
  return (
    <FormField<CateringFormData, typeof props.name>
      name={props.name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel htmlFor={id}>{props.label}</FormLabel>
          <FormControl>
            <Select id={id} {...field}>
              <option value="">Select an option</option>
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
      <FormField<CateringFormData, "message">
        name="message"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel htmlFor="catering-message">Tell Us About Your Event</FormLabel>
            <FormControl>
              <Textarea
                id="catering-message"
                rows={4}
                placeholder="Any dietary needs, preferred meats, venue details, or questions..."
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
