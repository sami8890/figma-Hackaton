// src/app/api/create-checkout-session/route.ts
import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-01-27.acacia",
})

export async function POST(req: Request) {
    if (req.method === "POST") {
        try {
            const { items, customerEmail } = await req.json()

            interface Item {
                name: string;
                realPrice: number;
                quantity: number;
            }

        
            const lineItems = items.map((item: Item) => ({
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.realPrice * 100, // Stripe expects amounts in cents
                },
                quantity: item.quantity,
            }));

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: lineItems,
                mode: "payment",
                success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
                cancel_url: `${process.env.NEXT_PUBLIC_URL}/shop/checkout`,
                customer_email: customerEmail,
            })

            return NextResponse.json({ sessionId: session.id })
        } catch (err) {
            console.error(err)
            if (err instanceof Error) {
                return NextResponse.json({ error: err.message }, { status: 500 })
            } else {
                return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 })
            }
        }
    } else {
        return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 })
    }
}

