"use client";

import { useState } from "react";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { motion } from "framer-motion";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";

export default function AddCertificatePage() {
  const [form, setForm] = useState({
    title: "",
    issuer: "",
    issuedDate: "",
    liveLink: "",
    notes: "",
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
    if (!form.title) return setMsg({ type: "error", text: "Please enter a title" });
    if (!file) return setMsg({ type: "error", text: "Please choose a certificate image file" });

    setLoading(true);
    setMsg({ type: "", text: "" });

    try {
      // 1) Upload to Cloudinary
      const imageUrl = await uploadToCloudinary(file);

      // 2) Save metadata to your API
      const res = await fetch("/api/certificates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          image: imageUrl,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error?.error || "Failed to save certificate");
      }

      setMsg({ type: "success", text: "Certificate added successfully!" });
      setForm({ title: "", issuer: "", issuedDate: "", liveLink: "", notes: "" });
      setFile(null);
      setPreview("");
    } catch (err) {
      console.error(err);
      setMsg({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-8 bg-[#111] rounded-2xl border border-gray-800 shadow-xl"
    >
      <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
        <span className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">🎓</span>
        Add Certificate
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
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-indigo-500 focus:outline-none text-white transition-colors"
              placeholder="e.g. React Developer"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">Issuer</label>
            <input 
              name="issuer" 
              value={form.issuer} 
              onChange={handleChange} 
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-indigo-500 focus:outline-none text-white transition-colors"
              placeholder="e.g. Meta / Coursera"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">Issued Date</label>
          <input 
            name="issuedDate" 
            value={form.issuedDate} 
            onChange={handleChange} 
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-indigo-500 focus:outline-none text-white transition-colors"
            placeholder="e.g. May 2025" 
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">Credential URL (Optional)</label>
          <input 
            name="liveLink" 
            value={form.liveLink} 
            onChange={handleChange} 
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-indigo-500 focus:outline-none text-white transition-colors"
            placeholder="https://..." 
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">Notes (optional)</label>
          <textarea 
            name="notes" 
            value={form.notes} 
            onChange={handleChange} 
            rows="3"
            className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-indigo-500 focus:outline-none text-white transition-colors"
            placeholder="Any extra details..."
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">Certificate Image</label>
          <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-colors bg-black/30">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFile} 
              className="hidden" 
              id="cert-upload"
            />
            <label htmlFor="cert-upload" className="cursor-pointer flex flex-col items-center gap-2">
              {preview ? (
                <img src={preview} alt="preview" className="max-h-48 rounded-lg shadow-lg" />
              ) : (
                <>
                  <Upload className="w-8 h-8 text-gray-500" />
                  <span className="text-gray-400 text-sm">Click to upload image</span>
                </>
              )}
            </label>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading} 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold shadow-lg shadow-indigo-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="w-5 h-5" /> Upload Certificate
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
