export const siteConfig = {
  name: "Amit Kumar Prasad",
  description: "Full Stack Developer specializing in MERN Stack, Cloud Computing, and IoT.",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://yourportfolio.com",
  ogImage: "https://yourportfolio.com/og.jpg",
  links: {
    twitter: "https://twitter.com/amitkumar",
    github: "https://github.com/amit81127",
    linkedin: "https://linkedin.com/in/amit-kumar-prasad",
  },
  nav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Skills", href: "/skills" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],
  adminNav: [
    { title: "Dashboard", href: "/admin", icon: "LayoutDashboard" },
    { title: "Projects", href: "/admin/projects", icon: "FolderKanban" },
    { title: "Certificates", href: "/admin/certificates", icon: "Award" },
    { title: "Blogs", href: "/admin/blogs", icon: "FileText" },
  ]
};
