// // "use client";

// // import { useState } from "react";
// // import { notFound } from "next/navigation";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { Star, Minus, Plus, Facebook, Twitter, Instagram, Heart } from 'lucide-react';
// // import { useCart } from "@/app/context/cart-context";

// // import { Button } from "@/components/ui/button";
// // import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// // import { Label } from "@/components/ui/label";
// // import { toast } from "@/hooks/use-toast";
// // import { use } from "react";

// // const getProduct = (id: string) => {
// //   const products = [
// //     {
// //       id: "1",
// //       name: "Syltherine Stylish Chair",
// //       price: 150000,
// //       description:
// //         "A sleek and modern chair that combines comfort with cutting-edge design. Perfect for offices or living spaces, this chair enhances style while providing premium support.",
// //       rating: 4.7,
// //       reviews: 12,
// //       sku: "CH001",
// //       category: "Chairs",
// //       stock: 10,
// //       tags: ["Chair", "Stylish", "Office", "Home"],
// //       sizes: ["S", "M", "L"],
// //       colors: ["#FF5733", "#C70039", "#900C3F"],
// //       images: [
// //         "/add-to-cart/first.jpg",
// //         "/add-to-cart/second.jpg",
// //         "/add-to-cart/third.jpg",
// //         "/add-to-cart/fourth.jpg",
// //       ],
// //     },
// //     {
// //       id: "2",
// //       name: "Leviosa Stylish Sofa Chair",
// //       price: 200000,
// //       description:
// //         "Experience luxury and unmatched style with the Leviosa Sofa Chair. Its plush seating and  chic design elevate any room's ambiance effortlessly.",
// //       rating: 4.8,
// //       reviews: 18,
// //       sku: "SF002",
// //       category: "Sofas",
// //       tags: ["Sofa", "Chair", "Luxury", "Home"],
// //       sizes: ["M", "L", "XL"],
// //       colors: ["#6B71FF", "#1D1D1D", "#898989"],
// //       images: [
// //         "/add-to-cart/fifth.jpg",
// //         "/add-to-cart/sixth.jpg",
// //         "/add-to-cart/seventh.jpg",
// //         "/add-to-cart/eight.jpg",
// //       ],
// //     },
// //     {
// //       id: "3",
// //       name: "Lolito Modern Chair",
// //       price: 120000,
// //       description:
// //         "Compact yet comfortable, the Lolito chair is the ideal pick for minimalistic spaces. Crafted for durability and timeless elegance.",
// //       rating: 4.3,
// //       reviews: 8,
// //       sku: "CH003",
// //       category: "Chairs",
// //       tags: ["Chair", "Modern", "Minimalistic", "Durable"],
// //       sizes: ["S", "M"],
// //       colors: ["#FFA07A", "#A52A2A", "#DEB887"],
// //       images: [
// //         "/add-to-cart/ninth.jpg",
// //         "/add-to-cart/twelve.jpg",
// //         "/add-to-cart/thirteen.jpg",
// //         "/add-to-cart/fourteen.jpg",
// //       ],
// //     },
// //     {
// //       id: "4",
// //       name: "Respira Lounge Chair",
// //       price: 175000,
// //       description:
// //         "Relax and unwind in the Respira Lounge Chair, designed for maximum comfort and aesthetic appeal. Ideal for modern living spaces.",
// //       rating: 4.6,
// //       reviews: 14,
// //       sku: "CH004",
// //       category: "Chairs",
// //       tags: ["Lounge", "Chair", "Relax", "Home"],
// //       sizes: ["L", "XL"],
// //       colors: ["#8B0000", "#800080", "#FFD700"],
// //       images: [
// //         "/add-to-cart/fifteen.jpg",
// //         "/add-to-cart/sixteen.jpg",
// //         "/add-to-cart/seventeen.jpg",
// //       ],
// //     },
// //     {
// //       id: "5",
// //       name: "Grifa Premium Sofa",
// //       price: 300000,
// //       description:
// //         "Make a bold statement with the Grifa Premium Sofa. Its luxurious build and rich texture redefine comfort and elegance.",
// //       rating: 4.9,
// //       reviews: 22,
// //       sku: "SF005",
// //       category: "Sofas",
// //       tags: ["Sofa", "Premium", "Luxury", "Modern"],
// //       sizes: ["M", "L", "XL"],
// //       colors: ["#6B71FF", "#FF6347", "#2E8B57"],
// //       images: [
// //         "/add-to-cart/first.jpg",
// //         "/add-to-cart/second.jpg",
// //         "/add-to-cart/third.jpg",
// //         "/add-to-cart/fourth.jpg",
// //       ],
// //     },
// //     {
// //       id: "6",
// //       name: "Muggo Ottoman",
// //       price: 75000,
// //       description:
// //         "A compact and versatile ottoman, the Muggo is perfect for small spaces or as an additional seating option. A perfect blend of style and utility.",
// //       rating: 4.4,
// //       reviews: 10,
// //       sku: "OT006",
// //       category: "Ottomans",
// //       tags: ["Ottoman", "Compact", "Utility", "Stylish"],
// //       sizes: ["S", "M"],
// //       colors: ["#FFD700", "#DC143C", "#8A2BE2"],
// //       images: [
// //         "/add-to-cart/fifth.jpg",
// //         "/add-to-cart/sixth.jpg",
// //         "/add-to-cart/seventh.jpg",
// //         "/add-to-cart/eight.jpg",
// //       ],
// //     },
// //     {
// //       id: "7",
// //       name: "Pig Poug Bean Bag",
// //       price: 65000,
// //       description:
// //         "A playful yet functional bean bag, the Pig Poug provides unmatched comfort for kids and adults alike. A must-have for casual seating.",
// //       rating: 4.2,
// //       reviews: 7,
// //       sku: "BB007",
// //       category: "Bean Bags",
// //       tags: ["Bean Bag", "Comfort", "Casual", "Kids"],
// //       sizes: ["M", "L"],
// //       colors: ["#FFA07A", "#98FB98", "#FFD700"],
// //       images: [
// //         "/add-to-cart/ninth.jpg",
// //         "/add-to-cart/ten.jpg",
// //         "/add-to-cart/eleven.jpg",
// //         "/add-to-cart/twelve.jpg",
// //       ],
// //     },
// //     {
// //       id: "8",
// //       name: "Fleex Recliner",
// //       price: 225000,
// //       description:
// //         "Sink into ultimate relaxation with the Fleex Recliner. Its ergonomic design and premium build make it the centerpiece of any living room.",
// //       rating: 4.8,
// //       reviews: 19,
// //       sku: "RC008",
// //       category: "Recliners",
// //       tags: ["Recliner", "Comfort", "Luxury", "Ergonomic"],
// //       sizes: ["L", "XL"],
// //       colors: ["#6B71FF", "#B22222", "#4682B4"],
// //       images: [
// //         "/add-to-cart/first.jpg",
// //         "/add-to-cart/second.jpg",
// //         "/add-to-cart/third.jpg",
// //         "/add-to-cart/fourth.jpg",
// //       ],
// //     },
// //   ];

