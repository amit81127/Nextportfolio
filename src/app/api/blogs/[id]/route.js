import { connectDB } from "../../../db/connect";
import Blog from "../../../db/models/Blog";

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
