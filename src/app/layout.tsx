"use client";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/layout/navbar";
import Footer from "@/components/layout/footer";
import { CartProvider } from "@/app/context/cart-context";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react"; // Import useState and useEffect
import { AnimatePresence } from "framer-motion";
import LoadingPage from "@/app/loading";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 tracking-tight`}
      >
        <AnimatePresence>{isLoading && <LoadingPage />}</AnimatePresence>
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