// //   const product = products.find((p) => p.id === id);
// //   if (!product) return null;
// //   return product;
// // };

// // const handleAddToWishlist = (product: any) => {
// //   toast({
// //     title: "Added to wishlist",
// //     description: `${product.name} has been added to your wishlist.`,
// //   });
// // };

// // export default function ProductPage({
// //   params: paramsPromise,
// // }: {
// //   params: Promise<{ id: string }>;
// // }) {
// //   const params = use(paramsPromise);
// //   const product = getProduct(params.id);
// //   const { addItem } = useCart();

// //   if (!product) {
// //     notFound();
// //   }

// //   const [quantity, setQuantity] = useState(1);
// //   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
// //   const [selectedColor, setSelectedColor] = useState(product.colors[0]);
// //   const [mainImage, setMainImage] = useState(product.images[0]);

// //   const handleQuantityChange = (amount: number) => {
// //     setQuantity((prev) => Math.max(1, prev + amount));
// //   };

// //   const handleAddToCart = () => {
// //     addItem({
// //       id: product.id,
// //       name: product.name,
// //       price: product.price,
// //       quantity: quantity,
// //       size: selectedSize,
// //       color: selectedColor,
// //       image: mainImage,
// //     });
// //   };

// //   const handleCompare = () => {
// //     toast({
// //       title: "Added to compare",
// //       description: `${product.name} has been added to your compare list.`,
// //     });
// //   };

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       {/* Breadcrumb */}
// //       <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
// //         <Link href="/" className="hover:text-primary">
// //           Home
// //         </Link>
// //         <span>/</span>
// //         <Link href="/shop" className="hover:text-primary">
// //           Shop
// //         </Link>
// //         <span>/</span>
// //         <span className="text-foreground">{product.name}</span>
// //       </nav>

