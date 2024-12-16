import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Banner from "@/components/ui/banner";
import { blogPosts, recentPosts, categories } from "./data";

export default function BlogListing() {
  return (
    <section>
      <Banner
        backgroundImage="/shop/image.png"
        logo="/navbar-logo.png"
        title="Blog"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <main>
            {blogPosts.map((post) => (
              <article key={post.id} className="mb-12">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="mb-6 rounded-lg object-cover"
                />
                <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                  <span>{post.category}</span>
                </div>
                <h2 className="mb-4 text-2xl font-bold">{post.title}</h2>
                <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-sm font-medium text-primary hover:underline"
                >
                  Read more
                </Link>
              </article>
            ))}

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded bg-primary text-sm text-primary-foreground hover:bg-primary/90"
              >
                1
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded text-sm text-muted-foreground hover:bg-muted"
              >
                2
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded text-sm text-muted-foreground hover:bg-muted"
              >
                3
              </a>
              <a
                href="#"
                className="flex h-8 items-center justify-center rounded px-3 text-sm text-muted-foreground hover:bg-muted"
              >
                Next
              </a>
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
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {category.name}
                    </a>
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
                  <a key={post.id} href="#" className="flex gap-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={60}
                      height={60}
                      className="rounded object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{post.title}</h4>
                      <p className="text-sm text-muted-foreground">{post.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

