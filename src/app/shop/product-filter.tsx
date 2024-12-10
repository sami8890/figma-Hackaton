import React from 'react';

const FilterSection: React.FC = () => {
    return (
        <div className="bg-[#fdf6ef] flex justify-between items-center p-4 border-b border-gray-200">
            {/* Left Section - Filter */}
            <div className="flex items-center space-x-2">
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

                {/* View Icons */}
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
            <p className="text-gray-600 text-sm">
                Showing <span className="font-semibold">1–16</span> of{' '}
                <span className="font-semibold">32</span> results
            </p>

            {/* Right Section - Controls */}
            <div className="flex items-center gap-4">
                {/* Show Dropdown */}
                <div className="flex items-center space-x-2">
                    <span className="text-gray-600 text-sm">Show</span>
                    <select className="border border-gray-300 rounded-md px-3 py-1 text-gray-600">
                        <option value="16" selected>
                            16
                        </option>
                        <option value="32">32</option>
                        <option value="48">48</option>
                    </select>
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center space-x-2">
                    <span className="text-gray-600 text-sm">Short by</span>
                    <select className="border border-gray-300 rounded-md px-3 py-1 text-gray-600">
                        <option value="default" selected>
                            Default
                        </option>
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;
