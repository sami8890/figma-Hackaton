'use client'

import Image from "next/image"
import Link from "next/link"
import { Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function CartPage() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="grid gap-6 lg:grid-cols-[1.5fr,1fr]">
        {/* Cart Items Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#fdf6f0]">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Product</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Price</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Quantity</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Subtotal</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-6 px-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0">
                      <Image
                        src="/placeholder.svg"
                        alt="Asgaard sofa"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-600">Asgaard sofa</span>
                  </div>
                </td>
                <td className="px-6 py-6">
                  <span className="text-sm text-gray-600">Rs. 250,000.00</span>
                </td>
                <td className="px-6 py-6">
                  <div className="flex items-center">
                    <input
                      type="number"
                      defaultValue={1}
                      min={1}
                      className="h-10 w-16 rounded border border-gray-300 px-2 text-center text-sm"
                    />
                  </div>
                </td>
                <td className="px-6 py-6">
                  <span className="text-sm text-gray-600">Rs. 250,000.00</span>
                </td>
                <td className="px-6 py-6">
                  <button className="text-gray-400 hover:text-gray-500">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="bg-[#fdf6f0] p-8 rounded-lg">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Cart Totals</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="text-sm text-gray-900">Rs. 250,000.00</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-gray-900">Total</span>
                  <span className="text-lg font-medium text-[#B88E2F]">Rs. 250,000.00</span>
                </div>
              </div>
            </div>

            <Link href="/shop/checkout" passHref>
              <Button
                className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
              >
                Check Out
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

