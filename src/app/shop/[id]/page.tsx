// // src/app/shop/[id]/page.tsx
// "use client";

// import { useState } from "react";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { Star, Minus, Plus, Facebook, Twitter, Instagram } from "lucide-react";
// // import gsap from 'gsap'

// import { Button } from "@/components/ui/button";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
// import { toast } from "@/hooks/use-toast";
// import { use } from "react";

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
//         "Experience luxury and unmatched style with the Leviosa Sofa Chair. Its plush seating and chic design elevate any room's ambiance effortlessly.",
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

//   if (!product) {
//     notFound();
//   }

//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
//   const [selectedColor, setSelectedColor] = useState(product.colors[0]);
//   const [mainImage, setMainImage] = useState(product.images[0]);

//   const handleQuantityChange = (amount: number) => {
//     setQuantity((prev) => Math.max(1, prev + amount));
//   };

//   const handleCompare = () => {
//     toast({
//       title: "Added to compare",
//       description: `${product.name} has been added to your compare list.`,
//     });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Breadcrumb */}
//       <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
//         <Link href="/" className="hover:text-primary">
//           Home
//         </Link>
//         <span>/</span>
//         <Link href="/shop" className="hover:text-primary">
//           Shop
//         </Link>
//         <span>/</span>
//         <span className="text-foreground">{product.name}</span>
//       </nav>

//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Product Images */}
//         <div className="space-y-4">
//           <div className="relative aspect-square">
//             <Image
//               src={mainImage}
//               alt={product.name}
//               fill
//               className="object-cover rounded-lg"
//               priority
//             />
//           </div>
//           <div className="grid grid-cols-4 gap-4">
//             {product.images.map((image, index) => (
//               <div key={index} className="relative aspect-square">
//                 <Image
//                   src={image}
//                   alt={`${product.name} thumbnail ${index + 1}`}
//                   fill
//                   className="object-cover rounded-lg cursor-pointer hover:opacity-75"
//                   onClick={() => setMainImage(image)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="space-y-6">
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <div className="flex items-center space-x-2">
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className={`w-5 h-5 ${
//                     i < Math.floor(product.rating)
//                       ? "fill-primary text-primary"
//                       : "fill-muted text-muted-foreground"
//                   }`}
//                 />
//               ))}
//             </div>
//             <span className="text-muted-foreground">
//               ({product.reviews} Customer Reviews)
//             </span>
//           </div>
//           <p className="text-2xl font-bold">
//             Rs. {product.price.toLocaleString()}
//           </p>
//           <p className="text-muted-foreground">{product.description}</p>

//           {/* Size Selection */}
//           <div className="space-y-4">
//             <Label className="text-base">Size</Label>
//             <RadioGroup
//               value={selectedSize}
//               onValueChange={setSelectedSize}
//               className="flex gap-4"
//             >
//               {product.sizes.map((size) => (
//                 <Label
//                   key={size}
//                   className="flex items-center justify-center w-12 h-12 border rounded-md cursor-pointer [&:has(:checked)]:bg-primary [&:has(:checked)]:text-primary-foreground"
//                 >
//                   <RadioGroupItem value={size} className="sr-only" />
//                   {size}
//                 </Label>
//               ))}
//             </RadioGroup>
//           </div>

//           {/* Color Selection */}
//           <div className="space-y-4">
//             <Label className="text-base">Color</Label>
//             <RadioGroup
//               value={selectedColor}
//               onValueChange={setSelectedColor}
//               className="flex gap-4"
//             >
//               {product.colors.map((color) => (
//                 <Label
//                   key={color}
//                   className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ring-offset-2 [&:has(:checked)]:ring-2 ring-primary"
//                 >
//                   <RadioGroupItem value={color} className="sr-only" />
//                   <span
//                     className="w-6 h-6 rounded-full"
//                     style={{ backgroundColor: color }}
//                   />
//                 </Label>
//               ))}
//             </RadioGroup>
//           </div>

//           {/* Add to Cart Section */}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center border rounded-md">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => handleQuantityChange(-1)}
//                 disabled={quantity <= 1}
//               >
//                 <Minus className="h-4 w-4" />
//               </Button>
//               <span className="w-12 text-center">{quantity}</span>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => handleQuantityChange(1)}
//               >
//                 <Plus className="h-4 w-4" />
//               </Button>
//             </div>
//             <Link href="/shop/checkout">
//               <Button>Add to Cart</Button>
//             </Link>
//             <Button variant="outline" size="lg" onClick={handleCompare}>
//               Compare
//             </Button>
//           </div>