// //       <div className="grid md:grid-cols-2 gap-8">
// //         {/* Product Images */}
// //         <div className="space-y-4">
// //           <div className="relative aspect-square">
// //             <Image
// //               src={mainImage}
// //               alt={product.name}
// //               fill
// //               className="object-cover rounded-lg"
// //               priority
// //             />
// //           </div>
// //           <div className="grid grid-cols-4 gap-4">
// //             {product.images.map((image, index) => (
// //               <div key={index} className="relative aspect-square">
// //                 <Image
// //                   src={image}
// //                   alt={`${product.name} thumbnail ${index + 1}`}
// //                   fill
// //                   className="object-cover rounded-lg cursor-pointer hover:opacity-75"
// //                   onClick={() => setMainImage(image)}
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Product Details */}
// //         <div className="space-y-6">
// //           <h1 className="text-3xl font-bold">{product.name}</h1>
// //           <div className="flex items-center space-x-2">
// //             <div className="flex">
// //               {[...Array(5)].map((_, i) => (
// //                 <Star
// //                   key={i}
// //                   className={`w-5 h-5 ${i < Math.floor(product.rating)
// //                       ? "fill-primary text-primary"
// //                       : "fill-muted text-muted-foreground"
// //                     }`}
// //                 />
// //               ))}
// //             </div>
// //             <span className="text-muted-foreground">
// //               ({product.reviews} Customer Reviews)
// //             </span>
// //           </div>
// //           <p className="text-2xl font-bold">
// //             Rs. {product.price.toLocaleString()}
// //           </p>
// //           <p className="text-muted-foreground">{product.description}</p>

// //           {/* Size Selection */}
// //           <div className="space-y-4">
// //             <Label className="text-base">Size</Label>
// //             <RadioGroup
// //               value={selectedSize}
// //               onValueChange={setSelectedSize}
// //               className="flex gap-4"
// //             >
// //               {product.sizes.map((size) => (
// //                 <Label
// //                   key={size}
// //                   className="flex items-center justify-center w-12 h-12 border rounded-md cursor-pointer [&:has(:checked)]:bg-primary [&:has(:checked)]:text-primary-foreground"
// //                 >
// //                   <RadioGroupItem value={size} className="sr-only" />
// //                   {size}
// //                 </Label>
// //               ))}
// //             </RadioGroup>
// //           </div>

// //           {/* Color Selection */}
// //           <div className="space-y-4">
// //             <Label className="text-base">Color</Label>
// //             <RadioGroup
// //               value={selectedColor}
// //               onValueChange={setSelectedColor}
// //               className="flex gap-4"
// //             >
// //               {product.colors.map((color) => (
// //                 <Label
// //                   key={color}
// //                   className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ring-offset-2 [&:has(:checked)]:ring-2 ring-primary"
// //                 >
// //                   <RadioGroupItem value={color} className="sr-only" />
// //                   <span
// //                     className="w-6 h-6 rounded-full"
// //                     style={{ backgroundColor: color }}
// //                   />
// //                 </Label>
// //               ))}
// //             </RadioGroup>
// //           </div>

// //           {/* Add to Cart Section */}
// //           <div className="flex items-center gap-4">
// //             <div className="flex items-center border rounded-md">
// //               <Button
// //                 variant="ghost"
// //                 size="icon"
// //                 onClick={() => handleQuantityChange(-1)}
// //                 disabled={quantity <= 1}
// //               >
// //                 <Minus className="h-4 w-4" />
// //               </Button>
// //               <span className="w-12 text-center">{quantity}</span>
// //               <Button
// //                 variant="ghost"
// //                 size="icon"
// //                 onClick={() => handleQuantityChange(1)}
// //               >
// //                 <Plus className="h-4 w-4" />
// //               </Button>
// //             </div>
// //             <Button size="lg" onClick={handleAddToCart}>
// //               Add to Cart
// //             </Button>
// //             <Button variant="outline" size="lg" onClick={handleCompare}>
// //               Compare
// //             </Button>
// //             <Button variant="outline" size="lg" onClick={() => handleAddToWishlist(product)}>
// //               <Heart className="w-4 h-4 mr-2" />
// //               Add to Wishlist
// //             </Button>
// //           </div>

// //           {/* Product Meta */}
// //           <div className="space-y-2 pt-4 border-t">
// //             <p className="text-sm">
// //               <span className="text-muted-foreground">SKU:</span> {product.sku}
// //             </p>
// //             <p className="text-sm">
// //               <span className="text-muted-foreground">Category:</span>{" "}
// //               {product.category}
// //             </p>
// //             <p className="text-sm">
// //               <span className="text-muted-foreground">Tags:</span>{" "}
// //               {product.tags.join(", ")}
// //             </p>
// //           </div>

