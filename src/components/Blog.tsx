"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Clock, Calendar, TrendingUp, Bot, Code, Zap } from "lucide-react";
import Link from "next/link";

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

const blogPosts = [
  {
    title: "How AI Automation Can Save Your Startup 20+ Hours Per Week",
    excerpt:
      "Discover how intelligent workflows eliminate repetitive tasks and let your team focus on what truly matters — building and scaling your business.",
    category: "AI Automation",
    icon: Bot,
    date: "Jun 10, 2026",
    readTime: "5 min read",
    gradient: "from-violet-500/20 to-purple-600/20",
    featured: true,
  },
  {
    title: "Why Every Business Needs a Custom Chatbot in 2026",
    excerpt:
      "From 24/7 customer support to lead qualification, AI chatbots are no longer optional. Here's how to get started.",
    category: "Chatbots",
    icon: Zap,
    date: "Jun 5, 2026",
    readTime: "4 min read",
    gradient: "from-cyan-500/20 to-blue-500/20",
    featured: false,
  },
  {
    title: "The Tech Stack Behind Scalable SaaS Products",
    excerpt:
      "An inside look at the frameworks, databases, and infrastructure choices that power modern SaaS applications at scale.",
    category: "Engineering",
    icon: Code,
    date: "May 28, 2026",
    readTime: "7 min read",
    gradient: "from-emerald-500/20 to-teal-500/20",
    featured: false,
  },
  {
    title: "From Idea to MVP: A Founder's Guide to Fast Execution",
    excerpt:
      "Learn the lean methodology we use to take products from concept to market in under 8 weeks.",
    category: "Strategy",
    icon: TrendingUp,
    date: "May 20, 2026",
    readTime: "6 min read",
    gradient: "from-amber-500/20 to-orange-500/20",
    featured: false,
  },
];

export default function Blog() {
  const featured = blogPosts[0];
  const FeaturedIcon = featured.icon;
  const rest = blogPosts.slice(1);

  return (
    <section id="blog" className="py-20 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5b21b6]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5b21b6]/10 border border-[#5b21b6]/20 text-[#a78bfa] text-xs font-bold tracking-widest uppercase mb-6"
            >
              Insights & Resources
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Latest from
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">our blog</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="#"
              className="group flex items-center gap-2 text-[#a78bfa] font-semibold text-lg hover:text-white transition-colors"
            >
              View all articles 
              <span className="bg-[#a78bfa]/20 p-2 rounded-full group-hover:bg-[#a78bfa] group-hover:text-[#050505] transition-all">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Featured Post (Large) */}
          <motion.article
            variants={cardVariants}
            className="group relative rounded-3xl p-[1px] lg:row-span-2 overflow-hidden bg-[#121212] flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#5b21b6]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            
            <div className="relative bg-[#121212] rounded-[23px] h-full flex flex-col overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors">
              <div
                className={`h-64 lg:h-80 w-full bg-gradient-to-br ${featured.gradient} relative flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] group-hover:backdrop-blur-0 group-hover:bg-black/0 transition-all duration-500" />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <FeaturedIcon
                    size={80}
                    className="text-white/30 group-hover:text-white/60 group-hover:scale-110 transition-all duration-500"
                    strokeWidth={1}
                  />
                </motion.div>
                
                {/* Animated Featured Badge */}
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-[#5b21b6]/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold rounded-full z-20 flex items-center gap-2 shadow-[0_0_15px_rgba(91,33,182,0.5)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Featured
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-white/50 text-xs md:text-sm mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} /> {featured.readTime}
                  </span>
                  <span className="px-3 py-1 bg-[#5b21b6]/10 text-[#a78bfa] rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#5b21b6]/20">
                    {featured.category}
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#a78bfa] transition-colors leading-tight">
                  {featured.title}
                </h3>
                <p className="text-white/60 text-base leading-relaxed flex-1 mb-8">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3 text-[#a78bfa] font-semibold group-hover:text-white transition-all">
                  <span className="border-b border-[#a78bfa]/30 group-hover:border-white pb-0.5 transition-colors">Read full article</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.article>

          {/* Smaller Posts */}
          {rest.map((post) => {
            const PostIcon = post.icon;
            return (
              <motion.article
                key={post.title}
                variants={cardVariants}
                className="group relative rounded-3xl p-[1px] bg-[#121212] overflow-hidden flex flex-col sm:flex-row"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative bg-[#121212] rounded-[23px] w-full flex flex-col sm:flex-row border border-white/5 group-hover:border-white/10 transition-colors">
                  <div
                    className={`sm:w-56 h-48 sm:h-auto bg-gradient-to-br ${post.gradient} relative flex items-center justify-center flex-shrink-0 overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    <PostIcon
                      size={48}
                      className="text-white/20 group-hover:text-white/50 group-hover:scale-110 transition-all duration-500 relative z-10"
                      strokeWidth={1}
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1 justify-center">
                    <div className="flex items-center gap-3 text-white/50 text-xs mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#a78bfa] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-white/50 text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="px-3 py-1 bg-white/5 text-white/70 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit group-hover:bg-[#5b21b6]/10 group-hover:text-[#a78bfa] group-hover:border-[#5b21b6]/30 transition-colors">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 w-10 h-10 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white/60 opacity-0 group-hover:opacity-100 group-hover:bg-[#5b21b6] group-hover:text-white transition-all duration-300 shadow-lg">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
