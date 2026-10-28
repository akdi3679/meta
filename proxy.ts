import { NextResponse, type NextRequest } from "next/server";

/**
 * proxy.ts — cheap request-boundary filter (Next 16 renamed middleware.ts).
 * GUIDE RULE (ch.7/8): this is NOT authorization. Real authz lives in the DAL.
 */
const SAFE = new Set(["GET", "HEAD", "OPTIONS"]);
const isWebhookPath = (p: string) => p.startsWith("/api/webhooks");

function csp(nonce: string) {
  return [
    "default-src 'self'",
    "script-src 'self' 'nonce-" + nonce + "' https://challenges.cloudflare.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self'",
    "frame-src 'self' https://challenges.cloudflare.com https://www.google.com https://maps.google.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; ");
}

export function proxy(req: NextRequest) {
  if (!SAFE.has(req.method) && !isWebhookPath(req.nextUrl.pathname)) {
    const site = req.headers.get("sec-fetch-site");
    const origin = req.headers.get("origin");
    const ok = site ? site === "same-origin" : origin === req.nextUrl.origin;
    if (!ok) return new NextResponse(null, { status: 403 });
  }

  const res = NextResponse.next();

  const bytes = crypto.getRandomValues(new Uint8Array(16));
  const nonce = btoa(String.fromCharCode(...bytes));
  res.headers.set("x-nonce", nonce);
  res.headers.set(
    process.env.CSP_ENFORCE === "on" ? "Content-Security-Policy" : "Content-Security-Policy-Report-Only",
    csp(nonce)
  );

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|avif|ico)$).*)"],
};