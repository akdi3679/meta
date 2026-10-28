const STEPS = [
  { n: "01", t: "We picture it.", d: "Meta smart glasses record every defect in high resolution — rust, cracks, leaks — with timestamped video." },
  { n: "02", t: "You present it.", d: "You receive a plain-English visual report your committee, client or family can understand in one viewing." },
  { n: "03", t: "We roof it.", d: "Re-roofing, restoration, maintenance, skylights and ventilation — executed exactly as the evidence shows." },
];

export function Process() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-black sm:text-4xl">Roofing, reimagined.</h2>
      <p className="mt-3 max-w-2xl text-roof-300">
        No confusing terminology. No uncertainty about what you’re paying for. Just clear visual evidence.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {STEPS.map((s) => (
          <article key={s.n} className="rounded-2xl border border-roof-800 bg-roof-900/40 p-6">
            <p className="font-mono text-sm text-signal-500">{s.n}</p>
            <h3 className="mt-3 text-xl font-bold text-white">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-roof-300">{s.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}