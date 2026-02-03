import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ServiceGrid from "@/components/sections/serviceGrid";
import Contact from "@/components/Contact";
import Particles from "@/components/Particles";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#020617] min-h-screen text-white selection:bg-purple-500/30 overflow-x-hidden">
      <Particles />
      <Navbar />
      <Hero />
      <ProjectGrid />
      <ServiceGrid />
      <Contact />
    </main>
  );
}
