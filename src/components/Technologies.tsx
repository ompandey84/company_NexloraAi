"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Layers } from "lucide-react";

const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Python", color: "#3776AB" },
  { name: "Django", color: "#092E20" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Vercel", color: "#ffffff" },
];

// SVG icons for technologies
const techIcons: Record<string, ReactNode> = {
  React: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        d="M12 8.6c4.2 0 7.5 1.3 7.5 3.4s-3.3 3.4-7.5 3.4S4.5 14.1 4.5 12 7.8 8.6 12 8.6Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        d="M9.1 10.3c2.1-3.6 4.8-5.8 6.6-4.7 1.8 1 1.3 4.4-.8 8s-4.8 5.8-6.6 4.7c-1.8-1-1.3-4.4.8-8Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        d="M9.1 13.7c-2.1-3.6-2.6-7-.8-8 1.8-1.1 4.5 1.1 6.6 4.7 2.1 3.6 2.6 7 .8 8-1.8 1.1-4.5-1.1-6.6-4.7Z"
      />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-1.5 14.5V7.5l8 9h-2.5l-5.5-6.3v6.3h-1.5Z" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M9.585 2c-.484.022-.953.062-1.39.118C6.18 2.402 5.83 3.08 5.83 4.427v1.778h3.745v.593H5.83 4.096c-1.092 0-2.048.656-2.347 1.903-.345 1.43-.36 2.324 0 3.818.267 1.111.905 1.903 1.997 1.903h1.292v-1.716c0-1.24 1.072-2.333 2.347-2.333h3.74c1.045 0 1.879-.862 1.879-1.912V4.427c0-1.018-.869-1.783-1.879-1.952A14.937 14.937 0 0 0 9.585 2ZM7.95 3.438a.72.72 0 0 1 .72.712.72.72 0 0 1-.72.72.72.72 0 0 1-.719-.72.72.72 0 0 1 .72-.712Z" />
      <path d="M18.218 6.797v1.668c0 1.292-1.098 2.381-2.347 2.381h-3.74c-1.027 0-1.879.88-1.879 1.912v3.586c0 1.018.886 1.616 1.879 1.912 1.188.354 2.328.418 3.74 0 .94-.278 1.879-.838 1.879-1.912v-1.434h-3.74V14.316h3.74 1.879c1.092 0 1.498-.762 1.879-1.903.393-1.175.376-2.306 0-3.818-.27-1.09-.786-1.903-1.879-1.903h-1.411Zm-2.106 9.15a.72.72 0 0 1 .72.712.72.72 0 0 1-.72.72.72.72 0 0 1-.72-.72.72.72 0 0 1 .72-.712Z" />
    </svg>
  ),
  Django: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M7.533 2v4.065c-.574-.082-1.105-.11-1.707-.11C2.862 5.955 1 8.142 1 11.928c0 3.993 1.75 5.816 5.29 5.816.833 0 1.735-.11 2.397-.302L8.788 2h-1.255Zm-1.174 7.894c.316 0 .603.027.862.11v5.202c-.287.082-.66.11-.975.11-1.394 0-2.13-1.008-2.13-2.818 0-1.81.736-2.604 2.243-2.604ZM11.5 2v15.5h1.5V2h-1.5Zm5 0v4h-1.5v1.5h1.5V15c0 1.696.59 2.5 2.5 2.5.555 0 1.063-.069 1.5-.176V15.97c-.305.08-.555.116-.83.116-.606 0-.67-.33-.67-.963V7.5h1.5V6h-1.5V2H16.5Z" />
    </svg>
  ),
  OpenAI: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M20.74 10.17a5.47 5.47 0 0 0-.47-4.48 5.53 5.53 0 0 0-5.96-2.6 5.47 5.47 0 0 0-4.13-1.84A5.53 5.53 0 0 0 4.9 4.49a5.47 5.47 0 0 0-3.66 2.66 5.53 5.53 0 0 0 .68 6.48 5.47 5.47 0 0 0 .47 4.48 5.53 5.53 0 0 0 5.96 2.6 5.47 5.47 0 0 0 4.13 1.84 5.53 5.53 0 0 0 5.28-3.24 5.47 5.47 0 0 0 3.66-2.66 5.53 5.53 0 0 0-.68-6.48ZM13.3 21.24c-.95.27-1.97.08-2.76-.52l.04-.02 4.07-2.35c.21-.12.33-.34.33-.58V11.5l1.72 1c.02.01.03.03.04.05v4.76a3.84 3.84 0 0 1-3.44 3.93Zm-8.4-3.6a3.82 3.82 0 0 1-.46-2.57l.04.03 4.07 2.35c.21.12.46.12.67 0l4.97-2.87v1.98c0 .02-.01.04-.03.05l-4.12 2.38a3.85 3.85 0 0 1-5.14-1.35Zm-1.1-8.88a3.83 3.83 0 0 1 2-1.68v4.84c0 .24.13.46.33.58l4.97 2.87-1.72.99a.07.07 0 0 1-.06 0L5.2 14a3.85 3.85 0 0 1-1.4-5.24Zm14.44 3.36-4.97-2.87 1.72-1a.07.07 0 0 1 .06 0l4.12 2.38a3.85 3.85 0 0 1-.6 6.93v-4.86c0-.24-.12-.46-.33-.58Zm1.71-2.58-.04-.02-4.07-2.35a.67.67 0 0 0-.67 0l-4.97 2.87v-1.98c0-.02.01-.04.03-.05l4.12-2.38a3.85 3.85 0 0 1 5.6 3.91ZM8.72 12.5l-1.72-1a.07.07 0 0 1-.04-.05V6.69a3.85 3.85 0 0 1 6.3-2.95l-.04.02-4.07 2.35c-.21.12-.33.34-.33.58l-.1 5.81Zm.93-2.02L12 9.04l2.34 1.35v2.7L12 14.44l-2.35-1.35v-2.7-.01Z" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.4.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.826 2.865.334 4.482.636 6.748c.084.639.26 1.347.5 2.108.238.76.543 1.576.927 2.398.766 1.643 1.81 3.31 3.27 4.4.73.545 1.632.95 2.634.835a2.12 2.12 0 0 0 1.253-.594c.2.21.428.39.674.536-.21.63-.344 1.395-.153 2.15.25.983.933 1.7 1.92 2.065a6.856 6.856 0 0 0 2.304.42c1.166.018 2.382-.21 3.274-.686.93-.495 1.6-1.286 1.64-2.474.017-.518-.08-1.158-.252-1.903l.074-.041a6.548 6.548 0 0 0 1.153-.91c.657-.634 1.154-1.434 1.294-2.442.06-.431.03-.882-.058-1.337.77-.68 1.345-1.454 1.647-2.34.401-1.175.308-2.437-.472-3.537-.532-.75-1.323-1.266-2.21-1.559A5.77 5.77 0 0 0 19.2.2 10.15 10.15 0 0 0 17.128 0Z" />
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.34C13.33 10.78 14.44 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.34C15.67 7.22 14.56 6 12 6ZM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.34.93.94 2.04 2.16 4.6 2.16 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.34C10.67 13.22 9.56 12 7 12Z" />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 2L2 19.5h20L12 2Z" />
    </svg>
  ),
};

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Double the items for seamless marquee
  const doubledTech = [...technologies, ...technologies];

  return (
    <section
      id="technologies"
      className="section-padding relative overflow-hidden"
    >
      <div className="container-main relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="section-badge">
              <Layers className="w-3.5 h-3.5" />
              <span>Tech Stack</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Technologies We{" "}
            <span className="gradient-text">Master</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies to build robust, scalable, and
            future-proof solutions.
          </p>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="marquee-track">
              {doubledTech.map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="flex-shrink-0 mx-6 group"
                >
                  <div className="flex flex-col items-center gap-4 p-8 rounded-2xl glass card-hover min-w-[160px]">
                    <div
                      className="transition-transform duration-500 group-hover:scale-110"
                      style={{ color: tech.color }}
                    >
                      {techIcons[tech.name]}
                    </div>
                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
