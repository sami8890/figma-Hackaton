"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type WishlistContextType = {
    wishlistCount: number;
    addToWishlist: (productId: string) => void;
    removeFromWishlist: (productId: string) => void;
    isLoading: boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Load wishlist from localStorage only on client side
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
            try {
                const parsed = JSON.parse(storedWishlist);
                setWishlistItems(parsed);
            } catch (error) {
                console.error('Error parsing wishlist:', error);
                setWishlistItems([]);
            }
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        // Only save to localStorage if we're not in the initial loading state
        if (!isLoading) {
            localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
        }
    }, [wishlistItems, isLoading]);

    const addToWishlist = (productId: string) => {
        setWishlistItems((prev) => {
            if (!prev.includes(productId)) {
                return [...prev, productId];
            }
            return prev;
        });
    };

    const removeFromWishlist = (productId: string) => {
        setWishlistItems((prev) => prev.filter((id) => id !== productId));
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlistCount: wishlistItems.length,
                addToWishlist,
                removeFromWishlist,
                isLoading
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};