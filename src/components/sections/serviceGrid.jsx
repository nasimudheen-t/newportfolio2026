"use client";
import React from "react";
import { Globe, Code2, Database, Layers, Monitor, Server } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/utlits/utils";

const services = [
  {
    id: 1,
    icon: <Monitor className="text-purple-400" size={32} />,
    title: "Frontend Developing",
    description:
      "Building fast, responsive, and accessible user interfaces using React and Next.js with modern React Hooks and clean component architecture.",
  },
  {
    id: 2,
    icon: <Server className="text-cyan-400" size={32} />,
    title: "Full-Stack Development",
    description:
      "Developing complete web applications from frontend to backend using React, Node.js, and secure REST APIs with scalable workflows.",
  },
  {
    id: 3,
    icon: <Database className="text-indigo-400" size={32} />,
    title: "MERN Stack Solutions",
    description:
      "Creating scalable full-stack applications using MongoDB, Express.js, React, and Node.js. Focused on secure, production-ready architecture.",
  },
];

const ServiceGrid = () => {
  return (
    <section id="services" className="py-32 px-6 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-4"
          >
            Quality <span className="text-purple-500">Services</span>
          </motion.h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Elevating digital experiences through engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group p-10 rounded-[2.5rem] border border-white/5 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/30 overflow-hidden"
            >
              {/* Radial Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 group-hover:border-purple-500/20 group-hover:bg-purple-500/5 transition-all mb-8 shadow-2xl">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors uppercase tracking-tight">
                  {service.title}
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