// //           {/* Social Share */}
// //           <div className="flex items-center gap-4 pt-4 border-t">
// //             <span className="text-sm text-muted-foreground">Share:</span>
// //             <Link href="#" className="hover:text-primary">
// //               <Facebook className="w-5 h-5" />
// //             </Link>
// //             <Link href="#" className="hover:text-primary">
// //               <Twitter className="w-5 h-5" />
// //             </Link>
// //             <Link href="#" className="hover:text-primary">
// //               <Instagram className="w-5 h-5" />
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// //new design

//src/app/shop/[id]/page.tsx
// "use client";

// import { useState } from "react";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { Star, Minus, Plus } from "lucide-react";
// import { useCart } from "@/app/context/cart-context";
// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import { toast } from "@/hooks/use-toast";
// import { use } from "react";

// <style jsx global>{`
//   @layer utilities {
//     /* Hide scrollbar for Chrome, Safari and Opera */
//     .no-scrollbar::-webkit-scrollbar {
//       display: none;
//     }

//     /* Hide scrollbar for IE, Edge and Firefox */
//     .no-scrollbar {
//       -ms-overflow-style: none; /* IE and Edge */
//       scrollbar-width: none; /* Firefox */
//     }
//   }
// `}</style>;

// const getProduct = (id: string) => {
//   const products = [
//     {
//       id: "1",
//       name: "Syltherine Stylish Chair",
//       price: 150000,
//       description:
//         "A sleek and modern chair that combines comfort with cutting-edge design. Perfect for offices or living spaces, this chair enhances style while providing premium support.",
//       rating: 4.7,
//       reviews: 12,
//       sku: "CH001",
//       category: "Chairs",
//       stock: 10,
//       tags: ["Chair", "Stylish", "Office", "Home"],
//       sizes: ["S", "M", "L"],
//       colors: ["#FF5733", "#C70039", "#900C3F"],
//       images: [
//         "/add-to-cart/first.jpg",
//         "/add-to-cart/second.jpg",
//         "/add-to-cart/third.jpg",
//         "/add-to-cart/fourth.jpg",
//       ],
//     },
//     {
//       id: "2",
//       name: "Leviosa Stylish Sofa Chair",
//       price: 200000,
//       description:
//         "Experience luxury and unmatched style with the Leviosa Sofa Chair. Its plush seating and  chic design elevate any room's ambiance effortlessly.",
//       rating: 4.8,
//       reviews: 18,
//       sku: "SF002",
//       category: "Sofas",
//       tags: ["Sofa", "Chair", "Luxury", "Home"],
//       sizes: ["M", "L", "XL"],
//       colors: ["#6B71FF", "#1D1D1D", "#898989"],
//       images: [
//         "/add-to-cart/fifth.jpg",
//         "/add-to-cart/sixth.jpg",
//         "/add-to-cart/seventh.jpg",
//         "/add-to-cart/eight.jpg",
//       ],
//     },
//     {
//       id: "3",
//       name: "Lolito Modern Chair",
//       price: 120000,
//       description:
//         "Compact yet comfortable, the Lolito chair is the ideal pick for minimalistic spaces. Crafted for durability and timeless elegance.",
//       rating: 4.3,
//       reviews: 8,
//       sku: "CH003",
//       category: "Chairs",
//       tags: ["Chair", "Modern", "Minimalistic", "Durable"],
//       sizes: ["S", "M"],
//       colors: ["#FFA07A", "#A52A2A", "#DEB887"],
//       images: [
//         "/add-to-cart/ninth.jpg",
//         "/add-to-cart/twelve.jpg",
//         "/add-to-cart/thirteen.jpg",
//         "/add-to-cart/fourteen.jpg",
//       ],
//     },
//     {
//       id: "4",
//       name: "Respira Lounge Chair",
//       price: 175000,
//       description:
//         "Relax and unwind in the Respira Lounge Chair, designed for maximum comfort and aesthetic appeal. Ideal for modern living spaces.",
//       rating: 4.6,
//       reviews: 14,
//       sku: "CH004",
//       category: "Chairs",
//       tags: ["Lounge", "Chair", "Relax", "Home"],
//       sizes: ["L", "XL"],
//       colors: ["#8B0000", "#800080", "#FFD700"],
//       images: [
//         "/add-to-cart/fifteen.jpg",
//         "/add-to-cart/sixteen.jpg",
//         "/add-to-cart/seventeen.jpg",
//       ],
//     },
//     {
//       id: "5",
//       name: "Grifa Premium Sofa",
//       price: 300000,
//       description:
//         "Make a bold statement with the Grifa Premium Sofa. Its luxurious build and rich texture redefine comfort and elegance.",
//       rating: 4.9,
//       reviews: 22,
//       sku: "SF005",
//       category: "Sofas",
//       tags: ["Sofa", "Premium", "Luxury", "Modern"],
//       sizes: ["M", "L", "XL"],
//       colors: ["#6B71FF", "#FF6347", "#2E8B57"],
//       images: [
//         "/add-to-cart/first.jpg",
//         "/add-to-cart/second.jpg",
//         "/add-to-cart/third.jpg",
//         "/add-to-cart/fourth.jpg",
//       ],
//     },
//     {
//       id: "6",
//       name: "Muggo Ottoman",
//       price: 75000,
//       description:
//         "A compact and versatile ottoman, the Muggo is perfect for small spaces or as an additional seating option. A perfect blend of style and utility.",
//       rating: 4.4,
//       reviews: 10,
//       sku: "OT006",
//       category: "Ottomans",
//       tags: ["Ottoman", "Compact", "Utility", "Stylish"],
//       sizes: ["S", "M"],
//       colors: ["#FFD700", "#DC143C", "#8A2BE2"],
//       images: [
//         "/add-to-cart/fifth.jpg",
//         "/add-to-cart/sixth.jpg",
//         "/add-to-cart/seventh.jpg",
//         "/add-to-cart/eight.jpg",
//       ],
//     },
//     {
//       id: "7",
//       name: "Pig Poug Bean Bag",
//       price: 65000,
//       description:
//         "A playful yet functional bean bag, the Pig Poug provides unmatched comfort for kids and adults alike. A must-have for casual seating.",
//       rating: 4.2,
//       reviews: 7,
//       sku: "BB007",
//       category: "Bean Bags",
//       tags: ["Bean Bag", "Comfort", "Casual", "Kids"],
//       sizes: ["M", "L"],
//       colors: ["#FFA07A", "#98FB98", "#FFD700"],
//       images: [
//         "/add-to-cart/ninth.jpg",
//         "/add-to-cart/ten.jpg",
//         "/add-to-cart/eleven.jpg",
//         "/add-to-cart/twelve.jpg",
//       ],
//     },
//     {
//       id: "8",
//       name: "Fleex Recliner",
//       price: 225000,
//       description:
//         "Sink into ultimate relaxation with the Fleex Recliner. Its ergonomic design and premium build make it the centerpiece of any living room.",
//       rating: 4.8,
//       reviews: 19,
//       sku: "RC008",
//       category: "Recliners",
//       tags: ["Recliner", "Comfort", "Luxury", "Ergonomic"],
//       sizes: ["L", "XL"],
//       colors: ["#6B71FF", "#B22222", "#4682B4"],
//       images: [
//         "/add-to-cart/first.jpg",
//         "/add-to-cart/second.jpg",
//         "/add-to-cart/third.jpg",
//         "/add-to-cart/fourth.jpg",
//       ],
//     },
//   ];

