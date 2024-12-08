import React from 'react';
import { FaShareAlt, FaHeart, FaShoppingCart } from 'react-icons/fa';

const ProductGrid = () => {
    const products = [
        { id: 1, name: 'Syltherine', description: 'Stylish chair', price: 'Rp 2,500,000', originalPrice: 'Rp 3,000,000', image: '/images/product1.jpg', badge: '-30%', isNew: false },
        { id: 2, name: 'Leviosa', description: 'Stylish sofa chair', price: 'Rp 2,500,000', image: '/images/product2.jpg', badge: '', isNew: false },
        { id: 3, name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7,000,000', originalPrice: 'Rp 14,000,000', image: '/images/product3.jpg', badge: '-50%', isNew: false },
        { id: 4, name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500,000', image: '/images/product4.jpg', badge: '', isNew: true },
        // Add more products as needed...
    ];

    return (
        <div className="py-10 px-4 bg-gray-50">
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="relative group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Product Image */}
                        <div className="relative">
                            <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
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
                        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {/* Add to Cart Button */}
                            <button className="bg-orange-500 text-white font-medium px-6 py-2 rounded-lg mb-3 flex items-center gap-2 hover:bg-orange-600 transition">
                                <FaShoppingCart />
                                Add to Cart
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
                ))}
            </div>

            {/* Show More Button */}
            <div className="flex justify-center mt-8">
                <button className="bg-orange-500 text-white font-medium px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                    Show More
                </button>
            </div>
        </div>
    );
};

export default ProductGrid;
