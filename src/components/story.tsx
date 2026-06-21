import { Reveal } from "@/components/reveal"

const milestones = [
  {
    year: "2019",
    title: "The Spark",
    subtitle: "Solo developer, big dreams",
    desc: "Started as a self-taught developer obsessed with building things. Nights spent on tutorials and cloning websites for practice. The drive wasn't money — it was making something from nothing.",
    tag: "First website shipped",
  },
  {
    year: "2020",
    title: "First Real Client",
    subtitle: "Freelancing during the pandemic",
    desc: "The pandemic created a gold rush for digital. Landed the first paying client — a local business needing an online presence. Learned React. Sent the first invoice. Got paid.",
    tag: "First revenue earned online",
  },
  {
    year: "2021",
    title: "Going Full-Stack",
    subtitle: "Products, not just pages",
    desc: "Stopped building brochure sites and started building real products. Node.js, PostgreSQL, REST APIs, auth systems. Clients don't want a website — they want outcomes.",
    tag: "10 products launched",
  },
  {
    year: "2022",
    title: "The Agency Shift",
    subtitle: "From solo to small team",
    desc: "Demand exceeded solo capacity. Brought in the first collaborators. Moved from freelancing to systems — SOPs, onboarding flows, retainers. The business was becoming real.",
    tag: "First retainer signed",
  },
  {
    year: "2023",
    title: "The AI Revolution",
    subtitle: "Building with intelligence",
    desc: "LLMs changed everything overnight. Built the first AI-powered product for a client — a custom assistant that replaced 3 manual workflows. AI wasn't a trend; it was the new infrastructure.",
    tag: "First AI product live",
  },
  {
    year: "2024",
    title: "NexloraAI Is Born",
    subtitle: "A brand, not just a business",
    desc: "Consolidated everything under one roof. NexloraAI launched — combining web, mobile, and AI into a single agency brand. Stopped competing on price and started leading with expertise.",
    tag: "NexloraAI founded",
  },
  {
    year: "2025",
    title: "Scaling Globally",
    subtitle: "AI-native agency, worldwide reach",
    desc: "Delivering AI-powered products for founders and businesses across India, UAE, and the US. Every project ships faster, smarter, and with measurable ROI baked in.",
    tag: "250+ projects. 3 continents.",
  },
]

export function Story() {
  return (
    <section id="story" className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          // Our story
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          From 2019 to Today
        </h2>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Seven years of building, learning, and growing — one milestone at a time.
        </p>
      </Reveal>

      <div className="relative mt-16">
        {/* vertical line */}
        <div
          aria-hidden
          className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
        />
        <div className="flex flex-col gap-10">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={(i % 2) * 0.05}>
              <div
                className={`relative flex flex-col gap-4 pl-12 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0
                    ? "sm:pr-12 sm:text-right"
                    : "sm:ml-auto sm:pl-12"
                }`}
              >
                {/* node */}
                <span
                  aria-hidden
                  className={`absolute left-[13px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary sm:left-auto ${
                    i % 2 === 0
                      ? "sm:-right-[7px]"
                      : "sm:-left-[7px]"
                  }`}
                />
                <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition-colors hover:border-primary/40">
                  <span className="font-mono text-sm font-semibold text-primary">
                    {m.year}
                  </span>
                  <h3 className="mt-2 text-lg font-medium text-foreground">
                    {m.title}
                  </h3>
                  <p className="mt-0.5 text-xs uppercase tracking-wide text-accent">
                    {m.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {m.desc}
                  </p>
                  <div
                    className={`mt-4 inline-flex rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-foreground ${
                      i % 2 === 0 ? "sm:ml-auto" : ""
                    }`}
                  >
                    {m.tag}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
