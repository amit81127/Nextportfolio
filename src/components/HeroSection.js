"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="text-center mt-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-white"
      >
        Hey, I’m <span className="text-blue-400">Amit Kumar</span> 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg mt-4 text-gray-300 max-w-xl mx-auto"
      >
        A passionate Full Stack Developer (MERN) focused on creating impactful web experiences
        with clean code and modern UI/UX.
      </motion.p>

      <motion.a
        href="/projects"
        className="inline-block mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all"
        whileHover={{ scale: 1.05 }}
      >
        Explore My Work 🚀
      </motion.a>
    </div>
  );
}
