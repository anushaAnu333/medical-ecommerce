import { NextRequest, NextResponse } from "next/server";

// Mock data for orders
interface Order {
  id: string;
  userId: string;
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const mockOrders: Order[] = [];

export async function GET() {
  try {
    // Sort by createdAt desc
    const sortedOrders = [...mockOrders].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json(sortedOrders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, items, total } = body;

    const newOrder = {
      id: (mockOrders.length + 1).toString(),
      userId,
      items,
      total: parseFloat(total),
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    mockOrders.push(newOrder);

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
