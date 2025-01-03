"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaShareAlt, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Define TypeScript interfaces for type safety
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

// Product card interaction component
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        // Card hover animation
        const tl = gsap.timeline({ paused: true });
        tl.to(card.querySelector('.hover-overlay'), {
            opacity: 1,
            duration: 0.3,
            ease: 'power1.inOut'
        });

        // Mouse enter and leave events
        card.addEventListener('mouseenter', () => tl.play());
        card.addEventListener('mouseleave', () => tl.reverse());

        // Scroll trigger animation
        gsap.fromTo(
            card,
            {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Cleanup function
        return () => {
            card.removeEventListener('mouseenter', () => tl.play());
            card.removeEventListener('mouseleave', () => tl.reverse());
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="relative group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            {/* Product Image */}
            <div className="relative">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-full h-72 object-cover"
                />
                {/* Badges */}
                <div className="absolute top-3 inset-x-3 flex justify-between">
                    {product.badge && (
                        <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                            {product.badge}
                        </span>
                    )}
                    {product.isNew && (
                        <span className="bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded-full ml-auto">
                            New
                        </span>
                    )}
                </div>
            </div>

            {/* Product Details */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                <div className="flex items-center gap-2">
                    <p className="text-red-500 text-lg font-bold">{product.price}</p>
                    {product.originalPrice && (
                        <p className="text-gray-400 text-sm line-through">{product.originalPrice}</p>
                    )}
                </div>
            </div>

            {/* Hover Overlay */}
            <div className="hover-overlay absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300">
                {/* Add to Cart Button */}
                <button className="bg-white text-orange-600 font-medium px-6 py-2 rounded-lg mb-3 flex items-center gap-2 hover:bg-orange-600 hover:text-white transition">
                    <FaShoppingCart />
                    <Link href="/shop">Add to Cart</Link>
                </button>

                {/* Icons */}
                <div className="flex gap-4 text-white">
                    <button className="flex items-center gap-2 hover:text-gray-300">
                        <FaShareAlt />
                        <span>Share</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-gray-300">
                        <FaHeart />
                        <span>Like</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

// Main Product Grid Component
const OurProducts: React.FC = () => {
    const products: Product[] = [
        { id: 1, name: 'Syltherine', description: 'Stylish chair', price: 'Rp 2,500,000', originalPrice: 'Rp 3,000,000', image: '/our-products/first.png', badge: '-30%', isNew: false },
        { id: 2, name: 'Leviosa', description: 'Stylish sofa chair', price: 'Rp 2,500,000', image: '/our-products/second.png', badge: '', isNew: false },
        { id: 3, name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7,000,000', originalPrice: 'Rp 14,000,000', image: '/our-products/third.png', badge: '-50%', isNew: false },
        { id: 4, name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500,000', image: '/our-products/fourth.png', badge: '', isNew: true },
        { id: 5, name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500,000', image: '/our-products/fifth.png', badge: '-39%', isNew: false },
        { id: 6, name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500,000', image: '/our-products/sixth.png', badge: '', isNew: true },
        { id: 7, name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500,000', image: '/our-products/seventh.png', badge: '', isNew: false },
        { id: 8, name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500,000', image: '/our-products/eight.png', badge: '', isNew: true },
    ];

    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        // Animate section title
        gsap.fromTo(
            grid.querySelector('h2'),
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: grid,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Animate "Show More" button
        gsap.fromTo(
            grid.querySelector('.show-more-btn'),
            {
                opacity: 0,
                scale: 0.8
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                delay: 0.5,
                scrollTrigger: {
                    trigger: grid,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, []);

    return (
        <div ref={gridRef} className="py-10 px-4 bg-gray-50">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-10 opacity-0">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Show More Button */}
            <div className="flex justify-center mt-8">
                <button className="show-more-btn bg-orange-500 text-white font-medium px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200 opacity-0">
                    <Link href="/shop">Show More</Link>
                </button>
            </div>
        </div>
    );
};

export default OurProducts;