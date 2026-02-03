"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import ProjectGrid from "@/components/ProjectGrid";

const Works = () => {
  return (
    <main className="bg-[#020617] min-h-screen pt-20">
      <Navbar />
      <Particles />
      <ProjectGrid />
    </main>
  );
};

export default Works;
