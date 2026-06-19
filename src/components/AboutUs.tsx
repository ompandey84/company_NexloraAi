"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import {
  Users,
  Target,
  Rocket,
  Heart,
  Globe,
  Code2,
  Lightbulb,
  Shield,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "<1hr", label: "Avg. Response Time" },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every line of code we write is aimed at driving measurable business outcomes — not just checking boxes.",
    color: "#8b5cf6",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We leverage cutting-edge AI and modern frameworks to give your business a genuine competitive edge.",
    color: "#3b82f6",
  },
  {
    icon: Heart,
    title: "Founder Empathy",
    description:
      "We've been in your shoes. We understand startup constraints and build solutions that respect your budget and timeline.",
    color: "#ef4444",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description:
      "No black boxes, no jargon. You'll always know exactly what we're building, why, and how much it costs.",
    color: "#25D366",
  },
];

const team = [
  {
    name: "Om Pandey",
    role: "Founder & Lead Developer",
    bio: "Full-stack engineer passionate about building AI-powered products that solve real business problems.",
    gradient: "from-[#5b21b6] to-[#3b82f6]",
  },
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="about-us"
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background effects */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/4 -left-40 w-[700px] h-[700px] bg-[#5b21b6]/8 rounded-full blur-[200px] pointer-events-none"
      />
      <motion.div
        style={{ y: bgY }}
        className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-[#3b82f6]/6 rounded-full blur-[180px] pointer-events-none"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5b21b6]/10 border border-[#5b21b6]/20 text-[#a78bfa] text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Users size={14} />
            About NexloraAI
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Building the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#5b21b6]">
              future
            </span>
            ,{" "}
            <br className="hidden md:block" />
            one product at a time
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We&apos;re a lean, focused team of engineers and designers who believe
            that great software should be accessible to every ambitious founder —
            not just well-funded enterprises.
          </motion.p>
        </div>

        {/* ── Mission Statement ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative rounded-3xl p-[1px] overflow-hidden mb-24"
        >
          {/* Rotating border */}
          <div
            className="absolute inset-0 rounded-3xl opacity-60"
            style={{
              background:
                "conic-gradient(from var(--cta-angle, 0deg), transparent 0%, rgba(139,92,246,0.3) 10%, transparent 20%, rgba(59,130,246,0.2) 40%, transparent 55%, rgba(139,92,246,0.2) 75%, transparent 90%)",
              animation: "ctaRotateBorder 10s linear infinite",
            }}
          />
          <div className="relative bg-[#0a0a0a]/95 backdrop-blur-xl rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left — Mission text */}
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] flex items-center justify-center text-white shadow-[0_0_20px_rgba(91,33,182,0.4)]">
                    <Rocket size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-[#a78bfa] tracking-widest uppercase">
                    Our Mission
                  </h3>
                </div>

                <p className="text-2xl md:text-3xl font-bold text-white leading-snug mb-6">
                  To empower startups and small businesses with
                  enterprise-grade AI and software — at a price that actually
                  makes sense.
                </p>

                <p className="text-white/45 leading-relaxed mb-8">
                  We started NexloraAI because we saw too many brilliant
                  founders held back by expensive agencies and cookie-cutter
                  solutions. We believe every business deserves custom,
                  intelligent software that&apos;s built to scale — without
                  breaking the bank.
                </p>

                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 text-[#a78bfa] font-semibold hover:gap-3 transition-all"
                >
                  Let&apos;s build together
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Right — Stats grid */}
              <div className="bg-white/[0.02] border-l border-white/5 p-10 md:p-16 flex items-center">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-8 w-full"
                >
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      variants={itemVariants}
                      className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#5b21b6]/20 hover:bg-[#5b21b6]/5 transition-all duration-300 group"
                    >
                      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 group-hover:from-[#a78bfa] group-hover:to-[#5b21b6] transition-all mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/40 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Core Values ── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What drives us
            </h3>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Our core values shape every decision, every line of code, and
              every client relationship.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => {
              const ValueIcon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl p-[1px] overflow-hidden"
                >
                  {/* Hover glow border */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${value.color}30, transparent 60%)`,
                    }}
                  />

                  <div className="relative bg-[#0a0a0a] rounded-[15px] p-8 h-full border border-white/5 group-hover:border-white/10 transition-colors duration-300">
                    {/* Background radial glow */}
                    <div
                      className="absolute inset-0 rounded-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at top left, ${value.color}10, transparent 70%)`,
                      }}
                    />

                    <div className="relative z-10">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                        style={{
                          backgroundColor: `${value.color}15`,
                          color: value.color,
                          boxShadow: `0 0 20px ${value.color}10`,
                        }}
                      >
                        <ValueIcon size={24} strokeWidth={1.5} />
                      </div>

                      <h4 className="text-lg font-bold text-white mb-3">
                        {value.title}
                      </h4>
                      <p className="text-sm text-white/45 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Team / Founder ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet the founder
          </h3>
          <p className="text-white/40 text-lg max-w-xl mx-auto mb-12">
            The person behind the vision, the code, and the late-night
            deployments.
          </p>

          <div className="flex justify-center">
            {team.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-[1px] overflow-hidden max-w-sm w-full"
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "conic-gradient(from var(--cta-angle, 0deg), transparent 0%, rgba(139,92,246,0.3) 15%, transparent 30%, rgba(59,130,246,0.2) 50%, transparent 70%, rgba(139,92,246,0.2) 85%, transparent 100%)",
                    animation: "ctaRotateBorder 8s linear infinite",
                  }}
                />

                <div className="relative bg-[#0a0a0a] rounded-3xl p-10 border border-white/5 group-hover:border-transparent transition-colors overflow-hidden">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#5b21b6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Avatar placeholder */}
                    <div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-[0_0_40px_rgba(91,33,182,0.3)] group-hover:shadow-[0_0_60px_rgba(91,33,182,0.5)] transition-shadow duration-500`}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <h4 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-[#a78bfa] font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm text-white/45 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Social links placeholder */}
                    <div className="flex items-center justify-center gap-3 mt-6">
                      {[Globe, Code2].map((SocialIcon, i) => (
                        <div
                          key={i}
                          className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#a78bfa] hover:border-[#5b21b6]/30 hover:bg-[#5b21b6]/10 transition-all cursor-pointer"
                        >
                          <SocialIcon size={16} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Keyframes for rotating border */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @property --cta-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes ctaRotateBorder {
          from { --cta-angle: 0deg; }
          to   { --cta-angle: 360deg; }
        }
      `,
        }}
      />
    </section>
  );
}
