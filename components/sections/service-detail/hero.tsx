import type { ServiceData } from "@/lib/data/services";
import { Button } from "@/components/ui/button";

export function ServiceHero({ service }: { service: ServiceData }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 text-white">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,168,255,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">{service.tag}</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">{service.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">{service.hero}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">Get a Free Quote</Button>
          <Button href="/services" variant="outline">All Services</Button>
        </div>
      </div>
    </section>
  );
}