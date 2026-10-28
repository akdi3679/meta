import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Process } from "@/components/sections/home/process";
import { Testimonials } from "@/components/sections/home/testimonials";
import { Faq } from "@/components/sections/home/faq";
import { Cta } from "@/components/sections/home/cta";

export const metadata: Metadata = {
  title: "Our Services | Meta Roofing & Co",
  description:
    "Complete visual roofing services in Perth. Re-roofing, restoration, maintenance, gutter cleans, skylights and ventilation — all documented on video.",
};

const SERVICES = [
  {
    slug: "re-roofing",
    num: "01",
    title: "Re-Roofing",
    subtitle: "Complete Structural Renewal",
    desc: "Full tear-off and replacement with Colorbond steel or Monier tiles. Every stage recorded, every junction flashed to Australian Standards.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=600",
    tags: ["Residential", "Commercial", "10-year warranty"]
  },
  {
    slug: "restoration",
    num: "02",
    title: "Roof Restoration",
    subtitle: "Cleaning, Repointing & Coating",
    desc: "High-pressure clean, ridge re-bed, tile replacement and Dulux Acratex coating. Extends roof life by 15–20 years with full video documentation.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
    tags: ["Tile roofs", "Colour matched", "Before & after video"]
  },
  {
    slug: "maintenance",
    num: "03",
    title: "General Maintenance",
    subtitle: "Preventative Inspections",
    desc: "Scheduled visual inspections with priority-rated defect reports. Catch small issues before they become expensive structural failures.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600",
    tags: ["Annual plans", "Strata-ready", "24h reports"]
  },
  {
    slug: "gutters",
    num: "04",
    title: "Gutter Cleans",
    subtitle: "Drainage System Maintenance",
    desc: "Complete debris removal, downpipe flushing and live flow testing — all recorded on video as proof of a clear, working system.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
    tags: ["Flow tested", "Video proof", "Fascia inspection"]
  },
  {
    slug: "skylights",
    num: "05",
    title: "Skylights",
    subtitle: "Installation & Weatherproofing",
    desc: "Velux supply and installation with OEM flashing kits. Internal lining, on-camera water testing and full manufacturer warranty.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600",
    tags: ["Velux authorised", "Water tested", "Internal finish"]
  },
  {
    slug: "ventilation",
    num: "06",
    title: "Roof Ventilation",
    subtitle: "Thermal & Moisture Management",
    desc: "Cavity-sized ventilation systems — whirlybirds, solar units or eave vents — with before and after temperature readings documented.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600",
    tags: ["Energy saving", "Condensation control", "Measured results"]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative bg-navy-900 pt-24 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)", 
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)"
          }} 
        />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-[2px] w-8 bg-blue-400 rounded-full"></span>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                  Our Services
                </span>
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Every Roof Job,
                <br />
                On Video.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-silver-400">
                From full re-roofing to a single gutter clean, every service we offer
                is documented with smart-glasses video. You see the problem. You see
                the fix. You keep the evidence.
              </p>

              <div className="mt-8">
                <Button href="/contact" variant="primary" className="px-7 py-3.5">
                  Book a Free Assessment
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-800 shadow-2xl shadow-black/20">
              <img
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1200"
                alt="Professional roofing service in Perth by Meta Roofing & Co"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES LIST : STICKY LEFT ---------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Sticky Left Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">
                  What We Do
                </span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
                Six Services.<br />One Standard.
              </h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Every service follows the same process: record, report, fix, verify.
                Click any service below to see exactly what's included.
              </p>

              <div className="mt-8 rounded-xl bg-gray-50 p-5 border border-gray-100">
                <p className="text-sm font-bold text-navy-900 mb-1">Not sure what you need?</p>
                <p className="text-sm text-gray-600 mb-3">
                  Book a free visual inspection and we'll show you on video.
                </p>
                <a href="/contact" className="text-sm font-bold text-blue-600 hover:text-blue-500 transition-colors">
                  Get in touch →
                </a>
              </div>
            </div>

            {/* Right: Service List with Images */}
            <div className="lg:col-span-8">
              <div className="border-t border-gray-200">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group block border-b border-gray-200 py-8 transition-colors duration-300 hover:bg-gray-50"
                  >
                    <div className="flex items-start gap-6">
                      
                      {/* Image Thumbnail */}
                      <div className="flex-shrink-0 w-32 h-24 overflow-hidden rounded-lg bg-gray-100">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Number */}
                      <span className="text-3xl font-extralight tracking-tight text-blue-600/60 pt-1">
                        {service.num}
                      </span>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-4 mb-2">
                          <h3 className="text-xl font-bold text-navy-900 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h3>
                          <svg 
                            className="h-5 w-5 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" 
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>

                        <p className="text-sm font-medium text-gray-500 mb-3">
                          {service.subtitle}
                        </p>

                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                          {service.desc}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SHARED SECTIONS ---------- */}
      <Process />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}