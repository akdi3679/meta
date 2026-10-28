"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PROJECTS_DATA } from "@/lib/projects-data";

export function ProjectsBooking() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-navy-900">
                Our Portfolio
              </span>
            </div>
            <h3 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">
              See Our Work
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Real projects, real results. Every job is documented with visual
              evidence so you can see the quality of our craftsmanship.
            </p>
          </div>
          <Button href="/projects" variant="primary" className="px-8 py-4">
            View All Projects
          </Button>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featuredProjects.map((project, index) => {
            const delayClass = index === 0 ? "delay-0" : index === 1 ? "delay-150" : "delay-300";
            
            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={`group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1 ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                } ${delayClass}`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Category Badge */}
                  <div className="absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-900 backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-blue-600">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>
                  
                  <h4 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="flex-1 text-sm text-gray-600 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-xs font-semibold text-gray-500">{project.service}</span>
                    <span className="flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                      View Details
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}