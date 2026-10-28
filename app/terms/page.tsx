import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The plain-English terms covering Meta Roofing & Co inspections, visual reports and roofing works.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold text-navy-900">Terms of Service</h1>
      <p className="mt-3 text-sm text-gray-600">Last updated: October 2026</p>

      <div className="mt-10 space-y-8 leading-relaxed text-gray-600">
        <section>
          <h2 className="text-xl font-bold text-navy-900">1. Our services</h2>
          <p className="mt-2">
            Meta Roofing & Co provides roof inspections, visual condition reports, re-roofing, restoration,
            maintenance, gutter cleaning, skylight and ventilation services across Perth, Western Australia.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy-900">2. Free inspections and quotes</h2>
          <p className="mt-2">
            Visual roof inspections and quotes are provided free of charge and without obligation. The video
            and photo evidence produced during your inspection is provided to you for your property records.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy-900">3. Pricing and variations</h2>
          <p className="mt-2">
            Quotes are fixed-price for the documented scope. Any additional work discovered during a job is
            photographed or filmed, explained in plain English, and priced for your approval before it proceeds.
            No work outside the approved scope starts without your written agreement.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy-900">4. Scheduling and weather</h2>
          <p className="mt-2">
            Roofing is weather-dependent. Where rain, high wind or unsafe conditions prevent work, we reschedule
            at no cost and notify you as early as possible. Punctuality is a core value; when delays are ours, we
            tell you immediately.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy-900">5. Warranties</h2>
          <p className="mt-2">
            Workmanship warranties are as stated on each service page and in your handover pack, in addition to
            manufacturer warranties on materials. Your rights under the Australian Consumer Law are not affected
            by these terms.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy-900">6. Liability</h2>
          <p className="mt-2">
            Our liability for services is limited, where permitted by law, to re-performing the services or
            refunding the price paid. We maintain public liability insurance for all on-site work.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy-900">7. Governing law</h2>
          <p className="mt-2">
            These terms are governed by the laws of Western Australia. Questions about these terms can be sent
            to admin@metaroofers.com or 0437 436 395.
          </p>
        </section>
      </div>
    </article>
  );
}