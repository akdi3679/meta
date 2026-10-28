import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getProject, getAllProjectIds } from "@/lib/projects-data";
import { Cta } from "@/components/sections/home/cta";

export async function generateStaticParams() {
  return getAllProjectIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: "Project Not Found | Meta Roofing & Co" };
  
  return {
    title: `${project.title} | Meta Roofing & Co`,
    description: `${project.service} project in ${project.location}. ${project.summary.slice(0, 150)}...`,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  
  if (!project) notFound();

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative bg-navy-900 pt-24 pb-20 overflow-hidden">
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-5 text-xs font-bold uppercase tracking-[0.2em] text-silver-500">
                <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
                <span>/</span>
                <span className="text-silver-400">{project.service}</span>
              </div>

              {/* Category/Location with Map Icon */}
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-8 bg-silver-500 rounded-full"></span>
                <div className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-silver-400">
                    {project.category} · {project.location}
                  </span>
                </div>
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-silver-400">
                {project.summary}
              </p>

              {/* Key Stats */}
              <div className="mt-8 grid grid-cols-2 gap-6 max-w-md">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-silver-500 mb-1">Duration</p>
                  <p className="text-lg font-bold text-white">{project.duration}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-silver-500 mb-1">Project Value</p>
                  <p className="text-lg font-bold text-white">{project.value}</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-800 shadow-2xl shadow-black/20">
              <img
                src={project.heroImage}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PROJECT DETAILS : STICKY LEFT ---------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Sticky Left Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">
                  Project Details
                </span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
                The Full<br />Story
              </h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Every project documented from start to finish. See the challenge, 
                the solution, and the results — all backed by video evidence.
              </p>

              {/* Service Link */}
              <div className="mt-8 rounded-xl bg-gray-50 p-5 border border-gray-100">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Service Used</p>
                <Link 
                  href={`/services/${project.serviceSlug}`} 
                  className="text-lg font-bold text-navy-900 hover:text-blue-600 transition-colors"
                >
                  {project.service} →
                </Link>
              </div>
            </div>

            {/* Right: Project Content */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* The Challenge */}
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-4">The Challenge</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* The Solution */}
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-6">The Solution</h3>
                <div className="border-t border-gray-200">
                  {project.solution.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 py-4 border-b border-gray-200">
                      <span className="text-sm font-bold text-blue-600 pt-0.5">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed flex-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Results */}
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-6">The Results</h3>
                <div className="border-t border-gray-200">
                  {project.results.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 py-4 border-b border-gray-200">
                      <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm text-gray-700 leading-relaxed flex-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-6">Project Gallery</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.gallery.map((img, index) => (
                    <div 
                      key={index} 
                      className={
                        "relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 " +
                        (index === 0 ? "col-span-2 aspect-[16/9]" : "")
                      }
                    >
                      <img 
                        src={img} 
                        alt={`${project.title} - image ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="rounded-xl bg-navy-900 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[2px] w-8 bg-blue-400 rounded-full"></span>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                    Client Feedback
                  </span>
                </div>
                <p className="text-lg leading-relaxed text-silver-300 mb-6">
                  &ldquo;{project.testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-white">{project.testimonial.author}</p>
                  <p className="text-sm text-silver-500">{project.testimonial.role}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <Cta />
    </>
  );
}