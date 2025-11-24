import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    issuer: { type: String, default: "" },
    issuedDate: { type: String, default: "" }, // e.g., "May 2025"
    liveLink: { type: String, default: "" }, // Optional link to credential
    image: { type: String, default: "" }, // Cloudinary secure_url
    notes: { type: String, default: "" }
  },
  { timestamps: true }
);

export default mongoose.models.Certificate ||
  mongoose.model("Certificate", CertificateSchema);
