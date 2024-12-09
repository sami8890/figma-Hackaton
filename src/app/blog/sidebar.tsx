import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { categories, posts } from "@/lib/types";

export default function Sidebar() {
  const recentPosts = posts.slice(0, 4);

  return (
    <aside className="space-y-8">
      <div className="space-y-4"> 
        <form action="/" method="GET">
          <Input
            type="search"
            name="search"
            placeholder="Search"
            className="w-full"
          />
        </form>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category:any) => (
            <li key={category.name}>
              <Link
                href={`/category/${category.name}`}
                className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary"
              >
                {category.name}
                <span>{category.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/post/${post.slug}`}
              className="flex items-start gap-3 group"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={80}
                height={80}
                className="rounded object-cover aspect-square"
              />
              <div className="space-y-1">
                <h4 className="text-sm font-medium group-hover:text-primary">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
