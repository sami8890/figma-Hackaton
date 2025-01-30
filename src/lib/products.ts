export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  reviews: number;
  sku: string;
  category: string;
  stock?: number;
  tags: string[];
  sizes: string[];
  colors: string[];
  images: string[];
};

export const products: Product[] = [
    {
        id: "1",
        name: "Syltherine Stylish Chair",
        price: 150000,
        description:
            "A sleek and modern chair that combines comfort with cutting-edge design. Perfect for offices or living spaces, this chair enhances style while providing premium support.",
        rating: 4.7,
        reviews: 12,
        sku: "CH001",
        category: "Chairs",
        stock: 10,
        tags: ["Chair", "Stylish", "Office", "Home"],
        sizes: ["S", "M", "L"],
        colors: ["#FF5733", "#C70039", "#900C3F"],
        images: [
            "/add-to-cart/first.jpg",
            "/add-to-cart/second.jpg",
            "/add-to-cart/third.jpg",
            "/add-to-cart/fourth.jpg",
        ],
    },
    {
        id: "2",
        name: "Leviosa Stylish Sofa Chair",
        price: 200000,
        description:
            "Experience luxury and unmatched style with the Leviosa Sofa Chair. Its plush seating and  chic design elevate any room's ambiance effortlessly.",
        rating: 4.8,
        reviews: 18,
        sku: "SF002",
        category: "Sofas",
        tags: ["Sofa", "Chair", "Luxury", "Home"],
        sizes: ["M", "L", "XL"],
        colors: ["#6B71FF", "#1D1D1D", "#898989"],
        images: [
            "/add-to-cart/fifth.jpg",
            "/add-to-cart/sixth.jpg",
            "/add-to-cart/seventh.jpg",
            "/add-to-cart/eight.jpg",
        ],
    },
    {
        id: "3",
        name: "Lolito Modern Chair",
        price: 120000,
        description:
            "Compact yet comfortable, the Lolito chair is the ideal pick for minimalistic spaces. Crafted for durability and timeless elegance.",
        rating: 4.3,
        reviews: 8,
        sku: "CH003",
        category: "Chairs",
        tags: ["Chair", "Modern", "Minimalistic", "Durable"],
        sizes: ["S", "M"],
        colors: ["#FFA07A", "#A52A2A", "#DEB887"],
        images: [
            "/add-to-cart/ninth.jpg",
            "/add-to-cart/twelve.jpg",
            "/add-to-cart/thirteen.jpg",
            "/add-to-cart/fourteen.jpg",
        ],
    },
    {
        id: "4",
        name: "Respira Lounge Chair",
        price: 175000,
        description:
            "Relax and unwind in the Respira Lounge Chair, designed for maximum comfort and aesthetic appeal. Ideal for modern living spaces.",
        rating: 4.6,
        reviews: 14,
        sku: "CH004",
        category: "Chairs",
        tags: ["Lounge", "Chair", "Relax", "Home"],
        sizes: ["L", "XL"],
        colors: ["#8B0000", "#800080", "#FFD700"],
        images: [
            "/add-to-cart/fifteen.jpg",
            "/add-to-cart/sixteen.jpg",
            "/add-to-cart/seventeen.jpg",
        ],
    },
    {
        id: "5",
        name: "Grifa Premium Sofa",
        price: 300000,
        description:
            "Make a bold statement with the Grifa Premium Sofa. Its luxurious build and rich texture redefine comfort and elegance.",
        rating: 4.9,
        reviews: 22,
        sku: "SF005",
        category: "Sofas",
        tags: ["Sofa", "Premium", "Luxury", "Modern"],
        sizes: ["M", "L", "XL"],
        colors: ["#6B71FF", "#FF6347", "#2E8B57"],
        images: [
            "/add-to-cart/first.jpg",
            "/add-to-cart/second.jpg",
            "/add-to-cart/third.jpg",
            "/add-to-cart/fourth.jpg",
        ],
    },
    {
        id: "6",
        name: "Muggo Ottoman",
        price: 75000,
        description:
            "A compact and versatile ottoman, the Muggo is perfect for small spaces or as an additional seating option. A perfect blend of style and utility.",
        rating: 4.4,
        reviews: 10,
        sku: "OT006",
        category: "Ottomans",
        tags: ["Ottoman", "Compact", "Utility", "Stylish"],
        sizes: ["S", "M"],
        colors: ["#FFD700", "#DC143C", "#8A2BE2"],
        images: [
            "/add-to-cart/fifth.jpg",
            "/add-to-cart/sixth.jpg",
            "/add-to-cart/seventh.jpg",
            "/add-to-cart/eight.jpg",
        ],
    },
    {
        id: "7",
        name: "Pig Poug Bean Bag",
        price: 65000,
        description:
            "A playful yet functional bean bag, the Pig Poug provides unmatched comfort for kids and adults alike. A must-have for casual seating.",
        rating: 4.2,
        reviews: 7,
        sku: "BB007",
        category: "Bean Bags",
        tags: ["Bean Bag", "Comfort", "Casual", "Kids"],
        sizes: ["M", "L"],
        colors: ["#FFA07A", "#98FB98", "#FFD700"],
        images: [
            "/add-to-cart/ninth.jpg",
            "/add-to-cart/ten.jpg",
            "/add-to-cart/eleven.jpg",
            "/add-to-cart/twelve.jpg",
        ],
    },
    {
        id: "8",
        name: "Fleex Recliner",
        price: 225000,
        description:
            "Sink into ultimate relaxation with the Fleex Recliner. Its ergonomic design and premium build make it the centerpiece of any living room.",
        rating: 4.8,
        reviews: 19,
        sku: "RC008",
        category: "Recliners",
        tags: ["Recliner", "Comfort", "Luxury", "Ergonomic"],
        sizes: ["L", "XL"],
        colors: ["#6B71FF", "#B22222", "#4682B4"],
        images: [
            "/add-to-cart/first.jpg",
            "/add-to-cart/second.jpg",
            "/add-to-cart/third.jpg",
            "/add-to-cart/fourth.jpg",
        ],
    },
];




let searchTimeout: NodeJS.Timeout;

export const getSuggestions = (query: string): Promise<string[]> => {
    return new Promise((resolve) => {
        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(() => {
            const lowerQuery = query.toLowerCase().trim();
            if (lowerQuery.length < 1) return resolve([]);

            const matches = products
                .filter(product =>
                    product.name.toLowerCase().includes(lowerQuery) ||
                    product.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
                )
                .map(product => product.name)
                .slice(0, 5);

            resolve(matches);
        }, 200);
    });
};

export const searchProducts = (query: string): Product[] => {
    const lowerQuery = query.toLowerCase();
    return products.filter(product =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
};