export function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 text-white">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,168,255,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Our Work</h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          Real projects, real results. Every job documented with visual evidence.
          Drag the slider on each project to see the transformation.
        </p>
      </div>
    </section>
  );
}