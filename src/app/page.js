"use client";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/lib/projectsData";
import SkillCards from "@/components/SkillCards";
import Timeline from "@/components/Timeline";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";

export default function Home() {
  // Reusable animation presets
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <main className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen px-6 md:px-20 pt-24 pb-16 overflow-hidden">
      {/* ---------- HERO SECTION ---------- */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className="mb-24"
      >
        <HeroSection />
      </motion.section>

      {/* ---------- FEATURED PROJECTS ---------- */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-24"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-10"
        >
          ✨ Featured <span className="text-indigo-400">Projects</span>
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={stagger}
        >
          {projectsData.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                transition: { type: "spring", stiffness: 150 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/projects"
            className="relative inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-all duration-300 shadow-md shadow-indigo-500/30 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
            <span className="relative z-10">View All Projects →</span>
          </Link>
        </motion.div>
      </motion.section>

      {/* ---------- SKILLS SECTION ---------- */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-24"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-10"
        >
          🧠 My <span className="text-indigo-400">Skills</span>
        </motion.h2>

        <SkillCards />

        <motion.div
          variants={fadeInUp}
          className="text-center mt-10"
          whileHover={{ scale: 1.05 }}
        >
          <Link
            href="/skills"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Explore All Skills →
          </Link>
        </motion.div>
      </motion.section>

      {/* ---------- TIMELINE / JOURNEY ---------- */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-24"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-10"
        >
          🏆 My <span className="text-indigo-400">Journey</span>
        </motion.h2>
        <Timeline />
      </motion.section>

      {/* ---------- TESTIMONIALS ---------- */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-24"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-10"
        >
          💬 What People <span className="text-indigo-400">Say</span>
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={stagger}
        >
          {[
            {
              name: "Rahul Verma",
              role: "Mentor, Axis College",
              message:
                "Amit is an innovative developer who consistently brings creativity and precision to his projects.",
            },
            {
              name: "Priya Sharma",
              role: "Teammate, Hackathon Project",
              message:
                "Working with Amit was inspiring — his technical depth and design sense are top-notch.",
            },
            {
              name: "Deloitte Mentor",
              role: "Virtual Internship",
              message:
                "Amit demonstrated excellent problem-solving and adaptability in the Deloitte program.",
            },
          ].map((t, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ---------- CONTACT CTA ---------- */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          📬 Let's <span className="text-indigo-400">Connect</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Have a project idea, collaboration, or job opportunity? I’d love to hear from you.
        </p>
        <motion.div whileHover={{ scale: 1.08 }}>
          <Link
            href="/contact"
            className="relative inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold transition-all shadow-md shadow-indigo-500/30 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
            <span className="relative z-10">Contact Me →</span>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
