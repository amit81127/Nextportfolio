import { connectDB } from "../db/connect";
import Project from "../db/models/Project";

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET /api/projects error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch projects" }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const newProject = await Project.create({
      title: body.title,
      description: body.description,
      techStack: body.techStack,
      githubUrl: body.githubUrl,
      liveUrl: body.liveUrl,
      image: body.image,
      gallery: body.gallery,
      category: body.category,
    });

    return new Response(JSON.stringify(newProject), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("POST /api/projects error:", error);
    return new Response(JSON.stringify({ error: "Error creating project" }), {
      status: 500,
    });
  }
}
