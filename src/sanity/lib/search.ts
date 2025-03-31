import { sanityFetch } from "@/sanity/lib/fetch"

export interface Product {
    _id: string
    title: string
    description: string
    price: number
    slug: string
    imageUrl: string
    discountPrice?: number
    isNew: boolean
    colors?: string[]
    tags?: string[]
    stock: number
    inStock: boolean
}

export const searchProducts = async (query: string): Promise<Product[]> => {
    if (!query) return []

    try {
        const results = await sanityFetch({
            query: `*[_type == "products" && title match $query]{
                _id,
                title,
                description,
                price,
                "slug": slug.current,
                "imageUrl": productImage.asset->url,
                discountPrice,
                isNew,
                colors,
                tags,
                stock,
                inStock
            }`,
            params: { query: query + "*" },
        }) as Product[]
        return results || []
    } catch (error) {
        console.error("Error searching products:", error)
        return []
    }
}