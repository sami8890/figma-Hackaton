// src/app/shop/cart-context.tsx
"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react'

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (newItem: CartItem) => {
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(
      item => item.id === newItem.id &&
        item.size === newItem.size &&
        item.color === newItem.color
    )

    if (existingItemIndex > -1) {
      // Update quantity if item exists
      const updatedCartItems = [...cartItems]
      updatedCartItems[existingItemIndex].quantity += newItem.quantity
      setCartItems(updatedCartItems)
    } else {
      // Add new item to cart
      setCartItems(prevItems => [...prevItems, newItem])
    }
  }

  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    )
    setCartItems(updatedCartItems)
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity
    }}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}