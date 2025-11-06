"use client";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code,
  Braces,
  Rocket,
  Laptop,
  Briefcase,
  Award,
  Cpu,
} from "lucide-react";

export default function Timeline() {
  const milestones = [
    {
      year: "2022",
      title: "The Beginning of My Coding Journey",
      description:
        "Started exploring programming fundamentals and learned C and C++ basics. Developed curiosity for how technology powers everything around us.",
      icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      year: "2023",
      title: "Frontend Foundations — HTML, CSS, JS",
      description:
        "Learned to build responsive web pages using HTML5, CSS3, and JavaScript. Gained strong understanding of DOM manipulation and design principles.",
      icon: <Laptop className="w-6 h-6 text-pink-400" />,
      color: "from-pink-500 to-red-500",
    },
    {
      year: "2023",
      title: "Diving into DSA & Problem Solving",
      description:
        "Started solving Data Structure and Algorithm problems in Java. Focused on arrays, recursion, sorting, searching, and linked lists to strengthen logic building.",
      icon: <Braces className="w-6 h-6 text-yellow-400" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      year: "2024",
      title: "Full Stack Developer Journey (MERN)",
      description:
        "Mastered MongoDB, Express.js, React.js, and Node.js. Built several full-stack apps including HackChat, Trip Planner, and a personal portfolio using Next.js.",
      icon: <Code className="w-6 h-6 text-green-400" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "2024",
      title: "Projects & Hackathons",
      description:
        "Developed IoT and AI-based projects such as 'Third Eye for Blind Persons' and 'RetailMate'. Participated in hackathons showcasing innovation and teamwork.",
      icon: <Award className="w-6 h-6 text-pink-400" />,
      color: "from-pink-500 to-rose-500",
    },
    {
      year: "2024",
      title: "Internships & Industry Exposure",
      description:
        "Completed Deloitte Virtual Internship in Tech Consulting and Cloud programs like Google Cloud Arcade & AWS Practitioner, gaining professional exposure.",
      icon: <Briefcase className="w-6 h-6 text-yellow-300" />,
      color: "from-yellow-400 to-amber-500",
    },
    {
      year: "2025",
      title: "Advanced DSA & System Design",
      description:
        "Focusing on mastering advanced DSA topics like graphs, dynamic programming, and trees. Learning scalable architecture, API design, and system design fundamentals.",
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      color: "from-indigo-500 to-blue-500",
    },
    {
      year: "2025",
      title: "Becoming a Complete Web Engineer",
      description:
        "Continuing to enhance skills in Next.js 14, TypeScript, and DevOps while contributing to open-source and mentoring others in web development and DSA.",
      icon: <Rocket className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500 to-cyan-500",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-indigo-400">Development Journey</span> 🚀
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-700 ml-6">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative mb-10 pl-10 group"
            >
              {/* Dot */}
              <div
                className={`absolute -left-3 top-1 w-6 h-6 rounded-full bg-gradient-to-br ${item.color} shadow-lg`}
              ></div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#111] p-5 rounded-xl shadow-md border border-gray-800 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-1 italic">{item.year}</p>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
