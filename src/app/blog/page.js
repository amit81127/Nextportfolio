"use client";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";

export default function BlogPage() {
  const blogs = [
    {
      title: "Building Interactive UI with Framer Motion",
      description:
        "Learn how to create smooth, engaging animations using Framer Motion in Next.js — making your UI feel alive and intuitive.",
      image: "/images/blog1.jpg",
      link: "https://www.linkedin.com/pulse/building-interactive-ui-framer-motion-nextjs-amit-kumar-prasad/",
      date: "Nov 2025",
    },
    {
      title: "Optimizing Next.js Performance",
      description:
        "Discover advanced Next.js optimization strategies for better Core Web Vitals, reduced bundle size, and lightning-fast loads.",
      image: "/images/blog2.jpg",
      link: "https://www.linkedin.com/pulse/optimizing-nextjs-performance-techniques-amit-kumar-prasad/",
      date: "Oct 2025",
    },
    {
      title: "Cloud + MERN Integration: Scalable Apps",
      description:
        "Explore how integrating Google Cloud with your MERN stack improves scalability, CI/CD, and data performance.",
      image: "/images/blog3.jpg",
      link: "https://www.linkedin.com/pulse/cloud-mern-integration-scalable-apps-amit-kumar-prasad/",
      date: "Sep 2025",
    },
  ];

  return (
    <AnimatedWrapper>
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-indigo-400">Blog</span> 🧠
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-14">
            Sharing what I learn — from full stack development to cloud, performance, and AI tools.
            Each article reflects my journey of growth and exploration.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </motion.div>
      </section>
    </AnimatedWrapper>
  );
}
