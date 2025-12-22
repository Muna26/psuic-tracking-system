"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const ProductCard = ({ product }) => {
  const { t } = useTranslation("common");

  return (
    <Link href={`/products/${product.slug}`} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 overflow-hidden transform hover:-translate-y-1 block h-full flex flex-col">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 shadow-sm">
          {product.brand}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-primary-600 transition-colors">{product.name}</h3>
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
          <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">{product.type}</span>
          <span>•</span>
          <span>{product.capacity}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm flex-grow">{product.description}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <p className="text-2xl font-bold text-primary-600">${product.price.toLocaleString()}</p>
          <span className="text-sm font-medium text-primary-500 group-hover:underline">View Details →</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;