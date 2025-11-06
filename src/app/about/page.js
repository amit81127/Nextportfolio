"use client";
import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-20 md:px-20">
      {/* ---------- HEADER ---------- */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-10"
      >
        👋 About <span className="text-indigo-400">Me</span>
      </motion.h1>

      {/* ---------- INTRO ---------- */}
      <motion.div
        className="max-w-4xl mx-auto text-center leading-relaxed text-gray-300 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="mb-6">
          I’m <b className="text-white">Amit Kumar Prasad</b> — a passionate{" "}
          <b className="text-indigo-400">Full Stack Developer</b> and Computer
          Science Engineering student at <b>Axis College, Kanpur</b> under{" "}
          <b>AKTU University</b> (2023–2027). I love creating impactful digital
          solutions that merge <b>technology and human experience</b>.
        </p>

        <p className="mb-6">
          My focus areas include{" "}
          <b className="text-purple-400">
            MERN Stack, Cloud Computing, and IoT systems
          </b>
          . I’m continuously exploring how modern frameworks and AI tools can
          improve accessibility, automation, and usability.
        </p>

        <p className="mb-6">
          I believe in <b>learning by building</b> — whether it’s crafting
          advanced projects like{" "}
          <b className="text-indigo-400">HackathonMeet</b> and{" "}
          <b className="text-indigo-400">Trip Booking Platform</b>, or IoT-based
          innovations like <b className="text-indigo-400">Third Eye</b> for
          visually impaired users.
        </p>

        <p className="mb-8">
          With a strong foundation in{" "}
          <b>Data Structures, Algorithms, and System Design</b>, I aim to
          contribute to projects that make technology smarter and more
          inclusive.
        </p>
      </motion.div>

      {/* ---------- HIGHLIGHTS ---------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-5xl mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center"
      >
        {[
          {
            title: "🏆 3rd Place - Gandhi Giri Tech Fest",
            desc: "Built an IoT assistive device for visually impaired persons using Arduino and sensors.",
          },
          {
            title: "☁️ Google Cloud Arcade Legend",
            desc: "Completed hands-on labs in compute, storage, and networking.",
          },
          {
            title: "💼 Deloitte Virtual Internship",
            desc: "Gained real-world experience in problem-solving and business technology solutions.",
          },
          {
            title: "☕ Oracle Java Foundations",
            desc: "Mastered Java fundamentals, OOP principles, and syntax design.",
          },
          {
            title: "🧠 Core Expertise",
            desc: "MERN Stack | Cloud Computing | IoT | DSA | API Development",
          },
          {
            title: "🎯 Goal",
            desc: "To become a skilled software engineer building scalable and meaningful tech products.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
          >
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ---------- TIMELINE ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-24"
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          📅 My <span className="text-indigo-400">Journey</span>
        </h2>
        <Timeline />
      </motion.div>

      {/* ---------- EDUCATION SECTION ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-24 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          🎓 <span className="text-indigo-400">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-[#111] border border-gray-800 rounded-xl p-5 hover:border-indigo-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white">
              B.Tech in Computer Science & Engineering
            </h3>
            <p className="text-gray-400 text-sm">
              Axis College, Kanpur — AKTU University (2023–2027)
            </p>
            <p className="text-gray-500 text-sm mt-1">Current CGPA: 7.2</p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-xl p-5 hover:border-indigo-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white">
              Intermediate (PCM)
            </h3>
            <p className="text-gray-400 text-sm">
              Suryabadan Vidyapeeth, Ballia (2021–2023)
            </p>
            <p className="text-gray-500 text-sm mt-1">CGPA: 7.01</p>
          </div>
        </div>
      </motion.div>

      {/* ---------- CTA ---------- */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link
          href="/resume"
          className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold text-white shadow-md shadow-indigo-500/30 transition-all"
        >
          View My Resume →
        </Link>
      </motion.div>
    </div>
  );
}
