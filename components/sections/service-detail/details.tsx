import type { ServiceData } from "@/lib/data/services";

export function ServiceDetails({ service }: { service: ServiceData }) {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-navy-900">What&apos;s Included</h2>
            <ul className="mt-8 space-y-4">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="leading-relaxed text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900">Our Process</h2>
            <ol className="mt-8 space-y-6">
              {service.process.map((p, i) => (
                <li key={p.t} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-bold text-white">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-navy-900">{p.t}</h3>
                    <p className="mt-1 text-gray-600">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-300 bg-white p-8">
            <h3 className="text-lg font-bold text-navy-900">Typical Timeline</h3>
            <p className="mt-2 text-gray-600">{service.timeline}</p>
          </div>
          <div className="rounded-2xl border border-gray-300 bg-white p-8">
            <h3 className="text-lg font-bold text-navy-900">What Affects the Price</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-600">
              {service.costFactors.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}