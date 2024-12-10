// src/app/shop/shopping-cart.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/app/shop/cart-context"; // Adjust path as needed

export default function ShoppingCart() {
    const { cartItems, removeFromCart  } = useCart()

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Shopping Cart</h2>
                    <span className="text-muted-foreground">
                        {cartItems.length} items
                    </span>
                </div>
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center gap-4">
                            <div className="relative h-16 w-16 overflow-hidden rounded-lg border bg-muted">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium">{item.name}</h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span>Size: {item.size}</span>
                                    <span>Color: {item.color}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span>{item.quantity} x</span>
                                    <span>
                                        Rs.{" "}
                                        {item.price.toLocaleString("en-IN", {
                                            minimumFractionDigits: 2,
                                        })}
                                    </span>
                                </div>
                            </div>
                            <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </Button>
                        </div>
                    ))}
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Subtotal</span>
                    <span>
                        Rs. {subtotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </span>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-2 p-6 pt-0">
                <Button variant="outline" className="flex-1">
                    Cart
                </Button>
                <Button variant="outline" className="flex-1">
                    Checkout
                </Button>
                <Button variant="outline" className="flex-1">
                    Comparison
                </Button>
            </CardFooter>
        </Card>
    );
}