//   const product = products.find((p) => p.id === id);
//   if (!product) return null;
//   return product;
// };

// export default function ProductPage({
//   params: paramsPromise,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const params = use(paramsPromise);
//   const product = getProduct(params.id);
//   const { addItem } = useCart();

//   if (!product) {
//     notFound();
//   }

//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("L");
//   const [selectedColor, setSelectedColor] = useState("#6B71FF");
//   const [mainImage, setMainImage] = useState(product.images[0]);
//   const [isAddingToCart, setIsAddingToCart] = useState(false);

//   const handleQuantityChange = (amount: number) => {
//     setQuantity((prev) => Math.max(1, prev + amount));
//   };

//   const handleAddToCart = async () => {
//     setIsAddingToCart(true);
//     try {
//       await addItem({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         quantity: quantity,
//         size: selectedSize,
//         color: selectedColor,
//         image: mainImage,
//       });
//       toast({
//         title: "Added to cart",
//         description: `${product.name} has been added to your cart.`,
//       });
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to add item to cart. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsAddingToCart(false);
//     }
//   };

//   const handleCompare = () => {
//     toast({
//       title: "Added to compare",
//       description: `${product.name} has been added to your compare list.`,
//     });
//   };

//   return (
//     <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 overflow-x-hidden">
//       <Head>
//         <title>{product.name} | Your Store Name</title>
//         <meta name="description" content={product.description.slice(0, 155)} />
//       </Head>
//       <Link
//         href="/shop"
//         className="inline-block mb-4 text-[#B88E2F] hover:underline"
//       >
//         ← Back to Shop
//       </Link>
//       <nav aria-label="Breadcrumb" className="mb-4">
//         <ol className="flex items-center space-x-2 text-sm text-[#9F9F9F]">
//           <li>
//             <Link href="/" className="hover:text-[#B88E2F]">
//               Home
//             </Link>
//           </li>
//           <li className="flex items-center space-x-2">
//             <span>/</span>
//             <Link href="/shop" className="hover:text-[#B88E2F]">
//               Shop
//             </Link>
//           </li>
//           <li className="flex items-center space-x-2">
//             <span>/</span>
//             <span className="text-[#B88E2F]">{product.name}</span>
//           </li>
//         </ol>
//       </nav>
//       <div className="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[120px_1fr_1fr] gap-4 lg:gap-8">
//         {/* Thumbnail Images - Hidden on mobile, shown as row, visible as column on desktop */}
//         <div className="order-2 lg:order-1 w-full overflow-x-auto lg:overflow-x-visible">
//           <div className="flex flex-row lg:flex-col gap-4 pb-4 lg:pb-0 no-scrollbar">
//             {product.images.map((image, index) => (
//               <div
//                 key={index}
//                 className="relative min-w-[100px] w-[100px] aspect-square bg-[#F9F1E7] rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
//                 onClick={() => setMainImage(image)}
//               >
//                 <Image
//                   src={image}
//                   alt={`${product.name} thumbnail ${index + 1}`}
//                   fill
//                   className="object-cover p-2"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Main Image */}
//         <div className="order-1 md:order-2 col-span-full md:col-span-1">
//           <div className="relative aspect-square bg-[#F9F1E7] rounded-lg overflow-hidden group">
//             <Image
//               src={mainImage}
//               alt={product.name}
//               fill
//               className="object-cover p-4 transition-transform duration-300 group-hover:scale-110"
//               priority
//               onError={(e) => {
//                 e.currentTarget.src = "/placeholder.svg";
//               }}
//             />
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="order-3 col-span-full lg:col-span-1 space-y-4 sm:space-y-6">
//           <h1 className="text-3xl lg:text-4xl font-medium text-[#3A3A3A]">
//             {product.name}
//           </h1>
//           <p className="text-xl lg:text-2xl text-[#3A3A3A]">
//             Rs. {product.price.toLocaleString()}
//           </p>
//           <p className="text-sm text-green-600">
//             {product.stock
//               ? `In Stock (${product.stock} available)`
//               : "Out of Stock"}
//           </p>

