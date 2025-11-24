"use client";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import SkillCards from "@/components/SkillCards";
import StructuredData from "@/components/StructuredData";
import { motion } from "framer-motion";

export default function SkillsPage() {
  // Structured Data for Skills Page
  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Amit Kumar Prasad's Technical Skills",
    description: "Comprehensive list of technical skills including MERN Stack, Cloud Computing, and IoT",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "MERN Stack Development"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cloud Computing"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "IoT Systems"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Data Structures and Algorithms"
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "API Development"
      }
    ]
  };

  return (
    <>
      <StructuredData data={skillsSchema} />
      
      <AnimatedWrapper>
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 md:px-20 py-20">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-indigo-400">Skills</span> 💻
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A breakdown of my technical stack, tools, and professional skills — combining 
            development, IoT, and cloud expertise.
          </p>
        </motion.div>

        <SkillCards />
      </section>
    </AnimatedWrapper>
    </>
  );
}
