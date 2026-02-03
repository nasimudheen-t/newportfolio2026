"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Database,
  Cpu,
  Globe,
  Rocket,
} from "lucide-react";
import { cn } from "@/utlits/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] text-white pt-20 px-6">
      {/* Background Animated Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      {/* Floating Weightless Container */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="z-10 text-center max-w-4xl"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-purple-200 uppercase tracking-widest">
            Available for Freelance Projects
          </span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
          I am a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
            MERN Stack Developer
          </span>{" "}
          <br />
          <span className="text-white/90">based in Kerala.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Architecting high-performance digital ecosystems with precision and
          performance. Specializing in scalable full-stack transformations.
        </p>

        {/* 3D Floating Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05, y: -5, rotateX: 5, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-100 transition-all flex items-center gap-2 shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-white/20"
          >
            View My Works
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              href="/NasimudheenT.pdf"
              download
              className="px-6 py-4 border border-white/10 hover:bg-white/5 rounded-2xl font-semibold transition-all backdrop-blur-md flex items-center gap-2 group"
            >
              <Download
                size={18}
                className="text-purple-400 group-hover:animate-bounce"
              />
              CV
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-6 py-4 border border-white/10 hover:bg-white/5 rounded-2xl font-semibold transition-all backdrop-blur-md flex items-center gap-2 group"
            >
              <Github
                size={18}
                className="text-white group-hover:rotate-12 transition-transform"
              />
              Github
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Parallax Icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] text-purple-500/20"
        >
          <Database size={80} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[25%] left-[20%] text-cyan-500/20"
        >
          <Globe size={100} />
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 20, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[30%] right-[15%] text-indigo-500/20"
        >
          <Cpu size={70} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 35, 0], rotate: [0, -10, 0] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-[20%] right-[20%] text-purple-500/20"
        >
          <Rocket size={60} />
        </motion.div>
      </div>
    </section>
  );
}
