"use client";

import { useState } from "react";

const FAQS = [
  { q: "How long does a visual roof inspection take?", a: "Most inspections take 45–90 minutes on site. Your full video report, with plain-English findings and priority ratings, is delivered within 24 hours." },
  { q: "What exactly do I get in the report?", a: "Smart-glasses video clips of every finding, high-resolution photos, a plain-English summary of each issue, priority ratings (urgent / monitor / ok), and a fixed-price quote if work is needed." },
  { q: "Do you work with strata committees and property managers?", a: "Yes — it is one of our specialities. Your evidence pack is formatted for committee meetings: clear video, clear terminology, clear pricing. Fewer calls, faster sign-offs, happier clients." },
  { q: "Which areas do you service?", a: "We are based in Kelmscott and service the entire Perth metro area, including all southern suburbs, the CBD and surrounding commercial precincts." },
  { q: "Is the inspection really free?", a: "Yes. The detailed visual roof inspection costs nothing and carries no obligation. You keep the video evidence whether you hire us or not." },
  { q: "How much does a re-roof or restoration cost?", a: "It depends on roof size, pitch, material and any structural repairs. After your free inspection you receive a fixed-price quote — no hidden costs, no surprises, complete transparency." },
  { q: "Will I actually understand the report?", a: "That is the whole point. Clear terminology equals complete understanding. Every video clip is narrated in plain English — no trade jargon, no confusing terminology, no guesswork." },
  { q: "Are you qualified and insured?", a: "Fully qualified and fully insured. Every project is carried out to Australian Standards and backed by our workmanship warranties." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Layout */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* LEFT: Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            
            {/* Premium Architectural Overline */}
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">FAQ</span>
            </div>

            <h3 className="text-3xl font-extrabold text-navy-900 sm:text-4xl leading-tight">
              Questions, Answered Clearly
            </h3>
            
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Everything you need to know about our visual roofing services.
            </p>

            {/* Decorative element */}
            <div className="mt-8 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-900">Still have questions?</p>
                  <a href="/contact" className="text-sm text-blue-600 font-semibold hover:text-blue-500 transition-colors">
                    Contact our team →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Scrollable FAQ List */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <div 
                  key={f.q} 
                  className={
                    "rounded-xl border transition-all duration-300 " +
                    (open === i 
                      ? "border-blue-500 bg-blue-50/30 shadow-sm" 
                      : "border-gray-200 bg-white hover:border-gray-300")
                  }
                >
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-navy-900"
                  >
                    <span className="text-sm sm:text-base">{f.q}</span>
                    <svg
                      className={"h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 " + (open === i ? "rotate-45" : "")}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <div 
                    className={
                      "overflow-hidden transition-all duration-300 " +
                      (open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0")
                    }
                  >
                    <p className="px-6 pb-6 text-sm sm:text-base leading-relaxed text-gray-600">
                      {f.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}