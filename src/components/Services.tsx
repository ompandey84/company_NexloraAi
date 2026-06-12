import { Code2, Smartphone, Bot, Palette } from "lucide-react"
import { Reveal } from "@/components/reveal"

const services = [
  {
    icon: Code2,
    title: "Web Development Services",
    desc: "Custom websites, web apps, SaaS platforms, and e-commerce solutions built for performance and scale.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps with smooth UX and native-feeling performance.",
    tags: ["React Native", "Flutter", "Supabase"],
  },
  {
    icon: Bot,
    title: "AI Integration Services",
    desc: "Custom chatbots, LLM integrations, automation workflows, and intelligent app features using the latest AI models.",
    tags: ["OpenAI", "LangChain", "Python", "FastAPI"],
  },
  {
    icon: Palette,
    title: "UI/UX Design Services",
    desc: "User-first interfaces that look stunning and convert visitors into customers. From wireframe to pixel-perfect.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
]

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          // What we do
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Our Web, Mobile &amp; AI Development Services
        </h2>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          End-to-end digital products — from first sketch to live product.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition-colors hover:border-primary/40 sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-accent">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