//           {/* Product Meta */}
//           <div className="space-y-2 pt-4 border-t">
//             <p className="text-sm">
//               <span className="text-muted-foreground">SKU:</span> {product.sku}
//             </p>
//             <p className="text-sm">
//               <span className="text-muted-foreground">Category:</span>{" "}
//               {product.category}
//             </p>
//             <p className="text-sm">
//               <span className="text-muted-foreground">Tags:</span>{" "}
//               {product.tags.join(", ")}
//             </p>
//           </div>

//           {/* Social Share */}
//           <div className="flex items-center gap-4 pt-4 border-t">
//             <span className="text-sm text-muted-foreground">Share:</span>
//             <Link href="#" className="hover:text-primary">
//               <Facebook className="w-5 h-5" />
//             </Link>
//             <Link href="#" className="hover:text-primary">
//               <Twitter className="w-5 h-5" />
//             </Link>
//             <Link href="#" className="hover:text-primary">
//               <Instagram className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, Minus, Plus, Facebook, Twitter, Instagram } from "lucide-react";
import { useCart } from "@/app/context/cart-context";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { use } from "react";

const getProduct = (id: string) => {
  const products = [
    {
      id: "1",
      name: "Syltherine Stylish Chair",
      price: 150000,
      description:
        "A sleek and modern chair that combines comfort with cutting-edge design. Perfect for offices or living spaces, this chair enhances style while providing premium support.",
      rating: 4.7,
      reviews: 12,
      sku: "CH001",
      category: "Chairs",
      stock: 10,
      tags: ["Chair", "Stylish", "Office", "Home"],
      sizes: ["S", "M", "L"],
      colors: ["#FF5733", "#C70039", "#900C3F"],
      images: [
        "/add-to-cart/first.jpg",
        "/add-to-cart/second.jpg",
        "/add-to-cart/third.jpg",
        "/add-to-cart/fourth.jpg",
      ],
    },
    {
      id: "2",
      name: "Leviosa Stylish Sofa Chair",
      price: 200000,
      description:
        "Experience luxury and unmatched style with the Leviosa Sofa Chair. Its plush seating and chic design elevate any room's ambiance effortlessly.",
      rating: 4.8,
      reviews: 18,
      sku: "SF002",
      category: "Sofas",
      tags: ["Sofa", "Chair", "Luxury", "Home"],
      sizes: ["M", "L", "XL"],
      colors: ["#6B71FF", "#1D1D1D", "#898989"],
      images: [
        "/add-to-cart/fifth.jpg",
        "/add-to-cart/sixth.jpg",
        "/add-to-cart/seventh.jpg",
        "/add-to-cart/eight.jpg",
      ],
    },
    {
      id: "3",
      name: "Lolito Modern Chair",
      price: 120000,
      description:
        "Compact yet comfortable, the Lolito chair is the ideal pick for minimalistic spaces. Crafted for durability and timeless elegance.",
      rating: 4.3,
      reviews: 8,
      sku: "CH003",
      category: "Chairs",
      tags: ["Chair", "Modern", "Minimalistic", "Durable"],
      sizes: ["S", "M"],
      colors: ["#FFA07A", "#A52A2A", "#DEB887"],
      images: [
        "/add-to-cart/ninth.jpg",
        "/add-to-cart/twelve.jpg",
        "/add-to-cart/thirteen.jpg",
        "/add-to-cart/fourteen.jpg",
      ],
    },
    {
      id: "4",
      name: "Respira Lounge Chair",
      price: 175000,
      description:
        "Relax and unwind in the Respira Lounge Chair, designed for maximum comfort and aesthetic appeal. Ideal for modern living spaces.",
      rating: 4.6,
      reviews: 14,
      sku: "CH004",
      category: "Chairs",
      tags: ["Lounge", "Chair", "Relax", "Home"],
      sizes: ["L", "XL"],
      colors: ["#8B0000", "#800080", "#FFD700"],
      images: [
        "/add-to-cart/fifteen.jpg",
        "/add-to-cart/sixteen.jpg",
        "/add-to-cart/seventeen.jpg",
      ],
    },
    {
      id: "5",
      name: "Grifa Premium Sofa",
      price: 300000,
      description:
        "Make a bold statement with the Grifa Premium Sofa. Its luxurious build and rich texture redefine comfort and elegance.",
      rating: 4.9,
      reviews: 22,
      sku: "SF005",
      category: "Sofas",
      tags: ["Sofa", "Premium", "Luxury", "Modern"],
      sizes: ["M", "L", "XL"],
      colors: ["#6B71FF", "#FF6347", "#2E8B57"],
      images: [
        "/add-to-cart/first.jpg",
        "/add-to-cart/second.jpg",
        "/add-to-cart/third.jpg",
        "/add-to-cart/fourth.jpg",
      ],
    },
    {
      id: "6",
      name: "Muggo Ottoman",
      price: 75000,
      description:
        "A compact and versatile ottoman, the Muggo is perfect for small spaces or as an additional seating option. A perfect blend of style and utility.",
      rating: 4.4,
      reviews: 10,
      sku: "OT006",
      category: "Ottomans",
      tags: ["Ottoman", "Compact", "Utility", "Stylish"],
      sizes: ["S", "M"],
      colors: ["#FFD700", "#DC143C", "#8A2BE2"],
      images: [
        "/add-to-cart/fifth.jpg",
        "/add-to-cart/sixth.jpg",
        "/add-to-cart/seventh.jpg",
        "/add-to-cart/eight.jpg",
      ],
    },
    {
      id: "7",
      name: "Pig Poug Bean Bag",
      price: 65000,
      description:
        "A playful yet functional bean bag, the Pig Poug provides unmatched comfort for kids and adults alike. A must-have for casual seating.",
      rating: 4.2,
      reviews: 7,
      sku: "BB007",
      category: "Bean Bags",
      tags: ["Bean Bag", "Comfort", "Casual", "Kids"],
      sizes: ["M", "L"],
      colors: ["#FFA07A", "#98FB98", "#FFD700"],
      images: [
        "/add-to-cart/ninth.jpg",
        "/add-to-cart/ten.jpg",
        "/add-to-cart/eleven.jpg",
        "/add-to-cart/twelve.jpg",
      ],
    },
    {
      id: "8",
      name: "Fleex Recliner",
      price: 225000,
      description:
        "Sink into ultimate relaxation with the Fleex Recliner. Its ergonomic design and premium build make it the centerpiece of any living room.",
      rating: 4.8,
      reviews: 19,
      sku: "RC008",
      category: "Recliners",
      tags: ["Recliner", "Comfort", "Luxury", "Ergonomic"],
      sizes: ["L", "XL"],
      colors: ["#6B71FF", "#B22222", "#4682B4"],
      images: [
        "/add-to-cart/first.jpg",
        "/add-to-cart/second.jpg",
        "/add-to-cart/third.jpg",
        "/add-to-cart/fourth.jpg",
      ],
    },
  ];

  const product = products.find((p) => p.id === id);
  if (!product) return null;
  return product;
};

