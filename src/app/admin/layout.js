"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-900 text-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-black/40 border-r border-white/10 p-6 flex flex-col fixed h-full overflow-y-auto z-10">
        <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Admin Panel
        </h2>
        
        <nav className="space-y-2 flex-1">
          <NavLink href="/admin" label="Dashboard" icon="🏠" />
          <div className="pt-4 pb-2 text-xs font-semibold text-gray-500 uppercase">Content</div>
          <NavLink href="/admin/projects" label="Projects" icon="🚀" />
          <NavLink href="/admin/projects/add" label="Add Project" icon="➕" />
          <NavLink href="/admin/certificates" label="Certificates" icon="🎓" />
          <NavLink href="/admin/certificates/add" label="Add Certificate" icon="➕" />
          <NavLink href="/admin/blogs" label="Blogs" icon="✍️" />
          <NavLink href="/admin/blogs/add" label="Add Blog" icon="📝" />
          <div className="pt-4 pb-2 text-xs font-semibold text-gray-500 uppercase">Inbox</div>
          <NavLink href="/admin/messages" label="Messages" icon="📬" />
        </nav>

        <div className="pt-6 border-t border-white/10">
          <Link href="/" className="text-sm text-gray-400 hover:text-white flex items-center gap-2">
            <span>←</span> Back to Portfolio
          </Link>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <main className="flex-1 ml-64 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

function NavLink({ href, label, icon }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
        isActive ? "bg-blue-600 text-white" : "hover:bg-white/5 text-gray-300 hover:text-white"
      }`}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
