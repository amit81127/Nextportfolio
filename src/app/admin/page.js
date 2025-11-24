"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="max-w-5xl mx-auto"
    >
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to your Admin Dashboard</h1>
        <p className="text-xl text-gray-400">The control center of your entire portfolio.</p>
      </header>

      {/* Quick Actions Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <DashboardCard 
          title="Projects" 
          desc="Manage portfolio projects"
          link="/admin/projects"
          icon="🚀"
          color="border-blue-500/20 hover:border-blue-500/50"
        />
        <DashboardCard 
          title="Certificates" 
          desc="Manage achievements"
          link="/admin/certificates"
          icon="🎓"
          color="border-green-500/20 hover:border-green-500/50"
        />
        <DashboardCard 
          title="Blogs" 
          desc="Manage articles"
          link="/admin/blogs"
          icon="✍️"
          color="border-purple-500/20 hover:border-purple-500/50"
        />
        <DashboardCard 
          title="Inbox" 
          desc="View messages"
          link="/admin/messages"
          icon="📬"
          color="border-amber-500/20 hover:border-amber-500/50"
        />
      </div>
    </motion.div>
  );
}

function DashboardCard({ title, desc, link, icon, color }) {
  return (
    <Link href={link} className={`p-6 rounded-xl border bg-white/5 transition hover:scale-[1.02] ${color}`}>
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </Link>
  );
}

function Step({ num, title, desc }) {
  return (
    <li className="ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-900 rounded-full -left-3 ring-4 ring-gray-900 text-xs font-bold text-indigo-300">
        {num}
      </span>
      <h4 className="font-medium leading-tight text-white mb-1">{title}</h4>
      <p className="text-sm text-gray-400">{desc}</p>
    </li>
  );
}
