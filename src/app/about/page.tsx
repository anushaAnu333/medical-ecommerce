"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  RefreshCw,
  Headphones,
  CreditCard,
  TrendingUp,
  ThumbsUp,
  Eye,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Health products you can trust service you deserve.
              </h1>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Image
                  src="/images/b12-medicine.jpg"
                  alt="Health products"
                  width={150}
                  height={150}
                  className="aspect-square object-cover rounded-lg"
                />
                <Image
                  src="/images/vitamin-c-serum.jpg"
                  alt="Health products"
                  width={150}
                  height={150}
                  className="aspect-square object-cover rounded-lg"
                />
                <Image
                  src="/images/glucose-meter.jpg"
                  alt="Health products"
                  width={150}
                  height={150}
                  className="aspect-square object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About us
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our focus is on nurturing wellness and empowering health for
                  all ages well being for people worldwide.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-gray-700">Free shipping</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-gray-700">Easy refund</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-gray-700">Online support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-gray-700">Flexible payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                What to Expect When You Join Our Team
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To provide accessible, high-quality health products that
                      empower individuals to take control of their wellness
                      journey.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ThumbsUp className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Commitments
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We&apos;re committed to supporting your health journey by
                      offering valuable educational resources, wellness
                      insights, and expert advice to help you make informed
                      decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Vision
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To become the most trusted destination for health and
                      wellness products, fostering a community where everyone
                      can achieve optimal health.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <Image
                  src="/images/about-hero.jpg"
                  alt="Health and wellness"
                  width={400}
                  height={400}
                  className="aspect-square object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Join our trustable Medi Ecom product community
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Join us as we build a community where wellness is accessible,
                education is empowering, and health is a shared journey.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Start Shopping
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/images/stethoscope.jpg"
                  alt="Medical equipment"
                  width={200}
                  height={200}
                  className="aspect-square object-cover rounded-lg"
                />
                <Image
                  src="/images/protein-powder.jpg"
                  alt="Health supplements"
                  width={200}
                  height={200}
                  className="aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <Image
                  src="/images/first-aid-kit.jpg"
                  alt="First aid supplies"
                  width={200}
                  height={200}
                  className="aspect-square object-cover rounded-lg"
                />
                <Image
                  src="/images/omega-3.jpg"
                  alt="Health supplements"
                  width={200}
                  height={200}
                  className="aspect-square object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Trust & Quality
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards of quality and transparency in
                all our products and services.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Community First
              </h3>
              <p className="text-gray-600">
                We believe in building a supportive community where everyone can
                access quality health products.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously innovate to provide cutting-edge health
                solutions and improve customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
