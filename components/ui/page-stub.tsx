import { Button } from "@/components/ui/button";

export function PageStub({ title, blurb }: { title: string; blurb: string }) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-xs tracking-[0.35em] text-signal-500">SPRINT 2 · IN BUILD</p>
      <h1 className="text-4xl font-black sm:text-5xl">{title}</h1>
      <p className="max-w-xl text-roof-300">{blurb}</p>
      <Button href="/contact">Meanwhile — book a free roof report</Button>
    </section>
  );
}