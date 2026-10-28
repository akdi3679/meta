import Link from "next/link";
import { PROJECTS_DATA } from "@/lib/projects-data";
import { Button } from "@/components/ui/button";

export function Projects() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">Our Work</span>
            </div>
            <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">Recent Projects</h2>
            <p className="mt-3 max-w-xl text-base text-gray-600">
              See the proof. Every project is fully documented with before, during, and after visuals.
            </p>
          </div>
          <Button href="/projects" variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
            View All Projects
          </Button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img src={project.heroImage} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-900 backdrop-blur-sm">
                  {project.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-blue-600">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-3">{project.summary}</p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs font-semibold text-gray-500">{project.service}</span>
                  <span className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    View Details
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}