// schemas/product.js
export default function Product() {
  return {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        name: "originalPrice",
        title: "Original Price",
        type: "number",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "badge",
        title: "Badge",
        type: "string",
      },
      {
        name: "isNew",
        title: "Is New",
        type: "boolean",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name",
          maxLength: 96,
        },
      },
      {
        name: "images",
        title: "Images",
        type: "array",
        of: [{ type: "image" }],
      },
      {
        name: "stock",
        title: "Stock",
        type: "number",
      },
      {
        name: "rating",
        title: "Rating",
        type: "number",
      },
      {
        name: "reviews",
        title: "Reviews",
        type: "number",
      },
      {
        name: "sku",
        title: "SKU",
        type: "string",
      },
      {
        name: "category",
        title: "Category",
        type: "string",
      },
      {
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ type: "string" }],
      },
    ],
  };
}
