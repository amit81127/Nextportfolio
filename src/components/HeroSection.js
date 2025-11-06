"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] overflow-hidden">
      {/* ===== Background Animation ===== */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, 40, 0],
            x: [0, 20, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* ===== Animated Intro ===== */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-6xl font-extrabold text-white leading-snug"
        >
          Hey, I’m{" "}
          <motion.span
            className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Amit Kumar
          </motion.span>{" "}
          👋
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          A passionate{" "}
          <span className="text-indigo-400 font-semibold">
            Full Stack Developer (MERN)
          </span>{" "}
          crafting interactive, modern, and accessible digital experiences with
          clean code and thoughtful design.
        </motion.p>

        {/* ===== Call to Action ===== */}
        <motion.div variants={item} className="mt-10 flex justify-center gap-4">
          <motion.a
            href="/projects"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(99,102,241,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            <Code2 className="w-5 h-5" /> Explore My Work 🚀
          </motion.a>

          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(147,51,234,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 border border-purple-400/50 text-purple-300 hover:bg-purple-500/10 font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5" /> Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ===== Floating Elements ===== */}
      <motion.div
        className="absolute bottom-16 right-20 hidden md:block text-5xl"
        animate={{ rotate: [0, 15, -15, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        👨‍💻
      </motion.div>

      <motion.div
        className="absolute top-16 left-16 hidden md:block text-4xl"
        animate={{ rotate: [0, -20, 20, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        🚀
      </motion.div>
    </section>
  );
}
