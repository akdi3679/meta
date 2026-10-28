"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { env } from "@/lib/env";
import { rateLimit } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import { sendContactEmail, type ContactLead } from "@/lib/email";

const Schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Name too long."),
  email: z.string().trim().email("Enter a valid email address.").max(120, "Email too long."),
  phone: z.string().trim().max(25, "Phone number too long.").optional(),
  propertyType: z
    .string()
    .refine(
      (v): v is ContactLead["propertyType"] => ["residential", "strata", "commercial"].includes(v),
      "Choose a property type."
    ),
  suburb: z.string().trim().min(2, "Which suburb is the property in?").max(60, "Suburb too long."),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (at least 10 characters).")
    .max(2000, "Please keep it under 2,000 characters."),
  turnstileToken: z.string().optional(),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  errors?: Record<string, string[] | undefined>;
  headline?: string;
};

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // 0) Honeypot — silently "succeed" so bots never learn
  if (String(formData.get("website") ?? "") !== "") return { status: "success" };

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";

  // 1) Bot gate
  if (env.TURNSTILE_SECRET_KEY) {
    const ok = await verifyTurnstile(String(formData.get("turnstileToken") ?? ""), ip);
    if (!ok) return { status: "error", headline: "Security check failed. Please retry." };
  }

  // 2) Quota per IP
  const ipLimit = await rateLimit(`contact:ip:${ip}`, 5, 10 * 60_000);
  if (!ipLimit.allowed) return { status: "error", headline: "Too many requests. Try again shortly." };

  // 3) Validation
  const parsed = Schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return {
      status: "error",
      headline: "Please check the highlighted fields.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // 4) Quota per email
  const emailLimit = await rateLimit(`contact:email:${parsed.data.email.toLowerCase()}`, 3, 10 * 60_000);
  if (!emailLimit.allowed) {
    return { status: "error", headline: "Too many requests for this email. Try again shortly." };
  }

  // 5) Deliver — fail safely with a human fallback path
  try {
    await sendContactEmail(parsed.data);
  } catch (err) {
    console.error("[contact] send failed:", err);
    return {
      status: "error",
      headline: "We could not send your request. Please call 0437 436 395 — we respond fast.",
    };
  }
  return { status: "success" };
}