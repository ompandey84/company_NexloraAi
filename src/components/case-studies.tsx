import { ArrowUpRight, TrendingUp } from "lucide-react"
import { Reveal } from "@/components/reveal"

const projects = [
  {
    category: "AR Commerce Platform",
    title: "VogueRent",
    desc: "Premium Multi-Vendor Fashion Rental Platform with AR Experience. Features real-time messaging, vendor management, and interactive AR previews.",
    metric: "AR Tech & Real-time",
    tags: ["React.js", "Node.js", "Supabase", "WebSockets"],
    link: "https://voguerent.in"
  },
  {
    category: "SaaS Platform",
    title: "GetYourQR",
    desc: "A comprehensive QR Menu Ordering System for restaurants. Enables contactless ordering, payments, and menu management.",
    metric: "QR Tech",
    tags: ["Next.js", "React", "Payment Integration"],
    link: "https://getyourqr.in/"
  },
  {
    category: "Booking Engine",
    title: "OnlyTurf",
    desc: "A dedicated sports facility booking and management platform. Streamlines venue reservations and availability tracking.",
    metric: "Facility Management",
    tags: ["Web App", "Scheduling", "UI/UX"],
    link: "https://onlyturf.in/"
  },
  {
    category: "E-Commerce",
    title: "Jewelry Shop",
    desc: "A fully functional digital storefront and e-commerce application built for a modern jewelry retail experience.",
    metric: "Django Ecommerce",
    tags: ["Django", "Python", "Bootstrap"],
    link: "https://jewelry-shop-six.vercel.app/"
  },
  {
    category: "Utility Application",
    title: "Calculator App",
    desc: "A responsive, sleek calculator interface built with React and styled with animated Tailwind CSS gradients.",
    metric: "React Web App",
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "https://calculator-three-plum-78.vercel.app/"
  },
]

export function CaseStudies() {
  return (
    <section
      id="work"
      className="relative border-y border-border bg-card/20 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            // Our work
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Case Studies: Web, Mobile &amp; AI Projects
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every project is built with real outcomes in mind — faster
            workflows, higher conversions, smarter decisions.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition-colors hover:border-primary/40 sm:p-8 block">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wide text-accent">
                    {p.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  <TrendingUp className="h-4 w-4" />
                  {p.metric}
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
