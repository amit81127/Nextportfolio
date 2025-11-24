"use client";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import SkillCards from "@/components/SkillCards";
import Timeline from "@/components/Timeline";
import TestimonialCard from "@/components/TestimonialCard";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        // Map API data to ProjectCard props if needed, or ensure API returns compatible structure
        // Assuming API returns array of objects compatible with ProjectCard
        // We need to map the API response to match ProjectCard expectations
        const formattedProjects = data.map(p => ({
          id: p._id,
          title: p.title,
          description: p.description,
          image: p.image,
          tech: p.techStack || [],
          github: p.githubUrl,
          demo: p.liveUrl
        }));
        setProjects(formattedProjects);
      })
      .catch((err) => console.error("Failed to fetch projects:", err))
      .finally(() => setLoading(false));
  }, []);

  // Reusable animation presets
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  // Structured Data for SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amit Kumar Prasad",
    jobTitle: "Full Stack Developer",
    description: "Full Stack Developer specializing in MERN Stack, Cloud Computing, and IoT",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://yourportfolio.com",
    sameAs: [
      // Add your social media URLs here
      "https://github.com/amit81127",
      "https://linkedin.com/in/amit-kumar-prasad",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Axis College, Kanpur",
      sameAs: "https://www.aktu.ac.in/"
    },
    knowsAbout: [
      "MERN Stack",
      "Cloud Computing",
      "IoT",
      "Web Development",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Amit Kumar Prasad Portfolio",
    description: "Full Stack Developer Portfolio showcasing projects, skills, and achievements",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://yourportfolio.com",
    author: {
      "@type": "Person",
      name: "Amit Kumar Prasad"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What technologies does Amit Kumar Prasad specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amit specializes in MERN Stack (MongoDB, Express.js, React, Node.js), Cloud Computing, IoT systems, and modern web development frameworks like Next.js."
        }
      },
      {
        "@type": "Question",
        name: "What kind of projects has Amit worked on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Amit has worked on various projects including HackathonMeet (event management platform), Trip Booking Platform, Third Eye (IoT assistive device for visually impaired), and multiple full-stack web applications."
        }
      }
    ]
  };

  return (
    <>
      <StructuredData data={personSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={faqSchema} />
      
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
          {loading ? (
             <p className="text-center col-span-full text-gray-500">Loading projects...</p>
          ) : projects.length === 0 ? (
             <p className="text-center col-span-full text-gray-500">No projects found.</p>
          ) : (
            projects.slice(0, 3).map((project) => (
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
            ))
          )}
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
          Have a project idea, collaboration, or job opportunity? I'd love to hear from you.
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
    </>
  );
}