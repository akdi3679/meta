import { BeforeAfterSlider } from "@/components/ui/before-after-slider";

const ADVANTAGES = [
  { title: "Visual Technology", desc: "Smart glasses record every inspection in high-res video.", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg> },
  { title: "Clear Communication", desc: "Plain English reports. No confusing trade jargon.", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg> },
  { title: "Fixed Pricing", desc: "Transparent quotes. No hidden costs, no surprises.", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg> },
  { title: "Fast Committee Sign-Off", desc: "Visual evidence gets strata approvals in one meeting.", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg> },
  { title: "Local Perth Experts", desc: "Based in Kelmscott. Servicing the entire metro area.", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg> },
  { title: "Comprehensive Warranty", desc: "10-year workmanship warranty plus manufacturer guarantees.", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> }
];

export function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">Our Advantages</span>
              </div>
              <h3 className="text-3xl font-extrabold text-navy-900 sm:text-4xl leading-tight">Why Meta Roofing & Co?</h3>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">We combine traditional roofing expertise with cutting-edge visual technology to deliver unmatched transparency and trust.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ADVANTAGES.map((adv) => (
                <div key={adv.title} className="flex gap-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">{adv.icon}</div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900 mb-1">{adv.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <div className="relative">
              <div className="absolute -top-3 left-6 z-20 flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-navy-900">Visual Proof</span>
              </div>
              
              {/* ✅ FIX: Removed beforeLabel and afterLabel props */}
              <BeforeAfterSlider 
                beforeImage="https://roofspray.com.au/wp-content/uploads/bb-plugin/cache/before-warranwood-resized-1-landscape-d75d103edc276d5e9821e756cd834674-679afa5c6953c.jpg" 
                afterImage="https://roofspray.com.au/wp-content/uploads/bb-plugin/cache/after-warranwood-resized-1-landscape-9afeb44c7f53e91795a4245c5e0cc978-679afa6f560a4.jpg" 
              />
              
              <p className="mt-4 text-center text-xs font-medium text-gray-500">Drag the slider to see the transformation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}