//           <div className="flex items-center gap-4">
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className={`w-4 lg:w-5 h-4 lg:h-5 ${
//                     i < Math.floor(product.rating)
//                       ? "fill-[#FFC700] text-[#FFC700]"
//                       : "fill-gray-200 text-gray-200"
//                   }`}
//                 />
//               ))}
//             </div>
//             <span className="text-sm lg:text-base text-[#9F9F9F]">
//               {product.reviews} Customer Review
//             </span>
//           </div>

//           <p className="text-sm lg:text-base text-[#9F9F9F] leading-relaxed">
//             {product.description}
//           </p>

//           <div className="space-y-6">
//             <div className="space-y-3">
//               <span className="text-sm lg:text-base text-[#9F9F9F]">Size</span>
//               <div className="flex gap-2">
//                 {["L", "XL", "XS"].map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`w-10 lg:w-12 h-10 lg:h-12 rounded border text-sm lg:text-base transition-colors ${
//                       selectedSize === size
//                         ? "bg-[#B88E2F] text-white border-[#B88E2F]"
//                         : "border-[#9F9F9F] text-[#9F9F9F] hover:border-[#B88E2F]"
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-3">
//               <span className="text-sm lg:text-base text-[#9F9F9F]">Color</span>
//               <div className="flex gap-2">
//                 {[
//                   { hex: "#6B71FF", name: "Blue" },
//                   { hex: "#000000", name: "Black" },
//                   { hex: "#B88E2F", name: "Gold" },
//                 ].map((color) => (
//                   <button
//                     key={color.hex}
//                     onClick={() => setSelectedColor(color.hex)}
//                     className={`w-8 h-8 rounded-full transition-all flex items-center justify-center ${
//                       selectedColor === color.hex
//                         ? "ring-2 ring-offset-2 ring-[#B88E2F]"
//                         : "hover:scale-110"
//                     }`}
//                     style={{ backgroundColor: color.hex }}
//                     aria-label={`Select ${color.name} color`}
//                     aria-pressed={selectedColor === color.hex}
//                   >
//                     {selectedColor === color.hex && (
//                       <span className="text-white text-xs">✓</span>
//                     )}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 pt-6">
//             <div className="flex items-center justify-between border border-[#9F9F9F] rounded w-24">
//               <button
//                 className="px-2 py-2"
//                 onClick={() => handleQuantityChange(-1)}
//                 disabled={quantity <= 1}
//                 aria-label="Decrease quantity"
//               >
//                 <Minus className="w-4 h-4" />
//               </button>
//               <span
//                 className="w-6 text-center"
//                 aria-label="Quantity"
//                 role="spinbutton"
//                 aria-valuemin={1}
//                 aria-valuemax={99}
//                 aria-valuenow={quantity}
//               >
//                 {quantity}
//               </span>
//               <button
//                 className="px-2 py-2"
//                 onClick={() => handleQuantityChange(1)}
//                 aria-label="Increase quantity"
//               >
//                 <Plus className="w-4 h-4" />
//               </button>
//             </div>
//             <div className="flex flex-1 gap-4">
//               <Button
//                 className="flex-1 bg-white text-black hover:bg-white hover:text-black px-4 py-3 text-sm sm:text-base border-black border-2 transition-colors duration-200"
//                 onClick={handleAddToCart}
//                 disabled={isAddingToCart}
//               >
//                 {isAddingToCart ? "Adding To Cart..." : "Add To Cart"}
//               </Button>
//               <Button
//                 variant="outline"
//                 className="flex-1 bg-[#ffffff] text-black px-4 py-3 text-sm sm:text-base border-[#000000] border"
//                 onClick={handleCompare}
//               >
//                 + Compare
//               </Button>
//             </div>
//           </div>

