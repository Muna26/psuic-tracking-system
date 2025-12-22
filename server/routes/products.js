"use server";

import { prisma } from "@/lib/prisma";

export async function GET(req) {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        image: true,
        brand: true,
        type: true,
        capacity: true,
        price: true,
      },
    });

    return new Response(JSON.stringify(products));
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch products." }),
      { status: 500 }
    );
  }
}