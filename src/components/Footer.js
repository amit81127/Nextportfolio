"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/amit81127",
      name: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/amit81127",
      name: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:amitkumar81127@gmail.com",
      name: "Email",
    },
  ];

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Achievements", path: "/achievements" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0b0b0c] via-[#0e0e11] to-[#09090a] text-gray-300 px-6 md:px-20 py-14">
      {/* Floating Background Glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Upper Section */}
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 z-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl font-extrabold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
            Amit.dev
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </motion.span>
          </h2>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            Designing code and crafting experiences — where creativity meets
            logic.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.ul
          className="flex flex-wrap justify-center gap-4 text-sm md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {routes.map((route, i) => (
            <motion.li
              key={i}
              whileHover={{
                scale: 1.15,
                y: -2,
                color: "#818cf8",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group cursor-pointer"
            >
              <Link href={route.path} className="hover:text-indigo-400">
                {route.name}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.3,
                rotate: 8,
                color: "#6366f1",
                textShadow: "0px 0px 8px #6366f1",
              }}
              className="text-gray-400 hover:text-indigo-400 transition"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        className="my-8 border-t border-gray-800 w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
      ></motion.div>

      {/* Bottom Section */}
      <motion.div
        className="relative text-center text-sm text-gray-500 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p>
          © {currentYear}{" "}
          <span className="text-indigo-400 font-semibold">Amit Kumar</span>. All rights reserved.
        </p>
        <p className="mt-1">
          Built with ❤️ using{" "}
          <span className="text-indigo-400 font-semibold">Next.js</span> &{" "}
          <span className="text-purple-400 font-semibold">Framer Motion</span>.
        </p>

        {/* Floating decorative dots */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 mt-3">
          <motion.span
            className="w-2 h-2 rounded-full bg-indigo-500"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <motion.span
            className="w-2 h-2 rounded-full bg-purple-500"
            animate={{ y: [0, -5, 0], delay: 0.4 }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <motion.span
            className="w-2 h-2 rounded-full bg-pink-500"
            animate={{ y: [0, -5, 0], delay: 0.8 }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </footer>
  );
}
