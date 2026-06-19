"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Story", href: "#story" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <Image src="/logo.png" alt="NexloraAI Logo" fill className="object-contain" />
          </div>
          <span className="font-mono text-sm font-semibold tracking-[0.2em] text-foreground">
            NEXLORAAI
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full border border-border bg-primary/10 px-4 py-2 text-sm font-medium text-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_24px_-4px_var(--primary)]"
          >
            Book a Call
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Start Project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
