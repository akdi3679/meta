export function Team() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Leadership</h2>
          <h3 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Meet the Director</h3>
        </div>

        <div className="mt-16 flex flex-col items-center gap-12 md:flex-row">
          <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-navy-800 shadow-xl md:w-1/2">
            <div className="aspect-square flex items-center justify-center text-gray-400">
              <span className="text-sm uppercase tracking-widest">Maka - Director Photo</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-2xl font-bold text-navy-900">Maka</h4>
            <p className="text-lg font-semibold text-accent-blue">Managing Director, Meta Roofing & Co</p>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              &ldquo;I started Meta Roofing & Co because I was tired of seeing homeowners and strata committees get taken advantage of by unclear quotes and hidden damage. 
              Technology gave us the perfect solution. Now, every client sees exactly what I see when I&apos;m up on their roof. No more guessing. Just honest, verified work.&rdquo;
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-navy-900 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">35+ Years Experience</span>
              <span className="rounded-full bg-navy-900 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">Visual Tech Pioneer</span>
              <span className="rounded-full bg-navy-900 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">Perth Local</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}