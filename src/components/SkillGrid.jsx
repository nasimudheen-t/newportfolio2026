"use client";

import React from "react";
import { motion } from "framer-motion";

import { skillsData } from "@/utlits/fackData/skillsData";
import SkillCard from "./ui/SkillCard";

const SkillGrid = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-[#020617]">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Technical <span className="text-purple-500">Skills</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto text-lg text-slate-400"
          >
            Technologies and tools I use to design, build, and deploy
            scalable full-stack applications.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillGrid;