"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most websites and web apps are delivered within 2–4 weeks depending on complexity. MVPs and landing pages can be ready in as little as 5–7 days.",
  },
  {
    question: "What is your pricing?",
    answer:
      "Our pricing is project-based and depends on the scope, features, and timeline. We offer transparent pricing with detailed proposals so you know exactly what is included.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! We work with businesses globally. Our processes are optimized for remote collaboration, utilizing tools like Slack, Zoom, and Figma to stay aligned.",
  },
  {
    question: "Can you maintain the website after launch?",
    answer:
      "Absolutely. We offer dedicated maintenance and support packages to ensure your platform stays secure, updated, and optimized for performance.",
  },
  {
    question: "What if I already have a design in Figma?",
    answer:
      "We can easily take your Figma designs and develop them into fully responsive, high-performance applications using Next.js and Tailwind CSS.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes, we respect your intellectual property. We are happy to sign standard Non-Disclosure Agreements (NDAs) before discussing project specifics.",
  },
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item expanded by default as in image

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="section-padding relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="section-badge">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FAQ</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:border-white/[0.1] transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] md:text-base font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 text-blue-400"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm leading-relaxed text-zinc-400 border-t border-white/[0.04]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
