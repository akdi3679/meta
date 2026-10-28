import type { ServiceData } from "@/lib/data/services";

export function ServiceTestimonial({ service }: { service: ServiceData }) {
  const t = service.testimonial;
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-300 bg-white p-8 shadow-lg md:p-12">
          <div className="flex text-accent-silver" aria-label="5 star rating">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="mt-6 text-xl font-medium leading-relaxed text-navy-900 md:text-2xl">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="mt-8 border-t border-gray-300 pt-6">
            <p className="font-bold text-navy-900">{t.name}</p>
            <p className="text-sm text-gray-600">{t.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}