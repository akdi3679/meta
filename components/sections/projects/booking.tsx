import { Button } from "@/components/ui/button";

export function ProjectsBooking() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Ready to Start Your Project?</h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          Book a free visual inspection and see exactly what your roof needs — with video evidence,
          plain-English findings and a fixed-price quote.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary" className="px-8 py-4">
            Book Now
          </Button>
          <Button href="tel:+61437436395" variant="ghost" className="px-8 py-4">
            Call 0437 436 395
          </Button>
        </div>
      </div>
    </section>
  );
}