"use client"

import { useState } from "react"
import { MessageCircle, Zap, Send, Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      budget: formData.get('budget'),
      details: formData.get('details'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError(result.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          // Get in touch
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Ready to Build Something Great?
        </h2>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Let&apos;s talk about your project. Free 30-minute discovery call — no
          commitment.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Form */}
        <Reveal className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur sm:p-8">
            {submitted ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  Message sent successfully!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our team will get back to you at your email address within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {error && (
                  <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full Name">
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email Address">
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className={inputClass}
                    />
                  </Field>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Project Type">
                    <select name="projectType" required defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        Select a type
                      </option>
                      <option>Web Application</option>
                      <option>Mobile App</option>
                      <option>AI Integration</option>
                      <option>Other</option>
                    </select>
                  </Field>
                  <Field label="Budget Range">
                    <select name="budget" required defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        Select a range
                      </option>
                      <option>Under $5,000</option>
                      <option>$5,000 - $15,000</option>
                      <option>$15,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </Field>
                </div>
                <Field label="Project Details">
                  <textarea
                    name="details"
                    required
                    rows={5}
                    placeholder="Tell us about what you want to build..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-4px_var(--primary)] disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
                </button>
              </form>
            )}
          </div>
        </Reveal>

        {/* WhatsApp card */}
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card/50 p-6 backdrop-blur sm:p-8">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-accent">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-foreground">
                Connect on WhatsApp
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Prefer to chat directly? Message us and get a response fast.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5">
                <Zap className="h-3.5 w-3.5 text-accent" />
                <span className="font-mono text-xs text-foreground">
                  Fast Turnaround Time
                </span>
              </div>

              <p className="mt-6 font-mono text-xl font-semibold text-foreground">
                +91 6266621399
              </p>
            </div>

            <a
              href="https://wa.me/916266621399"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:shadow-[0_0_24px_-6px_var(--accent)]"
            >
              <MessageCircle className="h-4 w-4 text-accent" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const inputClass =
  "w-full rounded-lg border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
