"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, Camera, Mail, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-12 h-12 drop-shadow-[0_0_15px_rgba(91,33,182,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(139,92,246,0.8)] transition-all duration-300"
              >
                <Image src="/logo.png" alt="NexloraAI Logo" fill className="object-contain" />
              </motion.div>
              <span className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#a78bfa] transition-colors duration-300">NexloraAI</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Build smart digital products that save time, reduce manual work, and help businesses grow faster.
            </p>
            <div className="flex gap-4">
              <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                <Link href="https://instagram.com/nexloraai.official" target="_blank" className="block p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-[#5b21b6] transition-colors text-white">
                  <Camera size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                <Link href="mailto:nexloraai@gmail.com" className="block p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-[#5b21b6] transition-colors text-white">
                  <Mail size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                <Link href="https://wa.me/916266621399" target="_blank" className="block p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-[#5b21b6] transition-colors text-white">
                  <Phone size={20} />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#5b21b6]/50 rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li><Link href="/#features" className="text-white/60 hover:text-[#5b21b6] transition-colors text-sm hover:translate-x-1 inline-block transform duration-300">AI Automation</Link></li>
              <li><Link href="/#features" className="text-white/60 hover:text-[#5b21b6] transition-colors text-sm hover:translate-x-1 inline-block transform duration-300">Chatbot Development</Link></li>
              <li><Link href="/#features" className="text-white/60 hover:text-[#5b21b6] transition-colors text-sm hover:translate-x-1 inline-block transform duration-300">Web Development</Link></li>
              <li><Link href="/#features" className="text-white/60 hover:text-[#5b21b6] transition-colors text-sm hover:translate-x-1 inline-block transform duration-300">SaaS Platforms</Link></li>
              <li><Link href="/#features" className="text-white/60 hover:text-[#5b21b6] transition-colors text-sm hover:translate-x-1 inline-block transform duration-300">API Integrations</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-6 relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#5b21b6]/50 rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/60 hover:text-[#5b21b6] transition-colors text-sm hover:translate-x-1 inline-block transform duration-300">About Us</Link></li>
              <li><Link href="/#projects" className="text-white/60 hover:text-[#5b21b6] transition-colors text-sm hover:translate-x-1 inline-block transform duration-300">Case Studies</Link></li>
              <li><Link href="/#pricing" className="text-white/60 hover:text-[#5b21b6] transition-colors text-sm hover:translate-x-1 inline-block transform duration-300">Pricing</Link></li>
              <li><Link href="/#contact" className="text-white/60 hover:text-[#5b21b6] transition-colors text-sm hover:translate-x-1 inline-block transform duration-300">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#5b21b6]/50 rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/60 text-sm group">
                <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-[#5b21b6]/20 transition-colors">
                  <Phone size={14} className="text-[#5b21b6]" />
                </div>
                <a href="tel:+916266621399" className="hover:text-white transition-colors">+91 6266621399</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm group">
                <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-[#5b21b6]/20 transition-colors">
                  <Mail size={14} className="text-[#5b21b6]" />
                </div>
                <a href="mailto:nexloraai@gmail.com" className="hover:text-white transition-colors">nexloraai@gmail.com</a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} NexloraAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/60 hover:text-[#5b21b6] transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-white/60 hover:text-[#5b21b6] transition-colors text-sm">Terms of Service</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
