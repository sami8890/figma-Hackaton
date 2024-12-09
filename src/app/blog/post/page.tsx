import BlogList from '@/app/blog/blog-list'
import Sidebar from '@/app/blog/sidebar'
import { posts } from '@/lib/types'

const POSTS_PER_PAGE = 10

export default function Home({ searchParams }: { searchParams: { page?: string, search?: string } }) {
    const page = Number(searchParams.page) || 1
    const search = searchParams.search || ''

    let filteredPosts = posts
    if (search) {
        filteredPosts = posts.filter(post =>
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(search.toLowerCase())
        )
    }

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
    const startIndex = (page - 1) * POSTS_PER_PAGE
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_300px]">
                <BlogList posts={paginatedPosts} currentPage={page} totalPages={totalPages} search={search} />
                <Sidebar />
            </div>
        </div>
    )
}

