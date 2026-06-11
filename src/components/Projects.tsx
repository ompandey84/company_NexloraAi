"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, FolderOpen } from "lucide-react";

// Interactive premium SVG/CSS Graphic Components
const OnlyTurfGraphic = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="w-full max-w-[280px] aspect-[16/9] rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-3 overflow-hidden shadow-2xl flex flex-col justify-between">
      <div className="flex justify-between items-center mb-1">
        <div className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live Booking
        </div>
        <div className="text-[9px] text-zinc-500">June 2026</div>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {[
          { time: "09:00", status: "booked" },
          { time: "10:00", status: "booked" },
          { time: "11:00", status: "open" },
          { time: "12:00", status: "open" },
          { time: "13:00", status: "booked" },
          { time: "14:00", status: "open" },
          { time: "15:00", status: "open" },
          { time: "16:00", status: "booked" },
        ].map((slot, i) => (
          <div
            key={i}
            className={`p-1 rounded text-[8px] font-medium flex flex-col justify-between border ${
              slot.status === "booked"
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                : "bg-white/5 border-white/5 text-zinc-400 hover:border-emerald-500/30 transition-colors"
            }`}
          >
            <span>{slot.time}</span>
            <span className="text-[6px] opacity-80">{slot.status === "booked" ? "Booked" : "Open"}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const QRGraphic = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="relative w-[110px] h-[110px] bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-3 shadow-2xl flex items-center justify-center">
      {/* QR Pattern SVG */}
      <svg className="w-full h-full text-blue-400" viewBox="0 0 100 100" fill="currentColor">
        {/* Top-Left Finder Pattern */}
        <rect x="0" y="0" width="30" height="30" />
        <rect x="5" y="5" width="20" height="20" fill="black" />
        <rect x="10" y="10" width="10" height="10" />
        
        {/* Top-Right Finder Pattern */}
        <rect x="70" y="0" width="30" height="30" />
        <rect x="75" y="5" width="20" height="20" fill="black" />
        <rect x="80" y="10" width="10" height="10" />
        
        {/* Bottom-Left Finder Pattern */}
        <rect x="0" y="70" width="30" height="30" />
        <rect x="5" y="75" width="20" height="20" fill="black" />
        <rect x="10" y="80" width="10" height="10" />
        
        {/* Random bits */}
        <rect x="40" y="10" width="10" height="10" />
        <rect x="50" y="20" width="10" height="10" />
        <rect x="40" y="40" width="15" height="15" />
        <rect x="60" y="40" width="10" height="10" />
        <rect x="80" y="50" width="10" height="15" />
        <rect x="50" y="70" width="10" height="10" />
        <rect x="40" y="80" width="15" height="10" />
        <rect x="75" y="75" width="15" height="15" />
      </svg>
      {/* Scanning laser line */}
      <div className="absolute left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-bounce" />
    </div>
  </div>
);

const CalcGraphic = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="w-full max-w-[240px] rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-3.5 font-mono text-[9px] text-zinc-300 shadow-2xl space-y-2">
      <div className="flex justify-between text-[8px] text-zinc-500 border-b border-white/5 pb-1">
        <span>AI Solver Terminal</span>
        <span className="text-purple-400">● Live</span>
      </div>
      <div className="space-y-1">
        <div className="text-zinc-500">In: d/dx [ ln(x² + 1) ]</div>
        <div className="text-purple-300 animate-pulse">Computing solution steps...</div>
        <div className="text-emerald-400 bg-emerald-500/10 p-1.5 rounded border border-emerald-500/20 text-[10px]">
          Out: 2x / (x² + 1)
        </div>
      </div>
    </div>
  </div>
);

const DashboardGraphic = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="w-full max-w-[280px] aspect-[16/9] rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-3 overflow-hidden shadow-2xl flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <span className="text-[9px] font-semibold text-zinc-400">Optimization Pipelines</span>
        <span className="text-[9px] font-semibold text-orange-400 bg-orange-500/10 px-1 rounded">+18.4%</span>
      </div>
      <div className="h-14 flex items-end gap-1.5 mt-2">
        {[35, 20, 45, 60, 30, 70, 85, 45, 60, 75].map((h, i) => (
          <div 
            key={i} 
            className="flex-1 bg-gradient-to-t from-orange-500 to-red-500 rounded-t-sm transition-all duration-500" 
            style={{ height: `${h}%` }} 
          />
        ))}
      </div>
      <div className="flex justify-between border-t border-white/5 pt-1.5 text-[8px] text-zinc-500">
        <span>Latency: 84ms</span>
        <span>Accuracy: 99.98%</span>
      </div>
    </div>
  </div>
);

