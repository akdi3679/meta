export function GoogleReviews() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Local Trust</h2>
          <h3 className="mt-5 text-3xl font-extrabold text-navy-900 sm:text-4xl">What Perth Locals Say</h3>
          <p className="mt-4 text-lg text-gray-600">Don&apos;t just take our word for it. See our verified Google Reviews.</p>
        </div>

        {/* Google Reviews Widget Placeholder */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center shadow-sm">
          <div className="flex justify-center gap-1 text-yellow-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
          </div>
          <p className="text-lg font-bold text-navy-900">5.0 Star Rating</p>
          <p className="text-sm text-gray-500">Based on verified Google Reviews</p>
          
          {/* Dashed box for the actual widget later */}
          <div className="mt-6 flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white">
            <div className="text-center">
              <p className="text-sm font-bold text-gray-600">Live Google Reviews Widget</p>
              <p className="mt-1 text-xs text-gray-400">Paste Elfsight or Google API code here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}