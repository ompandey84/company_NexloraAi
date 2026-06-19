import { Hero } from "@/components/Hero"
import { TechMarquee } from "@/components/tech-marquee"
import { Services } from "@/components/Services"
import { Process } from "@/components/Process"
import { Story } from "@/components/story"
import { CaseStudies } from "@/components/case-studies"
import { Testimonials } from "@/components/Testimonials"
import Support from "@/components/Support"
import { Contact } from "@/components/Contact"
import Pricing from "@/components/Pricing"
import Blog from "@/components/Blog"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <Hero />
      <TechMarquee />
      <Divider />
      <Services />
      <Divider />
      <Process />
      <Divider />
      <Story />
      <Divider />
      <CaseStudies />
      <Divider />
      <Pricing />
      <Divider />
      <Testimonials />
      <Divider />
      <Blog />
      <Divider />
      <Support />
      <Divider />
      <Contact />
    </main>
  )
}

function Divider() {
  return (
    <div className="relative mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-border to-transparent">
      <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background shadow-[0_0_15px_var(--primary)] backdrop-blur">
        <div className="absolute inset-[2px] rounded-full bg-primary opacity-80" />
      </div>
    </div>
  )
}
