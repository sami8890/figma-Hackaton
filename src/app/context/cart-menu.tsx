//src/app/context/cart-menu.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/app/context/cart-context";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FiShoppingCart } from "react-icons/fi";
import { CartItem } from "./cart-context";

interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemove: (id: string) => void;
  isUpdating: boolean;
}

export function CartMenu() {
  const { state, removeItem, updateQuantity } = useCart();
  const [updatingItemId, setUpdatingItemId] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setUpdatingItemId(itemId);
    updateQuantity(itemId, newQuantity);
    // Remove updating status after a short delay
    setTimeout(() => setUpdatingItemId(null), 500);
  };

  const handleRemoveItem = (itemId: string) => {
    removeItem(itemId);
  };

  const CartItemComponent: React.FC<CartItemProps> = React.memo(({
    item,
    onUpdateQuantity,
    onRemove,
    isUpdating
  }) => (
    <div className="flex gap-4 py-4 relative">
      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-medium text-base">{item.name}</h3>
            <p className="text-sm text-gray-500">
              Size: {item.size} | Color: {item.color}
            </p>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center border rounded">
            <button
              className="px-3 py-1 hover:bg-gray-50"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-12 text-center py-1">{item.quantity}</span>
            <button
              className="px-3 py-1 hover:bg-gray-50"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <div className="text-right">
            <p className="font-medium">
              Rs. {(item.realPrice * item.quantity).toLocaleString()}
            </p>
            {isUpdating && (
              <p className="text-xs text-gray-500">Updating...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  ));

  CartItemComponent.displayName = 'CartItem';

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label={`Open shopping cart (${state.totalItems} items)`}
        >
          <FiShoppingCart className="text-black text-xl" />
          {state.totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {state.totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:max-w-lg flex flex-col"
      >
        <SheetHeader className="border-b pb-4">
          <SheetTitle>Shopping Cart ({state.totalItems} items)</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 px-1">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
              <p className="text-gray-500">Your cart is empty</p>
              <SheetClose asChild>
                <Link href="/shop" className="mt-4">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
              </SheetClose>
            </div>
          ) : (
            <div className="divide-y">
              {state.items.map((item) => (
                <CartItemComponent
                  key={`${item.id}-${item.size}-${item.color}`}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveItem}
                  isUpdating={updatingItemId === item.id}
                />
              ))}
            </div>
          )}
        </ScrollArea>

        {state.items.length > 0 && (
          <div className="border-t pt-4 mt-auto space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>Rs. {state.totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base font-semibold">
                <span>Total Amount</span>
                <span>Rs. {state.totalAmount.toLocaleString()}</span>
              </div>
            </div>
            <div className="space-y-2">
              <SheetClose asChild>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/shop/checkout">Proceed to Checkout</Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-gray-200 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Link href="/shop">Continue Shopping</Link>
                </Button>
              </SheetClose>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

