//src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const allProducts = defineQuery(`
    *[_type == "productss"]
      { _id,
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
    inStock }
    `);

