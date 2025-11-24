import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },

    techStack: [{ type: String }],

    githubUrl: { type: String, default: "" },
    liveUrl: { type: String, default: "" },

    // 🖼 Main Image for the Project
    image: { type: String, default: "" },

    // 🖼 Optional: Multiple Project Images
    gallery: [{ type: String }],

    category: { type: String, default: "Web" },
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
