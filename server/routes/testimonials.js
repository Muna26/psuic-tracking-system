"use server";

import { getTestimonials } from "@/utils/getTestimonials";

export async function GET() {
  try {
    const testimonials = await getTestimonials();
    return new Response(JSON.stringify(testimonials));
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch testimonials." }),
      { status: 500 }
    );
  }
}