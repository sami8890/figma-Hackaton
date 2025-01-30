// src/app/context/cart-context.tsx
"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  realPrice: number;
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

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function cartReducer(state: CartState, action: CartAction): CartState {
  const recalculateTotalAmount = (items: CartItem[]): number => {
    return items.reduce((total, item) => total + item.realPrice * item.quantity, 0);
  };
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
          totalAmount: recalculateTotalAmount(updatedItems),
        };
      }

      return {
        ...state,
        items: [...state.items, action.payload],
        totalItems: state.totalItems + action.payload.quantity,
        totalAmount: recalculateTotalAmount([...state.items, action.payload]),
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
        totalAmount: recalculateTotalAmount(state.items.filter((item) => item.id !== action.payload)),
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
        totalAmount: recalculateTotalAmount(updatedItems),
      };
    }

    case "CLEAR_CART":
      return initialState;

    case "LOAD_CART":
      return {
        ...action.payload,
        totalAmount: recalculateTotalAmount(action.payload.items || []),
      };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      dispatch({ type: "LOAD_CART", payload: parsedCart });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const addItem = (item: CartItem) => {
    if (!item.id || !item.name || item.realPrice <= 0 || item.quantity <= 0) {
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

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

