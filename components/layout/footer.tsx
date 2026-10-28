"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-[linear-gradient(180deg,#05070D_0%,#0A1B33_100%)] text-white">
      
      {/* 
        Static Overlapping Image Banner
        - Reduced negative margin (-mt-12) to move it down more.
        - Removed bg-white.
        - Added pb-8 for spacing below the image.
      */}
      <div className="relative z-20 -mt-12 sm:-mt-16 w-full overflow-hidden pb-8">
        <img 
          src="/images/footer-banner.jpg" 
          alt="Meta Roofing & Co" 
          className="w-full h-auto block"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            {/* Logo without animation */}
            <img 
              src="/images/logo-light.png" 
              alt="Meta Roofing & Co" 
              className="h-16 w-auto"
            />
            
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-silver-500">
              By combining professional roofing expertise with innovative visual technology, we allow our clients to see their roof through our eyes — identifying defects, understanding recommended repairs and seeing exactly what needs attention.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://instagram.com/metaroofing_co" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-silver-500 transition-colors hover:text-white">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-silver-500 transition-colors hover:text-white">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-silver-500 transition-colors hover:text-white">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-silver-400">Quick Links</h3>
            <nav className="flex flex-col gap-3" aria-label="Footer">
              <Link className="text-sm text-silver-500 transition-colors hover:text-white" href="/about">About Us</Link>
              <Link className="text-sm text-silver-500 transition-colors hover:text-white" href="/services">Our Services</Link>
              <Link className="text-sm text-silver-500 transition-colors hover:text-white" href="/projects">Projects</Link>
              <Link className="text-sm text-silver-500 transition-colors hover:text-white" href="/contact">Contact Us</Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-silver-400">Our Services</h3>
            <nav className="flex flex-col gap-3" aria-label="Services">
              <Link className="text-sm text-silver-500 transition-colors hover:text-white" href="/services/re-roofing">Re-Roofing</Link>
              <Link className="text-sm text-silver-500 transition-colors hover:text-white" href="/services/restoration">Roof Restoration</Link>
              <Link className="text-sm text-silver-500 transition-colors hover:text-white" href="/services/maintenance">General Maintenance</Link>
              <Link className="text-sm text-silver-500 transition-colors hover:text-white" href="/services/gutters">Gutter Cleans</Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-silver-400">Contact Info</h3>
            <ul className="space-y-3 text-sm text-silver-500">
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:+61437436395" className="transition-colors hover:text-white">0437 436 395</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:admin@metaroofers.com" className="transition-colors hover:text-white">admin@metaroofers.com</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>36 Merrifield Ave, Kelmscott<br/>Perth, WA 6111</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-xs text-silver-600 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Meta Roofing & Co. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}