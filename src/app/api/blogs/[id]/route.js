import { connectDB } from "@/app/api/db/connect";
import Blog from "@/app/api/db/models/Blog";

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    await Blog.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: "Blog deleted" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete blog" }), { status: 500 });
  }
}
