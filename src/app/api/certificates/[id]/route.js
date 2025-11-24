import { connectDB } from "@/app/api/db/connect";
import Certificate from "@/app/api/db/models/Certificate";

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    await Certificate.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: "Certificate deleted" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete certificate" }), { status: 500 });
  }
}
