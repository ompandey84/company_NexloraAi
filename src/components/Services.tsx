"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Brain, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development Services",
    description:
      "Custom websites, web apps, SaaS platforms, and e-commerce solutions built for performance and scale.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    isActive: true, // First card has active focus styling as shown in image
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps with smooth UX and native-feeling performance.",
    tags: ["React Native", "Flutter", "Supabase"],
    isActive: false,
  },
  {
    icon: Brain,
    title: "AI Integration Services",
    description:
      "Custom chatbots, LLM integrations, automation workflows, and intelligent app features using the latest AI models.",
    tags: ["OpenAI", "LangChain", "Python", "FastAPI"],
    isActive: false,
  },
  {
    icon: Layers,
    title: "UI/UX Design Services",
    description:
      "User-first interfaces that look stunning and convert visitors into customers. From wireframe to pixel-perfect.",
    tags: ["Figma", "Design Systems", "Prototyping"],
    isActive: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Accent Lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex justify-center mb-6">
            <div className="section-badge">
              <Layers className="w-3.5 h-3.5" />
              <span>What We Offer</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Services We <span className="gradient-text">Deliver</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We build high-performance digital products engineered to elevate user experience and drive business growth.
          </p>
        </motion.div>

        {/* 2x2 Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`group relative p-8 rounded-2xl transition-all duration-500 flex flex-col justify-between min-h-[320px] border ${
                service.isActive
                  ? "border-blue-500/40 bg-blue-950/[0.04] shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                  : "border-white/[0.06] bg-white/[0.01] hover:border-blue-500/30 hover:bg-blue-950/[0.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]"
              }`}
              id={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Inner Content */}
              <div className="space-y-6">
                {/* Circular Icon Wrap */}
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                  <service.icon className="w-5 h-5 text-blue-400" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-[15px]">
                    {service.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-zinc-300 bg-white/[0.03] rounded-full border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learn More Link */}
              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
