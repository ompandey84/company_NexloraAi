import { Reveal } from "@/components/reveal"

const steps = [
  {
    no: "01",
    title: "Discovery Call",
    desc: "We understand your goals, users, and technical requirements in a focused 30-minute session.",
  },
  {
    no: "02",
    title: "Design & Prototype",
    desc: "Wireframes, UI design, and interactive prototype — all in Figma, ready for your review and feedback.",
  },
  {
    no: "03",
    title: "Build & Iterate",
    desc: "Clean, documented code. Weekly progress updates. You see the product grow in real time.",
  },
  {
    no: "04",
    title: "Launch & Support",
    desc: "Deployment, testing, and 30 days of post-launch support included in every project.",
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="relative border-y border-border bg-card/20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            // How we work
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our Software Development Process
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Simple, transparent, and built around your goals.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition-colors hover:border-primary/40">
                <span className="font-mono text-3xl font-semibold text-primary/60 transition-colors group-hover:text-primary">
                  {s.no}
                </span>
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
