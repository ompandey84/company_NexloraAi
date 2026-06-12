"use client"

import { motion } from "motion/react"
import { ArrowUpRight, Sparkles } from "lucide-react"

const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "7 Days", label: "Avg. MVP Delivery" },
  { value: "Global", label: "Clients in UAE & India" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* radial glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 35%, transparent), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-40 -z-10 h-[400px] w-[400px] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklch, var(--accent) 30%, transparent), transparent)",
        }}
      />
      {/* grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span className="font-mono text-xs tracking-wide text-muted-foreground">
            Trusted by forward-thinking brands
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl"
        >
          Web, Mobile &amp; AI App Development{" "}
          <span className="text-primary">That Scales</span> Your Business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          We build high-converting digital products and custom AI automations
          for startups and established brands. We turn complex problems into
          elegant, scalable software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-4px_var(--primary)] sm:w-auto"
          >
            Book Free Strategy Call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-all hover:bg-secondary sm:w-auto"
          >
            View Case Studies
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-border pt-10"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <dt className="text-2xl font-semibold text-foreground sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
