// app/blog/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";

// Define the type for a blog post
interface BlogPost {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    category: string;
    image: string;
}

// Mock data - in a real app, this would come from a database or API
const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Going all-in with millennial design",
        content: `Detailed content about millennial design trends...`,
        author: "Admin",
        date: "14 Oct 2022",
        category: "Design",
        image: "/blog/first-laptop.png"
    },
    {
        id: 2,
        title: "Exploring new ways of decorating",
        content: `Detailed content about innovative decorating approaches...`,
        author: "Admin",
        date: "14 Oct 2022",
        category: "Handmade",
        image: "/blog/second.png"
    },
    {
        id: 3,
        title: "Handmade pieces that took time to make",
        content: `Detailed content about handmade craftsmanship...`,
        author: "Admin",
        date: "14 Oct 2022",
        category: "Wood",
        image: "/blog/third.png"
    }
];

// Function to fetch a blog post by ID
function getBlogPost(id: number): BlogPost | undefined {
    return blogPosts.find(post => post.id === id);
}

// Dynamic route page component
export default function BlogPostPage({
    params
}: {
    params: { id: string }
}) {
    // Convert id to number and find the post
    const postId = parseInt(params.id);

    // Ensure the ID is valid
    if (isNaN(postId)) {
        notFound();  // Handle invalid ID by showing 404
    }

    const post = getBlogPost(postId);

    // If post not found, show 404
    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8 md:px-6">
            <article className="max-w-3xl mx-auto">
                {/* Hero Image */}
                <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-lg mb-8 object-cover"
                />

                {/* Post Metadata */}
                <div className="mb-6 text-muted-foreground">
                    <div className="flex items-center gap-4 text-sm">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.category}</span>
                    </div>
                </div>

                {/* Post Title */}
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    {post.title}
                </h1>

                {/* Post Content */}
                <div className="prose lg:prose-xl">
                    {post.content.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">
                            {paragraph.trim()}
                        </p>
                    ))}
                </div>
            </article>
        </div>
    );
}

// Generate static params for build-time static generation
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id.toString(),  // Ensure id is a string for dynamic routing
    }));
}