export default function ProductPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = use(paramsPromise);
  const product = getProduct(params.id);
  const { addItem } = useCart();

  if (!product) {
    notFound();
  }

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [mainImage, setMainImage] = useState(product.images[0]);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      size: selectedSize,
      color: selectedColor,
      image: mainImage,
    });
  };

  const handleCompare = () => {
    toast({
      title: "Added to compare",
      description: `${product.name} has been added to your compare list.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-primary">
          Shop
        </Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover rounded-lg cursor-pointer hover:opacity-75"
                  onClick={() => setMainImage(image)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-primary text-primary"
                      : "fill-muted text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-muted-foreground">
              ({product.reviews} Customer Reviews)
            </span>
          </div>
          <p className="text-2xl font-bold">
            Rs. {product.price.toLocaleString()}
          </p>
          <p className="text-muted-foreground">{product.description}</p>

          {/* Size Selection */}
          <div className="space-y-4">
            <Label className="text-base">Size</Label>
            <RadioGroup
              value={selectedSize}
              onValueChange={setSelectedSize}
              className="flex gap-4"
            >
              {product.sizes.map((size) => (
                <Label
                  key={size}
                  className="flex items-center justify-center w-12 h-12 border rounded-md cursor-pointer [&:has(:checked)]:bg-primary [&:has(:checked)]:text-primary-foreground"
                >
                  <RadioGroupItem value={size} className="sr-only" />
                  {size}
                </Label>
              ))}
            </RadioGroup>
          </div>

          {/* Color Selection */}
          <div className="space-y-4">
            <Label className="text-base">Color</Label>
            <RadioGroup
              value={selectedColor}
              onValueChange={setSelectedColor}
              className="flex gap-4"
            >
              {product.colors.map((color) => (
                <Label
                  key={color}
                  className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ring-offset-2 [&:has(:checked)]:ring-2 ring-primary"
                >
                  <RadioGroupItem value={color} className="sr-only" />
                  <span
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </Label>
              ))}
            </RadioGroup>
          </div>

          {/* Add to Cart Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleQuantityChange(1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button size="lg" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" onClick={handleCompare}>
              Compare
            </Button>
          </div>

          {/* Product Meta */}
          <div className="space-y-2 pt-4 border-t">
            <p className="text-sm">
              <span className="text-muted-foreground">SKU:</span> {product.sku}
            </p>
            <p className="text-sm">
              <span className="text-muted-foreground">Category:</span>{" "}
              {product.category}
            </p>
            <p className="text-sm">
              <span className="text-muted-foreground">Tags:</span>{" "}
              {product.tags.join(", ")}
            </p>
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-4 pt-4 border-t">
            <span className="text-sm text-muted-foreground">Share:</span>
            <Link href="#" className="hover:text-primary">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
