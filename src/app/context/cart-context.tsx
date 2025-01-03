// src/app/context/cart-context.tsx
"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

// Types
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartState };

interface CartContextType {
  state: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

// Initial state
const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Reducer function
export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;

        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + action.payload.quantity,
          totalAmount:
            state.totalAmount + action.payload.price * action.payload.quantity,
        };
      }

      return {
        ...state,
        items: [...state.items, action.payload],
        totalItems: state.totalItems + action.payload.quantity,
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.quantity,
      };
    }

    case "REMOVE_ITEM": {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      if (!itemToRemove) return state;

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalItems: Math.max(0, state.totalItems - itemToRemove.quantity),
        totalAmount: Math.max(
          0,
          state.totalAmount - itemToRemove.price * itemToRemove.quantity
        ),
      };
    }

    case "UPDATE_QUANTITY": {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) return state;

      const updatedItems = [...state.items];
      const quantityDiff =
        action.payload.quantity - updatedItems[itemIndex].quantity;
      updatedItems[itemIndex].quantity = action.payload.quantity;

      return {
        ...state,
        items: updatedItems,
        totalItems: Math.max(0, state.totalItems + quantityDiff),
        totalAmount: Math.max(
          0,
          state.totalAmount + updatedItems[itemIndex].price * quantityDiff
        ),
      };
    }

    case "CLEAR_CART":
      return initialState;

    case "LOAD_CART":
      return {
        ...state,
        items: action.payload.items || [],
        totalItems: action.payload.totalItems || 0,
        totalAmount: action.payload.totalAmount || 0,
      };

    default:
      return state;
  }
}

// Provider component
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      dispatch({ type: "LOAD_CART", payload: parsedCart });
    }
  }, []);

  // Save cart to localStorage on state change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  // Action handlers
  const addItem = (item: CartItem) => {
    if (!item.id || !item.name || item.price <= 0 || item.quantity <= 0) {
      toast({
        title: "Invalid item",
        description: "Failed to add item to cart. Check item details.",
      });
      return;
    }
    dispatch({ type: "ADD_ITEM", payload: item });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  return (
    <CartContext.Provider
      value={{ state, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook for using cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
