"use server";

import { getBlogPosts } from "@/utils/getBlogPosts";
import { getBlogPost } from "@/utils/getBlogPosts";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
  try {
    const blogPosts = await getBlogPosts();
    return new Response(JSON.stringify(blogPosts));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch blog posts." }), {
      status: 500,
    });
  }
}

export async function GET(req) {
  try {
    const { slug } = req.url.split("/").slice(-1)[0];
    const blogPost = await getBlogPost(slug);
    if (!blogPost) {
      return new Response(JSON.stringify({ error: "Blog post not found." }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(blogPost));
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch blog post." }),
      { status: 500 }
    );
  }
}