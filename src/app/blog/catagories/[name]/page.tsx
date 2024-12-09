import BlogList from '@/app/blog/blog-list'
import Sidebar from '@/app/blog/sidebar'
import { posts } from '@/lib/types'

const POSTS_PER_PAGE = 10

export default function CategoryPage({ params, searchParams }: {
    params: { name: string }
    searchParams: { page?: string }
}) {
    const page = Number(searchParams.page) || 1
    const categoryPosts = posts.filter(post => post.category.toLowerCase() === params.name.toLowerCase())

    const totalPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE)
    const startIndex = (page - 1) * POSTS_PER_PAGE
    const paginatedPosts = categoryPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_300px]">
                <div>
                    <h1 className="text-3xl font-bold mb-8">Category: {params.name}</h1>
                    <BlogList posts={paginatedPosts} currentPage={page} totalPages={totalPages} search="" />
                </div>
                <Sidebar />
            </div>
        </div>
    )
}

