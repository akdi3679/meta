"use client";

import { useState } from "react";
import { Faq } from "@/components/sections/home/faq";

const CONTACT_DETAILS = [
  {
    label: "Call Us",
    value: "0400 000 000",
    sub: "Mon–Fri, 7am–5pm",
    href: "tel:+61400000000",
    icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  },
  {
    label: "Email Us",
    value: "info@metaroofing.com.au",
    sub: "Response within 24 hours",
    href: "mailto:info@metaroofing.com.au",
    icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>
  },
  {
    label: "Visit Us",
    value: "Kelmscott, WA 6111",
    sub: "Serving all Perth metro",
    href: "https://maps.google.com/?q=Kelmscott+WA+6111",
    icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>
  },
  {
    label: "Emergency",
    value: "After-hours call-out",
    sub: "Active leaks & storm damage",
    href: "tel:+61400000000",
    icon: <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></>
  }
];

const inputClass = "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-navy-900 placeholder-gray-400 transition-colors focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-navy-900">
        {label} {required && <span className="text-blue-600">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [enquiryType, setEnquiryType] = useState<"homeowner" | "business">("homeowner");
  const [submitted, setSubmitted] = useState(false);

  const [homeForm, setHomeForm] = useState({
    name: "", email: "", phone: "", suburb: "", roofType: "", service: "", message: ""
  });

  const [businessForm, setBusinessForm] = useState({
    company: "", contactName: "", workEmail: "", phone: "", properties: "", siteAddress: "", service: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 500);
  };

  const resetForm = () => {
    setSubmitted(false);
    setHomeForm({ name: "", email: "", phone: "", suburb: "", roofType: "", service: "", message: "" });
    setBusinessForm({ company: "", contactName: "", workEmail: "", phone: "", properties: "", siteAddress: "", service: "", message: "" });
  };

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative bg-navy-900 pt-28 pb-20 overflow-hidden">
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

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-blue-400 rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">Contact</span>
            <span className="h-[2px] w-8 bg-blue-400 rounded-full"></span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Your Roof.
            <br />
            Our Point of View.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-silver-400">
            Tell us what's happening on your roof. We'll send a technician with smart
            glasses, record the inspection, and hand you a video report — free,
            with no obligation to proceed.
          </p>
        </div>
      </section>

      {/* ---------- CONTACT DETAILS AT TOP ---------- */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {CONTACT_DETAILS.map((item, index) => (
              <div
                key={item.label}
                className={
                  "px-6 py-4 " +
                  (index < CONTACT_DETAILS.length - 1 ? "lg:border-r border-gray-200" : "")
                }
              >
                <div className="flex items-center gap-2 mb-3">
                  <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    {item.label}
                  </span>
                </div>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block text-sm font-bold text-navy-900 hover:text-blue-600 transition-colors break-words"
                >
                  {item.value}
                </a>
                <p className="mt-1 text-xs text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FORM SECTION ---------- */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">
                Request an Inspection
              </span>
              <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
            </div>
            <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Get in Touch
            </h2>
          </div>

          {/* Selector Toggle ON the Form */}
          <div className="mb-8">
            <div className="inline-flex w-full rounded-full bg-white p-1.5 border border-gray-200 shadow-sm">
              <button
                type="button"
                onClick={() => { setEnquiryType("homeowner"); setSubmitted(false); }}
                className={
                  "flex-1 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 " +
                  (enquiryType === "homeowner"
                    ? "bg-navy-900 text-white shadow-md"
                    : "text-gray-500 hover:text-navy-900")
                }
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Homeowner
              </button>
              <button
                type="button"
                onClick={() => { setEnquiryType("business"); setSubmitted(false); }}
                className={
                  "flex-1 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 " +
                  (enquiryType === "business"
                    ? "bg-navy-900 text-white shadow-md"
                    : "text-gray-500 hover:text-navy-900")
                }
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Strata / Business
              </button>
            </div>
          </div>

          {/* Form Container */}
          {submitted ? (
            <div className="rounded-xl bg-white p-12 text-center border border-gray-200">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 mx-auto mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-navy-900 mb-3">Enquiry Received</h3>
              <p className="text-base text-gray-600 mb-6">
                Thank you. Our team will review your details and respond within
                24 hours to arrange your inspection.
              </p>
              <button
                type="button"
                onClick={resetForm}
                className="text-sm font-bold text-blue-600 hover:text-blue-500 transition-colors"
              >
                Submit another enquiry →
              </button>
            </div>
          ) : enquiryType === "homeowner" ? (
            /* ============ HOMEOWNER FORM ============ */
            <form onSubmit={handleSubmit} className="rounded-xl bg-white p-8 border border-gray-200">
              <div className="space-y-5">
                <Field label="Full Name" required>
                  <input type="text" required className={inputClass} placeholder="Your full name" value={homeForm.name} onChange={(e) => setHomeForm({ ...homeForm, name: e.target.value })} />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" required>
                    <input type="email" required className={inputClass} placeholder="you@example.com" value={homeForm.email} onChange={(e) => setHomeForm({ ...homeForm, email: e.target.value })} />
                  </Field>
                  <Field label="Mobile" required>
                    <input type="tel" required className={inputClass} placeholder="0400 000 000" value={homeForm.phone} onChange={(e) => setHomeForm({ ...homeForm, phone: e.target.value })} />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Suburb" required>
                    <input type="text" required className={inputClass} placeholder="e.g. Kelmscott" value={homeForm.suburb} onChange={(e) => setHomeForm({ ...homeForm, suburb: e.target.value })} />
                  </Field>
                  <Field label="Roof Type">
                    <select className={inputClass} value={homeForm.roofType} onChange={(e) => setHomeForm({ ...homeForm, roofType: e.target.value })}>
                      <option value="">Not sure</option>
                      <option value="tile">Tile</option>
                      <option value="metal">Metal / Colorbond</option>
                      <option value="flat">Flat / Membrane</option>
                    </select>
                  </Field>
                </div>

                <Field label="Service Required">
                  <select className={inputClass} value={homeForm.service} onChange={(e) => setHomeForm({ ...homeForm, service: e.target.value })}>
                    <option value="">Select a service</option>
                    <option value="inspection">Visual Inspection</option>
                    <option value="re-roofing">Re-Roofing</option>
                    <option value="restoration">Roof Restoration</option>
                    <option value="gutters">Gutter Cleans</option>
                    <option value="skylights">Skylights</option>
                    <option value="ventilation">Roof Ventilation</option>
                    <option value="other">Not sure yet</option>
                  </select>
                </Field>

                <Field label="What's happening?" required>
                  <textarea required rows={4} className={inputClass + " resize-none"} placeholder="Tell us about any leaks, staining, or issues you've noticed..." value={homeForm.message} onChange={(e) => setHomeForm({ ...homeForm, message: e.target.value })} />
                </Field>

                <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-blue-500">
                  Request My Inspection
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Free inspection. No obligation. Video report within 24 hours.
                </p>
              </div>
            </form>
          ) : (
            /* ============ BUSINESS FORM ============ */
            <form onSubmit={handleSubmit} className="rounded-xl bg-white p-8 border border-gray-200">
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Company / Strata Name" required>
                    <input type="text" required className={inputClass} placeholder="e.g. Sunrise Strata Ltd" value={businessForm.company} onChange={(e) => setBusinessForm({ ...businessForm, company: e.target.value })} />
                  </Field>
                  <Field label="Contact Name" required>
                    <input type="text" required className={inputClass} placeholder="Your name" value={businessForm.contactName} onChange={(e) => setBusinessForm({ ...businessForm, contactName: e.target.value })} />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Work Email" required>
                    <input type="email" required className={inputClass} placeholder="name@company.com.au" value={businessForm.workEmail} onChange={(e) => setBusinessForm({ ...businessForm, workEmail: e.target.value })} />
                  </Field>
                  <Field label="Direct Phone" required>
                    <input type="tel" required className={inputClass} placeholder="0400 000 000" value={businessForm.phone} onChange={(e) => setBusinessForm({ ...businessForm, phone: e.target.value })} />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Properties / Units">
                    <select className={inputClass} value={businessForm.properties} onChange={(e) => setBusinessForm({ ...businessForm, properties: e.target.value })}>
                      <option value="">Select scope</option>
                      <option value="1">Single site</option>
                      <option value="2-10">2–10 units</option>
                      <option value="11-30">11–30 units</option>
                      <option value="30+">30+ units</option>
                      <option value="portfolio">Multiple properties</option>
                    </select>
                  </Field>
                  <Field label="Service Required">
                    <select className={inputClass} value={businessForm.service} onChange={(e) => setBusinessForm({ ...businessForm, service: e.target.value })}>
                      <option value="">Select a service</option>
                      <option value="strata-report">Strata Condition Report</option>
                      <option value="maintenance">Maintenance Program</option>
                      <option value="10-year">10-Year Plan Compliance</option>
                      <option value="emergency">Emergency Response</option>
                      <option value="re-roof">Commercial Re-Roofing</option>
                      <option value="gutters">Gutter & Drainage Maintenance</option>
                    </select>
                  </Field>
                </div>

                <Field label="Site Address" required>
                  <input type="text" required className={inputClass} placeholder="Street, suburb and postcode" value={businessForm.siteAddress} onChange={(e) => setBusinessForm({ ...businessForm, siteAddress: e.target.value })} />
                </Field>

                <Field label="Project Requirements" required>
                  <textarea required rows={4} className={inputClass + " resize-none"} placeholder="Committee deadlines, defect concerns, maintenance history, or reporting requirements..." value={businessForm.message} onChange={(e) => setBusinessForm({ ...businessForm, message: e.target.value })} />
                </Field>

                <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-blue-500">
                  Submit Enquiry
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Evidence packs formatted for committee meetings and insurance.
                </p>
              </div>
            </form>
          )}

        </div>
      </section>

      {/* ---------- FULL-WIDTH MAP ---------- */}
      <section className="bg-white">
        <div className="aspect-[21/9] w-full max-h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13579!2d116.0589!3d-32.1456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKelmscott%20WA%206111!5e0!3m2!1sen!2sau!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Meta Roofing & Co service area"
          />
        </div>
      </section>

      <Faq />
    </>
  );
}