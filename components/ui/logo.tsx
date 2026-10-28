import Link from "next/link";

export function Logo({ id = "lg", variant = "dark", compact = false }: { id?: string; variant?: "dark" | "light"; compact?: boolean }) {
  const gid = "silver-" + id;
  const textColor = variant === "light" ? "text-white" : "text-navy-900";
  const subColor = variant === "light" ? "text-silver-500" : "text-gray-500";

  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Meta Roofing & Co — home">
      <svg width="40" height="32" viewBox="0 0 44 32" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#F2F5F8" />
            <stop offset="0.45" stopColor="#C7CED8" />
            <stop offset="0.55" stopColor="#8A97A6" />
            <stop offset="1" stopColor="#E8ECF1" />
          </linearGradient>
        </defs>
        <path d="M4 28 V14 L14 4 L24 14 V28" stroke={"url(#" + gid + ")"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 28 V14 L30 4 L40 14 V28" stroke={"url(#" + gid + ")"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {!compact && (
        <span className="leading-none">
          <span className={"block text-xl font-extrabold tracking-tight " + textColor}>META ROOFING</span>
          <span className={"mt-0.5 block text-[10px] font-bold tracking-[0.3em] " + subColor}>& CO.</span>
        </span>
      )}
    </Link>
  );
}