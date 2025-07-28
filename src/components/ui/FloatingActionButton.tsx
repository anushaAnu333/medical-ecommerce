"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ShoppingCart } from "lucide-react";

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 space-y-4">


        {/* Quick Cart */}
        <button className="w-14 h-14 bg-[#8F7D6A] rounded-full shadow-lg hover:bg-[#D3744A] transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative">
          <ShoppingCart className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D3744A] text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
          <span className="absolute right-16 bg-[#160D05] text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Quick Cart
          </span>
        </button>

        {/* Back to Top */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-gradient-to-r from-[#D3744A] to-[#503217] rounded-full shadow-lg hover:from-[#503217] hover:to-[#D3744A] transition-all duration-300 transform hover:scale-110 flex items-center justify-center group">
            <ArrowUp className="w-6 h-6 text-white" />
            <span className="absolute right-16 bg-[#160D05] text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Back to Top
            </span>
          </button>
        )}
      </div>
    </>
  );
}
