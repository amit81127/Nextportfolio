"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2, Plus, ExternalLink, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function CertificatesPage() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const res = await fetch("/api/certificates");
      const data = await res.json();
      setCertificates(data);
    } catch (error) {
      console.error("Failed to fetch certificates", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this certificate?")) return;

    try {
      const res = await fetch(`/api/certificates/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setCertificates(certificates.filter((cert) => cert._id !== id));
      } else {
        alert("Failed to delete certificate");
      }
    } catch (error) {
      console.error("Error deleting certificate", error);
      alert("Error deleting certificate");
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Certificates</h1>
          <p className="text-gray-400">Manage your certifications and achievements</p>
        </div>
        <Link
          href="/admin/certificates/add"
          className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20 font-medium"
        >
          <Plus className="w-5 h-5" /> Add New
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white/5 rounded-2xl h-80 animate-pulse border border-white/5"></div>
          ))}
        </div>
      ) : certificates.length === 0 ? (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
          <Award className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-300 mb-2">No certificates found</h3>
          <p className="text-gray-500 mb-6">Start building your portfolio by adding your first certificate.</p>
          <Link
            href="/admin/certificates/add"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Add Certificate →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 transition-all"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white truncate mb-1">{cert.title}</h3>
                  <p className="text-sm text-indigo-300 font-medium">{cert.issuer}</p>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.issuedDate}</span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  {cert.liveLink ? (
                    <a
                      href={cert.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> View Credential
                    </a>
                  ) : (
                    <span className="text-xs text-gray-600">No link</span>
                  )}

                  <button
                    onClick={() => handleDelete(cert._id)}
                    className="flex items-center gap-1.5 text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
