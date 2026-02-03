import React from "react";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import Summery from "@/components/sections/summery";
import Resume from "@/components/sections/resume";
import Testimonials from "@/components/sections/testimonials";

const About = () => {
  return (
    <main className="bg-[#020617] min-h-screen pt-20">
      <Navbar />
      <Particles />
      <Summery />
      <Resume />
    </main>
  );
};

export default About;
