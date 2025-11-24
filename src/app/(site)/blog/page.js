"use client";

import { useEffect, useState } from "react";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import BlogCard from "@/components/BlogCard";
import StructuredData from "@/components/StructuredData";
import { motion } from "framer-motion";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((data) => {
        // Map API data to BlogCard props
        const formatted = data.map((b) => ({
          title: b.title,
          description: b.content.substring(0, 150) + "...", // Truncate content for description
          image: b.image || "https://images.unsplash.com/photo-1499750310159-52f8f6152133?auto=format&fit=crop&q=80&w=1000",
          link: `/blog/${b.slug}`, // Internal link
          date: new Date(b.createdAt).toLocaleDateString("en-US", { month: "short", year: "numeric" }),
        }));
        setBlogs(formatted);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  // Structured Data for Blog Page
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Amit Kumar Prasad's Blog",
    description: "Articles and insights on full-stack development, technology, and business innovation",
    url: (process.env.NEXT_PUBLIC_BASE_URL || "https://yourportfolio.com") + "/blog",
    author: {
      "@type": "Person",
      name: "Amit Kumar Prasad"
    }
  };

  return (
    <>
      <StructuredData data={blogSchema} />
      
      <AnimatedWrapper>
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
        {/* ===== Header ===== */}
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
            Explore a blend of personal articles and curated insights — from
            full-stack development to business innovation.
          </p>
        </motion.div>

        {/* ===== Blog Cards Grid ===== */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {loading ? (
            <p className="text-center col-span-full text-gray-500">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">No blogs found.</p>
          ) : (
            blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))
          )}
        </motion.div>
      </section>
    </AnimatedWrapper>
    </>
  );
}
