"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Lightbulb,
  Palette,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "Deep dive into your business goals, challenges, and vision. We understand what success looks like for you.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Crafting a comprehensive technical roadmap and architecture plan tailored to your requirements.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Creating stunning, intuitive interfaces with meticulous attention to user experience and brand identity.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Building with clean, scalable code using cutting-edge technologies. Agile sprints with transparent progress.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Rigorous testing, performance optimization, and seamless deployment. We ensure a flawless go-live.",
    color: "from-orange-500 to-amber-500",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="container-main relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="section-badge">
              <Rocket className="w-3.5 h-3.5" />
              <span>Our Process</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A proven, systematic approach that ensures every project is delivered
            with excellence, on time, and beyond expectations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent origin-top"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{
                delay: 0.3 + i * 0.15,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative flex items-start gap-6 mb-16 last:mb-0 ${
                i % 2 === 0
                  ? "md:flex-row md:text-right"
                  : "md:flex-row-reverse md:text-left"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div
                className={`pl-28 md:pl-0 ${
                  i % 2 === 0
                    ? "md:w-[calc(50%-48px)] md:pr-12"
                    : "md:w-[calc(50%-48px)] md:pl-12 md:ml-auto"
                }`}
              >
                <div className="glass p-6 rounded-2xl card-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
