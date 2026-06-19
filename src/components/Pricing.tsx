"use client";

import { motion, Variants } from "framer-motion";
import { Check, ArrowRight, Sparkles, Zap, Crown, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for MVPs & small projects",
    price: "499",
    icon: Zap,
    color: "#3b82f6",
    popular: false,
    features: [
      "Landing page or single-page app",
      "Responsive mobile-first design",
      "Basic SEO optimization",
      "Contact form integration",
      "1 round of revisions",
      "2-week delivery",
      "30-day post-launch support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    tagline: "For startups ready to scale",
    price: "1,499",
    icon: Sparkles,
    color: "#8b5cf6",
    popular: true,
    features: [
      "Full custom web application",
      "AI chatbot integration",
      "Admin dashboard & CMS",
      "API integrations (up to 3)",
      "Advanced SEO & analytics",
      "3 rounds of revisions",
      "4-week delivery",
      "90-day post-launch support",
    ],
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    tagline: "End-to-end digital transformation",
    price: "Custom",
    icon: Crown,
    color: "#f59e0b",
    popular: false,
    features: [
      "Full-stack SaaS development",
      "Custom AI/ML solutions",
      "Workflow automation suite",
      "Unlimited API integrations",
      "Dedicated project manager",
      "Priority 24/7 support",
      "Scalable cloud architecture",
      "Ongoing maintenance & updates",
    ],
    cta: "Contact Us",
  },
];

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof plans)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = plan.icon;

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl p-[1px] overflow-hidden h-full ${
        plan.popular ? "lg:-mt-4 lg:mb-4" : ""
      }`}
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        animate={{
          opacity: isHovered || plan.popular ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        style={{
          background: `conic-gradient(from ${isHovered ? "180deg" : "0deg"}, transparent 0%, ${plan.color}40 15%, transparent 30%, ${plan.color}30 50%, transparent 65%, ${plan.color}20 80%, transparent 100%)`,
          animation: plan.popular ? "ctaRotateBorder 8s linear infinite" : undefined,
        }}
      />

      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2 z-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] rounded-b-xl text-white text-xs font-bold tracking-wider uppercase shadow-[0_4px_20px_rgba(91,33,182,0.4)]"
          >
            <Star size={12} className="fill-white" />
            Most Popular
          </motion.div>
        </div>
      )}

      {/* Card content */}
      <div
        className={`relative rounded-3xl h-full flex flex-col ${
          plan.popular
            ? "bg-gradient-to-b from-[#121212] to-[#0d0a1a]"
            : "bg-[#0a0a0a]"
        } border ${
          plan.popular ? "border-[#5b21b6]/20" : "border-white/5"
        } overflow-hidden`}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${plan.color}15, transparent 70%)`,
          }}
        />

        <div className="relative p-8 lg:p-10 flex-1 flex flex-col">
          {/* Header */}
          <div className="mb-8">
            <motion.div
              animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border border-white/5"
              style={{
                backgroundColor: `${plan.color}15`,
                color: plan.color,
                boxShadow: isHovered ? `0 0 30px ${plan.color}30` : `0 0 15px ${plan.color}15`,
              }}
            >
              <Icon size={26} strokeWidth={1.5} />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
            <p className="text-sm text-white/40">{plan.tagline}</p>
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              {plan.price !== "Custom" && (
                <span className="text-lg text-white/40 font-medium">$</span>
              )}
              <span
                className={`font-bold tracking-tight ${
                  plan.price === "Custom" ? "text-3xl" : "text-5xl"
                }`}
                style={{
                  background: `linear-gradient(135deg, white, ${plan.color})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {plan.price}
              </span>
              {plan.price !== "Custom" && (
                <span className="text-white/30 text-sm font-medium ml-1">
                  / project
                </span>
              )}
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-10 flex-1">
            {plan.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-start gap-3 text-sm"
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${plan.color}15`, color: plan.color }}
                >
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-white/60 leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <Link href="/#contact" className="block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] text-white shadow-[0_0_30px_rgba(91,33,182,0.3)] hover:shadow-[0_0_50px_rgba(91,33,182,0.5)]"
                  : "bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {plan.cta}
              <ArrowRight size={16} />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      {/* Keyframes */}
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

      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#5b21b6]/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#3b82f6]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5b21b6]/10 border border-[#5b21b6]/20 text-[#a78bfa] text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Sparkles size={14} />
            Transparent Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Plans that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#3b82f6]">
              scale
            </span>{" "}
            with you
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            No hidden fees, no surprises. Choose the plan that fits your business
            stage and upgrade anytime as you grow.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </motion.div>

        {/* Bottom trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16 pt-12 border-t border-white/[0.04]"
        >
          {[
            "No upfront payment required",
            "Free initial consultation",
            "Money-back guarantee",
            "Flexible payment plans",
          ].map((text) => (
            <div
              key={text}
              className="flex items-center gap-2 text-white/30 text-sm"
            >
              <Check size={14} className="text-[#25D366]" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
