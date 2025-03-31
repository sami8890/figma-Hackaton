//src/app/shop/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { use } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Minus, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/sanity/lib/fetch";
import { useCart } from "@/app/context/cart-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";

// Define the Product type based on your Sanity schema
type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  slug: string;
  imageUrl: string;
  discountPrice?: number;
  isNew: boolean;
  colors: string[];
  tags: string[];
  stock: number;
  inStock: boolean;
};

// Function to fetch a single product from Sanity
const getProduct = async (id: string): Promise<Product | null> => {
  const query = `*[_type == "productss" && _id == $id][0]{
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
  }`;

  const product = await sanityFetch({ query, params: { id } });
  return product;
};

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    getProduct(id).then(setProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product._id,
        name: product.title,
        price: product.price,
        realPrice: product.discountPrice || product.price,
        quantity: quantity,
        size: selectedSize,
        color: selectedColor || product.colors[0],
        image: product.imageUrl,
      });
      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.title} has been added to your cart.`,
      });
    }
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product?.title} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    });
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-12 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    );
  }

  const stockPercentage = (product.stock / 100) * 100; // Assuming max stock is 100

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="relative aspect-[4/3] lg:aspect-[3/2] mb-4">
            {" "}
            {/* Changed from aspect-square */}
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw" // Added sizes for better performance
              priority // Added priority for faster LCP
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {[product.imageUrl, product.imageUrl, product.imageUrl].map(
              (img, index) => (
                <button
                  key={index}
                  className={`relative w-16 lg:w-20 h-16 lg:h-20 rounded-md overflow-hidden ${
                    selectedImage === index ? "ring-2 ring-[#B88E2F]" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${product.title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 64px, 80px"
                  />
                </button>
              )
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? "fill-[#FFC700] text-[#FFC700]" : "fill-gray-200 text-gray-200"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">4.0 (200 reviews)</span>
          </div>
          <p className="text-2xl font-bold mb-4">
            Rs. {product.price.toLocaleString()}
          </p>

          {/* Stock Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Availability</span>
              <span>{product.stock} in stock</span>
            </div>
            <Progress value={stockPercentage} className="h-2" />
          </div>

          {/* Description Section */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-600">
              {isDescriptionExpanded
                ? product.description
                : `${product.description.slice(0, 100)}...`}
            </p>
            <button
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="text-blue-600 hover:underline mt-2"
            >
              {isDescriptionExpanded ? "Show less" : "Read more"}
            </button>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <motion.button
                  key={color}
                  className={`w-10 h-10 rounded-full transition-all ${
                    selectedColor === color
                      ? "ring-2 ring-offset-2 ring-[#B88E2F]"
                      : ""
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select ${color} color`}
                  onClick={() => setSelectedColor(color)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Size</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="link"
                    className="p-0 h-auto font-normal text-sm text-blue-600"
                  >
                    Size Guide
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Size Guide</DialogTitle>
                    <DialogDescription>
                      Here&apos;s our size guide to help you find the perfect
                      fit.
                    </DialogDescription>
                  </DialogHeader>
                  {/* Add your size guide Content here */}
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <motion.button
                  key={size}
                  className={`w-10 h-10 rounded border text-sm transition-colors ${
                    selectedSize === size
                      ? "bg-[#B88E2F] text-white border-[#B88E2F]"
                      : "border-gray-300 text-gray-700 hover:border-[#B88E2F]"
                  }`}
                  onClick={() => setSelectedSize(size)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded">
              <motion.button
                className="px-3 py-2"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                whileTap={{ scale: 0.9 }}
              >
                <Minus className="w-4 h-4" />
              </motion.button>
              <span className="px-3 py-2">{quantity}</span>
              <motion.button
                className="px-3 py-2"
                onClick={() => setQuantity(Math.min(99, quantity + 1))}
                whileTap={{ scale: 0.9 }}
              >
                <Plus className="w-4 h-4" />
              </motion.button>
            </div>
            <motion.div
              className="flex-grow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="w-full bg-[#B88E2F] text-white hover:bg-[#A67D20]"
                onClick={handleAddToCart}
              >
                Add To Cart
              </Button>
            </motion.div>
            <motion.button
              className={`p-2 rounded-full ${isWishlisted ? "bg-red-100" : "bg-gray-100"}`}
              onClick={toggleWishlist}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={
                isWishlisted ? "Remove from wishlist" : "Add to wishlist"
              }
            >
              <Heart
                className={`w-6 h-6 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-500"}`}
              />
            </motion.button>
          </div>

          {/* Product Details Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {/* <AccordionItem value="description">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>{product.description}</AccordionContent>
            </AccordionItem> */}
            <AccordionItem value="additional-info">
              <AccordionTrigger>Additional Information</AccordionTrigger>
              <AccordionContent>
                <p>Weight: 1.5 kg</p>
                <p>Dimensions: 60 x 40 x 20 cm</p>
                <p>Materials: Wood, Metal</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reviews">
              <AccordionTrigger>Reviews (0)</AccordionTrigger>
              <AccordionContent>
                <p>Customer reviews will be displayed here.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Sticky Add to Cart for Mobile */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg md:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Button
          className="w-full bg-[#B88E2F] text-white hover:bg-[#A67D20]"
          onClick={handleAddToCart}
        >
          Add To Cart - Rs. {(product.price * quantity).toLocaleString()}
        </Button>
      </motion.div>
    </div>
  );
}
