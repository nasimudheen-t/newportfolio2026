"use client";
import { motion } from "framer-motion";
import { cn } from "@/utlits/utils";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Globe,
  Layout,
  Database,
  Server,
  Cpu,
  Layers,
  Code2,
  Terminal,
  Activity,
  ExternalLink,
  Github,
} from "lucide-react";

const techIcons = {
  REACT: <Layout size={14} />,
  "NEXT JS": <Rocket size={14} />,
  MONGODB: <Database size={14} />,
  "NODE JS": <Server size={14} />,
  MYSQL: <Database size={14} />,
  TAILWIND: <Layers size={14} />,
  "DRIZZLE ORM": <Code2 size={14} />,
  SHADCN: <Layout size={14} />,
  "TANSTACK QUERY": <Activity size={14} />,
  NUQS: <Terminal size={14} />,
  LARAVEL: <Server size={14} />,
  INERTIA: <Globe size={14} />,
};

export default function ProjectCard({ project, index }) {
  const stack = project.stack || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ y: [0, -8, 0] }}
      transition={{
        delay: index * 0.1,
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.4,
        },
      }}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md p-6 h-full flex flex-col",
        index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1",
      )}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Project Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 border border-white/10">
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <Link
            href={`/works/${project.slug}`}
            className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
          >
            <ExternalLink size={20} />
          </Link>
          <button className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
            <Github size={20} />
          </button>
        </div>
      </div>

      {/* Project Info */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5">
            {project.category}
          </span>
          <span className="text-[10px] text-white/40 font-mono">
            {project.year}
          </span>
        </div>

        <Link href={`/works/${project.slug}`}>
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
            {project.title}
          </h3>
        </Link>

        <p className="text-sm text-slate-400 line-clamp-2 md:line-clamp-3 mb-6">
          {project.description}
        </p>

        {/* Floating Tech Stack Icons */}
        <div className="mt-auto flex flex-wrap gap-2">
          {stack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="flex items-center gap-1.5 px-3 py-1 transparent text-white/60 border border-white/10 group-hover:border-purple-500/30 group-hover:text-purple-300 rounded-lg text-[11px] font-medium transition-all"
            >
              {techIcons[tech] || <Code2 size={14} />}
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
