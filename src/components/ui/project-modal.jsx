"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (project?.gallery?.length) {
      setActiveIndex(0);
    }
  }, [project]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  if (!mounted || !isOpen || !project?.gallery?.length) return null;

  const goPrev = () => {
    setActiveIndex((p) => (p === 0 ? project.gallery.length - 1 : p - 1));
  };

  const goNext = () => {
    setActiveIndex((p) => (p === project.gallery.length - 1 ? 0 : p + 1));
  };

return createPortal(
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
      >
        <div className="relative w-[320px] h-[200px] rounded-lg overflow-hidden bg-black">

          <Image
            src={project.gallery[activeIndex]}
            alt={project.title}
            fill
            className="object-contain"
          />

          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-10 bg-black/60 text-white rounded-full p-1"
          >
            <X size={16} />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white rounded-full p-1"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white rounded-full p-1"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-white bg-black/60 px-2 rounded">
            {activeIndex + 1} / {project.gallery.length}
          </div>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>,
  document.body
);


};

export default ProjectModal;
