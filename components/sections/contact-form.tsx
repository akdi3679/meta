"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { submitContact, type ContactState } from "@/lib/actions/contact";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      remove: (id: string) => void;
    };
  }
}

const inputCls =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20";

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return <p id={id} className="mt-1 text-xs font-medium text-red-600">{msg}</p>;
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(submitContact, { status: "idle" });
  const [audience, setAudience] = useState<"residential" | "b2b">("residential");
  const [token, setToken] = useState("");
  const [scriptReady, setScriptReady] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scriptReady || !boxRef.current) return;
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey || !window.turnstile) return;
    const id = window.turnstile.render(boxRef.current, { sitekey: siteKey, theme: "light", callback: (t: string) => setToken(t) });
    return () => window.turnstile?.remove(id);
  }, [scriptReady]);

  const err = (k: string) => state.errors?.[k]?.[0];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" onLoad={() => setScriptReady(true)} />

      {state.status === "success" && (
        <div role="status" className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
          Request received. We will call you within one business day to arrange your free inspection.
        </div>
      )}
      {state.status === "error" && state.headline && (
        <div role="alert" className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {state.headline}
        </div>
      )}

      {/* Audience Split */}
      <div className="mb-6 grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-1.5" role="group" aria-label="I am contacting as">
        <button type="button" onClick={() => setAudience("residential")} aria-pressed={audience === "residential"} className={"rounded-md px-4 py-2.5 text-sm font-bold transition-all " + (audience === "residential" ? "bg-white text-navy-900 shadow-sm" : "text-gray-500 hover:text-navy-900")}>Homeowner</button>
        <button type="button" onClick={() => setAudience("b2b")} aria-pressed={audience === "b2b"} className={"rounded-md px-4 py-2.5 text-sm font-bold transition-all " + (audience === "b2b" ? "bg-white text-navy-900 shadow-sm" : "text-gray-500 hover:text-navy-900")}>Strata / Commercial</button>
      </div>

      <form action={formAction} noValidate className="space-y-4">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <input type="hidden" name="turnstileToken" value={token} />
        <input type="hidden" name="propertyType" value={audience === "residential" ? "residential" : "b2b"} />

        {audience === "b2b" && (
          <div>
            <label htmlFor="company" className="mb-1 block text-sm font-semibold text-navy-900">Company / Strata Name</label>
            <input id="company" name="company" className={inputCls} placeholder="e.g. Smith Strata Management" aria-describedby="company-err" />
            <FieldError id="company-err" msg={err("company")} />
          </div>
        )}

        <div className={audience === "b2b" ? "grid gap-4 sm:grid-cols-2" : "space-y-4"}>
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-semibold text-navy-900">Your Name</label>
            <input id="name" name="name" className={inputCls} placeholder="John Smith" aria-describedby="name-err" />
            <FieldError id="name-err" msg={err("name")} />
          </div>
          
          {audience === "b2b" && (
            <div>
              <label htmlFor="units" className="mb-1 block text-sm font-semibold text-navy-900">Number of Units / Lots</label>
              <input id="units" name="units" type="number" className={inputCls} placeholder="e.g. 24" aria-describedby="units-err" />
              <FieldError id="units-err" msg={err("units")} />
            </div>
          )}
        </div>

        <div className={audience === "b2b" ? "grid gap-4 sm:grid-cols-2" : "space-y-4"}>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-navy-900">Phone Number</label>
            <input id="phone" name="phone" type="tel" className={inputCls} placeholder="04xx xxx xxx" aria-describedby="phone-err" />
            <FieldError id="phone-err" msg={err("phone")} />
          </div>
          <div>
            <label htmlFor="suburb" className="mb-1 block text-sm font-semibold text-navy-900">Suburb</label>
            <input id="suburb" name="suburb" className={inputCls} placeholder="e.g. Kelmscott" aria-describedby="suburb-err" />
            <FieldError id="suburb-err" msg={err("suburb")} />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-semibold text-navy-900">What do you need help with?</label>
          <textarea id="message" name="message" rows={4} className={inputCls} placeholder={audience === "b2b" ? "e.g. Committee needs a condition report for the 10-year maintenance plan…" : "e.g. Leaks, rust, or just a general check-up…"} aria-describedby="message-err" />
          <FieldError id="message-err" msg={err("message")} />
        </div>

        <div ref={boxRef} className="min-h-[65px]" />

        <button type="submit" disabled={pending} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60">
          {pending ? (<><span aria-hidden className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />Sending…</>) : ("Request Free Assessment")}
        </button>
        <p className="text-center text-xs text-gray-500">No spam. We call you back within 1 business day.</p>
      </form>
    </div>
  );
}