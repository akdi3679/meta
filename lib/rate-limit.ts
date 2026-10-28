export type RateResult = { allowed: boolean; retryAfterMs?: number };

const memory = new Map<string, { count: number; resetAt: number }>();

/** Fixed-window limiter. Upstash in prod, in-memory in dev. */
export async function rateLimit(key: string, limit: number, windowMs: number): Promise<RateResult> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token) {
    const bucket = Math.floor(Date.now() / windowMs);
    const rk = `rate:${key}:${bucket}`;
    const ttl = Math.ceil((windowMs * 2) / 1000);
    try {
      const res = await fetch(`${url}/multi`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify([["incr", rk], ["expire", rk, ttl]]),
        cache: "no-store",
        signal: AbortSignal.timeout(3000),
      });
      if (!res.ok) throw new Error(`upstash ${res.status}`);
      const [count] = (await res.json()) as [number, unknown];
      return { allowed: count <= limit, retryAfterMs: windowMs };
    } catch (err) {
      // Guide principle 4 — fail safely: deny when protection is configured but unreachable
      console.error("[rate-limit] upstream failed, denying:", err);
      return { allowed: false, retryAfterMs: windowMs };
    }
  }

  // Dev fallback (no Redis configured)
  const now = Date.now();
  const entry = memory.get(key);
  if (!entry || entry.resetAt < now) {
    memory.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }
  entry.count += 1;
  return { allowed: entry.count <= limit, retryAfterMs: entry.resetAt - now };
}