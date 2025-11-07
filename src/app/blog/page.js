"use client";
import AnimatedWrapper from "@/components/AnimatedWrapper";
import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";

export default function BlogPage() {
  const blogs = [
    // --- Developer Blogs ---
    {
      title: "Building Interactive UI with Framer Motion",
      description:
        "Learn how to create smooth, engaging animations using Framer Motion in Next.js — making your UI feel alive and intuitive.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
      link: "https://www.linkedin.com/pulse/building-interactive-ui-framer-motion-nextjs-amit-kumar-prasad/",
      date: "Nov 2025",
    },
    {
      title: "Optimizing Next.js Performance",
      description:
        "Discover advanced Next.js optimization strategies for better Core Web Vitals, reduced bundle size, and lightning-fast loads.",
      image:
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&q=80&w=1000",
      link: "https://nextjs.org/docs?utm_source=chatgpt.com",
      date: "Oct 2025",
    },
    {
      title: "Cloud + MERN Integration: Scalable Apps",
      description:
        "Explore how integrating Google Cloud with your MERN stack improves scalability, CI/CD, and data performance.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      link: "https://www.linkedin.com/pulse/cloud-mern-integration-scalable-apps-amit-kumar-prasad/",
      date: "Sep 2025",
    },

    // --- Official & Educational Blogs ---
    {
      title: "Next.js Official Documentation — The Ultimate Developer Guide",
      description:
        "Master the fundamentals and advanced features of Next.js directly from the official documentation and community examples.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      link: "https://nextjs.org/docs/",
      date: "Updated 2025",
    },
    {
      title: "Business Growth & Startup Strategy Insights",
      description:
        "A curated list of practical articles on entrepreneurship, leadership, and global business growth — from Strategy+Business magazine.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1000",
      link: "https://www.strategy-business.com/",
      date: "Oct 2025",
    },
    {
      title: "Understanding DBMS — From Basics to Real-World Use Cases",
      description:
        "In-depth explanation of DBMS concepts: relational models, SQL, normalization, and transactions — by GeeksforGeeks experts.",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437d6?auto=format&fit=crop&q=80&w=1000",
      link: "https://www.geeksforgeeks.org/dbms/dbms/",
      date: "Sep 2025",
    },
    {
      title: "AKTU College & TechFest Updates",
      description:
        "Stay updated with AKTU’s latest news, events, circulars, and TechFest announcements on Shiksha — your trusted student resource.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=1000",
      link: "https://www.shiksha.com/university/aktu-dr-a-p-j-abdul-kalam-technical-university-uptu-lucknow-57835/news-articles",
      date: "Nov 2025",
    },
  ];

  return (
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
            full-stack development to business innovation, DBMS concepts, and
            AKTU tech updates.
          </p>
        </motion.div>

        {/* ===== Blog Cards Grid ===== */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
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
