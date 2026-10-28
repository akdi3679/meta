import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Meta Roofing & Co collects, uses and protects your personal information under the Australian Privacy Act 1988.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="text-4xl font-bold text-navy-900">Privacy Policy</h1>
      <p className="mt-3 text-sm text-gray-600">Last updated: October 2026</p>

      <div className="mt-10 space-y-8 leading-relaxed text-gray-600">
        <section>
          <h2 className="text-xl font-bold text-navy-900">What we collect</h2>
          <p className="mt-2">
            When you request a report or contact us, we collect only what we need to respond: your name,
            email address, phone number (if provided), property suburb, property type and the message you
            send us. We do not collect payment details through this website.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy-900">Why we collect it</h2>
          <p className="mt-2">
            To arrange your free inspection, deliver your visual roof report, provide quotes and carry out
            any work you approve. We never sell your personal information, and we never use pre-ticked
            consent boxes for marketing.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy-900">Who processes it</h2>
          <p className="mt-2">
            Your enquiry is delivered to our team via our email provider (Resend) and our website is hosted
            on Vercel with Cloudflare protecting it. These processors act only on our instructions, in line
            with the Australian Privacy Act 1988.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy-900">Cookies and analytics</h2>
          <p className="mt-2">
            We use privacy-friendly, cookieless analytics to understand which pages help visitors. No
            advertising trackers are used and no consent banner is required for this type of measurement.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy-900">Your rights</h2>
          <p className="mt-2">
            You may request access to, correction of, or deletion of your personal information at any time
            by emailing admin@metaroofers.com. We respond within a reasonable period as required by law.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy-900">Security</h2>
          <p className="mt-2">
            This website is served over HTTPS with strict security headers, spam protection and rate
            limiting. Enquiry data is stored only in our business email system with access limited to
            Meta Roofing & Co staff.
          </p>
        </section>
      </div>
    </article>
  );
}