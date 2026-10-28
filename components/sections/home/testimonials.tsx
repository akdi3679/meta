"use client";

import { useRef } from "react";

interface Testimonial {
  rating: number;
  text: string;
  author: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  { rating: 5, text: "The video evidence pack changed everything. Owners who had been blocking the work for over a year finally understood what was needed.", author: "Sarah Jenkins", role: "Strata Manager, Leederville" },
  { rating: 5, text: "Professional, safe, and incredibly thorough. The asbestos removal and re-roof were handled flawlessly, and the video documentation gave us total peace of mind.", author: "Mark & David T.", role: "Homeowners, Scarborough" },
  { rating: 5, text: "Our complicated Roman tile roof looks brand new. The before-and-after video proved the value of the restoration. Highly recommend their attention to detail.", author: "Emma Rossi", role: "Homeowner, Applecross" },
  { rating: 5, text: "Under 6 hours, rust treated, safety access system included, and fully documented. Meta Roofing is now our go-to for fast, reliable work.", author: "Paul Nguyen", role: "Property Manager, Victoria Park" },
  { rating: 5, text: "They water-tested the skylight on video before they left. Two winters later, not a single drop. Our hallway is transformed.", author: "Sophie Turner", role: "Homeowner, Canning Vale" },
  { rating: 5, text: "The summer special was a game-changer. The powder-coated Terminator vents dropped our ceiling temperatures noticeably, and the lifetime warranty is a huge bonus.", author: "David Chen", role: "Homeowner, Kelmscott" }
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with Google Badge */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">Testimonials</span>
            <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
          </div>
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl mb-6">
            Trusted by Perth Locals
          </h2>
          
          {/* Google Reviews Badge */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2">
              {/* Google Logo */}
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm font-bold text-gray-900">4.9</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <a 
              href="https://www.google.com/maps/place/36+Merrifield+Ave,+Kelmscott+WA+6111,+Australia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Write a Review
            </a>
          </div>
        </div>

        {/* Continuous Horizontal Scroll */}
        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-gray-50 to-transparent" />

          {/* Scrolling Track */}
          <div 
            ref={scrollRef}
            className="flex gap-6 animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused] w-max"
          >
            {/* Render testimonials 3 times for seamless loop */}
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((testimonial: Testimonial, index: number) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[350px] md:w-[400px] flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i: number) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="flex-1 text-sm leading-relaxed text-gray-600 mb-6">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-bold text-navy-900">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}