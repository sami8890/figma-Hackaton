import { ProductCard } from "@/components/ui/product-card";
import { searchProducts } from "@/lib/products";
import Link from "next/link";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = decodeURIComponent(params.q || "");
  const results = searchProducts(query);

  return (
    <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Search Results for &rdquo;{query}&rdquo;</h1>

      {results.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">
            No products found matching your search.
          </p>
          <Link href="/shop" className="text-orange-500 hover:underline">
            Browse all products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} highlight={query} />
          ))}
        </div>
      )}
    </div>
  );
}
