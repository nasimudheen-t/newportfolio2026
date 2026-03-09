"use client";

import { motion } from "framer-motion";

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-xl border border-slate-800 
      bg-slate-900/60 backdrop-blur-lg p-6 flex flex-col 
      items-center justify-center gap-3 transition-all duration-300 
      hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
    >
      <i className={`${skill.icon} text-5xl`} />

      <p className="text-sm text-slate-300 group-hover:text-white">
        {skill.name}
      </p>
    </motion.div>
  );
};

export default SkillCard;