// //src/app/shop/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaHeart, FaShareAlt, FaShoppingCart } from "react-icons/fa";
import ProductFilter from "./product-filter";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Banner from "@/components/main/banner";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Define a type for the product to improve type safety
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  isNew?: boolean;
}

const ShopSection: React.FC = () => {
  const productsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bannerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const sponsorRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish chair",
      price: "Rp 2,500,000",
      originalPrice: "Rp 3,000,000",
      image: "/our-products/first.png",
      badge: "-30%",
      isNew: false,
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish sofa chair",
      price: "Rp 2,500,000",
      image: "/our-products/second.png",
      isNew: false,
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7,000,000",
      originalPrice: "Rp 14,000,000",
      image: "/our-products/third.png",
      badge: "-50%",
      isNew: false,
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500,000",
      image: "/our-products/fourth.png",
      isNew: true,
    },
    {
      id: 5,
      name: "Grifo",
      description: "Night table",
      price: "Rp 1,500,000",
      originalPrice: "Rp 2,500,000",
      image: "/our-products/fifth.png",
      badge: "-39%",
      isNew: false,
    },
    {
      id: 6,
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150,000",
      image: "/our-products/sixth.png",
      isNew: true,
    },
    {
      id: 7,
      name: "Ping Pong",
      description: "Ping pong table",
      price: "Rp 7,000,000",
      originalPrice: "Rp 10,000,000",
      image: "/our-products/seventh.png",
      badge: "-30%",
      isNew: false,
    },
    {
      id: 8,
      name: "Fleex",
      description: "Minimalist lamp",
      price: "Rp 1,200,000",
      image: "/our-products/eight.png",
      isNew: true,
    },
  ];

  useEffect(() => {
    // Banner Animation
    if (bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }

    // Heading Animation
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
        }
      );
    }

    // Products Animation
    productsRef.current.forEach((productEl, index) => {
      if (productEl) {
        gsap.fromTo(
          productEl,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: productEl,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Pagination Animation
    if (paginationRef.current) {
      gsap.fromTo(
        paginationRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paginationRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Sponsor Animation
    if (sponsorRef.current) {
      gsap.fromTo(
        sponsorRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sponsorRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section>
      {/* Banner Section */}
      <div>
        <Banner
          backgroundImage="/shop/image.png"
          title="Shop"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
        />
      </div>

      {/* Filter Section */}
      <ProductFilter />

      {/* Products Section */}
      <div className="container mx-auto py-10 px-4">
        <h2
          ref={headingRef}
          className="text-center text-3xl font-bold text-gray-800 mb-10"
        >
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="block"
            >
              <div
                ref={(el) => {
                  if (productsRef.current) {
                    productsRef.current[index] = el;
                  }
                }}
                className="relative group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={288}
                    className="w-full h-72 object-cover"
                  />
                  {/* Badges */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  {product.isNew && (
                    <span className="absolute top-3 right-3 bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-red-500 text-lg font-bold">
                      {product.price}
                    </p>
                    {product.originalPrice && (
                      <p className="text-gray-400 text-sm line-through">
                        {product.originalPrice}
                      </p>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Add to Cart Button */}
                  <button className="bg-white text-orange-600 font-medium px-6 py-2 rounded-lg mb-3 flex items-center gap-2 hover:bg-orange-600 hover:text-white transition cursor-not-allowed">
                    <FaShoppingCart />
                    Add to Cart
                  </button>

                  {/* Icons */}
                  <div className="flex gap-4 text-white">
                    <button
                      className="flex items-center gap-2 hover:text-gray-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                    >
                      <FaShareAlt />
                      <span>Share</span>
                    </button>
                    <button
                      className="flex items-center gap-2 hover:text-gray-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                    >
                      <FaHeart />
                      <span>Like</span>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div
          ref={paginationRef}
          className="flex justify-center mt-8 items-center"
        >
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition"
                />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                >
                  2
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext
                  href="#"
                  className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
