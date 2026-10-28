const SERVICES = [
  { t: "Re-roofing", d: "Full replacement that weather-proofs the property for decades." },
  { t: "Roof restoration", d: "Sealing, repointing and coating — stopping rust before it reaches the fascia." },
  { t: "General maintenance", d: "Small fixes caught early, before they become internal water damage." },
  { t: "Gutter cleans", d: "Debris removed so water flows away instead of backing into eaves." },
  { t: "Skylights", d: "Natural light installed without compromising the weather seal." },
  { t: "Roof ventilation", d: "Heat and condensation out — longer roof life, cooler ceilings." },
];

export function ServicesGrid() {
  return (
    <section className="border-t border-roof-800 bg-roof-900/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-black sm:text-4xl">What we do</h2>
        <p className="mt-3 max-w-2xl text-roof-300">
          Every job includes a visual condition report — clear terminology, complete understanding.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.t} className="rounded-2xl border border-roof-800 bg-roof-950/60 p-6 transition-colors hover:border-signal-500/60">
              <h3 className="font-bold text-white">{s.t}</h3>
              <p className="mt-2 text-sm text-roof-300">{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}