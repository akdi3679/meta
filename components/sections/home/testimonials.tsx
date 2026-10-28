"use client";

interface Testimonial {
  rating: number;
  text: string;
  author: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    rating: 5,
    text: "The video evidence pack changed everything. Owners who had been blocking the work for over a year finally understood what was needed.",
    author: "Sarah Jenkins",
    role: "Strata Manager, Leederville"
  },
  {
    rating: 5,
    text: "Professional, safe, and incredibly thorough. The asbestos removal and re-roof were handled flawlessly, and the video documentation gave us total peace of mind.",
    author: "Mark & David T.",
    role: "Homeowners, Scarborough"
  },
  {
    rating: 5,
    text: "Our complicated Roman tile roof looks brand new. The before-and-after video proved the value of the restoration. Highly recommend their attention to detail.",
    author: "Emma Rossi",
    role: "Homeowner, Applecross"
  },
  {
    rating: 5,
    text: "Under 6 hours, rust treated, safety access system included, and fully documented. Meta Roofing is now our go-to for fast, reliable work.",
    author: "Paul Nguyen",
    role: "Property Manager, Victoria Park"
  },
  {
    rating: 5,
    text: "They water-tested the skylight on video before they left. Two winters later, not a single drop. Our hallway is transformed.",
    author: "Sophie Turner",
    role: "Homeowner, Canning Vale"
  },
  {
    rating: 5,
    text: "The summer special was a game-changer. The powder-coated Terminator vents dropped our ceiling temperatures noticeably, and the lifetime warranty is a huge bonus.",
    author: "David Chen",
    role: "Homeowner, Kelmscott"
  }
];

export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">Testimonials</span>
            <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
          </div>
          <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Trusted by Perth Locals</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial: Testimonial, index: number) => (
            <div 
              key={index} 
              className="flex flex-col rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i: number) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-gray-600">"{testimonial.text}"</p>
              <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="text-sm font-bold text-navy-900">{testimonial.author}</p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}