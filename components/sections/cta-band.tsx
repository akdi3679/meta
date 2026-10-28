import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="border-t border-roof-800 bg-roof-900/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
        <h2 className="text-3xl font-black sm:text-4xl">Let’s give you a clearer view.</h2>
        <p className="max-w-2xl text-roof-300">
          Free detailed roof inspection with photos and video. No pressure, no jargon — just clear
          visual evidence and straightforward pricing.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/contact">Book your free report</Button>
          <Button href="tel:+61437436395" variant="outline">Call 0437 436 395</Button>
        </div>
      </div>
    </section>
  );
}