"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2, Plus, Eye, PenTool } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setBlogs(blogs.filter((blog) => blog._id !== id));
      } else {
        alert("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog", error);
      alert("Error deleting blog");
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Blogs</h1>
          <p className="text-gray-400">Manage your articles and thoughts</p>
        </div>
        <Link
          href="/admin/blogs/add"
          className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-xl hover:bg-purple-700 transition shadow-lg shadow-purple-500/20 font-medium"
        >
          <Plus className="w-5 h-5" /> Write New
        </Link>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white/5 rounded-xl h-24 animate-pulse border border-white/5"></div>
          ))}
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
          <PenTool className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-300 mb-2">No blogs found</h3>
          <p className="text-gray-500 mb-6">Share your knowledge by writing your first blog post.</p>
          <Link
            href="/admin/blogs/add"
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Write Blog →
          </Link>
        </div>
      ) : (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead className="bg-black/20">
                <tr>
                  <th className="px-6 py-5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Article</th>
                  <th className="px-6 py-5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Published</th>
                  <th className="px-6 py-5 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {blogs.map((blog) => (
                  <motion.tr 
                    key={blog._id} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden bg-gray-800">
                          {blog.image ? (
                            <img className="h-full w-full object-cover" src={blog.image} alt="" />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center text-gray-600">📝</div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{blog.title}</div>
                          <div className="text-xs text-gray-500">{blog.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {blog.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-3">
                        <Link 
                          href={`/blog/${blog.slug}`} 
                          target="_blank" 
                          className="p-2 text-gray-400 hover:text-indigo-400 hover:bg-white/5 rounded-lg transition-all"
                          title="View Live"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
