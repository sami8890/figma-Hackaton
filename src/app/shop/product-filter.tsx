import React, { useState } from 'react';

const FilterSection: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="bg-[#fdf6ef] border-b border-gray-200">
            {/* Main container with responsive flex */}
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 space-y-4 sm:space-y-0">
                {/* Top row for mobile - Filter and View options */}
                <div className="w-full flex justify-between items-center sm:hidden">
                    <button
                        className="flex items-center gap-2 bg-white text-black border border-gray-300 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 12v6a1 1 0 01-.553.894l-4 2A1 1 0 019 20v-8L3.293 6.707A1 1 0 013 6V4z"
                            />
                        </svg>
                        <span>Filter</span>
                    </button>

                    {/* View Icons for Mobile */}
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-md hover:bg-gray-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-black"
                            >
                                <circle cx="6" cy="6" r="2" />
                                <circle cx="12" cy="6" r="2" />
                                <circle cx="18" cy="6" r="2" />
                                <circle cx="6" cy="12" r="2" />
                                <circle cx="12" cy="12" r="2" />
                                <circle cx="18" cy="12" r="2" />
                            </svg>
                        </button>
                        <button className="p-2 rounded-md hover:bg-gray-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5 text-black"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Left Section - Filter and View (Desktop) */}
                <div className="hidden sm:flex items-center space-x-2">
                    <button className="flex items-center gap-2 bg-white text-black border border-gray-300 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 12v6a1 1 0 01-.553.894l-4 2A1 1 0 019 20v-8L3.293 6.707A1 1 0 013 6V4z"
                            />
                        </svg>
                        <span>Filter</span>
                    </button>

                    {/* View Icons (Desktop) */}
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-md hover:bg-gray-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-black"
                            >
                                <circle cx="6" cy="6" r="2" />
                                <circle cx="12" cy="6" r="2" />
                                <circle cx="18" cy="6" r="2" />
                                <circle cx="6" cy="12" r="2" />
                                <circle cx="12" cy="12" r="2" />
                                <circle cx="18" cy="12" r="2" />
                            </svg>
                        </button>
                        <button className="p-2 rounded-md hover:bg-gray-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5 text-black"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Center Section - Pagination */}
                <p className="text-gray-600 text-sm text-center sm:text-left">
                    Showing <span className="font-semibold">1–16</span> of{' '}
                    <span className="font-semibold">32</span> results
                </p>

                {/* Right Section - Controls */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    {/* Show Dropdown */}
                    <div className="flex items-center space-x-2 w-full sm:w-auto">
                        <span className="text-gray-600 text-sm whitespace-nowrap">Show</span>
                        <select className="w-full sm:w-auto border border-gray-300 rounded-md px-3 py-1 text-gray-600">
                            <option value="16" selected>
                                16
                            </option>
                            <option value="32">32</option>
                            <option value="48">48</option>
                        </select>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center space-x-2 w-full sm:w-auto">
                        <span className="text-gray-600 text-sm whitespace-nowrap">Sort by</span>
                        <select className="w-full sm:w-auto border border-gray-300 rounded-md px-3 py-1 text-gray-600">
                            <option value="default" selected>
                                Default
                            </option>
                            <option value="price">Price</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Mobile Filter Dropdown (when opened) */}
            {isMobileMenuOpen && (
                <div className="sm:hidden bg-white p-4 border-t border-gray-200">
                    {/* Mobile Filter Options */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Show</label>
                            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-600">
                                <option value="16" selected>16</option>
                                <option value="32">32</option>
                                <option value="48">48</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Sort by</label>
                            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-600">
                                <option value="default" selected>Default</option>
                                <option value="price">Price</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterSection;