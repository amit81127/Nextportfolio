import { connectDB } from "../db/connect";
import Contact from "../db/models/Contact";

export async function GET() {
  try {
    await connectDB();
    const messages = await Contact.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(messages), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("GET /api/contact error:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch messages" }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    if (!body.name || !body.email || !body.message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const contact = await Contact.create({
      name: body.name,
      email: body.email,
      message: body.message,
    });

    return new Response(JSON.stringify(contact), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("POST /api/contact error:", err);
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500 });
  }
}
