"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getBlogPosts } from "@/utils/getBlogPosts";
import BlogPost from "@/components/BlogPost";

const Blog = () => {
  const { t } = useTranslation("common");
  const blogPosts = getBlogPosts();

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t("blogTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.slug} slug={post.slug} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}