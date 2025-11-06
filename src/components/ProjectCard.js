"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Github, Globe } from "lucide-react";

export default function ProjectCard({ project }) {
  // Motion tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const xVal = event.clientX - rect.left - rect.width / 2;
    const yVal = event.clientY - rect.top - rect.height / 2;
    x.set(xVal);
    y.set(yVal);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative bg-[#0f0f12] rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-indigo-500/40 group"
    >
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
        <motion.img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-70"></div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h2>

        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full border border-gray-700 hover:border-indigo-400 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-1 text-gray-300 hover:text-indigo-400 text-sm transition"
              >
                <Github className="w-4 h-4" /> Code
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-1 text-gray-300 hover:text-indigo-400 text-sm transition"
              >
                <Globe className="w-4 h-4" /> Live
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Hover Glow Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
        style={{ zIndex: -1 }}
      ></motion.div>
    </motion.div>
  );
}
