"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { projectsData } from "@/utlits/fackData/projectData";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const SingleProject = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#020617] flex items-center justify-center text-white">
        <Particles />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-slate-400">
            The project you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020617] relative">
      <Particles />
      <Navbar />

      <div className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-4"
            >
              {project.category} - {project.year}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8"
            >
              {project.title}
            </motion.h1>
          </div>

          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl mb-24"
          >
            <Image
              fill
              src={project.src}
              alt={project.title}
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Project Info & Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-4 space-y-8">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-2">
                    Year
                  </p>
                  <h3 className="text-white font-bold text-lg">
                    {project.year}
                  </h3>
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-2">
                    Company
                  </p>
                  <h3 className="text-white font-bold text-lg">
                    {project.company}
                  </h3>
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-2">
                    Services
                  </p>
                  <h3 className="text-white font-bold text-lg">
                    {project.services}
                  </h3>
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.stack?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-purple-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Visual Documentation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.gallery.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group"
                  >
                    <Image
                      fill
                      src={img}
                      alt={`${project.title} gallery ${idx + 1}`}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default SingleProject;
