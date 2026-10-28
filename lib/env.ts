import { z } from "zod";

/**
 * Guide Appendix B — validated environment.
 * Fields are optional until a feature ships; flip them to required when wired.
 */
const Env = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  RESEND_API_KEY: z.string().startsWith("re_").optional(),
  EMAIL_FROM: z.string().optional(),
  LEAD_INBOX: z.string().optional(),
  TURNSTILE_SECRET_KEY: z.string().min(1).optional(),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().min(1).optional(),
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),
  CSP_ENFORCE: z.enum(["on", ""]).optional(),
});

export const env = Env.parse(process.env);