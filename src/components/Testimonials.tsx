import { Star } from "lucide-react"
import { Reveal } from "@/components/reveal"

const testimonials = [
  {
    quote:
      "Working with NexloraAI was one of the best decisions we made. They delivered our MVP in just 6 days and the quality was exceptional — our investors were blown away.",
    initials: "RM",
    name: "Rahul Mehta",
    role: "Founder & CEO, TaskFlow AI",
    location: "Mumbai, India",
  },
  {
    quote:
      "The AI integration they built for our platform increased user engagement by 40%. They genuinely understand both design and technology — rare to find in one team.",
    initials: "SC",
    name: "Sarah Chen",
    role: "CTO, Nexus Labs",
    location: "Singapore",
  },
  {
    quote:
      "Professional, fast, and incredibly talented. Our website went from idea to live in under 2 weeks. The attention to detail on mobile was something other agencies missed completely.",
    initials: "AP",
    name: "Arjun Patel",
    role: "CEO, Vantage Digital",
    location: "Dubai, UAE",
  },
]

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          // Testimonials
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          What Clients Say
        </h2>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Real feedback from founders and CTOs we&apos;ve built for.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition-colors hover:border-primary/40 sm:p-8">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-mono text-xs font-semibold text-primary">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="font-mono text-xs text-accent">{t.location}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
