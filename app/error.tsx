"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-xs tracking-[0.35em] text-signal-500">SYSTEM FAULT · SAFE MODE</p>
      <h1 className="text-4xl font-black sm:text-5xl">Something failed on our side.</h1>
      <p className="text-roof-300">
        No data was exposed. If this keeps happening, quote the reference below and we’ll fix it fast.
      </p>
      {error.digest && (
        <code className="rounded bg-roof-900 px-3 py-1 font-mono text-xs text-roof-300">REF: {error.digest}</code>
      )}
      <button
        onClick={reset}
        className="rounded-lg bg-signal-500 px-5 py-3 text-sm font-semibold text-roof-950 hover:bg-signal-400"
      >
        Try again
      </button>
    </section>
  );
}