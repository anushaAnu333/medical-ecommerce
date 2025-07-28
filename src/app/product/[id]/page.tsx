import ProductDetailClient from "@/components/ui/ProductDetailClient";
import { Product, Review } from "@/types";

// Mock data - in a real app, this would come from the API
const mockProducts: Product[] = [
  {
    id: "1",
    name: "B12 Medicine",
    description:
      "B12 Medicine is a premium supplement that combats B12 deficiency and supports energy, red blood cell formation, and nervous system health. Perfect for those with fatigue, anemia, or restricted diets like vegetarians and vegans.",
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
    description:
      "Professional eye pressure measurement device for accurate glaucoma screening and monitoring.",
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
    description:
      "Accurate blood sugar monitoring device with memory storage and easy-to-read display for diabetes management.",
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
    description:
      "Professional medical stethoscope for accurate auscultation with superior acoustic performance.",
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
    description:
      "Advanced vitamin C serum for skin health and anti-aging with powerful antioxidant properties.",
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
    description:
      "High-quality protein supplement for muscle building and recovery with essential amino acids.",
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
    description:
      "Comprehensive first aid kit for emergencies with essential medical supplies and clear instructions.",
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
    description:
      "Essential fatty acids for heart and brain health with high bioavailability and purity.",
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
      "Advanced digital blood pressure monitor with irregular heartbeat detection and memory storage.",
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
      "Advanced vitamin D3 and K2 combination for bone health and immune system support.",
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
      "Professional-grade retinol serum for advanced anti-aging and skin rejuvenation.",
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
      "Professional resistance bands set for strength training and rehabilitation exercises.",
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
      "Comprehensive emergency trauma kit for professional medical response and critical care.",
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
      "High-absorption magnesium citrate for muscle relaxation and sleep support.",
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
      "Professional pulse oximeter with advanced SpO2 monitoring and heart rate tracking.",
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
      "Intensive hyaluronic acid serum for deep hydration and skin plumping.",
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
      "Professional-grade yoga mat with superior grip and cushioning for all fitness activities.",
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
      "Compact travel first aid kit with essential medical supplies for on-the-go emergencies.",
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
      "Advanced iron supplement with vitamin C for optimal absorption and energy support.",
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
      "Professional digital thermometer with fast reading and high accuracy for medical use.",
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
];

const mockReviews: Review[] = [
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
];

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Find the product by ID
  const product = mockProducts.find((p) => p.id === id);

  // Generate reviews for the product (in a real app, these would come from the API)
  const reviews = mockReviews.map((review) => ({
    ...review,
    productId: id,
  }));

  // Get related products (same category, excluding current product)
  const relatedProducts = mockProducts
    .filter((p) => p.categoryId === product?.categoryId && p.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Product not found</div>
      </div>
    );
  }

  return (
    <ProductDetailClient
      product={product}
      reviews={reviews}
      relatedProducts={relatedProducts}
    />
  );
}