const ToolsGraphic = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <div className="w-full max-w-[240px] rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-3 overflow-hidden shadow-2xl space-y-2.5">
      <div className="text-[9px] font-semibold text-zinc-400 border-b border-white/5 pb-1">Sprint Planner</div>
      <div className="flex gap-2">
        <div className="flex-1 bg-white/5 rounded p-1 border border-white/5 text-[8px] space-y-1">
          <div className="text-zinc-500 font-semibold border-b border-white/5 pb-0.5">To Do</div>
          <div className="bg-black/30 p-1 rounded text-[7px] text-zinc-400">CI/CD Setup</div>
          <div className="bg-black/30 p-1 rounded text-[7px] text-zinc-400">API Gateway</div>
        </div>
        <div className="flex-1 bg-pink-500/5 rounded p-1 border border-pink-500/10 text-[8px] space-y-1">
          <div className="text-pink-300 font-semibold border-b border-pink-500/10 pb-0.5">In Progress</div>
          <div className="bg-pink-500/10 border border-pink-500/20 p-1 rounded text-[7px] text-pink-200">LLM Fine-tune</div>
        </div>
      </div>
    </div>
  </div>
);

const projects = [
  {
    title: "OnlyTurf",
    description:
      "A modern turf booking platform with real-time availability, online payments, and smart scheduling for sports facilities.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    gradient: "from-emerald-500 to-teal-600",
    graphic: <OnlyTurfGraphic />,
  },
  {
    title: "QR Code Generator",
    description:
      "Advanced QR code generation tool with custom styling, analytics tracking, and batch generation capabilities.",
    techStack: ["React", "Node.js", "Canvas API", "MongoDB"],
    gradient: "from-blue-500 to-indigo-600",
    graphic: <QRGraphic />,
  },
  {
    title: "Smart Calculator",
    description:
      "AI-powered calculator with natural language processing, formula recognition, and step-by-step solution breakdown.",
    techStack: ["Python", "OpenAI", "React", "FastAPI"],
    gradient: "from-purple-500 to-violet-600",
    graphic: <CalcGraphic />,
  },
  {
    title: "AI Automation Dashboard",
    description:
      "Enterprise automation dashboard for managing AI workflows, monitoring performance metrics, and optimizing pipelines.",
    techStack: ["Next.js", "Python", "TensorFlow", "Redis"],
    gradient: "from-orange-500 to-red-600",
    graphic: <DashboardGraphic />,
  },
  {
    title: "NexloraAI Internal Tools",
    description:
      "Suite of internal productivity tools including project management, time tracking, and automated reporting systems.",
    techStack: ["React", "Django", "PostgreSQL", "Docker"],
    gradient: "from-pink-500 to-rose-600",
    graphic: <ToolsGraphic />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
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
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Our Work</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of innovative solutions that have helped
            businesses transform their digital presence and operations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`group relative rounded-2xl glass card-hover overflow-hidden ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              id={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Project Image / Placeholder */}
              <div
                className={`relative h-48 ${
                  index === 0 ? "md:h-64" : ""
                } bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                  {project.graphic}
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                    style={{ animation: "shimmer 2s infinite" }}
                  />
                </div>

                {/* Overlay Grid */}
                <div className="absolute inset-0 grid-pattern opacity-20" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-zinc-300 bg-white/5 rounded-full border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Demo Button */}
                <button className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group/btn">
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
