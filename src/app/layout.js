
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://yourportfolio.com'),
  title: {
    default: "Amit Kumar Prasad | Full Stack Developer & Software Engineer",
    template: "%s | Amit Kumar Prasad"
  },
  description: "Full Stack Developer specializing in MERN Stack, Cloud Computing, and IoT. Computer Science student at Axis College, Kanpur. Explore my projects, skills, and achievements in web development, AI, and innovative tech solutions.",
  keywords: [
    "Amit Kumar Prasad",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Portfolio",
    "Cloud Computing",
    "IoT Developer",
    "Computer Science Student",
    "Axis College Kanpur",
    "AKTU University",
    "JavaScript Developer",
    "MongoDB",
    "Express.js",
    "API Development",
    "Frontend Developer",
    "Backend Developer",
    "Hackathon Projects",
    "Tech Portfolio",
    "Software Development",
    "Data Structures and Algorithms"
  ],
  authors: [{ name: "Amit Kumar Prasad" }],
  creator: "Amit Kumar Prasad",
  publisher: "Amit Kumar Prasad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Amit Kumar Prasad Portfolio",
    title: "Amit Kumar Prasad | Full Stack Developer & Software Engineer",
    description: "Full Stack Developer specializing in MERN Stack, Cloud Computing, and IoT. Explore innovative projects and tech solutions.",
    images: [
      {
        url: "/9be4260c5a4e2adad1cc00db8cf71785.jpg",
        width: 1200,
        height: 630,
        alt: "Amit Kumar Prasad - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Kumar Prasad | Full Stack Developer & Software Engineer",
    description: "Full Stack Developer specializing in MERN Stack, Cloud Computing, and IoT. Explore innovative projects and tech solutions.",
    images: ["/9be4260c5a4e2adad1cc00db8cf71785.jpg"],
    creator: "@amitkumar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/9be4260c5a4e2adad1cc00db8cf71785.jpg" },
      { url: "/9be4260c5a4e2adad1cc00db8cf71785.jpg", sizes: "16x16", type: "image/jpeg" },
      { url: "/9be4260c5a4e2adad1cc00db8cf71785.jpg", sizes: "32x32", type: "image/jpeg" },
    ],
    apple: [
      { url: "/9be4260c5a4e2adad1cc00db8cf71785.jpg" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL || 'https://yourportfolio.com'} />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
