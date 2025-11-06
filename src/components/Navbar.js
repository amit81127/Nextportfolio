"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achivments" },
    { name: "Blog", path: "/blog" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0b0c]/90 backdrop-blur-lg shadow-md z-50">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-extrabold text-white tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href="/">Amit.dev</Link>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {routes.map((route) => (
            <motion.li
              key={route.path}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href={route.path}
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
              >
                {route.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#0b0b0c] border-t border-gray-700 shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              {routes.map((route) => (
                <motion.li
                  key={route.path}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link
                    href={route.path}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium text-lg"
                  >
                    {route.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
