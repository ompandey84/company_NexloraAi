"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most websites and web apps are delivered within 2–4 weeks depending on complexity. MVPs and landing pages can be ready in as little as 5–7 days.",
  },
  {
    q: "What is your pricing?",
    a: "Pricing is project-based and scoped during the discovery call. We quote on value and outcomes rather than hourly rates, so you always know the cost upfront.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We deliver products for founders and businesses across India, the UAE, the US, and beyond, with async-friendly workflows and clear weekly updates.",
  },
  {
    q: "Can you maintain the website after launch?",
    a: "Absolutely. Every project includes 30 days of post-launch support, and we offer ongoing maintenance retainers for continued updates and improvements.",
  },
  {
    q: "What if I already have a design in Figma?",
    a: "Perfect — we can build directly from your existing Figma files, or refine them first. Either way, you get pixel-perfect, production-ready implementation.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, we're happy to sign an NDA before discussing your project in detail. Your ideas and data are always treated as confidential.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <Reveal className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          // FAQ
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-col gap-3">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur transition-colors hover:border-primary/40">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-medium text-foreground sm:text-base">
                    {f.q}
                  </span>
                  <Plus
                    className={`h-4 w-4 shrink-0 text-accent transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
