"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Minus, Plus } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import ReviewCard from "@/components/ui/ReviewCard";
import { Product, Review } from "@/types";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/contexts/ToastContext";

interface ProductDetailClientProps {
  product: Product;
  reviews: Review[];
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  reviews,
  relatedProducts,
}: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  const averageRating =
    product.reviews.length > 0
      ? product.reviews.reduce((acc, review) => acc + review.rating, 0) /
        product.reviews.length
      : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    addToast({
      type: "success",
      title: "Added to Cart!",
      message: `${quantity} ${quantity === 1 ? "item" : "items"} of ${
        product.name
      } added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-[#EEEDE7] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-[#E2DFCF]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl relative overflow-hidden shadow-md">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-[#160D05] mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(averageRating)
                          ? "fill-[#D3744A] text-[#D3744A]"
                          : "text-[#E2DFCF]"
                      }`}
                    />
                  ))}
                  <span className="text-[#8F7D6A]">
                    ({product.reviews.length} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-[#160D05]">
                  ${discountedPrice.toFixed(2)} USD
                </span>
                {product.discount && (
                  <span className="text-lg text-[#8F7D6A] line-through">
                    ${product.price.toFixed(2)} USD
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#E2DFCF] rounded-lg bg-[#EEEDE7]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-[#E2DFCF] transition-colors duration-200">
                    <Minus className="w-4 h-4 text-[#8F7D6A]" />
                  </button>
                  <span className="px-4 py-2 text-[#160D05] font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-[#E2DFCF] transition-colors duration-200">
                    <Plus className="w-4 h-4 text-[#8F7D6A]" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className=" bg-gradient-to-r from-[#D3744A] to-[#503217] text-white py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:from-[#503217] hover:to-[#D3744A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#160D05]">
                  Product Description
                </h3>
                <p className="text-[#8F7D6A] leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#160D05]">
                  Key Benefits:
                </h3>
                <ul className="space-y-2 text-[#8F7D6A]">
                  <li>• Boosts energy levels</li>
                  <li>• Supports healthy brain function</li>
                  <li>• Promotes red blood cell production</li>
                  <li>• Aids in maintaining nerve health</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-[#E2DFCF]">
            <div className="w-12 h-12 bg-[#D3744A] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-xl">🚚</span>
            </div>
            <h4 className="font-semibold text-[#160D05] mb-1">Free Shipping</h4>
            <p className="text-sm text-[#8F7D6A]">On orders over $50</p>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-[#E2DFCF]">
            <div className="w-12 h-12 bg-[#503217] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-xl">🔄</span>
            </div>
            <h4 className="font-semibold text-[#160D05] mb-1">Easy Returns</h4>
            <p className="text-sm text-[#8F7D6A]">30 day return policy</p>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-[#E2DFCF]">
            <div className="w-12 h-12 bg-[#8F7D6A] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-xl">🔒</span>
            </div>
            <h4 className="font-semibold text-[#160D05] mb-1">
              Secure Payment
            </h4>
            <p className="text-sm text-[#8F7D6A]">100% secure checkout</p>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-[#E2DFCF]">
            <div className="w-12 h-12 bg-[#D3744A] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-xl">💬</span>
            </div>
            <h4 className="font-semibold text-[#160D05] mb-1">24/7 Support</h4>
            <p className="text-sm text-[#8F7D6A]">Always here to help</p>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-[#E2DFCF]">
          <h2 className="text-2xl font-bold text-[#160D05] mb-8">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#E2DFCF]">
          <h2 className="text-2xl font-bold text-[#160D05] mb-8">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
