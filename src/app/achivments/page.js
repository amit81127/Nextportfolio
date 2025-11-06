"use client";
import { motion } from "framer-motion";
import { Award, Cloud, Briefcase, Trophy, Code } from "lucide-react";

export default function AchievementsPage() {
  const achievements = [
    {
      icon: <Cloud className="w-7 h-7 text-cyan-400" />,
      title: "Google Cloud Arcade Legend",
      date: "2024",
      description:
        "Earned the Arcade Legend badge by completing advanced Google Cloud labs in compute, networking, and storage — demonstrating proficiency in cloud infrastructure and DevOps practices.",
      link: "https://www.linkedin.com/posts/amit-kumar-55a070275_googlecloud-arcadelegend-cloudcomputing-activity-7351547968086298626-5WR1",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Briefcase className="w-7 h-7 text-yellow-400" />,
      title: "Deloitte Technology Consulting Virtual Internship",
      date: "2024",
      description:
        "Completed Deloitte’s technology consulting virtual internship focused on client problem-solving, data-driven insights, and solution implementation using business technology frameworks.",
      link: "https://www.linkedin.com/posts/amit-kumar-55a070275_deloitte-activity-7345695799479029760-SkrN",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Trophy className="w-7 h-7 text-pink-400" />,
      title: "3rd Position – Gandhi Giri Tech Fest",
      date: "2024",
      description:
        "Won 3rd place for innovation and creativity by developing 'Third Eye for Blind Persons' — an IoT-based assistive device using ultrasonic sensors and Arduino for obstacle detection.",
      link: "https://www.linkedin.com/posts/amit-kumar-55a070275_arduino-iot-innovation-activity-7335041898878361601-2a8B",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: <Code className="w-7 h-7 text-green-400" />,
      title: "Oracle Java Foundations Certification",
      date: "2024",
      description:
        "Completed Oracle's Java Foundations course, mastering OOP concepts, data handling, and Java syntax — strengthening backend development fundamentals.",
      link: "https://www.linkedin.com/posts/amit-kumar-55a070275_oracle-java-foundations-learn-oracle-for-activity-7320037937012686849-tYWF",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Award className="w-7 h-7 text-purple-400" />,
      title: "Hackathon Participant – Sparkathon 2025",
      date: "2025",
      description:
        "Developed ‘RetailMate: Your Smart Shopping Assistant’ — an AI-powered voice chatbot for intelligent retail experiences using Next.js and OpenAI API integration.",
      link: "https://www.linkedin.com/posts/amit-kumar-55a070275_sparkathon-2025-retailmate-aiassistant-activity-7361247391859089408-zGdU",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-indigo-400">Achievements</span> 🏆
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          These achievements represent my learning milestones, innovation, and dedication to
          advancing technology through practical and impactful projects.
        </motion.p>

        {/* Timeline Layout */}
        <div className="relative border-l border-gray-700 ml-6 space-y-12">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-10"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute -left-3 top-1 w-6 h-6 rounded-full bg-gradient-to-br ${item.color} shadow-lg`}
              ></div>

              {/* Achievement Card */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="bg-[#111] p-6 rounded-xl shadow-md hover:shadow-indigo-500/30 border border-gray-800 hover:border-indigo-400/40 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                </div>
                <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                <p className="text-gray-300 mb-3">{item.description}</p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors"
                >
                  🔗 View on LinkedIn
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
