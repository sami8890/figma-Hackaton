"use client";

import { useCart } from "../cart-context";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 2500; // Fixed shipping cost
  const total = subtotal + shipping;

  useEffect(() => {
    // Animate cart container
    gsap.fromTo(
      cartRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Animate cart items
    itemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power2.out",
          }
        );
      }
    });
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center" ref={cartRef}>
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-8">
          Looks like you haven&apos;t added any items to your cart yet.
        </p>
        <Link href="/shop">
          <Button className="bg-primary hover:bg-primary/90">
            Continue Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8" ref={cartRef}>
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={`${item.id}-${item.size}-${item.color}`}
              ref={(el) => {
                itemsRef.current[index] = el;
                return void 0;
              }}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="relative w-24 h-24">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  Size: {item.size} | Color: {item.color}
                </p>
                <p className="font-medium">Rs. {item.price.toLocaleString()}</p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="text-red-500 hover:text-red-600 hover:bg-red-50"
                onClick={() => removeFromCart(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Rs. {shipping.toLocaleString()}</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
            Proceed to Checkout
          </Button>
          <Link href="/shop">
            <Button variant="outline" className="w-full mt-3">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
