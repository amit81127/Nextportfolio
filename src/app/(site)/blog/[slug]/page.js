import { connectDB } from "@/app/api/db/connect";
import Blog from "@/app/api/db/models/Blog";
import Link from "next/link";

async function getBlog(slug) {
  await connectDB();
  const blog = await Blog.findOne({ slug });
  return blog;
}

export default async function BlogPost({ params }) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return <div className="p-20 text-center text-white">Blog not found</div>;
  }

  return (
    <article className="max-w-3xl mx-auto py-20 px-6 text-white">
      <Link href="/blog" className="text-blue-400 hover:underline mb-6 block">← Back to Blogs</Link>
      
      <span className="text-sm text-blue-400 font-medium">{blog.category}</span>
      <h1 className="text-4xl font-bold mt-2 mb-6">{blog.title}</h1>
      
      {blog.image && (
        <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg mb-8 object-cover" />
      )}

      <div className="prose prose-invert max-w-none whitespace-pre-wrap text-gray-300">
        {blog.content}
      </div>

      <div className="mt-10 pt-6 border-t border-white/10">
        <h3 className="text-sm text-gray-400 mb-2">Tags:</h3>
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((t) => (
            <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
