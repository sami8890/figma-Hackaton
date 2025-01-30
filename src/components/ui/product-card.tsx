// components/ProductCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

const HighlightText = ({ text, highlight }: { text: string; highlight?: string }) => {
    if (!highlight) return <>{text}</>;

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
        <>
            {parts.map((part, i) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <span key={i} className="bg-yellow-200">
                        {part}
                    </span>
                ) : (
                    part
                )
            )}
        </>
    );
};

export function ProductCard({ product, highlight }: { product: Product; highlight?: string }) {
    return (
        <div className="group relative border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <Link
                href={`/shop/${product.id}`}
                className="block overflow-hidden"
            >
                <div className="relative aspect-square bg-gray-100">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-opacity group-hover:opacity-90"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
                <div className="p-4">
                    <h3 className="font-medium text-lg mb-1">
                        <HighlightText text={product.name} highlight={highlight} />
                    </h3>
                    <p className="text-gray-500 mb-2 line-clamp-2 text-sm">
                        <HighlightText text={product.description} highlight={highlight} />
                    </p>
                    <p className="text-lg font-semibold">
                        Rs. {product.price.toLocaleString()}
                    </p>
                </div>
            </Link>
        </div>
    );
}