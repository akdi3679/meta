"use client";

import { useState } from "react";

export function BeforeAfter({ label }: { label: string }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[4/3] select-none overflow-hidden bg-navy-800">
      {/* BEFORE layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-navy-700 to-navy-900">
        <span className="absolute left-4 top-4 rounded bg-navy-900/80 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
          Before
        </span>
        <span className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-white/30">
          Photo placeholder
        </span>
      </div>

      {/* AFTER layer (clipped from the left) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent-blue/70 via-navy-700 to-navy-800"
        style={{ clipPath: "inset(0 0 0 " + pos + "%)" }}
      >
        <span className="absolute right-4 top-4 rounded bg-accent-blue px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
          After
        </span>
      </div>

      {/* Divider + handle */}
      <div className="pointer-events-none absolute inset-y-0" style={{ left: pos + "%" }}>
        <div className="h-full w-0.5 -translate-x-1/2 bg-white shadow" />
        <div className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-900 shadow-lg">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
          </svg>
        </div>
      </div>

      {/* Accessible drag control */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={"Compare before and after for " + label}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}