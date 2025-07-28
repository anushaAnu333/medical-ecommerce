"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Stethoscope, Microscope, Pill, Heart } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Professional Medical Equipment",
    description:
      "High-quality diagnostic tools and medical devices for healthcare professionals",
    image:
      "https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UHJvZmVzc2lvbmFsJTIwTWVkaWNhbCUyMEVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    icon: Stethoscope,
    link: "/shop?category=lab-equipment",
    features: ["Certified Quality", "Fast Delivery", "Expert Support"],
  },
  {
    id: 2,
    title: "Pharmaceutical Supplies",
    description:
      "Comprehensive range of medicines and supplements for all health needs",
    image:
      "https://images.unsplash.com/photo-1523243319451-54b60322f948?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UGhhcm1hY2V1dGljYWwlMjBTdXBwbGllc3xlbnwwfHwwfHx8MA%3D%3D",
    icon: Pill,
    link: "/shop?category=medicine",
    features: ["FDA Approved", "Prescription & OTC", "Bulk Orders"],
  },
  {
    id: 3,
    title: "Wellness & Prevention",
    description:
      "Preventive healthcare products and wellness solutions for a healthier life",
    image:
      "https://images.unsplash.com/photo-1603274737277-ec736f1696e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2VsbG5lc3MlMjAlMjYlMjBQcmV2ZW50aW9ufGVufDB8fDB8fHww",
    icon: Heart,
    link: "/shop?category=health-care",
    features: ["Natural Products", "Wellness Plans", "Health Monitoring"],
  },
];

export default function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#160D05] mb-4">
            Our Healthcare Services
          </h2>
          <p className="text-xl text-[#8F7D6A] max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to meet the diverse
            needs of medical professionals and individuals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg border border-[#E2DFCF] overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#160D05]/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-[#D3744A] rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#160D05] mb-3">
                  {service.title}
                </h3>

                <p className="text-[#8F7D6A] mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#D3744A] rounded-full"></div>
                      <span className="text-sm text-[#8F7D6A]">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={service.link}
                  className="inline-flex items-center text-[#D3744A] font-semibold hover:text-[#503217] transition-colors duration-200 group/link">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
