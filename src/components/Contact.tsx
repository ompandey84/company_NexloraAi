"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  Linkedin,
  MessageCircle,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/5 rounded-full blur-[200px]" />

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
              <Send className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Get in touch and let&apos;s
            discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass p-8 md:p-10 rounded-2xl space-y-6"
              id="contact-form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                    id="contact-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                    id="contact-email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="How can we help?"
                  className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                  id="contact-subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none"
                  id="contact-message"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full !rounded-xl !py-4 !text-base group"
                id="contact-submit"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {[
              {
                icon: Mail,
                label: "Email Us",
                value: "hello@nexloraai.com",
                href: "mailto:hello@nexloraai.com",
                gradient: "from-purple-500 to-indigo-500",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "NexloraAI",
                href: "https://linkedin.com/company/nexloraai",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+91 XXXXX XXXXX",
                href: "https://wa.me/91XXXXXXXXXX",
                gradient: "from-emerald-500 to-green-500",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "India, Serving Global",
                href: "#",
                gradient: "from-orange-500 to-amber-500",
              },
            ].map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="group flex items-center gap-4 p-5 rounded-2xl glass card-hover block"
                id={`contact-${contact.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}
                >
                  <contact.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 mb-0.5">
                    {contact.label}
                  </div>
                  <div className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                    {contact.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20"
            >
              <h3 className="text-lg font-semibold mb-2">
                Free Consultation
              </h3>
              <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                Book a free 30-minute strategy call to discuss how AI can
                transform your business.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
              >
                Schedule Now <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
