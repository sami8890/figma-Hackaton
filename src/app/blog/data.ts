export const blogPosts = [
    {
        id: 1,
        title: "Going all-in with millennial design",
        excerpt: "Explore the latest trends in millennial-focused interior design and how they're shaping modern living spaces.",
        content: `
      Millennial design is all about creating spaces that are both functional and aesthetically pleasing. This design philosophy emphasizes:

      1. Minimalism: Clean lines and clutter-free spaces are key.
      2. Sustainability: Eco-friendly materials and energy-efficient appliances are must-haves.
      3. Flexibility: Multifunctional furniture and adaptable layouts cater to changing needs.
      4. Technology integration: Smart home features are seamlessly incorporated.
      5. Bold accents: Pops of color and unique decor pieces add personality.

      By embracing these elements, millennials are redefining what it means to have a stylish and practical living space. Whether it's a compact city apartment or a suburban home, the focus is on creating environments that reflect their values and lifestyle.
    `,
        date: "14 Oct 2022",
        author: "Alex Johnson",
        category: "Interior Design",
        image: "/blog/first-laptop.png",
        slug: "going-all-in-with-millennial-design"
    },
    {
        id: 2,
        title: "Exploring new ways of decorating",
        excerpt: "Discover innovative decorating techniques that can transform your living space without breaking the bank.",
        content: `
      Decorating your home doesn't have to be expensive or time-consuming. Here are some creative ways to refresh your space:

      1. Washi Tape Wonders: Use colorful washi tape to create geometric patterns on walls or furniture.
      2. Botanical Bliss: Bring the outdoors in with a variety of plants in unique containers.
      3. Upcycled Art: Transform everyday objects into statement pieces with a coat of paint or creative arrangement.
      4. Textile Takeover: Experiment with layering different textures and patterns in your textiles.
      5. Light it Up: Change the ambiance with creative lighting solutions, from string lights to DIY fixtures.

      Remember, the key to successful decorating is to let your personality shine through. Don't be afraid to mix styles and experiment with unconventional ideas.
    `,
        date: "14 Oct 2022",
        author: "Samantha Lee",
        category: "DIY",
        image: "/blog/second.png",
        slug: "exploring-new-ways-of-decorating"
    },
    {
        id: 3,
        title: "Handmade pieces that took time to make",
        excerpt: "Learn about the art of slow crafting and the value of handmade items in our fast-paced world.",
        content: `
      In an era of mass production, handmade items stand out for their uniqueness and the care put into their creation. Here's why handmade pieces are worth the wait:

      1. Quality Craftsmanship: Artisans pay attention to every detail, ensuring high-quality results.
      2. Sustainability: Many handmade items use locally sourced or eco-friendly materials.
      3. Uniqueness: Each piece is one-of-a-kind, adding character to your space.
      4. Supporting Artists: Buying handmade directly supports skilled craftspeople.
      5. Emotional Value: Handmade items often come with a story, creating a deeper connection.

      Popular handmade items for home decor include:
      - Hand-thrown pottery
      - Woven textiles
      - Custom furniture
      - Artisanal glassware
      - Hand-printed wallpaper

      By incorporating handmade pieces into your decor, you're not just decorating your space, but also celebrating the art of craftsmanship.
    `,
        date: "14 Oct 2022",
        author: "Michael Craft",
        category: "Artisanal",
        image: "/blog/third.png",
        slug: "handmade-pieces-that-took-time-to-make"
    }
];

export const recentPosts = blogPosts.slice(0, 4).map(post => ({
    id: post.id,
    title: post.title,
    date: post.date,
    image: post.image,
    slug: post.slug
}));

export const categories = [
    { name: "Interior Design", count: 1 },
    { name: "DIY", count: 1 },
    { name: "Artisanal", count: 1 },
    { name: "Sustainability", count: 0 },
    { name: "Modern Living", count: 0 }
];
