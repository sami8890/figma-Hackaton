// components/ProductFilter.tsx
import React, { useState } from 'react';

const ProductFilter: React.FC = () => {
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [category, setCategory] = useState('all');
    const [brand, setBrand] = useState('all');

    return (
        <div className="bg-gray-100 py-6 px-4">
            <h3 className="text-lg font-bold mb-4">Filter</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Price Range */}
                <div>
                    <label htmlFor="price-range" className="block font-medium mb-2">
                        Price Range
                    </label>
                    <div className="flex items-center">
                        <input
                            type="range"
                            min="0"
                            max="10000"
                            step="100"
                            id="price-range"
                            className="w-full"
                            value={priceRange[1]}
                            onChange={(e) =>
                                setPriceRange([0, parseInt(e.target.value)])
                            }
                        />
                        <span className="ml-4 text-sm">
                            ₹{priceRange[0]} - ₹{priceRange[1]}
                        </span>
                    </div>
                </div>

                {/* Category */}
                <div>
                    <label htmlFor="category" className="block font-medium mb-2">
                        Category
                    </label>
                    <select
                        id="category"
                        className="w-full"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="furniture">Furniture</option>
                        <option value="decor">Decor</option>
                        <option value="lighting">Lighting</option>
                    </select>
                </div>

                {/* Brand */}
                <div>
                    <label htmlFor="brand" className="block font-medium mb-2">
                        Brand
                    </label>
                    <select
                        id="brand"
                        className="w-full"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="brand1">Brand 1</option>
                        <option value="brand2">Brand 2</option>
                        <option value="brand3">Brand 3</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;