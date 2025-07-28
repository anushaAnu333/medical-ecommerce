"use client";

import { useRouter } from "next/navigation";
import {
  Pill,
  Heart,
  Leaf,
  Activity,
  Beaker,
  Package,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { Category } from "@/types";

interface CategoryIconGridProps {
  categories: Category[];
}

const categoryIcons: {
  [key: string]: React.ComponentType<{ className?: string }>;
} = {
  Medicine: Pill,
  "Health care": Heart,
  "Beauty care": Leaf,
  Fitness: Activity,
  "Lab equipment": Beaker,
  Medkits: Package,
  Wellness: Stethoscope,
  Supplements: Syringe,
};

const categoryColors = [
  "bg-[#D3744A]",
  "bg-[#503217]",
  "bg-[#8F7D6A]",
  "bg-[#D3744A]",
  "bg-[#503217]",
  "bg-[#8F7D6A]",
];

export default function CategoryIconGrid({
  categories,
}: CategoryIconGridProps) {
  const router = useRouter();

  const handleCategoryClick = (categoryId: string) => {
    router.push(`/shop?category=${categoryId}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {categories.map((category, index) => {
        const IconComponent = categoryIcons[category.name] || Pill;
        const bgColor = categoryColors[index % categoryColors.length];

        return (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="group text-center bg-white p-2 rounded-2xl shadow-sm border border-[#E2DFCF] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div
              className={`w-20 h-20 mx-auto mb-6 ${bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md`}>
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-semibold text-[#160D05] mb-3 text-lg">
              {category.name}
            </h3>
            <p className="text-sm text-black">
              {category.products.length} Items
            </p>
          </button>
        );
      })}
    </div>
  );
}
