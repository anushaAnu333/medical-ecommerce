"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Shield } from "lucide-react";

interface SplitBannerProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  badge?: string;
  features?: string[];
  imagePosition?: "left" | "right";
  bgColor?: string;
}

export default function SplitBanner({
  image,
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  badge,
  features = [],
  imagePosition = "left",
  bgColor = "bg-[#EEEDE7]",
}: SplitBannerProps) {
  const ImageSection = (
    <div className="relative h-96 md:h-full overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#160D05]/20 to-transparent"></div>
    </div>
  );

  const ContentSection = (
    <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
      {badge && (
        <div className="inline-flex items-center bg-[#D3744A] text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg w-fit">
          <Star className="w-4 h-4 mr-2" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-[#160D05] mb-4 leading-tight">
        {title}
      </h2>

      <p className="text-xl text-[#8F7D6A] mb-2 font-medium">{subtitle}</p>

      <p className="text-lg text-[#8F7D6A] mb-8 leading-relaxed">
        {description}
      </p>

      {features.length > 0 && (
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#D3744A] flex-shrink-0" />
              <span className="text-[#160D05] font-medium">{feature}</span>
            </div>
          ))}
        </div>
      )}

      <Link
        href={ctaLink}
        className="inline-flex items-center bg-gradient-to-r from-[#D3744A] to-[#503217] text-white px-8 py-4 rounded-xl hover:from-[#503217] hover:to-[#D3744A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg group w-fit">
        {ctaText}
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  );

  return (
    <section className={`${bgColor} overflow-hidden`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {imagePosition === "left" ? (
          <>
            {ImageSection}
            {ContentSection}
          </>
        ) : (
          <>
            {ContentSection}
            {ImageSection}
          </>
        )}
      </div>
    </section>
  );
}
