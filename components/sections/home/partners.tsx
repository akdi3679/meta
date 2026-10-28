"use client";

const BRANDS = [
  { name: "COLORBOND", sub: "steel" },
  { name: "MONIER", sub: "roofing" },
  { name: "Dulux", sub: "protect" },
  { name: "VELUX", sub: "skylights" },
  { name: "LYSAGHT", sub: "steel" },
  { name: "SIKA", sub: "sealants" },
  { name: "Edmonds", sub: "ventilation" },
  { name: "Bradford", sub: "insulation" },
];

export function Partners() {
  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-10">
          Premium Materials & Trusted Partners
        </p>
        
        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Fade edges for a premium look */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

          {/* Scrolling Track - Changed from 60s to 80s for slower, premium feel */}
          <div className="flex w-max animate-[marquee_80s_linear_infinite] hover:[animation-play-state:paused]">
            {/* Render brands twice to create a seamless infinite loop */}
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div
                key={i}
                className="mx-12 flex flex-col items-center justify-center opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-110"
              >
                {/* Stylized Logo Text */}
                <span className="text-2xl font-extrabold tracking-tight text-navy-900">
                  {brand.name}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-1">
                  {brand.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}