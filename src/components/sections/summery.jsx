"use client";
import React from "react";
import { Mail, Sparkles, User, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/utlits/utils";
import Image from "next/image";
import Link from "next/link";

const Summery = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Profile Image with Floating Effect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-md"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-[3rem] blur-2xl group-hover:scale-110 transition-transform duration-700" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 aspect-square bg-white/5 backdrop-blur-sm">
              <Image
                src="/images/about/nasim2.png"
                alt="Nasimudeen"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-[1.5] space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-sm uppercase tracking-widest">
              <User size={14} />
              <span>Identity_Report</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              , <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                MERN Stack Developer.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              I am an India-based MERN Stack Web Developer with strong
              experience in Next.js and modern React development. I build
              scalable, secure, and high-performance web applications with a
              focus on React Hooks, TanStack Query, and clean component
              architecture.
            </p>
            <p>
              I enjoy working across the full development lifecycle—from
              building responsive user interfaces to designing reliable backend
              services and databases.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-slate-300">
              <MapPin size={14} className="text-purple-400" />
              Kerala, India
            </div>
            <Link href="/contact" className="flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-xl shadow-white/5">
              Get In Touch
              <Mail size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Summery;
