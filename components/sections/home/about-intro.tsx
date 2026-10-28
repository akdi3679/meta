import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/ui/count-up";

export function AboutIntro() {
  // val: 0 means it's just text (like "Perth"), otherwise it animates
  const stats = [
    { val: 6, suffix: "", label: "Years Experience" },
    { val: 500, suffix: "+", label: "Projects Completed" },
    { val: 100, suffix: "%", label: "Satisfaction Rate" },
    { val: 0, suffix: "Perth", label: "Metro Service Area" }, 
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 items-center lg:grid-cols-2">
          
          {/* Left Column: Content & Stats */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">
                About Meta Roofing & Co
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-navy-900 sm:text-3xl lg:text-4xl leading-tight">Visual Roofing Specialists</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              At Meta Roofing & Co, we combine professional expertise with cutting-edge visual technology. 
              Every inspection is recorded, every finding is documented, and every client gets complete 
              transparency. By eliminating the guesswork, we deliver faster sign-offs and happier clients.
            </p>

            {/* Compact Modern Stats Grid with CountUp */}
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-gray-200 pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                    {s.val === 0 ? s.suffix : <CountUp end={s.val} suffix={s.suffix} />}
                  </div>
                  <div className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 sm:text-xs">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/about" variant="primary" className="px-7 py-3 text-sm">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" 
                alt="Modern residential roof in Perth" 
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 hidden sm:block animate-fade-up" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-extrabold text-navy-900"><CountUp end={6} /> Years</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Industry Experience</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}