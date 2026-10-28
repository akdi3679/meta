import { Button } from "@/components/ui/button";

const services = [
  { title: "Re-Roofing", desc: "Complete roof replacement using premium materials. We document the tear-off and installation with video evidence so you see the structural integrity underneath.", tag: "Full Replacement" },
  { title: "Roof Restoration", desc: "Restore your existing roof to like-new condition. Includes high-pressure cleaning, ridge repointing, and protective coating to extend its lifespan by 15+ years.", tag: "Restore & Protect" },
  { title: "General Maintenance", desc: "Preventative care to extend roof life. We catch small issues like cracked tiles or loose flashing early, preventing major internal water damage.", tag: "Preventative Care" },
  { title: "Gutter Cleans", desc: "Professional debris removal with a full visual inspection of your downpipes and eaves. Prevents water backup and protects your home's foundation.", tag: "Debris Removal" },
  { title: "Skylights", desc: "Natural light solutions installed with absolute precision. We ensure the flashing and weather seals are 100% watertight, documented on video.", tag: "Natural Light" },
  { title: "Roof Ventilation", desc: "Reduce heat and moisture buildup in your roof cavity. Extends roof life, prevents condensation, and dramatically improves home energy efficiency.", tag: "Climate Control" },
];

export function DetailedServices() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="group flex flex-col rounded-2xl border border-gray-300 bg-white p-8 transition-all hover:border-accent-blue hover:shadow-xl">
              <span className="mb-4 inline-block w-fit rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-blue">
                {s.tag}
              </span>
              <h4 className="text-2xl font-bold text-navy-900">{s.title}</h4>
              <p className="mt-3 flex-1 text-base leading-relaxed text-gray-600">{s.desc}</p>
              
              <div className="mt-6 flex items-center justify-between border-t border-gray-300 pt-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-navy-900">
                  <svg className="h-4 w-4 text-accent-silver" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                  Visual Documentation Included
                </div>
                <Button href="/contact" variant="ghost" className="p-0 text-sm">
                  Get a Quote
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}