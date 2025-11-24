"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { motion } from "framer-motion";
import { Upload, CheckCircle, AlertCircle, Rocket } from "lucide-react";

export default function AddProjectPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    githubUrl: "",
    liveUrl: "",
    category: "Web",
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg({ type: "", text: "" });

    try {
      let imageUrl = "";
      if (file) {
        imageUrl = await uploadToCloudinary(file);
      }

      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          image: imageUrl,
          techStack: formData.techStack.split(",").map((t) => t.trim()),
        }),
      });

      if (res.ok) {
        setMsg({ type: "success", text: "Project created successfully! Redirecting..." });
        setTimeout(() => router.push("/admin/projects"), 1500);
      } else {
        throw new Error("Failed to create project");
      }
    } catch (error) {
      console.error(error);
      setMsg({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto p-8 bg-[#111] rounded-2xl border border-gray-800 shadow-xl"
    >
      <h1 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
        <span className="bg-blue-500/20 p-2 rounded-lg text-blue-400">🚀</span>
        Add New Project
      </h1>

      {msg.text && (
        <div className={`p-4 rounded-lg mb-6 flex items-center gap-3 ${
          msg.type === "success" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
        }`}>
          {msg.type === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          {msg.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-blue-500 focus:outline-none text-white transition-colors"
              placeholder="Project Name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-blue-500 focus:outline-none text-white transition-colors appearance-none"
            >
              <option value="Web">Web Development</option>
              <option value="Full Stack">Full Stack</option>
              <option value="IoT">IoT / Hardware</option>
              <option value="Hackathon">Hackathon</option>
              <option value="AI">AI / ML</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-blue-500 focus:outline-none text-white transition-colors"
            placeholder="Describe your project..."
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">
            Tech Stack <span className="text-gray-500">(comma separated)</span>
          </label>
          <input
            type="text"
            name="techStack"
            value={formData.techStack}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-blue-500 focus:outline-none text-white transition-colors"
            placeholder="React, Node.js, MongoDB..."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">GitHub URL</label>
            <input
              type="url"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-blue-500 focus:outline-none text-white transition-colors"
              placeholder="https://github.com/..."
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">Live Demo URL</label>
            <input
              type="url"
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-blue-500 focus:outline-none text-white transition-colors"
              placeholder="https://..."
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">Project Thumbnail</label>
          <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors bg-black/30">
            <input
              type="file"
              accept="image/*"
              onChange={handleFile}
              className="hidden"
              id="project-upload"
            />
            <label htmlFor="project-upload" className="cursor-pointer flex flex-col items-center gap-2">
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="max-h-48 rounded-lg shadow-lg"
                />
              ) : (
                <>
                  <Upload className="w-8 h-8 text-gray-500" />
                  <span className="text-gray-400 text-sm">Click to upload thumbnail</span>
                </>
              )}
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Creating...
            </>
          ) : (
            <>
              <Rocket className="w-5 h-5" /> Create Project
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
