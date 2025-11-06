"use client";
import { motion } from "framer-motion";
import { Download, GraduationCap, Code, Award, Briefcase } from "lucide-react";

export default function ResumePage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-16 flex flex-col items-center">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span className="text-indigo-400">Resume</span> 📄
      </motion.h1>

      {/* Summary */}
      <motion.p
        className="text-gray-400 text-lg text-center max-w-3xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        A glimpse of my professional journey — from education to skills and impactful projects.
        Download or view the full resume below.
      </motion.p>

      {/* Quick Resume Highlights */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mb-12">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#111] border border-gray-800 hover:border-indigo-400/40 hover:shadow-indigo-500/20 p-6 rounded-2xl shadow-md transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap className="w-6 h-6 text-indigo-400" />
            <h2 className="text-xl font-semibold text-white">Education</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            <b>B.Tech (CSE)</b> — Axis College, Kanpur (AKTU) <br />
            <span className="text-gray-400">2022 – 2026</span>
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Focus: Software Development, Cloud Computing, and IoT Systems.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#111] border border-gray-800 hover:border-indigo-400/40 hover:shadow-indigo-500/20 p-6 rounded-2xl shadow-md transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <Code className="w-6 h-6 text-indigo-400" />
            <h2 className="text-xl font-semibold text-white">Technical Skills</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            <b>Languages:</b> Java, JavaScript, C, C++ <br />
            <b>Frameworks:</b> Next.js, React.js, Node.js, Express.js <br />
            <b>Databases:</b> MongoDB, MySQL <br />
            <b>Tools:</b> Git, GitHub, Vercel, Arduino <br />
            <b>Cloud:</b> Google Cloud Platform (GCP)
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#111] border border-gray-800 hover:border-indigo-400/40 hover:shadow-indigo-500/20 p-6 rounded-2xl shadow-md transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-6 h-6 text-indigo-400" />
            <h2 className="text-xl font-semibold text-white">Achievements</h2>
          </div>
          <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
            <li>Google Cloud Arcade Legend</li>
            <li>Oracle Java Foundations Certified</li>
            <li>Deloitte Virtual Internship</li>
            <li>3rd Place – Gandhi Giri Tech Fest (IoT Project)</li>
          </ul>
        </motion.div>
      </div>

      {/* Download Button */}
      <motion.a
        href="/AMIT KUMAR PRASAD (1).pdf"
        download="Amit_Kumar_Resume.pdf"
        className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <Download className="w-5 h-5" />
        Download Resume
      </motion.a>

      {/* Resume Viewer */}
      <motion.div
        className="mt-12 w-full max-w-5xl h-[80vh] bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          src="/AMIT KUMAR PRASAD (1).pdf"
          width="100%"
          height="100%"
          className="rounded-2xl"
        ></iframe>
      </motion.div>
    </section>
  );
}
