"use client";

import { Star } from "lucide-react";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2DFCF] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-[#D3744A] rounded-full flex items-center justify-center shadow-md">
          <span className="text-white font-semibold text-lg">
            {review.userName.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-[#160D05]">{review.userName}</h4>
          {review.userRole && (
            <p className="text-sm text-[#8F7D6A]">{review.userRole}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating
                ? "fill-[#D3744A] text-[#D3744A]"
                : "text-[#E2DFCF]"
            }`}
          />
        ))}
      </div>

      <p className="text-[#8F7D6A] leading-relaxed">
        &ldquo;{review.content}&rdquo;
      </p>
    </div>
  );
}
