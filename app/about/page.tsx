import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/ui/count-up";
import { Partners } from "@/components/sections/home/partners";
import { Process } from "@/components/sections/home/process";
import { Testimonials } from "@/components/sections/home/testimonials";
import { Faq } from "@/components/sections/home/faq";
import { Cta } from "@/components/sections/home/cta";

export const metadata: Metadata = {
  title: "About Us | Meta Roofing & Co",
  description: "Six years of Perth roofing expertise, now powered by Meta smart glasses. Every defect recorded, every report in plain English. Based in Kelmscott.",
};

const STATS = [
  { value: 6, suffix: "", label: "Years of Roofing Experience" },
  { value: 24, suffix: "h", label: "Visual Report Turnaround" },
  { value: 100, suffix: "%", label: "Inspections Recorded on Video" },
];

const VALUES = [
  { title: "Visual Evidence First", desc: "If it isn't recorded, it isn't a finding. Every issue is captured in high-resolution POV video.", icon: <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z M12 17a4 4 0 100-8 4 4 0 000 8z" /> },
  { title: "Plain English, Always", desc: "No trade jargon. No confusing terminology. You should understand your roof before you spend a dollar.", icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /> },
  { title: "Fixed, Honest Pricing", desc: "The price we quote is the price you pay. Itemised clearly, with no hidden extras added later.", icon: <path d="M12 1v22 M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /> },
  { title: "Built for Committees", desc: "Evidence packs formatted for strata meetings. Clear video, clear priorities, faster sign-offs.", icon: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 3a4 4 0 100 8 4 4 0 000-8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75" /> },
  { title: "Local to Perth", desc: "Based in Kelmscott. We service the southern suburbs, the CBD and the surrounding commercial precincts.", icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 13a3 3 0 100-6 3 3 0 000 6z" /> },
  { title: "Qualified & Insured", desc: "Fully qualified, fully insured, and finished to Australian Standards. Backed by workmanship warranties.", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-navy-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)" }} />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-[2px] w-8 bg-blue-400 rounded-full"></span>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">About Meta Roofing &amp; Co</span>
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">Roofing,<br />Made Visible.</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-silver-400">Six years on Perth roofs taught us one thing: the biggest problem in this trade isn't the work. It's the guesswork. So we changed the way you see it.</p>
              <div className="mt-8"><Button href="/contact" variant="primary" className="px-7 py-3.5">Book a Free Assessment</Button></div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-800 shadow-2xl shadow-black/20">
              <img src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Residential roof in Perth" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <Partners />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">Our Story</span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">From Tradesman<br />to Visual Specialist</h2>
              <p className="mt-4 text-base text-gray-600">The same hands on the roof. A completely different way of showing you what's up there.</p>
            </div>
            <div className="lg:col-span-8 space-y-6 text-base leading-relaxed text-gray-600">
              <p>Meta Roofing &amp; Co started the way most good roofing businesses do: on ladders, in summer heat, fixing problems other people had missed. Over six years around Kelmscott and the wider Perth metro, we learned that a roof leak is rarely the hard part.</p>
              <p>The hard part is explaining it. A homeowner being shown a small photo on a phone, a strata committee being asked to approve thousands of dollars based on a paragraph of trade jargon. That gap between what we see and what you're asked to trust is where doubt lives.</p>
              <p>So we started recording. Using Meta smart glasses, our inspections now run from your point of view. You watch us walk the roof. You see the cracked valley, the rusted flashing, the blocked downpipe with your own eyes — before anyone asks you for a signature.</p>
              <div className="rounded-xl bg-gray-50 p-6 border border-gray-100">
                <p className="text-lg font-bold text-navy-900">"You shouldn't have to take a roofer's word for it."</p>
                <p className="mt-2 text-sm text-gray-600">That is the entire reason this company exists.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3">
            {STATS.map((stat, i) => (
              <div key={stat.label} className={"px-8 py-6 " + (i < STATS.length - 1 ? "sm:border-r sm:border-gray-200" : "")}>
                <div className="text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl"><CountUp end={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">The Technology</span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">Your Roof, From the Inside Out</h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">Wearable smart glasses capture the inspection exactly as our technicians experience it. No drone shots you can't interpret. No vague descriptions. Just clear, first-person evidence.</p>
              <div className="mt-8 aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 border border-gray-200">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=900" alt="Inspection technology" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-0">
                {[
                  { num: "01", title: "First-Person Capture", desc: "Every angle, every defect, every junction recorded in high-resolution POV video while we inspect." },
                  { num: "02", title: "Priority-Rated Findings", desc: "Each issue is classified as urgent, monitor or satisfactory, so you know what can wait and what can't." },
                  { num: "03", title: "Narrated in Plain English", desc: "The footage comes with a spoken and written explanation. You don't need to know what a valley tray is to understand the problem." },
                  { num: "04", title: "Evidence You Keep", desc: "The report and footage are yours. Useful for insurance, for your next committee meeting, or for getting a second opinion." },
                ].map((item, index) => (
                  <div key={item.num} className={"py-6 " + (index < 3 ? "border-b border-gray-200" : "")}>
                    <div className="flex items-start gap-6">
                      <span className="text-3xl font-extralight tracking-tight text-blue-600/60">{item.num}</span>
                      <div>
                        <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">What We Stand On</span>
            </div>
            <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Non-Negotiables</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, index) => {
              const lastInRow = (index + 1) % 3 === 0;
              const lastRow = index >= VALUES.length - 3;
              return (
                <div key={value.title} className={"p-8 " + (!lastInRow ? "border-r border-gray-200 " : "") + (!lastRow ? "border-b border-gray-200" : "")}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{value.icon}</svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Process />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}