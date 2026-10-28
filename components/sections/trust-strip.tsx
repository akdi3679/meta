const ITEMS = [
  { title: "Fully qualified", desc: "Licensed trade workmanship, every job." },
  { title: "Fully insured", desc: "Comprehensive cover on every project." },
  { title: "Roofing specialists", desc: "Roofs only — nothing else dilutes the craft." },
];

export function TrustStrip() {
  return (
    <section className="border-y border-roof-800 bg-roof-900/40">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3">
        {ITEMS.map((i) => (
          <div key={i.title} className="flex items-start gap-3">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
              <path d="M11 1l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V4l8-3z" stroke="#ff6a00" strokeWidth="1.6" />
              <path d="M7.5 11l2.4 2.4L14.5 8.8" stroke="#ff6a00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <h2 className="font-semibold text-white">{i.title}</h2>
              <p className="text-sm text-roof-300">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}