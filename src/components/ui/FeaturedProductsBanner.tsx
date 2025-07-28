"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShoppingCart } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Stethoscope",
    price: 89.99,
    originalPrice: 120.0,
    image: "/images/stethoscope.jpg",
    rating: 4.9,
    reviews: 156,
    badge: "Best Seller",
    description:
      "Professional grade stethoscope with exceptional acoustic performance",
  },
  {
    id: 2,
    name: "Digital Blood Pressure Monitor",
    price: 45.99,
    originalPrice: 65.0,
    image: "https://www.medtechlife.com/blood-pressure-monitors/images/big/BP-18-img-1.jpg",
    rating: 4.8,
    reviews: 203,
    badge: "Top Rated",
    description: "Accurate and easy-to-use blood pressure monitoring device",
  },
  {
    id: 3,
    name: "Vitamin D3 Supplement",
    price: 24.99,
    originalPrice: 35.0,
    image: "/images/b12-medicine.jpg",
    rating: 4.7,
    reviews: 89,
    badge: "New Arrival",
    description: "High-potency vitamin D3 for bone health and immunity",
  },
];

export default function FeaturedProductsBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#E8E6DE] via-[#E2DFCF] to-[#EBE9E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#160D05] mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-[#8F7D6A] max-w-2xl mx-auto">
            Discover our most popular and highly-rated healthcare products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg border border-[#E2DFCF] overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {product.badge && (
                  <div className="absolute top-4 left-4 bg-[#D3744A] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    {product.badge}
                  </div>
                )}

                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#EEEDE7] transition-colors duration-200">
                    <ShoppingCart className="w-5 h-5 text-[#8F7D6A]" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-[#D3744A] text-[#D3744A]"
                            : "text-[#E2DFCF]"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[#8F7D6A]">
                    ({product.reviews})
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#160D05] mb-2">
                  {product.name}
                </h3>

                <p className="text-[#8F7D6A] text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#160D05]">
                      ${product.price}
                    </span>
                    <span className="text-lg text-[#8F7D6A] line-through">
                      ${product.originalPrice}
                    </span>
                  </div>

                  <div className="text-sm text-[#D3744A] font-semibold">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    % OFF
                  </div>
                </div>

                <Link
                  href={`/product/${product.id}`}
                  className="w-full bg-gradient-to-r from-[#D3744A] to-[#503217] text-white py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:from-[#503217] hover:to-[#D3744A] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-semibold">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center bg-white text-[#160D05] border-2 border-[#8F7D6A] px-8 py-4 rounded-xl hover:bg-[#EEEDE7] hover:border-[#503217] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-semibold text-lg">
            View All Products
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
