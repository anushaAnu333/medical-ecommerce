"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const calculateSubtotal = () => {
    return getCartTotal();
  };

  const calculateShipping = () => {
    return cartItems.length > 0 ? 5.99 : 0;
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping() + calculateTax();
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F8F7F4] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven&apos;t added any items to your cart yet.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-[#D3744A] text-white px-6 py-3 rounded-lg hover:bg-[#503217] transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-[#8F7D6A] hover:text-[#503217] transition-colors duration-200 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <p className="text-black mt-2">
            {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your
            cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-[#E2DFCF] overflow-hidden">
              <div className="p-6 border-b border-[#E2DFCF]">
                <h2 className="text-xl font-semibold text-gray-800">
                  Cart Items
                </h2>
              </div>

              <div className="divide-y divide-[#E2DFCF]">
                {cartItems.map((item) => {
                  const discountedPrice = item.product.discount
                    ? item.product.price -
                      (item.product.price * item.product.discount) / 100
                    : item.product.price;

                  return (
                    <div key={item.product.id} className="p-6">
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <Image
                            src={item.product.imageUrl}
                            alt={item.product.name}
                            width={80}
                            height={80}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-800 mb-1">
                                {item.product.name}
                              </h3>
                              <p className="text-sm text-black mb-2">
                                {item.product.category.name}
                              </p>
                              <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-[#D3744A]">
                                  ${discountedPrice.toFixed(2)}
                                </span>
                                {item.product.discount && (
                                  <span className="text-sm text-black line-through">
                                    ${item.product.price.toFixed(2)}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Remove Button */}
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center border border-gray-200 rounded-lg">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity - 1
                                  )
                                }
                                className="p-2 hover:bg-gray-50 transition-colors duration-200">
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-4 py-2 text-center min-w-[60px]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity + 1
                                  )
                                }
                                className="p-2 hover:bg-gray-50 transition-colors duration-200">
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-black">Total</p>
                              <p className="font-semibold text-gray-800">
                                ${(discountedPrice * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-[#E2DFCF] p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-black">Subtotal</span>
                  <span className="font-medium">
                    ${calculateSubtotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Shipping</span>
                  <span className="font-medium">
                    ${calculateShipping().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">Tax (8%)</span>
                  <span className="font-medium">
                    ${calculateTax().toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-800">
                      Total
                    </span>
                    <span className="text-lg font-bold text-[#D3744A]">
                      ${calculateTotal().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-[#D3744A] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#503217] transition-colors duration-200 text-center block">
                Proceed to Checkout
              </Link>

              <div className="mt-4 text-center">
                <Link
                  href="/shop"
                  className="text-black hover:text-[#503217] transition-colors duration-200 text-sm">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
