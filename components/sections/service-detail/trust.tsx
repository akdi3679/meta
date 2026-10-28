import type { ServiceData } from "@/lib/data/services";

export function ServiceTrust({ service }: { service: ServiceData }) {
  return (
    <section className="border-b border-gray-300 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          {service.trustBadges.map((b) => (
            <span key={b} className="flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-semibold text-navy-900">
              <svg className="h-4 w-4 text-accent-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {b}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Premium Materials We Use</h2>
            <ul className="mt-4 space-y-2">
              {service.materials.map((m) => (
                <li key={m} className="flex items-center gap-3 text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" aria-hidden />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Warranty</h2>
            <p className="mt-4 leading-relaxed text-gray-600">{service.warranty}</p>
          </div>
        </div>
      </div>
    </section>
  );
}