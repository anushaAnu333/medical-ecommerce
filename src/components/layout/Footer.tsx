"use client";

import Link from "next/link";
import { Plus, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#160D05] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pages */}
          <div>
            <h3 className="font-semibold text-[#EEEDE7] mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Utility */}
          <div>
            <h3 className="font-semibold text-[#EEEDE7] mb-4">Utility</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/style-guide"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Style guide
                </Link>
              </li>
              <li>
                <Link
                  href="/instruction"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Instruction
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  href="/licenses"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Licenses
                </Link>
              </li>
              <li>
                <Link
                  href="/404"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  404
                </Link>
              </li>
              <li>
                <Link
                  href="/password"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Password
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-[#EEEDE7] mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop?category=medicine"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Medicine
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=health-care"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Health care
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=beauty-care"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Beauty care
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=fitness"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Fitness
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=lab-equipment"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Lab equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=medkits"
                  className="text-[#8F7D6A] hover:text-[#EEEDE7] transition-colors duration-200">
                  Medkits
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D3744A] to-[#503217] rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#EEEDE7]">Medifit</span>
            </div>
            <p className="text-[#8F7D6A] mb-4">
              Your trusted care now and always. For the best results, align your
              health needs with your medication plans.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-[#503217] rounded-full flex items-center justify-center hover:bg-[#D3744A] transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#503217] rounded-full flex items-center justify-center hover:bg-[#D3744A] transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#503217] rounded-full flex items-center justify-center hover:bg-[#D3744A] transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#503217] rounded-full flex items-center justify-center hover:bg-[#D3744A] transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#503217] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#8F7D6A] text-sm">
              © 2024 Medifit. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/terms"
                className="text-[#8F7D6A] hover:text-[#EEEDE7] text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-[#8F7D6A] hover:text-[#EEEDE7] text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-[#8F7D6A] hover:text-[#EEEDE7] text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
