"use client";

import { Users, Package, Star, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "50K+",
    label: "Happy Customers",
    description: "Trusted by healthcare professionals worldwide",
    color: "bg-[#D3744A]",
  },
  {
    icon: Package,
    number: "10K+",
    label: "Products Delivered",
    description: "Quality medical supplies and equipment",
    color: "bg-[#503217]",
  },
  {
    icon: Star,
    number: "4.9",
    label: "Customer Rating",
    description: "Consistently excellent service quality",
    color: "bg-[#8F7D6A]",
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Leading healthcare e-commerce platform",
    color: "bg-[#D3744A]",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#E8E6DE] via-[#E2DFCF] to-[#EBE9E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#160D05] mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-[#8F7D6A] max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Medifit for their healthcare needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-[#E2DFCF] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-[#160D05] mb-2">
                {stat.number}
              </div>
              
              <h3 className="text-lg font-semibold text-[#160D05] mb-2">
                {stat.label}
              </h3>
              
              <p className="text-[#8F7D6A] text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 