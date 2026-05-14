/**
 * Convex Schema public module surface.
 */
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    email: v.string(),
    message: v.optional(v.string()),
    name: v.string(),
    phone: v.optional(v.string()),
    source: v.string(),
    type: v.union(v.literal("catering"), v.literal("contact")),
  })
    .index("by_email", ["email"])
    .index("by_type", ["type"]),
});
