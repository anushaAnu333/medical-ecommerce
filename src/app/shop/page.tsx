"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Grid, List } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import CategoryIconGrid from "@/components/ui/CategoryIconGrid";
import { Product, Category } from "@/types";

// Mock data - in a real app, this would come from the API
const mockCategories: Category[] = [
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
    icon: "FirstAid",
    products: Array(12).fill({}),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const mockProducts: Product[] = [
  {
    id: "1",
    name: "B12 Medicine",
    description: "Premium B12 supplement for energy and nervous system health",
    price: 25.0,
    discount: 24,
    imageUrl:
      "https://images.unsplash.com/photo-1729704166657-9a5744b7200c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QjEyJTIwTWVkaWNpbmV8ZW58MHx8MHx8fDA%3D",
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
    name: "Tonometer",
    description: "Professional eye pressure measurement device",
    price: 45.0,
    imageUrl:
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9ub21ldGVyfGVufDB8fDB8fHww",
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
    name: "Blood Glucose Meter",
    description: "Accurate blood sugar monitoring device",
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
    name: "Stethoscope",
    description: "Professional medical stethoscope for accurate auscultation",
    price: 55.0,
    imageUrl:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RldGhvc2NvcGV8ZW58MHx8MHx8fDA%3D",
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
  {
    id: "5",
    name: "Vitamin C Serum",
    description: "Advanced vitamin C serum for skin health and anti-aging",
    price: 30.0,
    discount: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1731599974318-97a336b9bd5f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Vml0YW1pbiUyMEMlMjBTZXJ1bXxlbnwwfHwwfHx8MA%3D%3D",
    categoryId: "3",
    category: {
      id: "3",
      name: "Beauty care",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(15).fill({ rating: 5 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    name: "Protein Powder",
    description: "High-quality protein supplement for muscle building",
    price: 40.0,
    imageUrl:
      "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb3RlaW4lMjBQb3dkZXJ8ZW58MHx8MHx8fDA%3D",
    categoryId: "4",
    category: {
      id: "4",
      name: "Fitness",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(10).fill({ rating: 4 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    name: "First Aid Kit",
    description: "Comprehensive first aid kit for emergencies",
    price: 25.0,
    discount: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1585673551689-74e88de97395?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
    categoryId: "6",
    category: {
      id: "6",
      name: "Medkits",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(7).fill({ rating: 5 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    name: "Omega-3 Supplements",
    description: "Essential fatty acids for heart and brain health",
    price: 20.0,
    imageUrl:
      "https://images.unsplash.com/photo-1700911639640-854353c0465f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8T21lZ2ElMjAzJTIwU3VwcGxlbWVudHN8ZW58MHx8MHx8fDA%3D",
    categoryId: "1",
    category: {
      id: "1",
      name: "Medicine",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(9).fill({ rating: 4 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "9",
    name: "Digital Blood Pressure Monitor",
    description:
      "Advanced digital blood pressure monitor with irregular heartbeat detection and memory storage",
    price: 65.0,
    discount: 12,
    imageUrl:
      "https://www.medtechlife.com/blood-pressure-monitors/images/big/BP-18-img-1.jpg",
    categoryId: "5",
    category: {
      id: "5",
      name: "Lab equipment",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(18).fill({ rating: 5 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "10",
    name: "Vitamin D3 + K2 Complex",
    description:
      "Advanced vitamin D3 and K2 combination for bone health and immune system support",
    price: 28.0,
    imageUrl:
      "https://humann.com/cdn/shop/files/DK32-Tablets-1.png?format=webp&height=1280&pad_color=FFFFFF&v=1746558080&width=1280",
    categoryId: "1",
    category: {
      id: "1",
      name: "Medicine",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(14).fill({ rating: 4 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "11",
    name: "Retinol Anti-Aging Serum",
    description:
      "Professional-grade retinol serum for advanced anti-aging and skin rejuvenation",
    price: 45.0,
    discount: 18,
    imageUrl: "https://m.media-amazon.com/images/I/61+jD4FEAPL.jpg",
    categoryId: "3",
    category: {
      id: "3",
      name: "Beauty care",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(22).fill({ rating: 5 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "12",
    name: "Resistance Bands Set",
    description:
      "Professional resistance bands set for strength training and rehabilitation exercises",
    price: 35.0,
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVzaXN0YW5jZSUyMEJhbmRzfGVufDB8fDB8fHww",
    categoryId: "4",
    category: {
      id: "4",
      name: "Fitness",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(16).fill({ rating: 4 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "13",
    name: "Emergency Trauma Kit",
    description:
      "Comprehensive emergency trauma kit for professional medical response and critical care",
    price: 85.0,
    discount: 8,
    imageUrl: "https://m.media-amazon.com/images/I/81Z9Ih3Pj2L.jpg",
    categoryId: "6",
    category: {
      id: "6",
      name: "Medkits",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(9).fill({ rating: 5 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "14",
    name: "Magnesium Citrate Complex",
    description:
      "High-absorption magnesium citrate for muscle relaxation and sleep support",
    price: 22.0,
    imageUrl:
      "https://m.media-amazon.com/images/I/51nxPGzGjjL._UF1000,1000_QL80_.jpg",
    categoryId: "1",
    category: {
      id: "1",
      name: "Medicine",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(11).fill({ rating: 4 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "15",
    name: "Pulse Oximeter Pro",
    description:
      "Professional pulse oximeter with advanced SpO2 monitoring and heart rate tracking",
    price: 38.0,
    discount: 15,
    imageUrl: "https://m.media-amazon.com/images/I/61ZvEw8Yu9L.jpg",
    categoryId: "5",
    category: {
      id: "5",
      name: "Lab equipment",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(13).fill({ rating: 5 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "16",
    name: "Hyaluronic Acid Serum",
    description:
      "Intensive hyaluronic acid serum for deep hydration and skin plumping",
    price: 32.0,
    imageUrl:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/csm/csm15107/l/40.jpg",
    categoryId: "3",
    category: {
      id: "3",
      name: "Beauty care",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(19).fill({ rating: 5 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "17",
    name: "Yoga Mat Premium",
    description:
      "Professional-grade yoga mat with superior grip and cushioning for all fitness activities",
    price: 55.0,
    discount: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WW9nYSUyME1hdHxlbnwwfHwwfHx8MA%3D%3D",
    categoryId: "4",
    category: {
      id: "4",
      name: "Fitness",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(25).fill({ rating: 5 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "18",
    name: "Travel First Aid Kit",
    description:
      "Compact travel first aid kit with essential medical supplies for on-the-go emergencies",
    price: 18.0,
    imageUrl: "https://m.media-amazon.com/images/I/51faV62Rf0L.jpg",
    categoryId: "6",
    category: {
      id: "6",
      name: "Medkits",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(8).fill({ rating: 4 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "19",
    name: "Iron Supplement Complex",
    description:
      "Advanced iron supplement with vitamin C for optimal absorption and energy support",
    price: 26.0,
    discount: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SXJvbiUyMFN1cHBsZW1lbnR8ZW58MHx8MHx8fDA%3D",
    categoryId: "1",
    category: {
      id: "1",
      name: "Medicine",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(12).fill({ rating: 4 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "20",
    name: "Digital Thermometer",
    description:
      "Professional digital thermometer with fast reading and high accuracy for medical use",
    price: 28.0,
    imageUrl:
      "https://m.media-amazon.com/images/I/41mzByf+J9L._UF1000,1000_QL80_.jpg",
    categoryId: "5",
    category: {
      id: "5",
      name: "Lab equipment",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(20).fill({ rating: 5 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "21",
    name: "Heating Pad",
    description:
      "Electric heating pad for pain relief and muscle relaxation with adjustable temperature settings",
    price: 35.0,
    discount: 15,
    imageUrl:
      "https://m.media-amazon.com/images/I/81p6sfknnrL._UF1000,1000_QL80_.jpg",
    categoryId: "2",
    category: {
      id: "2",
      name: "Health care",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(8).fill({ rating: 4 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "22",
    name: "Massage Gun",
    description:
      "Professional percussion massage gun for deep tissue therapy and muscle recovery",
    price: 89.0,
    discount: 20,
    imageUrl:
      "https://m.media-amazon.com/images/I/61BzwtmQptL._UF1000,1000_QL80_.jpg",
    categoryId: "2",
    category: {
      id: "2",
      name: "Health care",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(15).fill({ rating: 5 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "23",
    name: "Compression Socks",
    description:
      "Medical-grade compression socks for improved circulation and leg support",
    price: 18.0,
    imageUrl:
      "https://assets.ajio.com/medias/sys_master/root/20221219/elnn/63a0a88caeb269659cf4515b/-473Wx593H-465452315-black-MODEL.jpg",
    categoryId: "2",
    category: {
      id: "2",
      name: "Health care",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(12).fill({ rating: 4 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "24",
    name: "Neck Pillow",
    description:
      "Ergonomic memory foam neck pillow for proper spine alignment and pain relief",
    price: 25.0,
    discount: 10,
    imageUrl:
      "https://www.netmeds.com/images/product-v1/600x600/906727/viaggi_inflatable_c_shape_travel_neck_pillow_blue_1_1.jpg",
    categoryId: "2",
    category: {
      id: "2",
      name: "Health care",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(10).fill({ rating: 5 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "25",
    name: "Back Brace",
    description:
      "Adjustable back brace for lumbar support and posture correction",
    price: 42.0,
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFjayUyMEJyYWNlfGVufDB8fDB8fHww",
    categoryId: "2",
    category: {
      id: "2",
      name: "Health care",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(9).fill({ rating: 4 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "26",
    name: "Knee Support",
    description:
      "Elastic knee brace for joint stability and pain relief during activities",
    price: 32.0,
    discount: 12,
    imageUrl:
      "https://cdn01.pharmeasy.in/dam/products_otc/S74132/tynor-j-09-knee-support-sportif-neoprene-small-2-1727747869.jpg",
    categoryId: "2",
    category: {
      id: "2",
      name: "Health care",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(11).fill({ rating: 4 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "27",
    name: "Wrist Support",
    description:
      "Adjustable wrist brace for carpal tunnel syndrome and wrist pain relief",
    price: 22.0,
    imageUrl:
      "https://beagleorthopaedic.com/wp-content/uploads/2022/05/Therapy-Range-Wrist-Support-1600-x-1600.jpg",
    categoryId: "2",
    category: {
      id: "2",
      name: "Health care",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(7).fill({ rating: 4 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "28",
    name: "Ice Pack",
    description:
      "Reusable gel ice pack for injury treatment and inflammation reduction",
    price: 15.0,
    imageUrl:
      "https://www.jiomart.com/images/product/original/rvfm6yjerm/snowball-ice-gel-pack-gel-bag-pack-of-3-cold-pack-6x4-inch-reusable-cooling-pack-to-keep-food-beverage-cool-and-fresh-ice-pack-product-images-orvfm6yjerm-p603857536-0-202308130916.jpg?im=Resize=(420,420)",
    categoryId: "2",
    category: {
      id: "2",
      name: "Health care",
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    reviews: Array(14).fill({ rating: 5 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function Shop() {
  const searchParams = useSearchParams();
  const [products] = useState<Product[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<string>("newest");

  // Calculate real product counts for each category
  const categoriesWithRealCounts = mockCategories.map((category) => ({
    ...category,
    products: products.filter((product) => product.categoryId === category.id),
  }));

  // Initialize selectedCategory from URL parameter
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || product.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "newest":
      default:
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  });

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Shop</h1>
          <p className="text-black">
            Discover our comprehensive collection of health and wellness
            products
          </p>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Shop by Category
          </h2>
          <CategoryIconGrid categories={categoriesWithRealCounts} />
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent">
              <option value="">All Categories</option>
              {categoriesWithRealCounts.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent">
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>

            {/* View Mode */}
            <div className="flex border border-gray-200 rounded-lg">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${
                  viewMode === "grid"
                    ? "bg-gray-800 text-white"
                    : "text-gray-600"
                }`}>
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${
                  viewMode === "list"
                    ? "bg-gray-800 text-white"
                    : "text-gray-600"
                }`}>
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-black">
            Showing {sortedProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div
          className={`grid gap-2 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No products found
            </h3>
            <p className="text-black">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
