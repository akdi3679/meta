import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getService, getAllServiceSlugs } from "@/lib/services-data";
import { Faq } from "@/components/sections/home/faq";
import { Cta } from "@/components/sections/home/cta";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found | Meta Roofing & Co" };
  
  return {
    title: `${service.title} | Meta Roofing & Co`,
    description: `${service.subtitle}. ${service.heroDesc.slice(0, 150)}...`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  
  if (!service) notFound();

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
                  Service {service.num}
                </span>
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <p className="mt-4 text-xl font-medium text-silver-400">
                {service.subtitle}
              </p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-silver-400">
                {service.heroDesc}
              </p>

              <div className="mt-8">
                <Button href="/contact" variant="primary" className="px-7 py-3.5">
                  Book This Service
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-800 shadow-2xl shadow-black/20">
              <img
                src={service.heroImage}
                alt={`${service.title} service by Meta Roofing & Co`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SCOPE & INCLUDES : STICKY LEFT ---------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Sticky Left Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">
                  What's Included
                </span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
                Complete<br />Service Scope
              </h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Every {service.title.toLowerCase()} job follows the same documented process. 
                You see what we do before, during, and after.
              </p>
            </div>

            {/* Right: Scope & Includes Lists */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Scope */}
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-6">Service Scope</h3>
                <div className="border-t border-gray-200">
                  {service.scope.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 py-4 border-b border-gray-200">
                      <span className="text-sm font-bold text-blue-600 pt-0.5">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed flex-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Includes */}
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-6">What's Included</h3>
                <div className="border-t border-gray-200">
                  {service.includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 py-4 border-b border-gray-200">
                      <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm text-gray-700 leading-relaxed flex-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICE-SPECIFIC FAQ ---------- */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Sticky Left Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">
                  Common Questions
                </span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
                {service.title}<br />FAQ
              </h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Everything you need to know about our {service.title.toLowerCase()} service.
              </p>
            </div>

            {/* Right: FAQ List */}
            <div className="lg:col-span-8">
              <div className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <details 
                    key={i}
                    className="group rounded-xl border border-gray-200 bg-white"
                  >
                    <summary className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-bold text-navy-900 list-none">
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <svg
                        className="h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 group-open:rotate-45"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SHARED SECTIONS ---------- */}
      <Cta />
    </>
  );
}