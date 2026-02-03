"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/utlits/fackData/projectData";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Briefcase,
  Tag,
  Layers,
} from "lucide-react";
import Link from "next/link";

const SingleProject = ({ params }) => {
  const { slug } = params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="bg-[#020617] min-h-screen text-white pt-32 pb-24 px-6 relative">
      <Navbar />
      <Particles />

      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link href="/works">
          <motion.div
            whileHover={{ x: -10 }}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 cursor-pointer font-mono text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            Back to Engineering
          </motion.div>
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 font-mono text-xs uppercase">
              <Tag size={12} />
              {project.category}
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 font-mono text-xs uppercase">
              <Calendar size={12} />
              {project.year}
            </div>
          </div>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Stats Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md space-y-8">
              <div>
                <div className="flex items-center gap-2 text-white/40 mb-2 uppercase tracking-widest text-[10px] font-bold">
                  <Briefcase size={12} />
                  Client_Entity
                </div>
                <h3 className="text-xl font-bold">{project.company}</h3>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/40 mb-2 uppercase tracking-widest text-[10px] font-bold">
                  <Layers size={12} />
                  Services_Deployed
                </div>
                <h3 className="text-xl font-bold">{project.services}</h3>
              </div>
              <button className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-all group">
                Live Preview
                <ExternalLink
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-white/40">
                Architectural_Overview
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                {project.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-white/40">
            Technical_Visualization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery?.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl group"
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProject;
