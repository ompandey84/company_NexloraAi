"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Focused on delivering measurable business impact through AI",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Building lasting partnerships, not just projects",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Leveraging the latest AI technologies for cutting-edge solutions",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Helping businesses scale through intelligent automation",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px]" />

      <div className="container-main relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6">
              <div className="section-badge">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>About Us</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              We Are a Modern{" "}
              <span className="gradient-text">AI Development</span> Agency
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              NexloraAI is a forward-thinking AI development agency dedicated to
              helping startups and businesses automate their operations,
              streamline workflows, and dramatically improve efficiency.
            </p>

            <p className="text-zinc-500 leading-relaxed mb-10">
              We combine deep technical expertise in artificial intelligence,
              machine learning, and modern web technologies with a design-first
              approach. Our team delivers solutions that don&apos;t just work — they
              transform how businesses operate, compete, and grow in the digital
              age.
            </p>

            {/* Stats Row */}
            <div className="flex gap-8 flex-wrap">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "50+", label: "Projects Built" },
                { value: "100%", label: "Delivery Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group p-6 rounded-2xl glass card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
