import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CartProvider } from "@/app/context/cart-context";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Ecomerce-Furniture Website",
  description: "The Ecomerce-Furniture Website is a  site for a furniture store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased  bg-gray-100  tracking-tight`}
      >
        <main className="wrapper">
          <ClerkProvider>
            <CartProvider>
              <Navbar />
              {children}
              <Toaster />
              <Footer />
            </CartProvider>
          </ClerkProvider>
        </main>
      </body>
    </html>
  );
}
