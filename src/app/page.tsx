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
      <Services />
      <Process />
      <Story />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <Blog />
      <Support />
      <Contact />
    </main>
  )
}
