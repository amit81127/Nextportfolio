"use client";
import { motion } from "framer-motion";
import { Code, Database, Cpu, Cloud, Wrench, Lightbulb } from "lucide-react";

export default function SkillCards() {
  const skillCategories = [
    {
      title: "💻 Programming Languages",
      icon: <Code className="w-6 h-6 text-indigo-400" />,
      skills: ["Java", "C", "C++", "JavaScript"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "🧩 Web & Frameworks",
      icon: <Wrench className="w-6 h-6 text-indigo-400" />,
      skills: ["Next.js", "React.js", "Node.js", "Express.js", "Bootstrap"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "🗄️ Databases",
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      skills: ["MongoDB", "MySQL"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "☁️ Cloud & DevOps",
      icon: <Cloud className="w-6 h-6 text-indigo-400" />,
      skills: ["Google Cloud Platform", "Git", "GitHub", "Vercel"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "🔌 IoT & Hardware",
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      skills: ["Arduino", "RFID", "IR Sensors", "Servo Motors"],
      color: "from-orange-500 to-pink-500",
    },
    {
      title: "🌱 Soft Skills",
      icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Project Management",
        "Creative Thinking",
      ],
      color: "from-yellow-400 to-amber-500",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className={`bg-[#111] border border-gray-800 hover:border-indigo-500/40 rounded-2xl shadow-md hover:shadow-indigo-500/20 transition-all duration-500 p-6 flex flex-col items-center text-center`}
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black mb-4">
            {category.icon}
          </div>
          <h2 className="text-xl font-semibold text-white mb-3">{category.title}</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {category.skills.map((skill, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${category.color} text-white font-medium shadow-sm`}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
