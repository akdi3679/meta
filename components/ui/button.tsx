import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-500 rounded-lg",
  outline: "border-2 border-silver-400/70 text-white hover:bg-white hover:text-navy-900 rounded-lg",
  ghost: "text-blue-600 hover:text-blue-500 rounded-lg",
};

const base =
  "group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  const cls = base + " " + styles[variant] + " " + className;
  
  // Arrow ONLY slides right on hover - no shine, no lift
  const arrow = (
    <svg 
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );

  if (href) return <Link href={href} className={cls}>{children} {arrow}</Link>;
  return <button type="button" className={cls}>{children} {arrow}</button>;
}