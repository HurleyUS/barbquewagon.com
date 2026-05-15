/**
 * Lib Lead Store public module surface.
 */
import { ConvexHttpClient } from "convex/browser";
import { makeFunctionReference } from "convex/server";

type LeadInput = {
  email: string;
  message?: string;
  name: string;
  phone?: string;
  source: string;
  type: "catering" | "contact";
};

const createLead = makeFunctionReference<"mutation", LeadInput, string>("leads:create");

/** Persists a lead when Convex is configured for this deployment. */
export async function saveLead(lead: LeadInput) {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!convexUrl) return;
  await new ConvexHttpClient(convexUrl).mutation(createLead, lead);
}
