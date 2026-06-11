"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Technologies />
        <Testimonials />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
