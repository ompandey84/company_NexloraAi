"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "FAQ", href: "#faqs" },
  ],
  Connect: [
    { label: "Contact", href: "#contact" },
    { label: "LinkedIn", href: "https://linkedin.com/company/nexloraai" },
    { label: "WhatsApp", href: "https://wa.me/916266621399" },
    { label: "Email", href: "mailto:nexloraai@gmail.com" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/nexloraai", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/nexloraai",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://twitter.com/nexloraai", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://instagram.com/nexloraai",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/[0.02] to-transparent" />

      <div className="container-main relative z-10">
        {/* Top Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Nexlora<span className="gradient-text">AI</span>
              </span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-8">
              A modern AI development agency building intelligent solutions that
              help businesses automate, innovate, and scale. Turning complex
              challenges into elegant software.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-500 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-5 tracking-wide">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group text-sm text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1"
                    >
                      {link.label}
                      {link.href.startsWith("http") && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} NexloraAI. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600 flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-purple-500 fill-purple-500" /> by NexloraAI
          </p>
        </div>
      </div>
    </footer>
  );
}
