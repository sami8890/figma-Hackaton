import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return price.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'PK',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

export function calculateCartTotals(items: Array<{ price: number; quantity: number }>) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 2500 // Fixed shipping cost
  const total = subtotal + shipping

  return {
    subtotal,
    shipping,
    total
  }
}