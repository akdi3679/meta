export function FloatingCta() {
  return (
    // FIX: Use left-0 w-full instead of inset-x-0 to prevent 100vw scrollbar bug
    <div className="fixed left-0 bottom-0 w-full z-40 overflow-x-hidden px-4 py-3  md:hidden">
      <div className="mx-auto grid  max-w-7xl grid-cols-2 gap-2">
        <a
          href="tel:+61437436395"
          className="inline-flex p-3 bg-white/95 w-full items-center justify-center gap-2 rounded-lg border-2 border-navy-900 px-4 py-3 text-sm font-bold text-navy-900"
        >
          <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          <span className="whitespace-nowrap">Call Now</span>
        </a>
        <a
          href="/contact"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20"
        >
          <span className="whitespace-nowrap">Free Roof Report</span>
        </a>
      </div>
    </div>
  );
}