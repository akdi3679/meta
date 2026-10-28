"use client";

import { useState } from "react";
import { BeforeAfter } from "@/components/ui/before-after";

const PROJECTS = [
  { id: 1, title: "Commercial Re-Roof", location: "Perth CBD", category: "Commercial", desc: "Full Colorbond replacement on a three-level office block, completed in six days with zero disruption to tenants." },
  { id: 2, title: "Strata Restoration", location: "Armadale", category: "Strata", desc: "Committee-approved restoration backed by a full video evidence pack. Signed off in a single meeting." },
  { id: 3, title: "Gutters & Maintenance", location: "Kelmscott", category: "Residential", desc: "Gutter clean plus flashing repairs — two urgent defects caught on the visual report before winter." },
  { id: 4, title: "Skylight Installation", location: "Canning Vale", category: "Residential", desc: "Two Velux skylights installed and water-tested on camera before handover." },
  { id: 5, title: "Warehouse Ventilation", location: "Welshpool", category: "Commercial", desc: "Eight whirlybirds installed; condensation and heat issues solved with before and after readings." },
  { id: 6, title: "Townhouse Tile Restoration", location: "Gosnells", category: "Strata", desc: "Repointing and protective coating across twelve townhouse units, documented unit by unit." },
];

const FILTERS = ["All", "Residential", "Commercial", "Strata"];

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors " +
                (filter === f
                  ? "bg-navy-900 text-white"
                  : "border border-gray-300 bg-white text-navy-900 hover:border-accent-blue hover:text-accent-blue")
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article key={p.id} className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm transition-shadow hover:shadow-xl">
              <BeforeAfter label={p.title} />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-blue">
                  {p.category} · {p.location}
                </p>
                <h3 className="mt-2 text-xl font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}