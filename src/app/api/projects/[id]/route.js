import { connectDB } from "../../db/connect";
import Project from "../../db/models/Project";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const project = await Project.findById(id);
    if (!project) {
      return new Response(JSON.stringify({ error: "Project not found" }), { status: 404 });
    }
    return new Response(JSON.stringify(project), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch project" }), { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    await Project.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: "Project deleted" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete project" }), { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const body = await request.json();
    const updatedProject = await Project.findByIdAndUpdate(id, body, { new: true });
    return new Response(JSON.stringify(updatedProject), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to update project" }), { status: 500 });
  }
}
