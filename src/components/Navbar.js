"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Folder,
  Award,
  BookOpen,
  FileText,
  Phone,
} from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/", icon: <Home /> },
    { name: "About", path: "/about", icon: <User /> },
    { name: "Skills", path: "/skills", icon: <Code /> },
    { name: "Projects", path: "/projects", icon: <Folder /> },
    { name: "Achievements", path: "/achivments", icon: <Award /> },
    { name: "Blog", path: "/blog", icon: <BookOpen /> },
    { name: "Resume", path: "/resume", icon: <FileText /> },
    { name: "Contact", path: "/contact", icon: <Phone /> },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500 
      bg-transparent backdrop-blur-xl border-b border-white/10"
    >
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href="/">Amit.dev</Link>
        </motion.h1>

        {/* Desktop Floating Dock */}
        <div className="hidden md:block">
          <FloatingDock
            items={routes.map((route) => ({
              title: route.name,
              icon: route.icon,
              href: route.path,
            }))}
          />
        </div>

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
            className="md:hidden bg-[#0b0b0c]/70 backdrop-blur-lg border-t border-gray-700 shadow-lg"
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
