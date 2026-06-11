"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO, TechVenture Labs",
    content:
      "NexloraAI completely transformed our business operations. Their AI automation solution reduced our manual processing time by 70%, allowing our team to focus on strategic growth. The quality of work and attention to detail was exceptional.",
    rating: 5,
    avatar: "RS",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, DataFlow Analytics",
    content:
      "Working with NexloraAI was an incredible experience. They built our entire SaaS platform from scratch — the architecture is clean, scalable, and the AI chatbot integration has increased our user engagement by 45%.",
    rating: 5,
    avatar: "SM",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Aditya Patel",
    role: "CTO, InnovateMind",
    content:
      "The team at NexloraAI delivered our project ahead of schedule with outstanding quality. Their expertise in AI and web development is top-notch. They didn't just build what we asked — they improved upon our vision.",
    rating: 5,
    avatar: "AP",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />

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
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Testimonials</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            What Our Clients{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it — hear from the businesses we&apos;ve
            helped transform.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.15,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative p-8 rounded-2xl glass card-hover"
              id={`testimonial-${i}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-purple-400" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-zinc-300 leading-relaxed mb-8 text-[15px]">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold text-sm`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-zinc-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
