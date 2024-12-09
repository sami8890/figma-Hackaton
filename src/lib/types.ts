export interface Post {
    slug: string
    title: string
    date: string
    category: string
    author: string
    image: string
    excerpt: string
    content: string
}

export interface Category {
    name: string
    count: number
}

export const posts: Post[] = [
    {
        slug: 'going-all-in-with-millennial-design',
        title: 'Going all-in with millennial design',
        date: '14 Oct 2022',
        category: 'Design',
        author: 'Admin',
        image: '/blog/post4.jpg',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
    },
    {
        slug: 'exploring-new-ways-of-decorating',
        title: 'Exploring new ways of decorating',
        date: '13 Oct 2022',
        category: 'Interior',
        author: 'Admin',
        image: '/blog/post1.jpg',
        excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        content: '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
    },
    {
        slug: 'handmade-pieces-that-took-time-to-make',
        title: 'Handmade pieces that took time to make',
        date: '14 Oct 2022',
        category: 'Handmade',
        author: 'Admin',
        image: '/blog/post2.jpg',
        excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        content: '<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>'
    }
]

export const categories: Category[] = [
    { name: 'Crafts', count: 2 },
    { name: 'Design', count: 8 },
    { name: 'Handmade', count: 7 },
    { name: 'Interior', count: 1 },
    { name: 'Wood', count: 8 },
]

