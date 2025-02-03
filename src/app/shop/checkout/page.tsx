"use client"

import type React from "react"
import { useState } from "react"
import { useCart } from "@/app/context/cart-context"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import Banner from "@/components/main/banner"
import { loadStripe } from "@stripe/stripe-js"

// Make sure to replace with your actual Stripe publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function BillingForm() {
  const { state: cart } = useCart()
  const [isLoading, setIsLoading] = useState(false)
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
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Form Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      console.log("Sending request to create checkout session...")
      console.log("Cart items:", JSON.stringify(cart.items))
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.items,
          customerEmail: formData.email,
        }),
      })

      const responseText = await response.text()
      console.log("Raw server response:", responseText)

      let data
      try {
        data = JSON.parse(responseText)
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError)
        throw new Error(`Invalid response from server: ${responseText}`)
      }

      if (!response.ok) {
        throw new Error(data.error || `Server error: ${response.status} ${response.statusText}`)
      }

      if (!data.sessionId) {
        throw new Error("No sessionId received from server")
      }

      console.log("Received sessionId:", data.sessionId)

      const stripe = await stripePromise

      if (!stripe) {
        throw new Error("Stripe failed to initialize")
      }

      const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId })
      if (error) {
        throw error
      }
    } catch (error) {
      console.error("Checkout error:", error)
      toast({
        title: "Payment Error",
        description: error instanceof Error ? error.message : "An error occurred while processing your payment.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

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
            <h2 className="mb-8 text-xl font-medium text-gray-900">Billing details</h2>
            <form className="space-y-8">
              {/* Name Fields */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2.5">
                  <Label htmlFor="firstName" className="text-sm font-normal text-gray-600">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    // required
                    className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </div>
                <div className="space-y-2.5">
                  <Label htmlFor="lastName" className="text-sm font-normal text-gray-600">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    // required
                    className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </div>
              </div>
              {/* Company Name */}
              <div className="space-y-2.5">
                <Label htmlFor="companyName" className="text-sm font-normal text-gray-600">
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
                <Label htmlFor="country" className="text-sm font-normal text-gray-600">
                  Country / Region
                </Label>
                <Select onValueChange={(value) => setFormData({ ...formData, country: value })}>
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
                <Label htmlFor="street" className="text-sm font-normal text-gray-600">
                  Street address
                </Label>
                <Input
                  id="street"
                  value={formData.street}
                  onChange={handleChange}
                  // required
                  className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                />
              </div>
              {/* Town/City */}
              <div className="space-y-2.5">
                <Label htmlFor="city" className="text-sm font-normal text-gray-600">
                  Town / City
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  // required
                  className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                />
              </div>
              {/* Province */}
              <div className="space-y-2.5">
                <Label htmlFor="province" className="text-sm font-normal text-gray-600">
                  Province
                </Label>
                <Select onValueChange={(value) => setFormData({ ...formData, province: value })}>
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
                <Label htmlFor="zip" className="text-sm font-normal text-gray-600">
                  ZIP code
                </Label>
                <Input
                  id="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  // required
                  className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                />
              </div>
              {/* Phone */}
              <div className="space-y-2.5">
                <Label htmlFor="phone" className="text-sm font-normal text-gray-600">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  // required
                  className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                />
              </div>
              {/* Email */}
              <div className="space-y-2.5">
                <Label htmlFor="email" className="text-sm font-normal text-gray-600">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  // required
                  className="h-11 rounded px-4 border-gray-300 focus:border-gray-400 focus:ring-0"
                />
              </div>
            </form>
          </div>

          {/* Product Summary Section */}
          <div className="space-y-8 bg-gray-50 p-8 rounded-lg">
            <div className="space-y-6">
              <h3 className="text-sm font-medium text-gray-900">Product</h3>
              {cart.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="text-sm text-gray-900">Rs. {(item.realPrice * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="text-sm text-gray-900">Rs. {cart.totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-base font-medium text-gray-900">Total</span>
                <span className="text-xl font-medium text-[#C28C2B]">Rs. {cart.totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-[80%] h-12 text-sm bg-white hover:bg-gray-100 text-black border border-gray-900 rounded-md bolder mx-auto flex items-center justify-center font-semibold"
            >
              {isLoading ? "Processing..." : "Proceed to Payment"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

