import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="relative bg-[linear-gradient(180deg,#05070D_0%,#0A1B33_100%)] pb-24 pt-44 text-white [clip-path:polygon(0_88px,50%_0,100%_88px,100%_100%,0_100%)]">
      <svg aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[88px] w-full" viewBox="0 0 1440 88" preserveAspectRatio="none">
        <defs><linearGradient id="ridge" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#8A97A6" /><stop offset="0.5" stopColor="#F2F5F8" /><stop offset="1" stopColor="#8A97A6" /></linearGradient></defs>
        <path d="M0 88 L720 0 L1440 88" fill="none" stroke="url(#ridge)" strokeWidth="2.5" />
      </svg>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">Ready to See the Proof?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-silver-400">
          Book a free, no-obligation visual assessment. We will show you exactly what your roof needs, explain it clearly, and give you a fair, fixed price.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary" className="px-8 py-4 text-base">Book Free Assessment</Button>
          <Button href="tel:+61437436395" variant="outline" className="px-8 py-4 text-base">Call 0437 436 395</Button>
        </div>
      </div>
    </section>
  );
}