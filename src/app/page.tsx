import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import CategoryIconGrid from "@/components/ui/CategoryIconGrid";
import ReviewCard from "@/components/ui/ReviewCard";
import NewsletterForm from "@/components/ui/NewsletterForm";
import ImageBanner from "@/components/ui/ImageBanner";
import SplitBanner from "@/components/ui/SplitBanner";
import ServicesShowcase from "@/components/ui/ServicesShowcase";
import FloatingActionButton from "@/components/ui/FloatingActionButton";

// Mock data - in a real app, this would come from the API
const mockCategories = [
  {
    id: "1",
    name: "Medicine",
    icon: "Pill",
    products: Array(32).fill({}),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Health care",
    icon: "Heart",
    products: Array(28).fill({}),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Beauty care",
    icon: "Leaf",
    products: Array(24).fill({}),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Fitness",
    icon: "Activity",
    products: Array(20).fill({}),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    name: "Lab equipment",
    icon: "Beaker",
    products: Array(16).fill({}),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    name: "Medkits",
    icon: "Package",
    products: Array(12).fill({}),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const mockProducts = [
  {
    id: "1",
    name: "Advanced B12 Complex",
    description:
      "Premium methylcobalamin supplement with enhanced bioavailability for optimal energy metabolism and neurological health",
    price: 25.0,
    discount: 24,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: "1",
    category: {
      id: "1",
      name: "Medicine",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(5).fill({ rating: 4 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Digital Tonometer Pro",
    description:
      "Advanced intraocular pressure measurement device with digital precision and comprehensive diagnostic capabilities",
    price: 45.0,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1682824037662-441941b8e4e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9ub21ldGVyfGVufDB8fDB8fHww",
    categoryId: "5",
    category: {
      id: "5",
      name: "Lab equipment",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(3).fill({ rating: 5 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Glucose Monitoring",
    description:
      "Next-generation blood glucose monitoring with wireless connectivity and advanced analytics for comprehensive diabetes management",
    price: 35.0,
    discount: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1685485276914-6cefc2417c05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJsb29kJTIwR2x1Y29zZSUyME1ldGVyfGVufDB8fDB8fHww",
    categoryId: "5",
    category: {
      id: "5",
      name: "Lab equipment",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(8).fill({ rating: 4 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Cardiology Stethoscope",
    description:
      "High-fidelity acoustic stethoscope designed for cardiologists with exceptional sound clarity and precision auscultation",
    price: 55.0,
    imageUrl:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: "5",
    category: {
      id: "5",
      name: "Lab equipment",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(12).fill({ rating: 5 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const mockReviews = [
  {
    id: "1",
    productId: "1",
    content:
      "Excellent product! I've been taking this B12 supplement for 3 months and noticed a significant improvement in my energy levels.",
    rating: 5,
    userName: "Olivia Garcia",
    userRole: "Health enthusiast",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    productId: "1",
    content:
      "Great quality and fast shipping. The pills are easy to swallow and I feel more energetic throughout the day.",
    rating: 4,
    userName: "Sophia Brown",
    userRole: "Fitness trainer",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    productId: "1",
    content:
      "Perfect for my vegetarian diet. I was deficient in B12 and this supplement has helped me maintain healthy levels.",
    rating: 5,
    userName: "Ethan Harris",
    userRole: "Nutritionist",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    productId: "1",
    content:
      "Highly recommend! The quality is outstanding and the results are noticeable within weeks.",
    rating: 5,
    userName: "Emma Wilson",
    userRole: "Wellness coach",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EEEDE7]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E8E6DE] via-[#E2DFCF] to-[#EBE9E0] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#503217] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#160D05] mb-6 leading-tight">
                Premium Healthcare Solutions for Every Need
              </h1>
              <p className="text-xl text-[#8F7D6A] mb-8 leading-relaxed">
                Discover world-class medical equipment, pharmaceuticals, and
                wellness products. Trusted by healthcare professionals and
                individuals worldwide for quality and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center bg-gradient-to-r from-[#D3744A] to-[#503217] text-white px-8 py-4 rounded-xl hover:from-[#503217] hover:to-[#D3744A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Explore Products
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center bg-white text-[#160D05] border-2 border-[#8F7D6A] px-8 py-4 rounded-xl hover:bg-[#EEEDE7] hover:border-[#503217] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-semibold text-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl  shadow-lg ">
                <Image
                  src="https://images.unsplash.com/photo-1664902265139-934219cee42f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UHJvZmVzc2lvbmFsJTIwTWVkaWNhbCUyMEVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Medical and health products"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#160D05] mb-4">
              Our Healthcare Solutions
            </h2>
            <p className="text-xl text-[#8F7D6A] max-w-3xl mx-auto">
              Comprehensive range of medical equipment, pharmaceuticals, and
              wellness products
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ImageBanner
              image="https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UHJvZmVzc2lvbmFsJTIwTWVkaWNhbCUyMEVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D"
              title="Professional Medical Equipment"
              subtitle="High-quality diagnostic tools and devices for healthcare professionals"
              ctaText="Shop Equipment"
              ctaLink="/shop?category=lab-equipment"
              badge="Premium Quality"
              rating={4.9}
              reviews={234}
            />
            <ImageBanner
              image="https://images.unsplash.com/photo-1523243319451-54b60322f948?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UGhhcm1hY2V1dGljYWwlMjBTdXBwbGllc3xlbnwwfHwwfHx8MA%3D%3D"
              title="Pharmaceutical Supplies"
              subtitle="Comprehensive range of medicines and supplements for all health needs"
              ctaText="Browse Medicines"
              ctaLink="/shop?category=medicine"
              badge="FDA Approved"
              rating={4.8}
              reviews={189}
            />
            <ImageBanner
              image="https://images.unsplash.com/photo-1603274737277-ec736f1696e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2VsbG5lc3MlMjAlMjYlMjBQcmV2ZW50aW9ufGVufDB8fDB8fHww"
              title="Wellness & Prevention"
              subtitle="Preventive healthcare products and wellness solutions for a healthier life"
              ctaText="Explore Wellness"
              ctaLink="/shop?category=health-care"
              badge="Natural Products"
              rating={4.7}
              reviews={156}
            />
          </div>
        </div>
      </section>

      {/* Split Banner - Medical Equipment */}
      <SplitBanner
        image="https://regalmed.ae/wp-content/uploads/2024/07/Breaking-News-Dubai-Launches-State-of-the-Art-Medical-Equipment.jpg"
        title="State-of-the-Art Medical Technology"
        subtitle="Empowering Healthcare Excellence"
        description="Delivering precision diagnostic instruments and advanced medical devices that meet international standards. Our equipment enables healthcare professionals to provide superior patient care with confidence."
        ctaText="Discover Technology"
        ctaLink="/shop?category=lab-equipment"
        badge="International Standards"
        features={[
          "CE & FDA Certified",
          "Extended Warranty Coverage",
          "Dedicated Technical Support",
          "Volume Pricing Available",
        ]}
        imagePosition="right"
        bgColor="bg-white"
      />

      {/* Shop by Category */}
      <section className="py-24 bg-[#E8E6DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#160D05] text-center mb-4">
            Comprehensive Healthcare Categories
          </h2>
          <p className="text-xl text-[#8F7D6A] text-center mb-16 max-w-3xl mx-auto">
            Explore our extensive range of healthcare products organized for
            your convenience
          </p>
          <CategoryIconGrid categories={mockCategories} />
        </div>
      </section>

      {/* Services Showcase */}
      <ServicesShowcase />

      {/* Latest Health Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#160D05] text-center mb-4">
            Cutting-Edge Healthcare Products
          </h2>
          <p className="text-xl text-[#8F7D6A] text-center mb-16 max-w-3xl mx-auto">
            Discover our latest innovations in medical technology and healthcare
            solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202210/64e01bf1f7dbd9099e249e9c3247fdbb9a46b4b1-1280x720-sixteen_nine.jpg?size=948:533"
                alt="Health and wellness"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#EEEDE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#160D05] text-center mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#8F7D6A] text-center mb-16 max-w-3xl mx-auto">
            Trusted by healthcare professionals and individuals worldwide
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <FloatingActionButton />
    </div>
  );
}
