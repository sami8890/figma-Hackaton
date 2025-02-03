import Image from "next/image";
import { notFound } from "next/navigation";
import Banner from "@/components/main/banner";
import { blogPosts } from "../data";

interface BlogPostProps {
    params: Promise<{ slug: string }> | undefined;
}

export default async function BlogPost({ params }: BlogPostProps) {
    if (!params) {
        notFound();
    }

    const { slug } = await params;
    const post = blogPosts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <section>
            <Banner
                backgroundImage="/shop/image.png"
                logo="/navbar-logo.png"
                title={post.title}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                    { label: post.title },
                ]}
            />
            <div className="container mx-auto px-4 py-8 md:px-6">
                <article className="mx-auto max-w-3xl">
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
                    <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
                    <p className="mb-6 text-lg text-muted-foreground">{post.excerpt}</p>
                    <div className="prose prose-lg max-w-none">
                        {post.content.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </article>
            </div>
        </section>
    );
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

