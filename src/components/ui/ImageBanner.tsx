"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

interface ImageBannerProps {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  badge?: string;
  rating?: number;
  reviews?: number;
}

export default function ImageBanner({
  image,
  title,
  subtitle,
  ctaText,
  ctaLink,
  rating,
  reviews,
}: ImageBannerProps) {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg">
      <Image
        src={image}
        alt={title}
        width={1200}
        height={400}
        className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#160D05]/80 via-[#160D05]/40 to-transparent"></div>

      <div className="absolute inset-0 flex items-center">
        <div className="px-8 md:px-12 max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
            {title}
          </h2>

          <p className="text-[#EEEDE7] mb-6 leading-relaxed">{subtitle}</p>

          {rating && reviews && (
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating
                        ? "fill-[#D3744A] text-[#D3744A]"
                        : "text-[#8F7D6A]"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[#EEEDE7] text-sm">
                ({reviews} reviews)
              </span>
            </div>
          )}

          <Link
            href={ctaLink}
            className="inline-flex items-center bg-gradient-to-r from-[#D3744A] to-[#503217] text-white px-6 py-3 rounded-xl hover:from-[#503217] hover:to-[#D3744A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
