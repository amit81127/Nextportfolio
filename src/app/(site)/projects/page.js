"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StructuredData from "@/components/StructuredData";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch Projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Categories
  const categories = ["All", "Full Stack", "IoT", "Web", "Hackathon", "AI"];

  // Filter logic
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  // Map API data to card props
  const mappedProjects = filteredProjects.map((p) => ({
    id: p._id,
    title: p.title,
    description: p.description,
    image: p.image || "/placeholder.jpg",
    tech: p.techStack || [],
    github: p.githubUrl,
    demo: p.liveUrl,
    category: p.category,
  }));

  // Structured Data for Projects Page
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Amit Kumar Prasad's Projects",
    description: "A collection of full-stack, IoT, and web development projects",
    numberOfItems: mappedProjects.length,
    itemListElement: mappedProjects.slice(0, 10).map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: project.image,
        url: project.demo || project.github
      }
    }))
  };

  return (
    <>
      <StructuredData data={itemListSchema} />
      
      <section className="min-h-screen bg-transparent text-white px-6 md:px-20 py-20 relative overflow-hidden">
      {/* === Animated Background === */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] 
        from-indigo-900/40 via-transparent to-black/80 blur-3xl -z-10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* === Header === */}
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
          A curated collection of projects showcasing my creativity and
          full-stack expertise — from Web Development to IoT and AI.
        </p>
      </motion.div>

      {/* === Filter Buttons === */}
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

      {/* === Project Grid === */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <AnimatePresence>
          {mappedProjects.map((project, index) => (
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

      {/* === Empty Message === */}
      {!loading && mappedProjects.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-400 mt-10"
        >
          🚧 No projects available in this category yet. Stay tuned!
        </motion.p>
      )}
    </section>
    </>
  );
}
