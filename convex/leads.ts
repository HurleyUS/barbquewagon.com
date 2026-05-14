/**
 * Convex Leads public module surface.
 */
import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const create = mutation({
  args: {
    email: v.string(),
    message: v.optional(v.string()),
    name: v.string(),
    phone: v.optional(v.string()),
    source: v.string(),
    type: v.union(v.literal("catering"), v.literal("contact")),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("leads", args);
  },
});
