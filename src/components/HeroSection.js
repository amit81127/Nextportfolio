"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import gsap from "gsap";
import Balancer from "react-wrap-balancer";
import { Vortex } from "@/components/ui/vortex"; // ✅ new vortex effect

// =================== Parallax Hook ===================
const useParallax = (strength = 15) => {
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
};

// =================== Animated Name ===================
const AnimatedName = ({ text }) => {
  const ref = useRef(null);

  useEffect(() => {
    const letters = ref.current?.querySelectorAll(".letter");
    if (!letters) return;

    letters.forEach((letter) => {
      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          color: "#fff",
          textShadow: "0 0 25px #ffffff, 0 0 60px #9d4edd",
          scale: 1.35,
          duration: 0.2,
          ease: "power2.out",
        });

        gsap.to(letter, {
          color: "#9ca3af",
          textShadow: "none",
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        });
      });
    });
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-wrap justify-center gap-2 md:gap-3 select-none cursor-default"
    >
      {text.split(" ").map((word, wi) => (
        <div key={wi} className="flex">
          {word.split("").map((ch, i) => (
            <motion.span
              key={i}
              className="letter text-5xl md:text-7xl font-extrabold uppercase text-gray-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.35 }}
            >
              {ch}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
};

// =================== Floating Particles ===================
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const arr = Array.from({ length: 25 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 3,
    }));
    setParticles(arr);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
          style={{ top: p.top, left: p.left }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// =================== Hero Section ===================
export default function HeroSection() {
  const { rotateX, rotateY, onMouseMove } = useParallax(10);

  return (
    <section
      onMouseMove={onMouseMove}
      className="relative flex flex-col items-center justify-center w-full min-h-screen text-center overflow-hidden text-white"
    >
      {/* ======= Vortex Background ======= */}
      <Vortex
        backgroundColor="transparent"
        rangeY={100}
        particleCount={70}
        baseHue={240}
        size={4}
        speed={1.3}
        amplitude={0.6}
        className="absolute inset-0 -z-10"
      />

      {/* ======= Floating Particles ======= */}
      <FloatingParticles />

      {/* ======= Profile Image ======= */}
      <motion.div
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.3)] mb-6 relative z-10"
      >
        <img
          src="/1758435757365.jpeg"
          alt="Amit Kumar Prasad"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ======= Animated Name ======= */}
      <AnimatedName text="Amit Kumar Prasad" />

      {/* ======= Subtitle ======= */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-5 text-lg md:text-2xl text-gray-400 font-medium"
      >
        <Balancer>
          Full Stack Developer • Cloud Enthusiast • Innovator
        </Balancer>
      </motion.h2>

      {/* ======= Description ======= */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-4 text-gray-300 max-w-2xl text-lg leading-relaxed px-6"
      >
        <Balancer>
          I build dynamic, scalable, and interactive web experiences using{" "}
          <span className="text-white font-semibold">
            Next.js, React.js, Node.js, and Cloud Infrastructure
          </span>
          . Focused on innovation, performance, and immersive digital design.
        </Balancer>
      </motion.p>

      {/* ======= Social Icons ======= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex items-center justify-center gap-6"
      >
        <a
          href="https://github.com/amit81127"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition hover:scale-110"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/amit-kumar-55a070275/"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition hover:scale-110"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </motion.div>

      {/* ======= Background Title ======= */}
      <motion.h1
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ delay: 1 }}
        className="absolute text-[10rem] md:text-[16rem] font-extrabold uppercase text-gray-700/10 select-none pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        AMIT
      </motion.h1>
    </section>
  );
}
