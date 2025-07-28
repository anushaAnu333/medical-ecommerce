"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
  showButton?: boolean;
}

export default function ProductCard({
  product,
  showButton = true,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  const averageRating =
    product.reviews.length > 0
      ? product.reviews.reduce((acc, review) => acc + review.rating, 0) /
        product.reviews.length
      : 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E2DFCF] overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
      <div className="relative">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-56 object-cover"
        />
        {product.discount && (
          <div className="absolute top-4 left-4 bg-[#D3744A] text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
            Save {product.discount}%
          </div>
        )}
        {product.reviews.length === 0 && (
          <div className="absolute top-4 right-4 bg-[#503217] text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
            New
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(averageRating)
                  ? "fill-[#D3744A] text-[#D3744A]"
                  : "text-[#E2DFCF]"
              }`}
            />
          ))}
          <span className="text-sm text-black">({product.reviews.length})</span>
        </div>

        <h3 className="font-semibold text-[#160D05] mb-3 line-clamp-2 text-lg h-14 flex items-start">
          {product.name}
        </h3>

        <p className="text-black text-sm mb-6 line-clamp-3 h-16 flex items-start">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#160D05]">
              ${discountedPrice.toFixed(2)}
            </span>
            {product.discount && (
              <span className="text-sm text-[#8F7D6A] line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {showButton && (
          <div className="flex gap-2 mt-auto">
            <Link
              href={`/product/${product.id}`}
              className="flex-1 bg-[#EEEDE7] text-[#160D05] border border-[#8F7D6A] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#E2DFCF] transition-colors duration-200 text-center">
              View Details
            </Link>
            <button
              onClick={() => {
                addToCart(product, 1);
                alert("Product added to cart!");
              }}
              className="bg-[#D3744A] text-white p-2 rounded-lg hover:bg-[#503217] transition-colors duration-200">
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