//           <div className="space-y-4 pt-6 border-t border-[#D9D9D9]">
//             <div className="flex gap-4">
//               <span className="text-sm lg:text-base text-[#9F9F9F] w-20 lg:w-24">
//                 SKU
//               </span>
//               <span className="text-sm lg:text-base">: SS001</span>
//             </div>
//             <div className="flex gap-4">
//               <span className="text-sm lg:text-base text-[#9F9F9F] w-20 lg:w-24">
//                 Category
//               </span>
//               <span className="text-sm lg:text-base">: Sofas</span>
//             </div>
//             <div className="flex gap-4">
//               <span className="text-sm lg:text-base text-[#9F9F9F] w-20 lg:w-24">
//                 Tags
//               </span>
//               <span className="text-sm lg:text-base">
//                 : Sofa, Chair, Home, Shop
//               </span>
//             </div>
//             <div className="flex gap-4">
//               <span className="text-sm lg:text-base text-[#9F9F9F] w-20 lg:w-24">
//                 Share
//               </span>
//               <div className="flex gap-4">
//                 {/* Facebook */}
//                 <Link
//                   href="#"
//                   className="text-[#9F9F9F] hover:text-[#B88E2F] transition-colors"
//                 >
//                   <svg
//                     className="w-5 h-5 lg:w-6 lg:h-6"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                   </svg>
//                 </Link>
//                 {/* Twitter */}
//                 <Link
//                   href="#"
//                   className="text-[#9F9F9F] hover:text-[#B88E2F] transition-colors"
//                 >
//                   <svg
//                     className="w-5 h-5 lg:w-6 lg:h-6"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                   </svg>
//                 </Link>
//                 {/* Instagram */}
//                 <Link
//                   href="#"
//                   className="text-[#9F9F9F] hover:text-[#B88E2F] transition-colors"
//                 >
//                   <svg
//                     className="w-5 h-5 lg:w-6 lg:h-6"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/app/shop/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, Minus, Plus } from "lucide-react";
import { useCart } from "@/app/context/cart-context";
import { toast } from "@/hooks/use-toast";
import { client } from "@/sanity/lib/client";
import { Button } from "@/components/ui/button";

// Define a type for the product
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  isNew?: boolean;
  slug: {
    current: string;
  };
  images: {
    url: string;
  }[];
  stock: number;
  rating: number;
  reviews: number;
  sku: string;
  category: string;
  tags: string[];
}

