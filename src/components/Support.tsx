"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ChevronDown,
  MessageCircle,
  Mail,
  Phone,
  Clock,
  HelpCircle,
  Headphones,
  FileText,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

const faqs = [
  {
    question: "How long does it take to build a custom project?",
    answer:
      "Most projects take between 4–8 weeks depending on scope and complexity. We start with a discovery phase to understand your needs, then move through design, development, and testing. Simple MVPs can be delivered in as little as 2–3 weeks.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We primarily work with Next.js, React, TypeScript, Python, Django, Node.js, and modern AI/ML frameworks. For databases, we use PostgreSQL, MongoDB, and Supabase. Our tech stack is always tailored to your specific project requirements.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Absolutely! We offer ongoing maintenance, bug fixes, performance optimization, and feature enhancements after launch. We provide flexible monthly support plans to keep your product running smoothly and evolving with your business.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We offer transparent, project-based pricing. After an initial consultation, we provide a detailed quote based on your requirements. We're startup-friendly and offer flexible payment plans. No hidden fees — ever.",
  },
  {
    question: "Can you integrate AI into my existing product?",
    answer:
      "Yes! We specialize in adding AI capabilities to existing systems — chatbots, automation workflows, recommendation engines, data analytics, and more. We'll assess your current architecture and design the best integration approach.",
  },
  {
    question: "What if I need changes during development?",
    answer:
      "We follow an agile methodology with regular check-ins and demos. You'll have visibility into progress at every stage and can request adjustments. Minor scope changes are handled flexibly; larger changes are discussed and re-scoped together.",
  },
];

const supportChannels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick responses via chat",
    action: "Message us",
    href: "https://wa.me/916266621399",
    color: "#25D366",
    responseTime: "< 1 hour",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Detailed project inquiries",
    action: "Send email",
    href: "mailto:nexloraai@gmail.com",
    color: "#a78bfa",
    responseTime: "< 4 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Direct consultation calls",
    action: "Call now",
    href: "tel:+916266621399",
    color: "#3b82f6",
    responseTime: "Immediate",
  },
];

function AccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative rounded-2xl p-[1px] bg-[#121212] overflow-hidden transition-all duration-300"
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-[#5b21b6]/30 via-transparent to-transparent transition-opacity duration-500 rounded-2xl ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />
      
      <div className={`relative bg-[#121212] rounded-[15px] border border-white/5 transition-colors duration-300 ${isOpen ? 'border-[#5b21b6]/30' : 'group-hover:border-white/10'}`}>
        <button
          onClick={onToggle}
          className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
        >
          <div className="flex items-start md:items-center gap-4 md:gap-6">
            <span className={`text-sm font-mono font-bold w-6 transition-colors ${isOpen ? 'text-[#a78bfa]' : 'text-[#5b21b6]/60 group-hover:text-[#a78bfa]/80'}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3
              className={`text-base md:text-xl font-semibold transition-colors leading-snug ${
                isOpen ? "text-white" : "text-white/70 group-hover:text-white"
              }`}
            >
              {faq.question}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, type: "spring", damping: 15 }}
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              isOpen
                ? "bg-[#5b21b6] text-white shadow-[0_0_15px_rgba(91,33,182,0.5)]"
                : "bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white"
            }`}
          >
            <ChevronDown size={18} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-8 pl-16 md:pl-20">
                <p className="text-white/60 text-sm md:text-base leading-relaxed border-l-2 border-[#5b21b6]/30 pl-4">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Support() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="support"
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#5b21b6]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5b21b6]/10 border border-[#5b21b6]/20 text-[#a78bfa] text-xs font-bold tracking-widest uppercase mb-6"
          >
            Help & FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            We&apos;re here to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#5b21b6]">help</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Get answers to common questions or reach out directly — our team
            typically responds within the hour.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* FAQ Accordion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-3 space-y-5"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5b21b6]/20 to-transparent border border-[#5b21b6]/20 flex items-center justify-center text-[#a78bfa] shadow-[0_0_15px_rgba(91,33,182,0.2)]">
                <HelpCircle size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Frequently Asked Questions
              </h3>
            </motion.div>

            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </motion.div>

          {/* Support Channels */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-white/80 shadow-lg">
                <Headphones size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
            </motion.div>

            {supportChannels.map((channel) => {
              const ChannelIcon = channel.icon;
              return (
                <motion.div key={channel.title} variants={itemVariants}>
                  <Link
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block group"
                  >
                    <div className="relative rounded-2xl p-[1px] bg-[#121212] overflow-hidden transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      
                      <motion.div
                        whileTap={{ scale: 0.98 }}
                        className="relative bg-[#121212] border border-white/5 rounded-[15px] p-6 lg:p-8 group-hover:border-white/10 transition-colors duration-300 h-full flex flex-col"
                      >
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[15px]"
                          style={{
                            background: `radial-gradient(circle at top right, ${channel.color}15, transparent 70%)`,
                          }}
                        />

                        <div className="flex items-start gap-5 relative z-10">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 shadow-lg"
                            style={{
                              backgroundColor: `${channel.color}15`,
                              color: channel.color,
                              boxShadow: `0 0 20px ${channel.color}20`
                            }}
                          >
                            <ChannelIcon size={26} strokeWidth={1.5} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white text-lg font-bold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                              {channel.title}
                            </h4>
                            <p className="text-white/50 text-sm mb-4 leading-relaxed">
                              {channel.description}
                            </p>
                            <div className="flex items-center gap-2 text-white/40 text-xs font-medium bg-white/5 w-fit px-2.5 py-1 rounded-full border border-white/5">
                              <Clock size={12} />
                              <span>Response: {channel.responseTime}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 pt-5 border-t border-white/5 relative z-10 flex items-center justify-between">
                          <span
                            className="text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all tracking-wide"
                            style={{ color: channel.color }}
                          >
                            {channel.action} <span className="text-lg">→</span>
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            {/* Documentation Card */}
            <motion.div
              variants={itemVariants}
              className="group relative rounded-2xl p-[1px] bg-[#121212] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5b21b6]/40 via-[#a78bfa]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="relative bg-gradient-to-br from-[#121212] to-[#161025] border border-[#5b21b6]/20 rounded-[15px] p-6 lg:p-8 group-hover:border-[#5b21b6]/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] flex items-center justify-center text-white shadow-[0_0_20px_rgba(91,33,182,0.4)] group-hover:scale-110 transition-transform duration-500">
                    <FileText size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">
                      Project Resources
                    </h4>
                    <p className="text-white/60 text-sm">
                      Guides, docs & onboarding
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
