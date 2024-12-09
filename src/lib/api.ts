import { Post, Category } from '@/lib/types'

// This is a mock API. In a real application, you would fetch data from a database or external API.
const posts: Post[] = [
    {
        slug: 'going-all-in-with-millennial-design',
        title: 'Going all-in with millennial design',
        date: '14 Oct 2022',
        category: 'Design',
        author: 'Admin',
        image: '/blog/post3.jpg',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>'
    },
    // Add more mock posts here...
]
const categories: Category[] = [
    { name: 'Crafts', count: 2 },
    { name: 'Design', count: 8 },
    { name: 'Handmade', count: 7 },
    { name: 'Interior', count: 1 },
    { name: 'Wood', count: 8 },
]

const POSTS_PER_PAGE = 10

export async function getPosts(page: number, search: string): Promise<{ posts: Post[], totalPages: number }> {
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

    return { posts: paginatedPosts, totalPages }
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
    return posts.find(post => post.slug === slug)
}

export async function getPostsByCategory(category: string, page: number): Promise<{ posts: Post[], totalPages: number }> {
    const categoryPosts = posts.filter(post => post.category.toLowerCase() === category.toLowerCase())
    const totalPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE)
    const startIndex = (page - 1) * POSTS_PER_PAGE
    const paginatedPosts = categoryPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

    return { posts: paginatedPosts, totalPages }
}

export async function getCategories(): Promise<Category[]> {
    return categories
}

export async function getRecentPosts(): Promise<Post[]> {
    return posts.slice(0, 4)
}


