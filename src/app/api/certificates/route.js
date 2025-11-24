import { connectDB } from "../db/connect";
import Certificate from "../db/models/Certificate";

export async function GET() {
  try {
    await connectDB();
    const certs = await Certificate.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(certs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("GET /api/certificates error:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch certificates" }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // Simple server-side validation
    if (!body.title || !body.image) {
      return new Response(JSON.stringify({ error: "Missing title or image" }), { status: 400 });
    }

    const cert = await Certificate.create({
      title: body.title,
      issuer: body.issuer || "",
      issuedDate: body.issuedDate || "",
      liveLink: body.liveLink || "",
      image: body.image,
      notes: body.notes || "",
    });

    return new Response(JSON.stringify(cert), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("POST /api/certificates error:", err);
    return new Response(JSON.stringify({ error: "Failed to create certificate" }), { status: 500 });
  }
}
