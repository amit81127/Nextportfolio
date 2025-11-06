"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Code, Rocket } from "lucide-react";

export default function Timeline() {
  const milestones = [
    {
      year: "2023",
      title: "Started B.Tech in Computer Science",
      description:
        "Enrolled at Axis College, Kanpur under AKTU University. Focused on mastering Data Structures, Algorithms, and Full Stack Development.",
      icon: <GraduationCap className="w-6 h-6 text-indigo-400" />,
      color: "from-indigo-500 to-purple-500",
    },
    {
      year: "2024",
      title: "3rd Place – Gandhi Giri Tech Fest",
      description:
        "Built 'Third Eye for Blind Persons' — an IoT-based assistive device using ultrasonic sensors and NodeMCU.",
      icon: <Award className="w-6 h-6 text-pink-400" />,
      color: "from-pink-500 to-red-500",
    },
    {
      year: "2024",
      title: "Deloitte Virtual Internship",
      description:
        "Completed Deloitte’s virtual internship program on business technology problem-solving and software project planning.",
      icon: <Briefcase className="w-6 h-6 text-yellow-400" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      year: "2024",
      title: "Google Cloud Arcade Legend",
      description:
        "Earned Google Cloud’s Arcade Legend badge by completing advanced labs in compute, networking, and storage.",
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      year: "2025",
      title: "Full Stack Developer Journey",
      description:
        "Built multiple projects using Next.js, MongoDB, and Node.js, including HackathonMeet, Trip App, and portfolio redesign.",
      icon: <Code className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500 to-green-500",
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
          My <span className="text-indigo-400">Timeline</span> 📅
        </motion.h2>

        {/* Timeline Line */}
        <div className="relative border-l-2 border-gray-700 ml-6">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative mb-10 pl-10 group"
            >
              {/* Dot */}
              <div
                className={`absolute -left-3 top-1 w-6 h-6 rounded-full bg-gradient-to-br ${item.color} shadow-lg`}
              ></div>

              {/* Card */}
              <div className="bg-[#111] p-5 rounded-xl shadow-md border border-gray-800 hover:shadow-indigo-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-1 italic">{item.year}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
