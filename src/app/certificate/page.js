"use client";
import { motion } from "framer-motion";
import { Award, Cloud, Briefcase, Code } from "lucide-react";
import Image from "next/image";

export default function CertificatesPage() {
  const certificates = [
    {
      icon: <Cloud className="w-7 h-7 text-cyan-400" />,
      title: "Google Cloud Arcade Legend",
      issuer: "Google Cloud",
      date: "Dec 2024",
      description:
        "Earned the Arcade Legend badge by completing hands-on Google Cloud labs, demonstrating expertise in Compute, Storage, and Networking solutions.",
      image: "/images/certs/google-cloud.png",
      link: "https://www.linkedin.com/posts/amit-kumar-55a070275_googlecloud-arcadelegend-cloudcomputing-activity-7351547968086298626-5WR1",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Briefcase className="w-7 h-7 text-yellow-400" />,
      title: "Deloitte Technology Consulting Virtual Internship",
      issuer: "Deloitte",
      date: "Oct 2024",
      description:
        "Completed Deloitte’s virtual internship focused on data-driven decision-making and software consulting practices.",
      image: "/images/certs/deloitte.png",
      link: "https://www.linkedin.com/posts/amit-kumar-55a070275_deloitte-activity-7345695799479029760-SkrN",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Code className="w-7 h-7 text-green-400" />,
      title: "Oracle Java Foundations Certification",
      issuer: "Oracle Academy",
      date: "Aug 2024",
      description:
        "Mastered Java programming fundamentals, OOP principles, and data structures as part of Oracle’s Java Foundations program.",
      image: "/images/certs/oracle-java.png",
      link: "https://www.linkedin.com/posts/amit-kumar-55a070275_oracle-java-foundations-learn-oracle-for-activity-7320037937012686849-tYWF",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-20">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          My <span className="text-indigo-400">Certificates</span> 🎓
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          Verified certifications that reflect my continuous learning, skill-building, and dedication to technical excellence.
        </p>
      </motion.div>

      {/* Certificates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative bg-[#111] border border-gray-800 hover:border-indigo-400/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition-all duration-500"
          >
            {/* Badge Image */}
            <div className="relative w-full h-40 bg-black overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain p-6"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <div className="flex justify-center items-center gap-2 mb-2">
                {cert.icon}
                <h2 className="text-xl font-semibold">{cert.title}</h2>
              </div>
              <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-xs mb-3">{cert.date}</p>
              <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors"
              >
                🔗 View Credential
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
