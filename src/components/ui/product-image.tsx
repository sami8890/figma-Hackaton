"use client"

import Image from "next/image"
import { useState } from "react"

interface ProductImageProps {
    src: string
    alt: string
}

export default function ProductImage({ src, alt }: ProductImageProps) {
    const [imageSrc, setImageSrc] = useState(src)

    return (
        <Image
            src={imageSrc || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-cover p-4 transition-transform duration-300 group-hover:scale-110"
            priority
            onError={() => setImageSrc("/placeholder.svg")}
        />
    )
}

