"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function TestimonialCard({ name, role, message }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="relative bg-[#111111] border border-gray-800 rounded-2xl p-6 overflow-hidden shadow-md hover:shadow-indigo-500/20 transition-all duration-300"
    >
      {/* Gradient Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-20">
        <Quote className="w-8 h-8 text-indigo-400" />
      </div>

      {/* Message */}
      <p className="text-gray-300 text-sm italic mb-6 relative z-10 leading-relaxed">
        “{message}”
      </p>

      {/* Divider */}
      <div className="border-t border-gray-700 mb-4"></div>

      {/* Profile Info */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>

      {/* Subtle floating glow animation */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-all"
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
