"use client";

import { useState } from "react";

// Unique icons for each problem
const Icons = {
  leak: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />,
  rust: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M12 8v4 M12 16h.01" />,
  gutter: <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242 M12 12v9 M8 17l4 4 4-4" />,
  heat: <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />,
  dispute: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" />,
  ponding: <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 M2 16c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />,
  compliance: <path d="M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />,
  emergency: <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01" />,
};

const HOMEOWNER_DATA = [
  { id: 1, problem: "Water Stains & Leaks", pain: "Brown marks on the ceiling or dripping water after heavy storms.", icon: Icons.leak, fixTitle: "Precision Leak Detection", fixDesc: "We use smart glasses to trace the exact entry point of the water and seal it permanently.", points: ["High-res video documentation of the breach", "Permanent sealing of the entry point", "Post-repair water test recorded on camera"] },
  { id: 2, problem: "Rust & Corrosion", pain: "Flaking metal or rusted valleys compromising your roof's seal.", icon: Icons.rust, fixTitle: "Corrosion Removal & Coating", fixDesc: "We strip away compromised metal and apply industrial-grade coatings to extend your roof's life.", points: ["Removal of all flaking and rusted sections", "Application of premium rust-inhibitive primer", "Dual-coat protective finish for long-term defense"] },
  { id: 3, problem: "Blocked Gutters", pain: "Overflowing water damaging your fascia, or debris attracting pests.", icon: Icons.gutter, fixTitle: "Full Debris Clearance", fixDesc: "We clear every inch of your guttering and downpipes, then prove it works with a live water flow test.", points: ["Manual and vacuum removal of all debris", "High-pressure flushing of all downpipes", "Video proof of perfect water flow"] },
  { id: 4, problem: "High Energy Bills", pain: "Upstairs is unbearably hot in summer due to poor roof ventilation.", icon: Icons.heat, fixTitle: "Smart Ventilation Install", fixDesc: "We calculate your roof cavity's exact volume and install precision ventilation to drop temperatures.", points: ["Thermal assessment of your current roof cavity", "Installation of whirlybirds or solar vents", "Before and after temperature readings"] },
];

const BUSINESS_DATA = [
  { id: 1, problem: "Committee Disputes", pain: "Strata owners argue over quotes because they can't see the actual damage.", icon: Icons.dispute, fixTitle: "Visual Evidence for Committees", fixDesc: "We provide a visual video report that eliminates guesswork and gets committees to approve budgets instantly.", points: ["Clear, jargon-free video walkthroughs", "Priority-rated defect lists for budgets", "Documentation that satisfies strata laws"] },
  { id: 2, problem: "Flat Roof Ponding", pain: "Standing water accelerating membrane degradation and causing hidden leaks.", icon: Icons.ponding, fixTitle: "Commercial Membrane Solutions", fixDesc: "We re-grade the surface and apply commercial-grade membrane solutions to eliminate standing water.", points: ["Full assessment of drainage slopes", "Application of heavy-duty commercial membranes", "Long-term warranty on water-tightness"] },
  { id: 3, problem: "10-Year Plan Compliance", pain: "Your strata maintenance plan is due, and you lack documented roof conditions.", icon: Icons.compliance, fixTitle: "Video-Backed Condition Reports", fixDesc: "We deliver a comprehensive, video-backed condition report perfectly formatted for your 10-year plan.", points: ["Detailed visual audit of all roof assets", "Lifespan forecasting for major components", "Compliant formatting for WA strata laws"] },
  { id: 4, problem: "Tenant Emergencies", pain: "A sudden leak is affecting a commercial tenant and disrupting business.", icon: Icons.emergency, fixTitle: "Priority Emergency Response", fixDesc: "We prioritize emergency call-outs, secure the building, and document the fix for your insurance.", points: ["Rapid response to secure the premises", "Full video documentation for insurance claims", "Minimal disruption to tenant operations"] },
];

export function Solutions() {
  const [activeTab, setActiveTab] = useState<"homeowner" | "business">("homeowner");
  const [activeIndex, setActiveIndex] = useState(0);
  
  const data = activeTab === "homeowner" ? HOMEOWNER_DATA : BUSINESS_DATA;
  const active = data[activeIndex];

  return (
    // ✅ FIX ADDED HERE: overflow-hidden prevents the blur blob from stretching the page width
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">Interactive Inspection</span>
            <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
          </div>
          <h3 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Identify Your Problem, See Our Fix</h3>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            Select your property type on the left, then hover over the issues to see exactly how Meta Roofing resolves them.
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT HALF: Selector + Problems */}
          <div>
            <div className="mb-6">
              <div className="inline-flex rounded-full bg-white p-1.5 shadow-sm border border-gray-200">
                <button 
                  type="button" 
                  onClick={() => { setActiveTab("homeowner"); setActiveIndex(0); }} 
                  className={"flex items-center rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 " + (activeTab === "homeowner" ? "bg-navy-900 text-white shadow-md" : "text-gray-500 hover:text-navy-900")}
                >
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Homeowners
                </button>
                <button 
                  type="button" 
                  onClick={() => { setActiveTab("business"); setActiveIndex(0); }} 
                  className={"flex items-center rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 " + (activeTab === "business" ? "bg-navy-900 text-white shadow-md" : "text-gray-500 hover:text-navy-900")}
                >
                  <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Strata & Business
                </button>
              </div>
            </div>

            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              Common {activeTab === "homeowner" ? "Home" : "Business"} Issues
            </h4>
            
            <div className="space-y-3">
              {data.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className="cursor-magnifier group rounded-xl border p-4 sm:p-5 transition-all duration-300 flex items-start gap-4 bg-white border-gray-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                    style={{ transform: isActive ? "scale(1.02)" : "scale(1)" }}
                  >
                    <div className={`flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                      isActive ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
                    }`}>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {item.icon}
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <h5 className={`font-bold text-sm sm:text-base transition-colors ${isActive ? "text-blue-600" : "text-navy-900"}`}>
                        {item.problem}
                      </h5>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600 line-clamp-2">{item.pain}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT HALF: The Meta Fix (Dynamic Display) */}
          <div className="relative lg:sticky lg:top-24">
            <h4 className="text-sm font-bold uppercase tracking-wider text-silver-500 mb-4 flex items-center gap-2 lg:hidden">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              The Meta Fix
            </h4>

            {/* The "Screen" */}
            <div className="relative rounded-2xl bg-navy-900 p-8 sm:p-10 text-white shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-center border border-navy-800">
              
              {/* Background Tech Grid Pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
              
              {/* ✅ This blob is now safely clipped by the parent section's overflow-hidden */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div key={active.id} className="relative z-10 animate-fade-up">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 mb-6">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  The Meta Fix
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                  {active.fixTitle}
                </h3>
                
                <p className="text-base text-silver-400 mb-8 leading-relaxed">
                  {active.fixDesc}
                </p>

                <ul className="space-y-3">
                  {active.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-silver-300">
                      <svg className="h-5 w-5 flex-shrink-0 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}