"use client";
import React, { useState } from "react";
import {
  Terminal,
  Send,
  ChevronRight,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { cn } from "@/utlits/utils";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");
      toast.success("COMMAND EXECUTED: Message Transmitted.");
      form.reset();
    } catch (err) {
      toast.error("ERROR 500: Transmission Failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-lg-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl overflow-hidden shadow-2xl"
      >
        {/* Terminal Header */}
        <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-widest">
            <Terminal size={14} />
            root@nasim-dev:~/transmission-center
          </div>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-14">
          <div className="mb-12 font-mono">
            <div className="flex items-center gap-2 text-green-400 mb-2">
              <ChevronRight size={16} />
              <span>Initializing secure communication link...</span>
            </div>
            <div className="text-white/40 text-sm">
              Waiting for identity input...
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <label className="absolute -top-7 left-2 text-[10px] font-mono text-purple-400 uppercase tracking-widest bg-black px-2 py-0.5 rounded-sm z-10">
                  Identity.Name
                </label>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 group-hover:border-purple-500/30 rounded-2xl px-5 py-5 transition-all">
                  <User
                    size={18}
                    className="text-white/20 group-hover:text-purple-400 transition-colors"
                  />
                  <input
                    name="name"
                    type="text"
                    placeholder="Steve Milner"
                    className="bg-transparent border-none outline-none w-full text-white placeholder:text-white/10"
                    required
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="absolute -top-7 left-2 text-[10px] font-mono text-purple-400 uppercase tracking-widest bg-black px-2 py-0.5 rounded-sm z-10">
                  Identity.Email
                </label>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 group-hover:border-purple-500/30 rounded-2xl px-5 py-5 transition-all">
                  <Mail
                    size={18}
                    className="text-white/20 group-hover:text-purple-400 transition-colors"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="hello@world.com"
                    className="bg-transparent border-none outline-none w-full text-white placeholder:text-white/10"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="relative group">
              <label className="absolute -top-7 left-2 text-[10px] font-mono text-purple-400 uppercase tracking-widest bg-black px-2 py-0.5 rounded-sm z-10">
                Transmission.Payload
              </label>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 group-hover:border-purple-500/30 rounded-3xl px-5 py-6 transition-all">
                <MessageSquare
                  size={18}
                  className="text-white/20 group-hover:text-purple-400 transition-colors mt-1"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="// Type your message here..."
                  className="bg-transparent border-none outline-none w-full text-white placeholder:text-white/10 resize-none"
                  required
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-purple-500/20 transition-all disabled:opacity-50"
            >
              {loading ? "TRANSMITTING..." : "EXECUTE SEND"}
              {!loading && <Send size={18} />}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
