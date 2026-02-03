"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/utlits/fackData/projectData";
import { motion } from "framer-motion";

const ProjectGrid = () => {
  return (
    <section id="works" className="py-32 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4"
          >
            Selected <span className="text-purple-500">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-xl mx-auto text-lg"
          >
            A collection of engineering-led solutions across full-stack
            development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
