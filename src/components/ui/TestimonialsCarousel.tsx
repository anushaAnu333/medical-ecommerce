"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Cardiologist",
    image: "/images/doctor.jpg",
    content:
      "Medifit has been my go-to source for medical equipment. The quality is exceptional and delivery is always prompt. Highly recommended for healthcare professionals.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "General Practitioner",
    image: "/images/laboratory.jpg",
    content:
      "The range of products available is impressive. I can find everything I need for my practice in one place. Customer service is outstanding.",
    rating: 5,
  },
  {
    id: 3,
    name: "Nurse Emily Rodriguez",
    role: "ICU Nurse",
    image: "/images/pharmacy.jpg",
    content:
      "As a nurse, I need reliable medical supplies. Medifit never disappoints. The products are top-quality and the prices are competitive.",
    rating: 5,
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    role: "Pediatrician",
    image: "/images/b12-medicine.jpg",
    content:
      "I've been ordering from Medifit for over 3 years now. The consistency in quality and service is remarkable. They truly understand healthcare needs.",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-[#EEEDE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#160D05] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-[#8F7D6A] max-w-2xl mx-auto">
            Trusted by healthcare professionals across the country
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#E2DFCF] relative">
            <div className="absolute top-6 right-6">
              <Quote className="w-8 h-8 text-[#D3744A] opacity-20" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#E2DFCF]">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-[#160D05] mb-1">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-[#8F7D6A] mb-2">
                  {testimonials[currentIndex].role}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonials[currentIndex].rating
                          ? "fill-[#D3744A] text-[#D3744A]"
                          : "text-[#E2DFCF]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-lg text-[#8F7D6A] leading-relaxed text-center md:text-left italic">
              "{testimonials[currentIndex].content}"
            </p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-[#E2DFCF] flex items-center justify-center hover:bg-[#EEEDE7] transition-colors duration-200">
            <ChevronLeft className="w-6 h-6 text-[#8F7D6A]" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-[#E2DFCF] flex items-center justify-center hover:bg-[#EEEDE7] transition-colors duration-200">
            <ChevronRight className="w-6 h-6 text-[#8F7D6A]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-[#D3744A] w-8"
                    : "bg-[#E2DFCF] hover:bg-[#8F7D6A]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
