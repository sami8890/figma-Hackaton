import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/types";
import Pagination from "@/app/blog/pagnition";

export default function BlogList({
  posts,
  currentPage,
  totalPages,
  search,
}: {
  posts: Post[];
  currentPage: number;
  totalPages: number;
  search: string;
}) {
  return (
    <main className="space-y-8">
      {posts.map((post) => (
        <article key={post.slug} className="space-y-4">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg object-cover w-full aspect-[2/1]"
          />
          <div className="space-y-2">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span>{post.date}</span>
              <Link
                href={`/category/${post.category}`}
                className="text-primary hover:underline"
              >
                {post.category}
              </Link>
            </div>
            <h2 className="text-2xl font-semibold">
              <Link href={`/post/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-muted-foreground">{post.excerpt}</p>
            <Link
              href={`/post/${post.slug}`}
              className="inline-block text-sm font-medium text-primary hover:underline"
            >
              Read more
            </Link>
          </div>
        </article>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        search={search}
      />
    </main>
  );
}
