"use client";
import { motion } from "framer-motion";
import { CalendarDays, ArrowUpRight } from "lucide-react";

export default function BlogCard({ title, description, image, link, date }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group relative overflow-hidden rounded-2xl bg-[#111] border border-gray-800 hover:border-indigo-500/40 transition-all duration-500 shadow-md hover:shadow-indigo-500/20"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
        <motion.img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
          <CalendarDays className="w-4 h-4 text-indigo-400" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>

        <div className="flex items-center text-indigo-400 text-sm font-medium gap-1 hover:gap-2 transition-all duration-300">
          Read More <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.a>
  );
}
