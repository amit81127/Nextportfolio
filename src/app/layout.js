import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Amit Kumar | Portfolio",
  description: "Modern interactive portfolio built with Next.js, Tailwind, and Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0e0e10] text-gray-100 font-inter">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
