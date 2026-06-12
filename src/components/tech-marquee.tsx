const techs = [
  "React",
  "Next.js",
  "Python",
  "Google Cloud",
  "Tailwind CSS",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
]

export function TechMarquee() {
  const row = [...techs, ...techs]
  return (
    <section id="tech" className="relative border-y border-border py-10">
      <div className="mx-auto mb-8 max-w-6xl px-4 sm:px-6">
        <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          // The stack we build on
        </p>
      </div>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
          {row.map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-mono text-xl font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-2xl"
            >
              {t}
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-marquee items-center gap-12 pr-12"
        >
          {row.map((t, i) => (
            <span
              key={`b-${i}`}
              className="whitespace-nowrap font-mono text-xl font-medium text-muted-foreground sm:text-2xl"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
