import { NextRequest, NextResponse } from "next/server";

// Mock data for products (same as in products/route.ts)
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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const product = mockProducts.find((p) => p.id === id);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { name, description, price, discount, imageUrl, categoryId } = body;

    const productIndex = mockProducts.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const updatedProduct = {
      ...mockProducts[productIndex],
      name,
      description,
      price: parseFloat(price),
      discount: discount ? parseFloat(discount) : 0,
      imageUrl,
      categoryId,
      updatedAt: new Date(),
    };

    mockProducts[productIndex] = updatedProduct;

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const productIndex = mockProducts.findIndex((p) => p.id === id);

    if (productIndex === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    mockProducts.splice(productIndex, 1);

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
