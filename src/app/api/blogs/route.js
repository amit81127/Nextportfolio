import { connectDB } from "../db/connect";
import Blog from "../db/models/Blog";

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("GET /api/blogs error:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch blogs" }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    if (!body.title || !body.content) {
      return new Response(JSON.stringify({ error: "Missing title or content" }), { status: 400 });
    }

    // Create slug from title
    const slug = body.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    const blog = await Blog.create({
      title: body.title,
      slug,
      content: body.content,
      image: body.image || "",
      tags: body.tags || [],
      category: body.category || "General",
    });

    return new Response(JSON.stringify(blog), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("POST /api/blogs error:", err);
    return new Response(JSON.stringify({ error: "Failed to create blog" }), { status: 500 });
  }
}
