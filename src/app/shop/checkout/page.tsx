"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/cart-context"; // Adjust import based on your structure
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Banner from "@/components/ui/banner";

export default function BillingForm() {
  const { state: cart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    street: "",
    city: "",
    province: "",
    zip: "",
    phone: "",
    email: "",
    cardNumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Form Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    // Process order submission here
    toast({
      title: "Order Placed",
      description: "Your order has been successfully placed.",
    });
  };

  return (
    <section>
      <div>
        <Banner
          backgroundImage="/shop/image.png"
          title="Checkout"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: "Checkout", href: "/shop/checkout" },
          ]}
        />
      </div>
      <div className="mx-auto max-w-6xl p-6">
        <div className="grid gap-16 lg:grid-cols-[1.2fr,0.8fr]">
          {/* Billing Details Section */}
          <div>
            <h2 className="mb-8 text-xl font-medium text-gray-900">
              Billing details
            </h2>
            <form className="space-y-8">
              {/* Name Fields */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2.5">
                  <Label
                    htmlFor="firstName"
                    className="text-sm font-normal text-gray-600"
                  >
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </div>
                <div className="space-y-2.5">
                  <Label
                    htmlFor="lastName"
                    className="text-sm font-normal text-gray-600"
                  >
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </div>
              </div>
              {/* Company Name */}
              <div className="space-y-2.5">
                <Label
                  htmlFor="companyName"
                  className="text-sm font-normal text-gray-600"
                >
                  Company name (optional)
                </Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                />
              </div>
              {/* Country/Region */}
              <div className="space-y-2.5">
                <Label
                  htmlFor="country"
                  className="text-sm font-normal text-gray-600"
                >
                  Country / Region
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, country: value })
                  }
                >
                  <SelectTrigger className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Street Address */}
              <div className="space-y-2.5">
                <Label
                  htmlFor="street"
                  className="text-sm font-normal text-gray-600"
                >
                  Street address
                </Label>
                <Input
                  id="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                  className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                />
              </div>
              {/* Town/City */}
              <div className="space-y-2.5">
                <Label
                  htmlFor="city"
                  className="text-sm font-normal text-gray-600"
                >
                  Town / City
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                />
              </div>
              {/* Province */}
              <div className="space-y-2.5">
                <Label
                  htmlFor="province"
                  className="text-sm font-normal text-gray-600"
                >
                  Province
                </Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, province: value })
                  }
                >
                  <SelectTrigger className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0">
                    <SelectValue placeholder="Select a province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="on">Ontario</SelectItem>
                    <SelectItem value="bc">British Columbia</SelectItem>
                    <SelectItem value="ab">Alberta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* ZIP Code */}
              <div className="space-y-2.5">
                <Label
                  htmlFor="zip"
                  className="text-sm font-normal text-gray-600"
                >
                  ZIP code
                </Label>
                <Input
                  id="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                  className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                />
              </div>
              {/* Phone */}
              <div className="space-y-2.5">
                <Label
                  htmlFor="phone"
                  className="text-sm font-normal text-gray-600"
                >
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                />
              </div>
              {/* Email */}
              <div className="space-y-2.5">
                <Label
                  htmlFor="email"
                  className="text-sm font-normal text-gray-600"
                >
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                />
              </div>
            </form>
          </div>

          {/* Product Summary Section */}
          <div className="space-y-8 bg-gray-50 p-8 rounded-lg">
            <div className="space-y-6">
              <h3 className="text-sm font-medium text-gray-900">Product</h3>
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="text-sm text-gray-900">
                  Rs. {cart.totalAmount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-base font-medium text-gray-900">
                  Total
                </span>
                <span className="text-xl font-medium text-[#C28C2B]">
                  Rs. {cart.totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">Credit card number</p>
              <Input
                id="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="Card number"
                className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
              />
            </div>
            <div className="text-xs text-gray-500 leading-relaxed">
              By continuing, you agree to our Terms of Use and Privacy Policy.
            </div>
            <Button
              onClick={handleSubmit}
              className="w-[80%] h-12 text-sm  bg-white hover:bg-gray-100 text-black  border border-gray-900 rounded-md bolder mx-auto flex items-center justify-center font-semibold"
            >
              Place order
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
