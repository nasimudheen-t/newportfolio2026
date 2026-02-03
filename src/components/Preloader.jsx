"use client";
import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]">
      <div className="relative flex flex-col items-center">
        {/* Anti-Gravity Floating Circles */}
        <div className="relative w-24 h-24">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              borderRadius: ["20%", "50%", "20%"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 border-2 border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              borderRadius: ["50%", "20%", "50%"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-4 border-2 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-xs font-mono uppercase tracking-[0.5em] text-purple-400"
        >
          Initializing System
        </motion.div>
      </div>
    </div>
  );
}
