// import React, { useState } from "react";
// import Image from "next/image";
// import { Product } from "@/app/types/product";

// interface ProductDetailProps {
//   product: Product;
// }

// const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
//   const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
//   const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]);
//   const [quantity, setQuantity] = useState<number>(1);

//   return (
//     <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
//       {/* Product Image */}
//       <div className="relative">
//         <Image
//           src={product.imageUrl}
//           alt={product.name}
//           layout="responsive"
//           width={600}
//           height={600}
//           className="rounded-lg"
//         />
//       </div>

//       {/* Product Details */}
//       <div className="space-y-4">
//         <h1 className="text-3xl font-bold">{product.name}</h1>

//         {/* Rating */}
//         <div className="flex items-center space-x-2">
//           <div className="flex text-yellow-500">
//             {[...Array(5)].map((_, index) => (
//               <svg
//                 key={index}
//                 className={`w-5 h-5 ${
//                   index < product.rating ? "fill-current" : "text-gray-300"
//                 }`}
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
//               </svg>
//             ))}
//           </div>
//           <span>({product.rating} Customer Reviews)</span>
//         </div>

//         {/* Price */}
//         <p className="text-2xl font-semibold text-gray-900">
//           Rs. {product.price.toLocaleString()}
//         </p>

//         {/* Description */}
//         <p className="text-gray-600">{product.description}</p>

//         {/* Size Selection */}
//         <div>
//           <h3 className="font-medium mb-2">Size</h3>
//           <div className="flex space-x-2">
//             {product.sizes.map((size) => (
//               <button
//                 key={size}
//                 className={`px-4 py-2 border rounded ${
//                   selectedSize === size
//                     ? "bg-black text-white"
//                     : "bg-white text-black"
//                 }`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Color Selection */}
//         <div>
//           <h3 className="font-medium mb-2">Color</h3>
//           <div className="flex space-x-2">
//             {product.colors.map((color) => (
//               <button
//                 key={color}
//                 className={`w-8 h-8 rounded-full border ${
//                   selectedColor === color
//                     ? "ring-2 ring-offset-2 ring-black"
//                     : ""
//                 }`}
//                 style={{ backgroundColor: color }}
//                 onClick={() => setSelectedColor(color)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Quantity and Actions */}
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center border rounded">
//             <button
//               className="px-3 py-2"
//               onClick={() => setQuantity(Math.max(1, quantity - 1))}
//             >
//               -
//             </button>
//             <span className="px-4">{quantity}</span>
//             <button
//               className="px-3 py-2"
//               onClick={() => setQuantity(quantity + 1)}
//             >
//               +
//             </button>
//           </div>
//           <button className="bg-black text-white px-6 py-2 rounded">
//             Add to Cart
//           </button>
//         </div>

//         {/* Additional Info */}
//         <div className="text-sm text-gray-600">
//           <p>SKU: {product.sku}</p>
//           <p>Category: {product.category}</p>
//           <p>Tags: {product.tags.join(", ")}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
