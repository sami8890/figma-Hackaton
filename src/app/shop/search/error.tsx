"use client";

import Link from "next/link";

export default function Error({ error }: { error: Error }) {
    return (
        <div className="text-center py-12">
            <h2 className="text-red-500 mb-4">Search failed: {error.message}</h2>
            <Link href="/shop" className="text-orange-500 hover:underline">
                Try Again
            </Link>
        </div>
    );
}