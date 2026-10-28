import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_20%,rgba(76,97,114,0.35),transparent),linear-gradient(180deg,#0b0f14_0%,#161d24_100%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="animate-fade-up">
          <p className="font-mono text-xs tracking-[0.35em] text-signal-500">● REC · PERTH, WA</p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            Visualised. Verified. <span className="chrome-text">Roofed.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-roof-200">
            See the proof. Know the price. Make the right decision. Smart-glasses roof audits with
            video evidence for strata, commercial and residential properties.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Book a free visual roof report</Button>
            <Button href="/strata-commercial" variant="outline">Strata &amp; commercial</Button>
          </div>
          <p className="mt-6 text-sm text-roof-400">Fewer calls. Faster sign-offs. Happier clients.</p>
        </div>

        {/* Glasses-viewport mock — real POV footage swaps in via Cloudflare Stream in sprint 2 */}
        <div
          className="relative animate-fade-up rounded-2xl border border-roof-700 bg-roof-900/60 p-3 shadow-2xl"
          style={{ animationDelay: "120ms" }}
        >
          <div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-roof-700 via-roof-800 to-roof-950">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40 [background:repeating-linear-gradient(105deg,transparent_0_18px,rgba(255,255,255,0.08)_18px_20px)]"
            />
            <div className="absolute left-3 top-3 flex items-center gap-2 font-mono text-[10px] text-white/80">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" /> REC 00:42
            </div>
            <div className="absolute left-[22%] top-[38%] h-16 w-24 border-2 border-signal-500">
              <span className="absolute -top-6 left-0 bg-signal-500 px-2 py-0.5 font-mono text-[10px] font-bold text-roof-950">
                RUST DAMAGE
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-roof-950/80 px-3 py-2 text-xs text-roof-100 backdrop-blur">
              Plain-English finding: <span className="text-white">corroded valley tray — leak risk before winter storms.</span>
            </div>
          </div>
          <p className="mt-3 px-1 font-mono text-[10px] tracking-widest text-roof-400">
            META GLASSES · POV INSPECTION FEED
          </p>
        </div>
      </div>
    </section>
  );
}