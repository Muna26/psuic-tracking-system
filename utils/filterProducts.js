"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export const filterProducts = (products, filters) => {
  const { brand, type, capacity, priceRange } = filters;

  return products.filter((product) => {
    let matches = true;

    if (brand && product.brand !== brand) {
      matches = false;
    }
    if (type && product.type !== type) {
      matches = false;
    }
    if (capacity && product.capacity !== capacity) {
      matches = false;
    }
    if (
      priceRange &&
      !(
        product.price >= parseInt(priceRange.split("-")[0], 10) &&
        product.price <= parseInt(priceRange.split("-")[1], 10)
      )
    ) {
      matches = false;
    }

    return matches;
  });
};