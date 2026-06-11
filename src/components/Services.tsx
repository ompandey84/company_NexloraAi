"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Bot,
  Globe,
  Cpu,
  Code2,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI Automation",
    description:
      "Streamline your business operations with intelligent AI-powered automation solutions that reduce costs and boost efficiency.",
    gradient: "from-purple-500/20 to-indigo-500/20",
    iconGradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Bot,
    title: "AI Chatbot Development",
    description:
      "Build intelligent conversational AI chatbots that understand context, learn continuously, and deliver exceptional user experiences.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconGradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Custom Web Development",
    description:
      "Premium, high-performance websites and web applications built with cutting-edge technologies for maximum impact.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconGradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Code2,
    title: "SaaS Development",
    description:
      "End-to-end SaaS product development from architecture to deployment, built to scale with your growing business needs.",
    gradient: "from-orange-500/20 to-amber-500/20",
    iconGradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Workflow,
    title: "API Integrations",
    description:
      "Seamless third-party API integrations that connect your systems, automate workflows, and create unified experiences.",
    gradient: "from-pink-500/20 to-rose-500/20",
    iconGradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Business Process Automation",
    description:
      "Transform manual processes into automated workflows that save time, reduce errors, and accelerate growth.",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconGradient: "from-violet-500 to-purple-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />

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
              <Zap className="w-3.5 h-3.5" />
              <span>What We Build</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Services We <span className="gradient-text">Deliver</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            From AI-powered automation to custom web applications, we provide
            end-to-end solutions that transform businesses.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative p-8 rounded-2xl glass card-hover cursor-default overflow-hidden"
              id={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-[15px]">
                  {service.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
