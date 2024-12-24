"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function PaymentSection() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="grid gap-16 lg:grid-cols-[1.2fr,0.8fr]">
        {/* Payment Details Section */}
        <div>
          <h2 className="mb-8 text-xl font-medium text-gray-900">
            Payment details
          </h2>
          <form className="space-y-8">
            {/* Cardholder Name */}
            <div className="space-y-2.5">
              <Label
                htmlFor="cardholderName"
                className="text-sm font-normal text-gray-600"
              >
                Cardholder Name
              </Label>
              <Input
                id="cardholderName"
                placeholder="Name as it appears on the card"
                required
                className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
              />
            </div>

            {/* Card Number */}
            <div className="space-y-2.5">
              <Label
                htmlFor="cardNumber"
                className="text-sm font-normal text-gray-600"
              >
                Card Number
              </Label>
              <Input
                id="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                required
                className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
              />
            </div>

            {/* Expiry and CVV */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2.5">
                <Label
                  htmlFor="expiryDate"
                  className="text-sm font-normal text-gray-600"
                >
                  Expiry Date
                </Label>
                <Input
                  id="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  required
                  className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                />
              </div>
              <div className="space-y-2.5">
                <Label
                  htmlFor="cvv"
                  className="text-sm font-normal text-gray-600"
                >
                  CVV
                </Label>
                <Input
                  id="cvv"
                  type="password"
                  placeholder="123"
                  required
                  maxLength={3}
                  className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Summary and Confirmation */}
        <div className="space-y-8 bg-gray-50 p-8 rounded-lg">
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-gray-900">Order Summary</h3>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-sm text-gray-900">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-base font-medium text-gray-900">Total</span>
              <span className="text-xl font-medium text-gray-900">
                Rs. 250,000.00
              </span>
            </div>
          </div>

          <Button
            className="w-full h-12 text-sm font-medium bg-gray-900 hover:bg-gray-800 text-white rounded"
            size="lg"
          >
            Confirm and Pay
          </Button>
        </div>
      </div>
    </div>
  );
}
