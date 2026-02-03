import React from "react";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import ContactForm from "../../components/sections/contact/contactForm";

const Contact = () => {
  return (
    <main className="min-h-screen bg-[#020617] relative">
      <Particles />
      <Navbar />
      <section id="contact" className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
              Get in <span className="text-purple-500">Touch</span>
            </h2>
            <p className="text-slate-400">
              Initialize a secure transmission channel below.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
