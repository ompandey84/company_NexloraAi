"use client"

import { useState, useEffect, useCallback } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import logoImage from "../../public/nexlora-logo.png"

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
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener("resize", handleResize, { passive: true })
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const handleLinkClick = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="relative h-7 w-7 sm:h-8 sm:w-8">
            <Image
              src={logoImage}
              alt="NexloraAI Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-mono text-xs font-semibold tracking-[0.15em] text-foreground sm:text-sm sm:tracking-[0.2em]">
            NEXLORAAI
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
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

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-x-0 top-14 bottom-0 z-40 border-t border-border bg-background/98 backdrop-blur-xl sm:top-16 md:hidden">
          <div className="flex flex-col gap-1 px-4 py-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={handleLinkClick}
                className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-4 rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-4px_var(--primary)]"
            >
              Start Project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
