import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 8 },
  ];

  const recentPosts = [
    {
      title: "Going all-in with millennial design",
      date: "03 Aug 2023",
      image: "/blog/recent-post3.png",
    },
    {
      title: "Exploring new ways of decorating",
      date: "03 Aug 2023",
      image: "/blog/recent-post4.png",
    },
    {
      title: "Modern home in Milan",
      date: "23 Aug 2023",
      image: "/blog/recent-post2.png",
    },
    {
      title: "Colorful office redesign",
      date: "17 Aug 2023",
      image: "/blog/recent-post1.png",
    },
  ];

  const posts = [
    {
      title: "Going all-in with millennial design",
      date: "14 Oct 2022",
      category: "Wood",
      author: "Admin",
      image: "/blog/laptop.png",
    },
    {
      title: "Exploring new ways of decorating",
      date: "13 Oct 2022",
      category: "Handmade",
      author: "Admin",
      image: "/blog/post1.jpg",
    },
    {
      title: "Handmade pieces that took time to make",
      date: "14 Oct 2022",
      category: "Wood",
      author: "Admin",
      image: "/blog/post2.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
        
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_300px]">
        <main className="space-y-8">
          {posts.map((post, index) => (
            <article key={index} className="space-y-4">
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
                  <Link href="#" className="text-primary hover:underline">
                    {post.category}
                  </Link>
                </div>
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <Link
                  href="#"
                  className="inline-block text-sm font-medium text-primary hover:underline"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
          <div className="flex items-center justify-center gap-2 pt-4">
            <Badge variant="secondary" className="h-8 w-8 justify-center">
              1
            </Badge>
            <Badge variant="outline" className="h-8 w-8 justify-center">
              2
            </Badge>
            <Badge variant="outline" className="h-8 w-8 justify-center">
              3
            </Badge>
            <Link
              href="#"
              className="text-sm font-medium text-primary hover:underline"
            >
              Next
            </Link>
          </div>
        </main>
        <aside className="space-y-8">
          <div className="space-y-4">
            <Input type="search" placeholder="Search" className="w-full" />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href="#"
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
              {recentPosts.map((post, index) => (
                <Link
                  key={index}
                  href="#"
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
      </div>
    </div>
  );
}
