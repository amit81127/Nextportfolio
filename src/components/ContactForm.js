"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit (client-side only)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("⚠️ Please fill in all fields!");
      return;
    }

    setStatus("Sending...");
    setTimeout(() => {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-[#111] p-8 rounded-2xl shadow-md border border-gray-800 hover:border-indigo-500/40 hover:shadow-indigo-500/20 transition-all duration-500"
    >
      <div className="space-y-5">
        {/* Name Field */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md bg-gray-900 text-gray-200 border border-gray-700 focus:border-indigo-400 focus:outline-none"
        />

        {/* Email Field */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md bg-gray-900 text-gray-200 border border-gray-700 focus:border-indigo-400 focus:outline-none"
        />

        {/* Message Field */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md bg-gray-900 text-gray-200 border border-gray-700 focus:border-indigo-400 focus:outline-none"
        ></textarea>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="flex items-center justify-center gap-2 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-md font-medium shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
        >
          <Send className="w-5 h-5" /> Send Message
        </motion.button>

        {/* Status Message */}
        {status && (
          <p className="text-indigo-400 text-sm text-center mt-3">{status}</p>
        )}
      </div>
    </motion.form>
  );
}
