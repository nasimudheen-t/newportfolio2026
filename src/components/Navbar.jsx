"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utlits/utils";
import { menuList } from "@/utlits/fackData/menuList";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Desktop & Mobile Bar */}
      <nav className="fixed top-5 left-0 right-0 z-50 mx-auto w-[90%] max-w-5xl rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-lg shadow-purple-500/10">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-white"
          >
            <Code2 className="text-purple-500" />
            <span>
              Nasim<span className="text-purple-400">.Dev</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuList.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                {link.label}
              </Link>
            ))}
          <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-purple-500/20">
            Hire Me 
          </Link>
          </div>  


          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none z-50"
          >
            <motion.div
              animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {menuList.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-bold text-white tracking-tight hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6 }}
                className="mt-8 px-10 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full text-xl font-bold text-white shadow-xl shadow-purple-500/20"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
