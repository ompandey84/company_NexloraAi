import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { TechMarquee } from "@/components/tech-marquee"
import { Services } from "@/components/Services"
import { Process } from "@/components/Process"
import { Story } from "@/components/story"
import { CaseStudies } from "@/components/case-studies"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <Process />
      <Story />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
