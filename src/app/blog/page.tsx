import Image from "next/image";
import { Input } from "@/components/ui/input";
import Banner from "@/components/ui/banner";

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
        {/* banner section */}

        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <main>
            {/* Blog Post 1 */}
            <article className="mb-12">
              <Image
                src="/blog/first-laptop.png"
                alt="Blog post image"
                width={800}
                height={400}
                className="mb-6 rounded-lg object-cover"
              />
              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span>Admin</span>
                <span>14 Oct 2022</span>
                <span>Wood</span>
              </div>
              <h2 className="mb-4 text-2xl font-bold">
                Going all-in with millennial design
              </h2>
              <p className="mb-4 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in.
              </p>
              <a
                href="#"
                className="inline-block text-sm font-medium text-primary hover:underline"
              >
                Read more
              </a>
            </article>

            {/* Blog Post 2 */}
            <article className="mb-12">
              <Image
                src="/blog/second.png"
                alt="Blog post image"
                width={800}
                height={400}
                className="mb-6 rounded-lg object-cover"
              />
              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span>Admin</span>
                <span>14 Oct 2022</span>
                <span>Handmade</span>
              </div>
              <h2 className="mb-4 text-2xl font-bold">
                Exploring new ways of decorating
              </h2>
              <p className="mb-4 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in.
              </p>
              <a
                href="#"
                className="inline-block text-sm font-medium text-primary hover:underline"
              >
                Read more
              </a>
            </article>

            {/* Blog Post 3 */}
            <article className="mb-12">
              <Image
                src="/blog/third.png"
                alt="Blog post image"
                width={800}
                height={400}
                className="mb-6 rounded-lg object-cover"
              />
              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span>Admin</span>
                <span>14 Oct 2022</span>
                <span>Wood</span>
              </div>
              <h2 className="mb-4 text-2xl font-bold">
                Handmade pieces that took time to make
              </h2>
              <p className="mb-4 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in.
              </p>
              <a
                href="#"
                className="inline-block text-sm font-medium text-primary hover:underline"
              >
                Read more
              </a>
            </article>

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
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Crafts
                  </a>
                  <span className="text-sm text-muted-foreground">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Design
                  </a>
                  <span className="text-sm text-muted-foreground">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Handmade
                  </a>
                  <span className="text-sm text-muted-foreground">7</span>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Interior
                  </a>
                  <span className="text-sm text-muted-foreground">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Wood
                  </a>
                  <span className="text-sm text-muted-foreground">6</span>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Recent Posts</h3>
              <div className="space-y-4">
                <a href="#" className="flex gap-4">
                  <Image
                    src="/blog/recent-post1.png"
                    alt="Recent post thumbnail"
                    width={60}
                    height={60}
                    className="rounded object-cover"
                  />
                  <div>
                    <h4 className="font-medium">
                      Going all-in with millennial design
                    </h4>
                    <p className="text-sm text-muted-foreground">03 Aug 2022</p>
                  </div>
                </a>
                <a href="#" className="flex gap-4">
                  <Image
                    src="/blog/recent-post2.png"
                    alt="Recent post thumbnail"
                    width={60}
                    height={60}
                    className="rounded object-cover"
                  />
                  <div>
                    <h4 className="font-medium">
                      Exploring new ways of decorating
                    </h4>
                    <p className="text-sm text-muted-foreground">03 Aug 2022</p>
                  </div>
                </a>
                <a href="#" className="flex gap-4">
                  <Image
                    src="/blog/recent-post3.png"
                    alt="Recent post thumbnail"
                    width={60}
                    height={60}
                    className="rounded object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Modern home in Milan</h4>
                    <p className="text-sm text-muted-foreground">03 Aug 2022</p>
                  </div>
                </a>
                <a href="#" className="flex gap-4">
                  <Image
                    src="/blog/recent-post4.png"
                    alt="Recent post thumbnail"
                    width={60}
                    height={60}
                    className="rounded object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Colorful office redesign</h4>
                    <p className="text-sm text-muted-foreground">03 Aug 2022</p>
                  </div>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
