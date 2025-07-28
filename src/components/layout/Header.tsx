"use client";

import Link from "next/link";
import { ShoppingCart, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

  return (
    <header className="bg-[#EEEDE7] border-b border-[#E2DFCF] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#D3744A] to-[#503217] rounded-full flex items-center justify-center shadow-md">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#160D05]">Medi Ecom</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-black hover:text-[#160D05] transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link
              href="/shop"
              className="text-black hover:text-[#160D05] transition-colors duration-200 font-medium">
              Shop
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-[#160D05] transition-colors duration-200 font-medium">
              About
            </Link>
            <Link
              href="/contact"
              className="text-black hover:text-[#160D05] transition-colors duration-200 font-medium">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="text-black hover:text-[#160D05] transition-colors duration-200 p-2 rounded-lg hover:bg-[#E2DFCF] relative">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D3744A] text-white text-xs rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
