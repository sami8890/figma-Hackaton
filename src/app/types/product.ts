export interface Product {
    id: string;
    name: string;
    price: number;
    rating: number;
    description: string;
    sizes: string[];
    colors: string[];
    sku: string;
    category: string;
    tags: string[];
    imageUrl: string;
}