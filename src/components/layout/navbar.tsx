"use client";

import React, { useState } from "react";
import { FiUser, FiSearch, FiHeart, FiShoppingCart, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Navigation links type and data
interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo */}
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

        {/* Navigation Links */}
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

        {/* Icons and Search */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Search Input */}
          {isSearchOpen ? (
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                className="pr-10 w-48 md:w-64"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2"
                onClick={toggleSearch}
              >
                <FiX className="text-gray-500" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4 md:space-x-6">
              <FiSearch
                className="text-black text-xl cursor-pointer hover:text-orange-500 transition-colors"
                onClick={toggleSearch}
              />
              <FiUser className="text-black text-xl cursor-pointer hover:text-orange-500 transition-colors" />
              <FiHeart className="text-black text-xl cursor-pointer hover:text-orange-500 transition-colors" />
              <div className="relative">
                <FiShoppingCart className="text-black text-xl cursor-pointer hover:text-orange-500 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          )}

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
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

              {/* Mobile Icons */}
              <div className="mt-6 flex justify-center space-x-6">
                <FiUser className="text-2xl cursor-pointer hover:text-orange-500" />
                <FiHeart className="text-2xl cursor-pointer hover:text-orange-500" />
                <div className="relative">
                  <FiShoppingCart className="text-2xl cursor-pointer hover:text-orange-500" />
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
