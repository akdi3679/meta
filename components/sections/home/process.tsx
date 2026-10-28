const STEPS = [
  {
    num: "01",
    title: "We Record It",
    desc: "Meta smart glasses capture every defect in high-resolution POV video during inspection.",
    icon: "record"
  },
  {
    num: "02",
    title: "You Review It",
    desc: "Receive a plain-English visual report with video clips within 24 hours.",
    icon: "feather"
  },
  {
    num: "03",
    title: "We Fix It",
    desc: "Repairs executed exactly as documented. Every stage recorded for verification.",
    icon: "hammer"
  }
];

function StepIcon({ type }: { type: string }) {
  if (type === "record") {
    return (
      <span className="relative inline-flex h-2.5 w-2.5 ml-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600"></span>
      </span>
    );
  }
  
  if (type === "feather") {
    return (
      <svg className="inline-block h-5 w-5 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    );
  }
  
  if (type === "hammer") {
    return (
      <svg className="inline-block h-5 w-5 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L12 9" />
        <path d="M17.64 15L22 10.64" />
        <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 00-3.94-1.64H9l.92.82A6.18 6.18 0 0112 8.4v1.56l2 2h2.47l2.26 1.91" />
      </svg>
    );
  }
  
  return null;
}

export function Process() {
  return (
    <section className="relative bg-navy-900 py-20 overflow-hidden">
      
      {/* Tech Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)", 
          backgroundSize: "48px 48px" 
        }} 
      />
      
      {/* Glowing Orb for depth */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-blue-400 rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">Our Process</span>
            <span className="h-[2px] w-8 bg-blue-400 rounded-full"></span>
          </div>
          <h3 className="text-3xl font-extrabold text-white sm:text-4xl">How It Works</h3>
        </div>

        {/* Steps with Inline Icons */}
        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.num} className="relative px-6 md:px-8 py-2">
              
              {/* Large Number */}
              <div className="mb-4">
                <span className="text-5xl font-extralight tracking-tight text-blue-400/60">{step.num}</span>
              </div>
              
              {/* Title with Inline Icon */}
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight flex items-center">
                {step.title}
                <StepIcon type={step.icon} />
              </h4>
              
              {/* Description */}
              <p className="text-sm text-silver-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="/contact" 
            className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-blue-500"
          >
            Start Your Project
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}