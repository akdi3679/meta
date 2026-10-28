"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

const NAV = [
  { href: "/", label: "Home" },
  
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },

];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = scrolled 
    ? "bg-white/90 backdrop-blur-md border-gray-200/50 shadow-sm" 
    : "bg-transparent border-white/10";
  
  const navText = scrolled ? "text-gray-600 hover:text-blue-600" : "text-white/90 hover:text-white";
  const phoneText = scrolled ? "text-navy-900" : "text-white";
  const phoneBorder = scrolled ? "border-gray-300" : "border-white/20";
  const logoVariant = scrolled ? "dark" : "light";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ease-in-out ${headerBg}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
         <Link href="/" className="flex items-center">
          <img 
            src="/images/logo-light.png" 
            alt="Meta Roofing & Co" 
            className="h-10 w-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] transition-all duration-300"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-[14px] font-semibold transition-colors ${navText}`}
            >
              {n.label}
            </Link>
          ))}
          
          <a
            href="tel:+61437436395"
            className={`ml-2 flex items-center gap-2 border-l pl-5 font-bold transition-colors ${phoneBorder} ${phoneText} hover:text-blue-400`}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0437 436 395
          </a>

          <LiquidMetalButton onClick={() => (window.location.href = "/contact")} className="min-w-[140px] h-[46px]">
            Get Free Report
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </LiquidMetalButton>
        </nav>

        <button
          type="button"
          className={`rounded-lg border p-2 lg:hidden ${scrolled ? "border-gray-300 text-navy-900" : "border-white/20 text-white"}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col gap-1 border-t border-gray-200 bg-white px-4 py-4 lg:hidden">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-semibold text-gray-600 hover:bg-gray-50 hover:text-blue-600"
            >
              {n.label}
            </Link>
          ))}
          <a href="tel:+61437436395" className="mt-2 flex items-center gap-2 px-4 py-3 font-bold text-navy-900">
            <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            0437 436 395
          </a>
          <LiquidMetalButton onClick={() => (window.location.href = "/contact")} className="min-w-[140px] h-[46px]">
            Get Free Report
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </LiquidMetalButton>
        </nav>
      )}
    </header>
  );
}