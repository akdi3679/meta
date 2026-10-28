import Link from "next/link";

const SERVICES_DATA = [
  {
    id: 1,
    slug: "re-roofing",
    title: "Re-Roofing",
    subtitle: "Complete Structural Renewal",
    image: "https://images.unsplash.com/photo-1763665814538-8ba04597286c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    professionalTitle: "Complete Roof Replacement & Structural Renewal",
    professionalDesc: "Our re-roofing service encompasses the complete removal of existing roofing materials, structural assessment, and installation of premium-grade roofing systems engineered for maximum longevity and weather resistance."
  },
  {
    id: 2,
    slug: "restoration",
    title: "Roof Restoration",
    subtitle: "Restoration & Protection",
    image: "https://images.unsplash.com/photo-1635424709961-f3a150459ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    professionalTitle: "Roof Restoration & Protective Coating Systems",
    professionalDesc: "Our restoration process revitalizes aging roof surfaces through meticulous cleaning, structural repointing, and application of industrial-grade protective coatings that extend roof lifespan by 15-20 years."
  },
  {
    id: 3,
    slug: "maintenance",
    title: "General Maintenance",
    subtitle: "Preventative Care",
    image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    professionalTitle: "Preventative Maintenance & Condition Monitoring",
    professionalDesc: "Our scheduled maintenance programs provide systematic inspection, early defect detection, and proactive remediation of minor issues before they escalate into costly structural failures or interior water damage."
  },
  {
    id: 4,
    slug: "gutters",
    title: "Gutter Cleans",
    subtitle: "Drainage Maintenance",
    image: "https://images.unsplash.com/photo-1683294494519-b3097c3ddd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    professionalTitle: "Gutter & Downpipe Drainage Systems Maintenance",
    professionalDesc: "Professional removal of accumulated debris from guttering systems, combined with high-pressure downpipe flushing and live flow testing to ensure optimal water diversion and prevent fascia deterioration."
  },
  {
    id: 5,
    slug: "skylights",
    title: "Skylights",
    subtitle: "Natural Light Solutions",
    image: "https://images.unsplash.com/photo-1635501640746-b5b9bd431952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    professionalTitle: "Skylight Installation & Weatherproofing",
    professionalDesc: "Expert installation of premium Velux skylight systems with OEM flashing kits, ensuring optimal natural light integration while maintaining absolute weatherproof integrity through rigorous water testing protocols."
  },
  {
    id: 6,
    slug: "ventilation",
    title: "Roof Ventilation",
    subtitle: "Climate Control Systems",
    image: "https://instagram.ftun16-1.fna.fbcdn.net/v/t51.82787-15/733448207_18096928151217245_3141971641434817240_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&_nc_map=urlgen_bucketless&ig_cache_key=MzkzNTQyNTQzNjAyOTgyODYwMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Qb5Bs5US_QcQ7kNvwFy5_ig&_nc_oc=AdpMHhGmnET4hKkK0ihH1CnusO0OHFIFqJD5kFGi3hQcmqdF4hjS240sVemH3acvFy8&_nc_zt=23&_nc_ht=instagram.ftun16-1.fna&_nc_gid=FYFis2KdDZuF55YXa9R4Zw&_nc_ss=7b6a8&oh=00_AQTnM9waMyK-Wkp8QJplw4vV_Wj1KfgpNU-PlY5i3LqKmw&oe=6AE78CDF",
    professionalTitle: "Roof Cavity Ventilation & Thermal Management",
    professionalDesc: "Engineering-grade ventilation solutions designed to optimize roof cavity airflow, significantly reducing heat accumulation and moisture-related deterioration while improving overall building energy efficiency."
  }
];

export function ServicesGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">Our Expertise</span>
            <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
          </div>
          <h3 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Professional Roofing Services</h3>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Comprehensive roofing solutions delivered with visual documentation and total transparency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden cursor-pointer transition-all duration-700 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2"
              style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                {/* Image with Smooth Zoom */}
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                />
                
                {/* Description Overlay with Smooth Fade */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/70 to-transparent flex items-end p-6 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                >
                  <div 
                    className="translate-y-5 transition-transform duration-700 group-hover:translate-y-0"
                    style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                  >
                    <p className="text-sm text-white leading-relaxed">
                      {service.professionalDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-1 flex-col p-6">
                {/* Subtitle Badge */}
                <div className="inline-flex w-fit items-center rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-3">
                  {service.subtitle}
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-navy-900 leading-tight">
                  {service.professionalTitle}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}