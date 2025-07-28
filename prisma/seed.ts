import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "Medicine",
        icon: "Pill",
      },
    }),
    prisma.category.create({
      data: {
        name: "Health care",
        icon: "Heart",
      },
    }),
    prisma.category.create({
      data: {
        name: "Beauty care",
        icon: "Leaf",
      },
    }),
    prisma.category.create({
      data: {
        name: "Fitness",
        icon: "Activity",
      },
    }),
    prisma.category.create({
      data: {
        name: "Lab equipment",
        icon: "Beaker",
      },
    }),
    prisma.category.create({
      data: {
        name: "Medkits",
        icon: "FirstAid",
      },
    }),
  ]);

  // Create products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: "B12 Medicine",
        description:
          "B12 Medicine is a premium supplement that combats B12 deficiency and supports energy, red blood cell formation, and nervous system health. Perfect for those with fatigue, anemia, or restricted diets like vegetarians and vegans.",
        price: 25.0,
        discount: 24,
        imageUrl: "/images/b12-medicine.jpg",
        categoryId: categories[0].id, // Medicine
      },
    }),
    prisma.product.create({
      data: {
        name: "Tonometer",
        description:
          "Professional eye pressure measurement device for accurate intraocular pressure readings. Essential for glaucoma screening and monitoring.",
        price: 45.0,
        imageUrl: "/images/tonometer.jpg",
        categoryId: categories[4].id, // Lab equipment
      },
    }),
    prisma.product.create({
      data: {
        name: "Blood Glucose Meter",
        description:
          "Accurate blood sugar monitoring device with fast results and easy-to-use design. Perfect for diabetes management.",
        price: 35.0,
        discount: 15,
        imageUrl: "/images/glucose-meter.jpg",
        categoryId: categories[4].id, // Lab equipment
      },
    }),
    prisma.product.create({
      data: {
        name: "Stethoscope",
        description:
          "Professional medical stethoscope for accurate auscultation. High-quality acoustic performance for clear heart and lung sounds.",
        price: 55.0,
        imageUrl: "/images/stethoscope.jpg",
        categoryId: categories[4].id, // Lab equipment
      },
    }),
    prisma.product.create({
      data: {
        name: "Vitamin C Serum",
        description:
          "Advanced vitamin C serum for skin health and anti-aging. Brightens complexion and protects against environmental damage.",
        price: 30.0,
        discount: 20,
        imageUrl: "/images/vitamin-c-serum.jpg",
        categoryId: categories[2].id, // Beauty care
      },
    }),
    prisma.product.create({
      data: {
        name: "Protein Powder",
        description:
          "High-quality protein supplement for muscle building and recovery. Perfect for athletes and fitness enthusiasts.",
        price: 40.0,
        imageUrl: "/images/protein-powder.jpg",
        categoryId: categories[3].id, // Fitness
      },
    }),
    prisma.product.create({
      data: {
        name: "First Aid Kit",
        description:
          "Comprehensive first aid kit for emergencies. Includes bandages, antiseptics, and essential medical supplies.",
        price: 25.0,
        discount: 10,
        imageUrl: "/images/first-aid-kit.jpg",
        categoryId: categories[5].id, // Medkits
      },
    }),
    prisma.product.create({
      data: {
        name: "Omega-3 Supplements",
        description:
          "Essential fatty acids for heart and brain health. Supports cardiovascular function and cognitive performance.",
        price: 20.0,
        imageUrl: "/images/omega-3.jpg",
        categoryId: categories[0].id, // Medicine
      },
    }),
    prisma.product.create({
      data: {
        name: "Pulse Oximeter",
        description:
          "Accurate blood oxygen level monitor with easy-to-read display. Essential for respiratory health monitoring.",
        price: 29.0,
        discount: 10,
        imageUrl: "/images/pulse-oximeter.jpg",
        categoryId: categories[4].id, // Lab equipment
      },
    }),
    prisma.product.create({
      data: {
        name: "Multivitamin Complex",
        description:
          "Complete multivitamin supplement with essential nutrients for overall health and wellness.",
        price: 18.0,
        imageUrl: "/images/multivitamin.jpg",
        categoryId: categories[0].id, // Medicine
      },
    }),
  ]);

  // Create reviews
  await Promise.all([
    prisma.review.create({
      data: {
        productId: products[0].id, // B12 Medicine
        content:
          "Excellent product! I've been taking this B12 supplement for 3 months and noticed a significant improvement in my energy levels.",
        rating: 5,
        userName: "Olivia Garcia",
        userRole: "Health enthusiast",
      },
    }),
    prisma.review.create({
      data: {
        productId: products[0].id, // B12 Medicine
        content:
          "Great quality and fast shipping. The pills are easy to swallow and I feel more energetic throughout the day.",
        rating: 4,
        userName: "Sophia Brown",
        userRole: "Fitness trainer",
      },
    }),
    prisma.review.create({
      data: {
        productId: products[0].id, // B12 Medicine
        content:
          "Perfect for my vegetarian diet. I was deficient in B12 and this supplement has helped me maintain healthy levels.",
        rating: 5,
        userName: "Ethan Harris",
        userRole: "Nutritionist",
      },
    }),
    prisma.review.create({
      data: {
        productId: products[1].id, // Tonometer
        content:
          "Professional quality device. Easy to use and provides accurate readings. Highly recommended for medical professionals.",
        rating: 5,
        userName: "Dr. Sarah Johnson",
        userRole: "Ophthalmologist",
      },
    }),
    prisma.review.create({
      data: {
        productId: products[2].id, // Blood Glucose Meter
        content:
          "Reliable and accurate glucose meter. The fast results and easy-to-use design make diabetes management much simpler.",
        rating: 4,
        userName: "Michael Chen",
        userRole: "Diabetes educator",
      },
    }),
    prisma.review.create({
      data: {
        productId: products[3].id, // Stethoscope
        content:
          "Excellent acoustic performance. Clear heart and lung sounds. Perfect for medical students and professionals.",
        rating: 5,
        userName: "Dr. Robert Wilson",
        userRole: "Cardiologist",
      },
    }),
    prisma.review.create({
      data: {
        productId: products[4].id, // Vitamin C Serum
        content:
          "Amazing results! My skin looks brighter and more even. The serum absorbs quickly and doesn't leave any residue.",
        rating: 5,
        userName: "Emma Davis",
        userRole: "Skincare specialist",
      },
    }),
    prisma.review.create({
      data: {
        productId: products[5].id, // Protein Powder
        content:
          "High-quality protein powder with great taste. Helps with muscle recovery after workouts. Mixes well with water or milk.",
        rating: 4,
        userName: "Alex Thompson",
        userRole: "Personal trainer",
      },
    }),
  ]);

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