const fetchProduct = async (slug: string): Promise<Product | null> => {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    description,
    price,
    originalPrice,
    "image": image.asset->url,
    badge,
    isNew,
    slug,
    images[] {
      "url": asset->url
    },
    stock,
    rating,
    reviews,
    sku,
    category,
    tags
  }`;
  const product = await client.fetch(query, { slug });
  return product;
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("#6B71FF");
  const [mainImage, setMainImage] = useState("");
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProduct(params.id);
      if (!data) {
        notFound();
      }
      setProduct(data);
      setMainImage(data.image);
    };
    loadProduct();
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    try {
      addItem({
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        size: selectedSize,
        color: selectedColor,
        image: mainImage,
      });
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    } catch {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 overflow-x-hidden">
      <Link
        href="/shop"
        className="inline-block mb-4 text-[#B88E2F] hover:underline"
      >
        ← Back to Shop
      </Link>
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center space-x-2 text-sm text-[#9F9F9F]">
          <li>
            <Link href="/" className="hover:text-[#B88E2F]">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <span>/</span>
            <Link href="/shop" className="hover:text-[#B88E2F]">
              Shop
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <span>/</span>
            <span className="text-[#B88E2F]">{product.name}</span>
          </li>
        </ol>
      </nav>
      <div className="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[120px_1fr_1fr] gap-4 lg:gap-8">
        {/* Thumbnail Images */}
        <div className="order-2 lg:order-1 w-full overflow-x-auto lg:overflow-x-visible">
          <div className="flex flex-row lg:flex-col gap-4 pb-4 lg:pb-0 no-scrollbar">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="relative min-w-[100px] w-[100px] aspect-square bg-[#F9F1E7] rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setMainImage(image.url)}
              >
                <Image
                  src={image.url}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover p-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Image */}
        <div className="order-1 md:order-2 col-span-full md:col-span-1">
          <div className="relative aspect-square bg-[#F9F1E7] rounded-lg overflow-hidden group">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="object-cover p-4 transition-transform duration-300 group-hover:scale-110"
              priority
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="order-3 col-span-full lg:col-span-1 space-y-4 sm:space-y-6">
          <h1 className="text-3xl lg:text-4xl font-medium text-[#3A3A3A]">
            {product.name}
          </h1>
          <p className="text-xl lg:text-2xl text-[#3A3A3A]">
            Rs. {product.price.toLocaleString()}
          </p>
          <p className="text-sm text-green-600">
            {product.stock
              ? `In Stock (${product.stock} available)`
              : "Out of Stock"}
          </p>

          <div className="flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 lg:w-5 h-4 lg:h-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-[#FFC700] text-[#FFC700]"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm lg:text-base text-[#9F9F9F]">
              {product.reviews} Customer Review
            </span>
          </div>

          <p className="text-sm lg:text-base text-[#9F9F9F] leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-sm lg:text-base text-[#9F9F9F]">Size</span>
              <div className="flex gap-2">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 lg:w-12 h-10 lg:h-12 rounded border text-sm lg:text-base transition-colors ${
                      selectedSize === size
                        ? "bg-[#B88E2F] text-white border-[#B88E2F]"
                        : "border-[#9F9F9F] text-[#9F9F9F] hover:border-[#B88E2F]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-sm lg:text-base text-[#9F9F9F]">Color</span>
              <div className="flex gap-2">
                {[
                  { hex: "#6B71FF", name: "Blue" },
                  { hex: "#000000", name: "Black" },
                  { hex: "#B88E2F", name: "Gold" },
                ].map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => setSelectedColor(color.hex)}
                    className={`w-8 h-8 rounded-full transition-all flex items-center justify-center ${
                      selectedColor === color.hex
                        ? "ring-2 ring-offset-2 ring-[#B88E2F]"
                        : "hover:scale-110"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Select ${color.name} color`}
                    aria-pressed={selectedColor === color.hex}
                  >
                    {selectedColor === color.hex && (
                      <span className="text-white text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <div className="flex items-center justify-between border border-[#9F9F9F] rounded w-24">
              <button
                className="px-2 py-2"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span
                className="w-6 text-center"
                aria-label="Quantity"
                role="spinbutton"
                aria-valuemin={1}
                aria-valuemax={99}
                aria-valuenow={quantity}
              >
                {quantity}
              </span>
              <button
                className="px-2 py-2"
                onClick={() => setQuantity((prev) => Math.min(99, prev + 1))}
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-1 gap-4">
              <Button
                className="flex-1 bg-white text-black hover:bg-white hover:text-black px-4 py-3 text-sm sm:text-base border-black border-2 transition-colors duration-200"
                onClick={handleAddToCart}
                disabled={isAddingToCart}
              >
                {isAddingToCart ? "Adding To Cart..." : "Add To Cart"}
              </Button>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#D9D9D9]">
            <div className="flex gap-4">
              <span className="text-sm lg:text-base text-[#9F9F9F] w-20 lg:w-24">
                SKU
              </span>
              <span className="text-sm lg:text-base">: {product.sku}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-sm lg:text-base text-[#9F9F9F] w-20 lg:w-24">
                Category
              </span>
              <span className="text-sm lg:text-base">: {product.category}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-sm lg:text-base text-[#9F9F9F] w-20 lg:w-24">
                Tags
              </span>
              <span className="text-sm lg:text-base">
                : {product.tags.join(", ")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
