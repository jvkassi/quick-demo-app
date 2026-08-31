const features = [
  {
    kicker: "01",
    title: "GitHub repo",
    body: "Source lives on GitHub so anyone can clone, review, and ship from the same tree.",
  },
  {
    kicker: "02",
    title: "Vercel deploy",
    body: "Zero-config production: import the repo, leave the defaults, and the app is live.",
  },
  {
    kicker: "03",
    title: "Next.js",
    body: "App Router, TypeScript, and Tailwind. A standard stack Vercel already knows how to build.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="grain pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-brass/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10rem] right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-moss/10 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10 sm:px-10">
        <header className="flex items-center justify-between gap-4">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.28em] text-paper/60">
            quick-demo-app
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-3 py-1 font-sans text-xs font-medium uppercase tracking-[0.18em] text-brass">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" />
            Ready to deploy
          </span>
        </header>

        <section className="flex flex-1 flex-col justify-center py-16 sm:py-24">
          <p className="mb-5 font-sans text-sm uppercase tracking-[0.32em] text-brass">
            Shipped · GitHub · Vercel
          </p>
          <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-paper sm:text-7xl">
            Demo is live.
          </h1>
          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-paper/70 sm:text-xl">
            A quick Next.js app shipped to GitHub + Vercel. One page, no
            backend, nothing to configure.
          </p>
        </section>

        <section className="grid gap-4 border-t border-paper/10 pt-8 sm:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-paper/10 bg-paper/[0.03] p-6"
            >
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-brass">
                {feature.kicker}
              </p>
              <h2 className="mt-3 font-display text-2xl font-medium text-paper">
                {feature.title}
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-paper/65">
                {feature.body}
              </p>
            </article>
          ))}
        </section>

        <footer className="mt-16 flex flex-col gap-2 border-t border-paper/10 pt-6 font-sans text-sm text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>quick-demo-app · local scaffold</p>
          <a
            href="https://github.com/jvkassi/quick-demo-app"
            className="text-brass underline decoration-brass/40 underline-offset-4 transition hover:text-paper"
          >
            https://github.com/jvkassi/quick-demo-app
          </a>
        </footer>
      </div>
    </main>
  );
}
