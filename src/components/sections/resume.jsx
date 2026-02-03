"use client";
import React from "react";
import { BookOpen, Briefcase, GraduationCap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/utlits/utils";

const Resume = () => {
  return (
    <section id="resume" className="py-24 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-3xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shadow-2xl">
                <Briefcase size={28} />
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                Experience
              </h2>
            </div>

            <div className="space-y-6 relative before:absolute before:left-[1.65rem] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">
              <Card
                year={"2025 - Present"}
                title={"MERN Stack Intern"}
                institution={"Zaky Soft Pvt Ltd"}
                description="Contributing to full-stack projects using React, Node.js, and MongoDB."
              />
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shadow-2xl">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight uppercase">
                Education
              </h2>
            </div>

            <div className="space-y-6 relative before:absolute before:left-[1.65rem] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">
              <Card
                year={"2021 - 2024"}
                title={"Bachelor of Computer Application"}
                institution={"Calicut University"}
                description="Foundational studies in computer science and software principles."
              />
              <Card
                year={"2024 - 2025"}
                title={"MERN Stack Certification"}
                institution={"Luminar Technolab"}
                description="Intensive specialization in full-stack JavaScript development."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

const Card = ({ year, title, institution, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-12 group"
    >
      {/* Timeline Dot */}
      <div className="absolute left-6 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-purple-500 bg-[#020617] group-hover:scale-125 transition-transform z-10" />

      <div className="p-8 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-sm group-hover:border-purple-500/30 transition-all duration-500">
        <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
          {year}
        </span>
        <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
        <span className="text-sm text-slate-400 font-medium italic block mb-4">
          {institution}
        </span>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
