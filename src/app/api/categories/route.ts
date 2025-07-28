import { NextRequest, NextResponse } from "next/server";

// Mock data for categories
const mockCategories = [
  {
    id: "1",
    name: "Medicine",
    icon: "Pill",
    products: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Health care",
    icon: "Heart",
    products: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Beauty care",
    icon: "Leaf",
    products: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Fitness",
    icon: "Activity",
    products: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    name: "Lab equipment",
    icon: "Beaker",
    products: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    name: "Medkits",
    icon: "FirstAid",
    products: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export async function GET() {
  try {
    return NextResponse.json(mockCategories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, icon } = body;

    const newCategory = {
      id: (mockCategories.length + 1).toString(),
      name,
      icon,
      products: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    mockCategories.push(newCategory);

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}
