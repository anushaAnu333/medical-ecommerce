import { NextRequest, NextResponse } from "next/server";

// Mock data for reviews
interface Review {
  id: string;
  productId: string;
  content: string;
  rating: number;
  userName: string;
  userRole: string;
  createdAt: Date;
  updatedAt: Date;
}

const mockReviews: Review[] = [];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");

    let filteredReviews = [...mockReviews];

    if (productId) {
      filteredReviews = filteredReviews.filter(
        (review) => review.productId === productId
      );
    }

    // Sort by createdAt desc
    filteredReviews.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json(filteredReviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, content, rating, userName, userRole } = body;

    const newReview = {
      id: (mockReviews.length + 1).toString(),
      productId,
      content,
      rating: parseInt(rating),
      userName,
      userRole,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    mockReviews.push(newReview);

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json(
      { error: "Failed to create review" },
      { status: 500 }
    );
  }
}
