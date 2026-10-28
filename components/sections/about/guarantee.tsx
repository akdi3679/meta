const guarantees = [
  "100% satisfaction or we make it right.",
  "Transparent pricing — no hidden fees, ever.",
  "Visual documentation on every single job.",
  "Clear communication throughout the entire process.",
  "On-time arrival and project completion."
];

export function Guarantee() {
  return (
    <section className="bg-navy-900 py-24 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Our Promise</h2>
        <h3 className="mt-4 text-3xl font-bold sm:text-4xl">The Meta Roofing Guarantee</h3>
        <p className="mt-6 text-lg text-gray-300">
          When you hire us, you aren&apos;t just getting a roofer. You are getting a documented, transparent, and accountable partner.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {guarantees.map((g) => (
            <div key={g} className="flex items-center gap-4 rounded-lg border border-navy-700 bg-navy-800/50 p-5 text-left">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-silver text-navy-900">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-medium">{g}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}