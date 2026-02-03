import React from "react";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import Pricing from "@/components/sections/pricing";
import ServiceGrid from "@/components/sections/serviceGrid";

const Service = () => {
  return (
    <main className="bg-[#020617] min-h-screen pt-20">
      <Navbar />
      <Particles />
      <ServiceGrid />
    </main>
  );
};

export default Service;
