import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X, Loader2 } from 'lucide-react';
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
import { Separator } from "@/components/ui/separator";
import { CartItem } from "../shop/cart-context";

// Using the existing CartItem type from your context
interface CartItemProps {
  item: CartItem;
}

type DebouncedFunction<T extends unknown[]> = (...args: T) => void;

function debounce<T extends unknown[]>(func: DebouncedFunction<T>, wait: number): DebouncedFunction<T> {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: T) {
    const later = () => {
      if (timeout) clearTimeout(timeout);
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function CartMenu() {
  const { state, removeItem, updateQuantity } = useCart();
  const [isRemoving, setIsRemoving] = React.useState(false);
  const [updatingItemId, setUpdatingItemId] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const debouncedUpdateQuantity = React.useCallback(
    debounce(async (itemId: string, newQuantity: number) => {
      try {
        await updateQuantity(itemId, newQuantity);
      } catch (error) {
        console.error('Error updating quantity:', error);
      } finally {
        setUpdatingItemId(null);
      }
    }, 500),
    [updateQuantity]
  );

  const handleRemoveItem = async (itemId: string) => {
    setIsRemoving(true);
    try {
      await removeItem(itemId);
    } catch (error) {
      console.error('Error removing item:', error);
    } finally {
      setIsRemoving(false);
    }
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1 || newQuantity > 99) return;
    setUpdatingItemId(itemId);
    debouncedUpdateQuantity(itemId, newQuantity);
  };

  const CartItem: React.FC<CartItemProps> = React.memo(({ item }) => (
    <div className="flex gap-4 p-4 border rounded-lg hover:border-orange-200 transition-colors">
      <div className="relative w-20 h-20 flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-md"
          sizes="80px"
          priority={false}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium truncate pr-2">{item.name}</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleRemoveItem(item.id)}
            disabled={isRemoving}
            className="hover:text-red-500"
          >
            {isRemoving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <X className="h-4 w-4" />
            )}
            <span className="sr-only">Remove item</span>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-1">
          Size: {item.size} | Color: {item.color}
        </p>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
              disabled={updatingItemId === item.id || item.quantity <= 1}
            >
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <input
              type="number"
              min="1"
              max="99"
              value={item.quantity}
              onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
              className="w-12 text-center focus:outline-none"
              disabled={updatingItemId === item.id}
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              disabled={updatingItemId === item.id || item.quantity >= 99}
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          <div className="text-right">
            <p className="font-medium">
              Rs. {(item.price * item.quantity).toLocaleString()}
            </p>
            {updatingItemId === item.id && (
              <p className="text-xs text-muted-foreground">Updating...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  ));

  CartItem.displayName = 'CartItem';

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label={`Open shopping cart (${state.totalItems} items)`}
        >
          <FiShoppingCart className="text-black text-xl hover:text-orange-500 transition-colors" />
          {state.totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {state.totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:max-w-lg flex flex-col"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader>
          <SheetTitle>Shopping Cart ({state.totalItems} items)</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 mt-4 pr-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
              <p className="text-muted-foreground">Your cart is empty</p>
              <SheetClose asChild>
                <Link href="/shop" className="mt-4">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
              </SheetClose>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <CartItem
                  key={`${item.id}-${item.size}-${item.color}`}
                  item={item}
                />
              ))}
            </div>
          )}
        </ScrollArea>

        {state.items.length > 0 && (
          <div className="mt-auto pt-4">
            <Separator className="mb-4" />
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span>Subtotal</span>
                <span>Rs. {state.totalAmount.toLocaleString()}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Total Amount</span>
                <span className="font-bold text-lg">
                  Rs. {state.totalAmount.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <SheetClose asChild>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/shop/checkout">Proceed to Checkout</Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="outline" className="w-full">
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
