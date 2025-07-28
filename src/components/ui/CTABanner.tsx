"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Mail, Clock, Shield } from "lucide-react";

interface CTABannerProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  features?: Array<{
    iconName: "clock" | "phone" | "shield" | "mail";
    text: string;
  }>;
  variant?: "primary" | "secondary" | "emergency";
}

export default function CTABanner({
  image,
  title,
  subtitle,
  description,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  features = [],
  variant = "primary",
}: CTABannerProps) {
  const variantStyles = {
    primary: {
      gradient: "from-[#D3744A] to-[#503217]",
      hoverGradient: "hover:from-[#503217] hover:to-[#D3744A]",
      bgColor: "bg-[#EEEDE7]",
    },
    secondary: {
      gradient: "from-[#503217] to-[#8F7D6A]",
      hoverGradient: "hover:from-[#8F7D6A] hover:to-[#503217]",
      bgColor: "bg-[#E8E6DE]",
    },
    emergency: {
      gradient: "from-red-600 to-red-800",
      hoverGradient: "hover:from-red-800 hover:to-red-600",
      bgColor: "bg-red-50",
    },
  };

  const currentVariant = variantStyles[variant];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "clock":
        return <Clock className="w-4 h-4 text-[#D3744A]" />;
      case "phone":
        return <Phone className="w-4 h-4 text-[#D3744A]" />;
      case "shield":
        return <Shield className="w-4 h-4 text-[#D3744A]" />;
      case "mail":
        return <Mail className="w-4 h-4 text-[#D3744A]" />;
      default:
        return <Shield className="w-4 h-4 text-[#D3744A]" />;
    }
  };

  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" priority />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#160D05]/70 via-[#160D05]/50 to-[#160D05]/30"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {title}
          </h2>

          <p className="text-xl text-[#EEEDE7] mb-2 font-medium">{subtitle}</p>

          <p className="text-lg text-[#EEEDE7] mb-8 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          {features.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  {getIcon(feature.iconName)}
                  <span className="text-white text-sm font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryCtaLink}
              className={`inline-flex items-center bg-gradient-to-r ${currentVariant.gradient} ${currentVariant.hoverGradient} text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg group`}>
              {primaryCtaText}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="inline-flex items-center bg-white text-[#160D05] border-2 border-white px-8 py-4 rounded-xl hover:bg-[#EEEDE7] hover:border-[#8F7D6A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg">
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
