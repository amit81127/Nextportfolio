"use client";

import { useEffect, useState } from "react";
import StructuredData from "@/components/StructuredData";

export default function CertificatesPage() {
  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/certificates")
      .then((r) => r.json())
      .then((data) => setCerts(data))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  // Structured Data for Certificates Page
  const certificatesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Amit Kumar Prasad's Certifications",
    description: "Professional certifications and credentials",
    numberOfItems: certs.length,
    itemListElement: certs.slice(0, 10).map((cert, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "EducationalOccupationalCredential",
        name: cert.title,
        credentialCategory: "certification",
        issuedBy: {
          "@type": "Organization",
          name: cert.issuer
        },
        dateCreated: cert.issuedDate
      }
    }))
  };

  return (
    <>
      <StructuredData data={certificatesSchema} />
      
      <section className="py-20 px-6 md:px-20">
      <h1 className="text-4xl font-bold mb-6">Certificates</h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : certs.length === 0 ? (
        <p className="text-gray-400">No certificates yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certs.map((c) => (
            <div key={c._id} className="bg-white/5 p-4 rounded shadow">
              <img src={c.image || "/placeholder.jpg"} alt={c.title} className="w-full h-44 object-cover rounded" />
              <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-300">{c.issuer} • {c.issuedDate}</p>
              {c.notes && <p className="text-sm text-gray-400 mt-2">{c.notes}</p>}
            </div>
          ))}
        </div>
      )}
    </section>
    </>
  );
}
