"use client";

import { useState } from "react";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { motion } from "framer-motion";
import { Upload, CheckCircle, AlertCircle, PenTool } from "lucide-react";

export default function AddBlogPage() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    tags: "",
    category: "General",
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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

      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          image: imageUrl,
          tags: form.tags.split(",").map((t) => t.trim()),
        }),
      });

      if (!res.ok) throw new Error("Failed to save blog");

      setMsg({ type: "success", text: "Blog published successfully!" });
      setForm({ title: "", content: "", tags: "", category: "General" });
      setFile(null);
      setPreview("");
    } catch (err) {
      setMsg({ type: "error", text: err.message });
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
      <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
        <span className="bg-purple-500/20 p-2 rounded-lg text-purple-400">✍️</span>
        Write a New Blog
      </h2>

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
              name="title" 
              value={form.title} 
              onChange={handleChange} 
              required 
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-purple-500 focus:outline-none text-white transition-colors"
              placeholder="Blog Title"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">Category</label>
            <select 
              name="category" 
              value={form.category} 
              onChange={handleChange} 
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-purple-500 focus:outline-none text-white transition-colors appearance-none"
            >
              <option value="General">General</option>
              <option value="Tech">Tech</option>
              <option value="Personal">Personal</option>
              <option value="Tutorial">Tutorial</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">Content (Markdown supported)</label>
          <textarea 
            name="content" 
            value={form.content} 
            onChange={handleChange} 
            required 
            rows="10" 
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-purple-500 focus:outline-none text-white font-mono text-sm transition-colors"
            placeholder="# Hello World..."
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">Tags (comma separated)</label>
          <input 
            name="tags" 
            value={form.tags} 
            onChange={handleChange} 
            placeholder="react, nextjs, webdev" 
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-purple-500 focus:outline-none text-white transition-colors"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">Cover Image</label>
          <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-purple-500/50 transition-colors bg-black/30">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFile} 
              className="hidden" 
              id="blog-upload"
            />
            <label htmlFor="blog-upload" className="cursor-pointer flex flex-col items-center gap-2">
              {preview ? (
                <img src={preview} alt="preview" className="max-h-48 rounded-lg shadow-lg" />
              ) : (
                <>
                  <Upload className="w-8 h-8 text-gray-500" />
                  <span className="text-gray-400 text-sm">Click to upload cover image</span>
                </>
              )}
            </label>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading} 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold shadow-lg shadow-purple-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Publishing...
            </>
          ) : (
            <>
              <PenTool className="w-5 h-5" /> Publish Blog
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
