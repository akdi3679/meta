export function AboutStory() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Our Story</h2>
            <h3 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Visual Roofing Specialists</h3>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              At Meta Roofing & Co, we recognized a massive problem in the roofing industry: the gap between what the roofer sees and what the client understands. 
              By combining decades of professional trade expertise with cutting-edge Meta smart-glasses technology, we eliminate that gap completely.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Every inspection is recorded. Every finding is documented. Every client gets complete transparency. 
              We don&apos;t just fix roofs; we show you exactly what needs fixing and why.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Quality", "Punctuality", "Fairness", "Transparency"].map((value) => (
                <div key={value} className="flex items-center gap-2 text-navy-900">
                  <svg className="h-5 w-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-navy-800 shadow-xl">
              {/* Placeholder for a high-quality image of Maka or the team on a roof */}
              <div className="flex h-full w-full items-center justify-center text-gray-400">
                <span className="text-sm uppercase tracking-widest">Team Photo Placeholder</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-gray-300 bg-white p-6 shadow-lg sm:block">
              <p className="text-3xl font-bold text-navy-900">35+</p>
              <p className="text-sm font-medium text-gray-600">Years in the Perth Roofing Industry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}