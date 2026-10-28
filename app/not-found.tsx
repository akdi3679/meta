import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-xs tracking-[0.35em] text-signal-500">ERROR 404 · DEFECT NOT FOUND</p>
      <h1 className="text-4xl font-black sm:text-5xl">This page isn’t on the roof plan.</h1>
      <p className="text-roof-300">
        The URL you followed doesn’t exist. Nothing is leaking — let’s get you back to solid ground.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-lg bg-signal-500 px-5 py-3 text-sm font-semibold text-roof-950 hover:bg-signal-400">
          Back to home
        </Link>
        <Link href="/contact" className="rounded-lg border border-roof-600 px-5 py-3 text-sm font-semibold text-roof-100 hover:border-signal-500">
          Book a free roof report
        </Link>
      </div>
    </section>
  );
}