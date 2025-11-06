"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
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
    { name: "Achievements", path: "/achivments" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0b0c] border-t border-gray-800 text-gray-300 px-6 md:px-20 py-10">
      {/* Upper Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-extrabold text-white mb-2 tracking-wide">
            Amit.dev
          </h2>
          <p className="text-sm text-gray-400 max-w-sm">
            Designing code and crafting experiences — where creativity meets
            logic.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.ul
          className="flex flex-wrap justify-center gap-4 text-sm md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {routes.map((route) => (
            <motion.li
              key={route.path}
              whileHover={{ scale: 1.1 }}
              className="hover:text-indigo-400 transition-colors"
            >
              <Link href={route.path}>{route.name}</Link>
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
                scale: 1.2,
                rotate: 5,
                color: "#6366f1",
              }}
              className="text-gray-400 hover:text-indigo-400 transition"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-800"></div>

      {/* Bottom Section */}
      <motion.div
        className="text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p>
          © {currentYear} <span className="text-indigo-400">Amit Kumar</span>. All rights reserved.
        </p>
        <p className="mt-1">
          Built with ❤️ using{" "}
          <span className="text-indigo-400 font-semibold">Next.js</span> &{" "}
          <span className="text-purple-400 font-semibold">Framer Motion</span>.
        </p>
      </motion.div>
    </footer>
  );
}
