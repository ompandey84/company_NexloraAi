"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle2, MessageCircle, Mail } from "lucide-react";

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
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container-main relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Heading & Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Ready to Build <br />
                <span className="gradient-text">Something Great?</span>
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
                Let&apos;s talk about your project. Free 30-minute discovery call — no commitment.
              </p>
            </div>

            {/* Capsule Contact Info Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="mailto:nexloraai@gmail.com"
                className="inline-flex items-center justify-center gap-2.5 border border-white/10 px-8 py-3.5 rounded-full bg-white/[0.02] hover:bg-white/5 transition-all duration-300 font-medium text-white hover:border-white/20 text-sm select-none"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>nexloraai@gmail.com</span>
              </a>
              <a
                href="https://wa.me/916266621399"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border border-white/10 px-8 py-3.5 rounded-full bg-white/[0.02] hover:bg-white/5 transition-all duration-300 font-medium text-white hover:border-white/20 text-sm select-none"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>+91 62666 21399</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Sleek Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative group">
              {/* Card Outer Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none" />
              
              <form
                onSubmit={handleSubmit}
                className="relative glass p-8 md:p-10 rounded-2xl space-y-6 border border-white/[0.06] bg-zinc-950/60 backdrop-blur-xl"
                id="contact-form"
              >
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/10 transition-all duration-300 text-sm"
                    id="contact-name"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/10 transition-all duration-300 text-sm"
                    id="contact-email"
                  />
                </div>

                {/* Project Type & Budget Range */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-3.5 bg-[#0e0e11] border border-white/[0.08] rounded-xl text-white focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/10 transition-all duration-300 text-sm appearance-none cursor-pointer"
                        id="contact-project-type"
                        defaultValue="Web Application"
                      >
                        <option value="Web Application">Web Application</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="AI Integration">AI Integration</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                      Budget Range
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-3.5 bg-[#0e0e11] border border-white/[0.08] rounded-xl text-white focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/10 transition-all duration-300 text-sm appearance-none cursor-pointer"
                        id="contact-budget"
                        defaultValue="Under ₹50,000"
                      >
                        <option value="Under ₹50,000">Under ₹50,000</option>
                        <option value="₹50,000 - ₹1,50,000">₹50,000 - ₹1,50,000</option>
                        <option value="₹1,50,000 - ₹5,00,000">₹1,50,000 - ₹5,00,000</option>
                        <option value="₹5,00,000+">₹5,00,000+</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/10 transition-all duration-300 text-sm resize-none"
                    id="contact-message"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-4 bg-white hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 text-black font-semibold rounded-full transition-all duration-300 flex items-center justify-center text-sm shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
                  id="contact-submit"
                >
                  {submitted ? (
                    <div className="flex items-center gap-2 text-emerald-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Message Sent Successfully!</span>
                    </div>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
