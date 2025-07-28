import { NextRequest, NextResponse } from "next/server";

// Mock data for products
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
      "Professional-grade digital tonometer for accurate intraocular pressure measurement",
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
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");
    const search = searchParams.get("search");

    let filteredProducts = [...mockProducts];

    if (categoryId) {
      filteredProducts = filteredProducts.filter(
        (product) => product.categoryId === categoryId
      );
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }

    // Sort by createdAt desc
    filteredProducts.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json(filteredProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, price, discount, imageUrl, categoryId } = body;

    const newProduct = {
      id: (mockProducts.length + 1).toString(),
      name,
      description,
      price: parseFloat(price),
      discount: discount ? parseFloat(discount) : 0,
      imageUrl,
      categoryId,
      category: {
        id: categoryId,
        name: "Category",
        products: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      reviews: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    mockProducts.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
