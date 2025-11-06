"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/lib/projectsData";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "IoT", "Web", "Hackathon", "AI"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 md:px-20 py-20">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold">
          My <span className="text-indigo-400">Projects</span> 🚀
        </h1>
        <p className="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
          A curated collection of projects that reflect my creativity, problem-solving, and full-stack expertise — spanning web, IoT, AI, and hackathons.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setFilter(cat)}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full font-medium border transition-all duration-300 ${
              filter === cat
                ? "bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/40"
                : "border-gray-700 text-gray-300 hover:text-white hover:border-indigo-400"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Fallback if no project matches filter */}
      {filteredProjects.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-400 mt-10"
        >
          🚧 No projects available in this category yet. Stay tuned!
        </motion.p>
      )}
    </section>
  );
}
