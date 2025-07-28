"use client";

export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="bg-[#EEEDE7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-12 bg-[#E2DFCF] rounded-lg mb-6"></div>
              <div className="h-6 bg-[#E2DFCF] rounded-lg mb-8 w-3/4"></div>
              <div className="flex gap-4">
                <div className="h-12 bg-[#E2DFCF] rounded-xl w-40"></div>
                <div className="h-12 bg-[#E2DFCF] rounded-xl w-32"></div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="h-96 bg-[#E2DFCF] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid Skeleton */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 bg-[#E2DFCF] rounded-lg mb-12 w-1/3 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-[#E2DFCF] overflow-hidden">
                <div className="h-48 bg-[#E2DFCF]"></div>
                <div className="p-6">
                  <div className="h-4 bg-[#E2DFCF] rounded mb-2"></div>
                  <div className="h-4 bg-[#E2DFCF] rounded mb-4 w-3/4"></div>
                  <div className="h-6 bg-[#E2DFCF] rounded mb-4 w-1/2"></div>
                  <div className="h-10 bg-[#E2DFCF] rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section Skeleton */}
      <div className="py-20 bg-[#E8E6DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 bg-[#E2DFCF] rounded-lg mb-4 w-1/2 mx-auto"></div>
          <div className="h-6 bg-[#E2DFCF] rounded-lg mb-16 w-1/3 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-[#E2DFCF] rounded-full mx-auto mb-6"></div>
                <div className="h-8 bg-[#E2DFCF] rounded mb-2"></div>
                <div className="h-4 bg-[#E2DFCF] rounded mb-2"></div>
                <div className="h-4 bg-[#E2DFCF] rounded w-3/4 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E2DFCF] overflow-hidden animate-pulse">
      <div className="h-48 bg-[#E2DFCF]"></div>
      <div className="p-6">
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-[#E2DFCF] rounded"></div>
          ))}
        </div>
        <div className="h-5 bg-[#E2DFCF] rounded mb-2"></div>
        <div className="h-4 bg-[#E2DFCF] rounded mb-4 w-3/4"></div>
        <div className="h-6 bg-[#E2DFCF] rounded mb-4 w-1/2"></div>
        <div className="h-10 bg-[#E2DFCF] rounded-lg"></div>
      </div>
    </div>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#E2DFCF] animate-pulse">
      <div className="w-16 h-16 bg-[#E2DFCF] rounded-full mx-auto mb-4"></div>
      <div className="h-5 bg-[#E2DFCF] rounded mb-2"></div>
      <div className="h-4 bg-[#E2DFCF] rounded w-1/2 mx-auto"></div>
    </div>
  );
}
