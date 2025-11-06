"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          📬 Get in <span className="text-indigo-400">Touch</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project idea, collaboration request, or internship opportunity?  
          I’d love to hear from you — drop me a message below or connect on social platforms.
        </p>
      </motion.div>

      {/* Contact + Socials */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ContactForm />
        </motion.div>

        {/* Social & Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left space-y-6"
        >
          <h2 className="text-2xl font-semibold text-indigo-400">Let’s Connect</h2>
          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3 hover:text-indigo-400 transition-colors">
              <Mail className="w-5 h-5 text-indigo-400" /> amitkumarprasadcse@gmail.com
            </p>
            <Link
              href="https://www.linkedin.com/in/amit-kumar-55a070275"
              target="_blank"
              className="flex items-center gap-3 hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-indigo-400" /> linkedin.com/in/amit-kumar-55a070275
            </Link>
            <Link
              href="https://github.com/amit81127"
              target="_blank"
              className="flex items-center gap-3 hover:text-indigo-400 transition-colors"
            >
              <Github className="w-5 h-5 text-indigo-400" /> github.com/amit81127
            </Link>
            <p className="flex items-center gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-indigo-400" /> Kanpur, Uttar Pradesh, India
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
