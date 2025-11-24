"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StructuredData from "@/components/StructuredData";
import { Award, Cloud, Briefcase, Trophy, Code } from "lucide-react";
import Image from "next/image";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export default function AchievementsAndCertificatesPage() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/certificates")
      .then((res) => res.json())
      .then((data) => setCertificates(data))
      .catch((err) => console.error("Failed to fetch certificates", err))
      .finally(() => setLoading(false));
  }, []);

  const achievements = [
    {
      icon: <Cloud className="w-7 h-7 text-cyan-400" />,
      title: "Google Cloud Arcade Legend",
      date: "2024",
      description:
        "Completed advanced Google Cloud labs in compute, networking, and storage.",
      link: "https://www.linkedin.com/posts/amit-kumar-55a070275_googlecloud-arcadelegend-cloudcomputing-activity-7351547968086298626-5WR1",
      canvasColors: [
        [34, 211, 238],
        [59, 130, 246],
      ],
    },
    {
      icon: <Briefcase className="w-7 h-7 text-yellow-400" />,
      title: "Deloitte Virtual Internship",
      date: "2024",
      description:
        "Completed Deloitte’s consulting internship using data-driven client solutions.",
      link: "https://www.linkedin.com/posts/amit-kumar-55a070275_deloitte-activity-7345695799479029760-SkrN",
      canvasColors: [
        [234, 179, 8],
        [249, 115, 22],
      ],
    },
    {
      icon: <Trophy className="w-7 h-7 text-pink-400" />,
      title: "3rd Position – Gandhi Giri Tech Fest",
      date: "2024",
      description:
        "Developed ‘Third Eye for Blind Persons’ — IoT-based assistive tech using Arduino.",
      link: "https://www.linkedin.com/posts/amit-kumar-55a070275_arduino-iot-innovation-activity-7335041898878361601-2a8B",
      canvasColors: [
        [244, 114, 182],
        [239, 68, 68],
      ],
    },
    {
      icon: <Code className="w-7 h-7 text-green-400" />,
      title: "Oracle Java Foundations",
      date: "2024",
      description:
        "Mastered OOP and backend logic fundamentals with Oracle Java Foundations.",
      link: "https://www.linkedin.com/posts/amit-kumar-55a070275_oracle-java-foundations-learn-oracle-for-activity-7320037937012686849-tYWF",
      canvasColors: [
        [34, 197, 94],
        [16, 185, 129],
      ],
    },
    {
      icon: <Award className="w-7 h-7 text-purple-400" />,
      title: "Hackathon – Sparkathon 2025",
      date: "2025",
      description:
        "Built ‘RetailMate’ — AI-powered retail assistant using Next.js and OpenAI API.",
      link: "https://www.linkedin.com/posts/amit-kumar-55a070275_sparkathon-2025-retailmate-aiassistant-activity-7361247391859089408-zGdU",
      canvasColors: [
        [168, 85, 247],
        [79, 70, 229],
      ],
    },
  ];

  // Structured Data for Achievements Page
  const achievementsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Amit Kumar Prasad's Achievements",
    description: "Professional achievements, certifications, and awards",
    numberOfItems: achievements.length + certificates.length,
    itemListElement: achievements.map((achievement, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "EducationalOccupationalCredential",
        name: achievement.title,
        description: achievement.description,
        dateCreated: achievement.date
      }
    }))
  };

  return (
    <>
      <StructuredData data={achievementsSchema} />
      
      <section className="min-h-screen bg-transparent text-white px-6 py-20 relative overflow-hidden">
      {/* FAST background glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-800/40 via-transparent to-black blur-2xl -z-10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          My <span className="text-indigo-400">Achievements & Certificates</span> 🏆
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          Fast, fluid, and interactive — a quick tour of my milestones and certifications.
        </motion.p>

        {/* === Achievements === */}
        <motion.h2
          className="text-3xl font-semibold text-indigo-400 mb-8 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🏅 Achievements
        </motion.h2>

        <div className="relative border-l border-gray-800 ml-6 space-y-10 mb-20">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative pl-10"
            >
              <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-indigo-500 shadow-lg" />

              <div className="relative group">
                {/* Ultra-fast canvas reveal */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <CanvasRevealEffect
                    colors={item.canvasColors}
                    animationSpeed={10}   // 🚀 very fast
                    dotSize={0.6}
                    followMouse
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  className="relative bg-[#0a0a0a]/80 p-5 rounded-xl border border-gray-800 hover:border-indigo-400/40 shadow-lg backdrop-blur-sm z-10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{item.date}</p>
                  <p className="text-gray-300 mb-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors"
                  >
                    🔗 View on LinkedIn
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === Certificates === */}
        <motion.h2
          className="text-3xl font-semibold text-indigo-400 mb-8 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🎓 Certificates
        </motion.h2>

        {loading ? (
          <p className="text-gray-400">Loading certificates...</p>
        ) : certificates.length === 0 ? (
          <p className="text-gray-400">No certificates found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert._id}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.15 }}
                className="group bg-[#111]/70 border border-gray-800 hover:border-indigo-400/40 rounded-xl overflow-hidden shadow-md hover:shadow-indigo-500/20 transition-all backdrop-blur-sm flex flex-col"
              >
                <div className="h-48 bg-black flex items-center justify-center relative overflow-hidden">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-gray-500 text-sm">Certificate Preview</div>
                  )}
                </div>
                <div className="p-4 text-left flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                  <p className="text-gray-400 text-xs mb-3">
                    {cert.issuer} • {cert.issuedDate}
                  </p>
                  
                  <div className="mt-auto">
                    {cert.liveLink ? (
                      <a 
                        href={cert.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 text-xs font-medium flex items-center gap-1"
                      >
                         🔗 View Credential
                      </a>
                    ) : (
                      <span className="text-gray-600 text-xs italic">No credential link</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
    </>
  );
}
