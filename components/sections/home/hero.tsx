"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const SLIDES = [
  { id: 1, title: "1. We Record It", desc: "We use smart glasses to capture every detail of your roof in high-definition.", media: "https://images.unsplash.com/photo-1723686833894-c97f507acb5f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", type: "image", isRecording: true },
  { id: 2, title: "2. We Discuss It", desc: "We sit down with you and explain exactly what we found, in plain English.", media: "https://images.unsplash.com/photo-1681049400158-0ff6249ac315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", type: "image", isRecording: false },
  { id: 3, title: "3. We Fix It", desc: "We carry out the repairs with total transparency and clean up after ourselves.", media: "https://images.unsplash.com/photo-1634750009079-6bf7bede038b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", type: "image", isRecording: false },
];

function MediaDisplay({ src, type, isRecording }: { src: string; type: string; isRecording: boolean }) {
  return (
    // Changed bg-gray-100 to bg-navy-900 so it doesn't flash bright gray while loading on a dark card
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900 rounded-lg">
      {type === "video" ? (
        <video src={src} autoPlay muted loop playsInline className="h-full w-full object-cover" />
      ) : (
        <img src={src} alt="" className="h-full w-full object-cover" />
      )}
      {isRecording && (
        <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600"></span>
          </span> 
          REC
        </div>
      )}
    </div>
  );
}

export function Hero() {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => { 
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % SLIDES.length), 4000); 
    return () => clearInterval(timer); 
  }, []);
  
  const slide = SLIDES[current];

  return (
    <section 
      className="relative w-full bg-cover bg-center bg-no-repeat" 
      style={{ 
        minHeight: "calc(100vh + 40px)", 
        // ✅ FIX: Changed w=500&q=60 to w=1920&q=80 for crisp, high-resolution quality
        backgroundImage: "url('https://images.unsplash.com/photo-1587061633437-187ac80e8e7a?auto=format&fit=crop&q=80&w=1920')" 
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.5)_35%,transparent_70%)]" />
      
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid w-full lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            
            {/* Elegant Premium Eyebrow */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-silver-300 backdrop-blur-md mb-6">
              <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white">Trusted by Strata, Commercial & Residential Clients</span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Your Roof. <br />Our Vision.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-silver-400">
              See the proof before you spend a dollar. We combine traditional roofing expertise with smart-glasses technology to give you a clear, honest look at your roof. No jargon, no guesswork.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" className="px-8 py-4">Book Free Assessment</Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px]">
              
              {/* Card with Image Background + Dark Overlay + Clip Path */}
              <div 
                className="relative shadow-2xl [clip-path:polygon(0_32px,50%_0,100%_32px,100%_100%,0_100%)] pt-12 pb-6 px-4 bg-cover bg-center bg-no-repeat"
                style={{ 
                  // ✅ FIX: Changed w=500&q=60 to w=800&q=80 for a crisp card background
                  backgroundImage: "linear-gradient(rgba(10, 27, 51, 0.85), rgba(10, 27, 51, 0.95)), url('https://images.unsplash.com/photo-1673645652864-9c285c1eed29?auto=format&fit=crop&q=80&w=800')" 
                }}
              >
                <MediaDisplay src={slide.media} type={slide.type} isRecording={slide.isRecording} />
                
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-white">{slide.title}</h3>
                  <p className="mt-1 text-sm text-silver-300">{slide.desc}</p>
                </div>
                
                <div className="mt-4 flex justify-center gap-2">
                  {SLIDES.map((_, i) => (
                    <button 
                      key={i} 
                      type="button" 
                      onClick={() => setCurrent(i)} 
                      aria-label={`Go to slide ${i + 1}`} 
                      className={"h-2 w-2 rounded-full transition-all duration-300 " + (i === current ? "bg-blue-500" : "bg-white/40 hover:bg-white/60")} 
                    />
                  ))}
                </div>
              </div>

              {/* Ridge SVG perfectly overlays the clipped top edge */}
              <svg className="pointer-events-none absolute inset-x-0 top-0 h-8 w-full" viewBox="0 0 340 32" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="card-ridge" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#8A97A6" />
                    <stop offset="0.5" stopColor="#F2F5F8" />
                    <stop offset="1" stopColor="#8A97A6" />
                  </linearGradient>
                </defs>
                <path d="M0 32 L170 0 L340 32" fill="none" stroke="url(#card-ridge)" strokeWidth="2" />
              </svg>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}