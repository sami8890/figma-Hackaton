"use server"

import { stripe } from "@/lib/stripe"
import { redirect } from "next/navigation"
import { headers } from "next/headers"

export async function createPaymentIntent(amount: number) {
    const headersList = headers()
    const host = (await headersList).get("host")

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Stripe expects amount in cents
            currency: "inr", // Change this to your preferred currency
            automatic_payment_methods: { enabled: true },
            metadata: { host: host || "unknown" }, // Add metadata for tracking
        })

        return { clientSecret: paymentIntent.client_secret }
    } catch (error) {
        console.error("Error creating PaymentIntent:", error)
        throw new Error("Failed to create PaymentIntent")
    }
}

export async function handlePayment(formData: FormData) {
    const paymentIntentId = formData.get("paymentIntentId") as string

    if (!paymentIntentId) {
        console.error("No paymentIntentId provided")
        redirect("/checkout/error?reason=missing_payment_intent")
    }

    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)

        if (paymentIntent.status === "succeeded") {
            // Payment was successful, you can update your database here
            console.log("Payment successful for PaymentIntent:", paymentIntentId)
            // TODO: Update order status in your database
            redirect("/checkout/success")
        } else if (paymentIntent.status === "requires_payment_method") {
            // Payment failed, redirect to payment page to try again
            console.log("Payment failed for PaymentIntent:", paymentIntentId)
            redirect("/checkout?retry=true")
        } else {
            // Payment is in an intermediate state, you may want to show a waiting page
            console.log("Payment is processing for PaymentIntent:", paymentIntentId)
            redirect("/checkout/processing")
        }
    } catch (error) {
        console.error("Error handling payment:", error)
        redirect("/checkout/error?reason=payment_processing_failed")
    }
}

