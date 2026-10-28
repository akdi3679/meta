"use client";

import { useState, useEffect } from "react";

export default function Loading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Small delay to prevent flickering on fast loads
    const timer = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white animate-fade-in">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 82, 204, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 82, 204, 0.08) 1px, transparent 1px)", 
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)"
        }} 
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-blue-600/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin"></div>
        </div>
        
        {/* Logo Text */}
        <div className="text-center">
          <p className="text-xl font-extrabold tracking-tight text-navy-900">META ROOFING</p>
          <p className="mt-1 text-[10px] font-bold tracking-[0.3em] text-gray-500">& CO.</p>
        </div>
      </div>
    </div>
  );
}