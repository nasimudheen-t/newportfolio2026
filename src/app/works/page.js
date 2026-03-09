"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import ProjectGrid from "@/components/ProjectGrid";
import SkillGrid from "@/components/SkillGrid";

const Works = () => {
  return (
    <main className="bg-[#020617] min-h-screen pt-20">
      <Navbar />
      <Particles />
      <SkillGrid/>
      <ProjectGrid />
    </main>
  );
};

export default Works;
