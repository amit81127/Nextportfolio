"use client";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -40,
    scale: 0.98,
  },
};

const pageTransition = {
  type: "spring",
  stiffness: 100,
  damping: 18,
  duration: 0.6,
};

export default function AnimatedWrapper({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen flex flex-col justify-center items-center p-6 md:p-12"
    >
      {children}
    </motion.div>
  );
}
