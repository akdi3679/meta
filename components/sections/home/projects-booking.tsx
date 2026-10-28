"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PROJECTS_DATA } from "@/lib/projects-data";

export function ProjectsBooking() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);
  
  // Scroll reveal state
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once when it comes into view
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the section is visible
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
            // Staggered delay: 1st card is instant, 2nd waits 150ms, 3rd waits 300ms
            const delayClass = index === 0 ? "delay-0" : index === 1 ? "delay-150" : "delay-300";
            
            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={`group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-navy-800 shadow-lg transition-all duration-700 ease-out ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                } ${delayClass}`}
              >
                {/* 1. Background Image (Smooth zoom on hover) */}
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* 2. Dark Gradient Overlay (Makes text readable) */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />

                {/* 3. Text Content (Always visible at bottom) */}
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    {project.category}
                  </p>
                  <h4 className="mt-2 text-xl font-bold leading-tight">
                    {project.title}
                  </h4>
                </div>

                {/* 4. Hover Reveal Overlay (Fades in and slides UP smoothly) */}
                <div className="absolute inset-0 flex items-center justify-center bg-navy-900/60 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out backdrop-blur-sm">
                  <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy-900 shadow-lg">
                    View Case Study
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}