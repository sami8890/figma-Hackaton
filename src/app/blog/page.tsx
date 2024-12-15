// app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";

// Define a type for blog posts
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

// Sample blog posts data (would typically come from a database or API)
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/blog/first-laptop.png",
    author: "Admin",
    date: "14 Oct 2022",
    category: "Wood"
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/blog/second.png",
    author: "Admin",
    date: "14 Oct 2022",
    category: "Handmade"
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/blog/third.png",
    author: "Admin",
    date: "14 Oct 2022",
    category: "Wood"
  }
];

// Sample recent posts data
const recentPosts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
    image: "/blog/recent-post1.png"
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
    image: "/blog/recent-post2.png"
  },
  {
    id: 3,
    title: "Modern home in Milan",
    date: "03 Aug 2022",
    image: "/blog/recent-post3.png"
  },
  {
    id: 4,
    title: "Colorful office redesign",
    date: "03 Aug 2022",
    image: "/blog/recent-post4.png"
  }
];

export default function BlogListingPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        {/* Main Content */}
        <main>
          {/* Blog Posts */}
          {blogPosts.map((post) => (
            <article key={post.id} className="mb-12">
              <Image
                src={post.image}
                alt="Blog post image"
                width={800}
                height={400}
                className="mb-6 rounded-lg object-cover"
              />
              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{post.author}</span>
                <span>{post.date}</span>
                <span>{post.category}</span>
              </div>
              <h2 className="mb-4 text-2xl font-bold">
                {post.title}
              </h2>
              <p className="mb-4 text-muted-foreground">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="inline-block text-sm font-medium text-primary hover:underline"
              >
                Read more
              </Link>
            </article>
          ))}

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <Link
              href="/blog?page=1"
              className="flex h-8 w-8 items-center justify-center rounded bg-primary text-sm text-primary-foreground hover:bg-primary/90"
            >
              1
            </Link>
            <Link
              href="/blog?page=2"
              className="flex h-8 w-8 items-center justify-center rounded text-sm text-muted-foreground hover:bg-muted"
            >
              2
            </Link>
            <Link
              href="/blog?page=3"
              className="flex h-8 w-8 items-center justify-center rounded text-sm text-muted-foreground hover:bg-muted"
            >
              3
            </Link>
            <Link
              href="/blog?page=2"
              className="flex h-8 items-center justify-center rounded px-3 text-sm text-muted-foreground hover:bg-muted"
            >
              Next
            </Link>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Search */}
          <div>
            <Input type="search" placeholder="Search" className="w-full" />
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Categories</h3>
            <div className="space-y-2">
              {[
                { name: "Crafts", count: 2 },
                { name: "Design", count: 8 },
                { name: "Handmade", count: 7 },
                { name: "Interior", count: 1 },
                { name: "Wood", count: 6 }
              ].map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <Link
                    href={`/category/${category.name.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {category.name}
                  </Link>
                  <span className="text-sm text-muted-foreground">{category.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Recent Posts</h3>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="flex gap-4"
                >
                  <Image
                    src={post.image}
                    alt="Recent post thumbnail"
                    width={60}
                    height={60}
                    className="rounded object-cover"
                  />
                  <div>
                    <h4 className="font-medium">
                      {post.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}