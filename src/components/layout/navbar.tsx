// components/Navbar.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiHeart, FiX, FiUser } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { Menu } from 'lucide-react';
import { CartMenu } from "@/app/context/cart-menu";
import { useCart } from "@/app/context/cart-context";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getSuggestions } from "@/lib/products";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

const Navbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  useCart();

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const updateSuggestions = async (query: string) => {
    if (query.length >= 1) { // Changed to 1 character
      const results = await getSuggestions(query);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => updateSuggestions(searchQuery), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src="/navbar-logo.png"
            alt="Furniro logo"
            width={50}
            height={32}
            className="transition-transform group-hover:scale-105"
          />
          <h1 className="hidden md:block text-lg font-semibold text-black font-inter">
            Furniro
          </h1>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black transition-colors hover:text-orange-500 hover:font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3 md:space-x-4" ref={searchRef}>
          {isSearchOpen ? (
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 w-48 md:w-64"
                  aria-label="Search products"
                  autoFocus
                />
                {suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-50 max-h-60 overflow-auto">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm text-black"
                        onClick={() => {
                          setSearchQuery(suggestion);
                          router.push(`/shop/search?q=${encodeURIComponent(suggestion)}`);
                          setIsSearchOpen(false);
                        }}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                type="button"
              >
                <FiX className="text-gray-500" />
              </Button>
            </form>
          ) : (
            <div className="flex items-center space-x-3 md:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
              >
                <FiSearch className="text-black text-xl hover:text-orange-500 transition-colors" />
              </Button>
              <SignedOut>
                <SignInButton>
                  <Button variant="ghost" size="icon" aria-label="Sign in">
                    <FiUser className="text-black text-xl hover:text-orange-500 transition-colors" />
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <Button variant="ghost" size="icon" aria-label="Favorites">
                <FiHeart className="text-black text-xl hover:text-orange-500 transition-colors" />
              </Button>
              <CartMenu />
            </div>
          )}

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="text-black" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <SheetHeader className="mb-6">
                <div className="flex justify-center items-center space-x-2">
                  <Image
                    src="/navbar-logo.png"
                    alt="Furniro Logo"
                    width={40}
                    height={25}
                  />
                  <SheetTitle className="text-xl font-semibold">
                    Furniro
                  </SheetTitle>
                </div>
              </SheetHeader>

              <nav className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-black text-lg hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 flex justify-center space-x-6">
                <SignedOut>
                  <SignInButton>
                    <Button variant="ghost" size="icon" aria-label="Sign in">
                      <FiUser className="text-2xl hover:text-orange-500" />
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <Button variant="ghost" size="icon" aria-label="Favorites">
                  <FiHeart className="text-2xl hover:text-orange-500" />
                </Button>
                <CartMenu />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;