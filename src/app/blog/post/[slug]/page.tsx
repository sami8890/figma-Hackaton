import { posts } from "@/lib/types";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-2xl mx-auto">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg object-cover w-full aspect-[2/1] mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <span>{post.author}</span>
          <span>{post.date}</span>
          <Link
            href={`/category/${post.category}`}
            className="text-primary hover:underline"
          >
            {post.category}
          </Link>
        </div>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
