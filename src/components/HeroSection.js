"use client";
import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

// ===== Interactive Mouse Parallax Hook =====
function useMouseParallax(strength = 30) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-1, 1], [strength, -strength]), {
    stiffness: 100,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-1, 1], [-strength, strength]), {
    stiffness: 100,
    damping: 20,
  });

  const onMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const offsetX = (e.clientX / innerWidth) * 2 - 1;
    const offsetY = (e.clientY / innerHeight) * 2 - 1;
    x.set(offsetX);
    y.set(offsetY);
  };

  return { rotateX, rotateY, onMouseMove };
}

export default function HeroSection() {
  const { rotateX, rotateY, onMouseMove } = useMouseParallax(10);

  return (
    <section
      onMouseMove={onMouseMove}
      className="relative flex flex-col items-center justify-center text-center min-h-[100vh] overflow-hidden bg-gradient-to-b from-[#05051a] to-[#0d0d25] text-white px-6 md:px-12"
    >
      {/* ===== Animated Background ===== */}
      <motion.div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        {/* Central glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[800px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-full blur-[160px]"
          style={{ mixBlendMode: "screen" }}
        />

        {/* Subtle moving light pattern */}
        <motion.div
          animate={{ x: [-40, 40, -40], y: [-30, 30, -30] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.1),transparent_70%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_70%)]"
        />
      </motion.div>

      {/* ===== Header Content ===== */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
      >
        {/* Profile Photo */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="w-36 h-36 mb-6 rounded-full overflow-hidden border-4 border-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.4)]"
        >
          <img
            src="/1758435757365.jpeg"
            alt="Amit Kumar"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-6xl font-extrabold mb-3"
        >
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            Amit Kumar Prasad
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-xl md:text-2xl text-gray-300 font-medium"
        >
          Full Stack Developer | Cloud Enthusiast | Innovator
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="mt-5 text-gray-400 max-w-2xl text-lg leading-relaxed"
        >
          Crafting modern, scalable, and impactful digital experiences using{" "}
          <span className="text-indigo-400 font-semibold">
            React.js, Node.js, Next.js, MongoDB & Cloud Technologies.
          </span>{" "}
          Passionate about innovation, clean architecture, and continuous
          learning.
        </motion.p>

        {/* Social Media Only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/amit81127"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/amit-kumar-55a070275/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* ===== Floating Tech Icons ===== */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[
          { src: "/images/tech/react.svg", top: "20%", left: "10%" },
          { src: "/images/tech/nodejs.svg", top: "60%", left: "5%" },
          { src: "/images/tech/js.svg", top: "70%", right: "10%" },
          { src: "/images/tech/mongodb.svg", top: "30%", right: "15%" },
          { src: "/images/tech/sql.svg", bottom: "10%", right: "40%" },
          { src: "/images/tech/java.svg", top: "40%", left: "50%" },
        ].map((icon, i) => (
          <motion.img
            key={i}
            src={icon.src}
            alt="tech icon"
            className="w-10 h-10 opacity-60 absolute"
            style={{ ...icon }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
