"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Clock, Shield, Truck } from "lucide-react";

interface BackgroundBannerProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  badge?: string;
  features?: string[];
  variant?: "left" | "right" | "center";
  height?: "small" | "medium" | "large";
}

export default function BackgroundBanner({
  image,
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  badge,
  features = [],
  variant = "left",
  height = "medium",
}: BackgroundBannerProps) {
  const heightClasses = {
    small: "h-64 md:h-80",
    medium: "h-80 md:h-96",
    large: "h-96 md:h-[500px]",
  };

  const contentAlignment = {
    left: "items-start text-left",
    right: "items-end text-right",
    center: "items-center text-center",
  };

  return (
    <section className={`relative ${heightClasses[height]} overflow-hidden`}>
      <Image src={image} alt={title} fill className="object-cover" priority />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#160D05]/80 via-[#160D05]/60 to-[#160D05]/40"></div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className={`flex flex-col ${contentAlignment[variant]} max-w-2xl ${
              variant === "right" ? "ml-auto" : ""
            }`}>
            {badge && (
              <div className="inline-flex items-center bg-[#D3744A] text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
                <Star className="w-4 h-4 mr-2" />
                {badge}
              </div>
            )}

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {title}
            </h2>

            <p className="text-xl text-[#EEEDE7] mb-2 font-medium">
              {subtitle}
            </p>

            <p className="text-lg text-[#EEEDE7] mb-8 leading-relaxed">
              {description}
            </p>

            {features.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <Shield className="w-4 h-4 text-[#D3744A]" />
                    <span className="text-white text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <Link
              href={ctaLink}
              className="inline-flex items-center bg-gradient-to-r from-[#D3744A] to-[#503217] text-white px-8 py-4 rounded-xl hover:from-[#503217] hover:to-[#D3744A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg group">
              {ctaText}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
