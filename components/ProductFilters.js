"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useSearchParams } from "next/navigation";
import { filterProducts } from "@/utils/filterProducts";
import { fetchProducts } from "@/utils/fetchProducts";

const ProductFilters = () => {
  const { t } = useTranslation("common");
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(
    searchParams.get("brand") || ""
  );
  const [selectedType, setSelectedType] = useState(
    searchParams.get("type") || ""
  );
  const [selectedCapacity, setSelectedCapacity] = useState(
    searchParams.get("capacity") || ""
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState(
    searchParams.get("priceRange") || ""
  );

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    fetchData();
  }, []);

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleCapacityChange = (e) => {
    setSelectedCapacity(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(e.target.value);
  };

  const filteredProducts = filterProducts(products, {
    brand: selectedBrand,
    type: selectedType,
    capacity: selectedCapacity,
    priceRange: selectedPriceRange,
  });

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold mb-2">{t("filterProducts")}</h3>
      <div className="flex flex-col gap-2">
        <label htmlFor="brand" className="font-bold">
          {t("brand")}
        </label>
        <select
          id="brand"
          value={selectedBrand}
          onChange={handleBrandChange}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">{t("allBrands")}</option>
          <option value="Samsung">{t("samsung")}</option>
          <option value="LG">{t("lg")}</option>
          <option value="Whirlpool">{t("whirlpool")}</option>
          {/* Add more brands as needed */}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="type" className="font-bold">
          {t("type")}
        </label>
        <select
          id="type"
          value={selectedType}
          onChange={handleTypeChange}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">{t("allTypes")}</option>
          <option value="Top-Load">{t("topLoad")}</option>
          <option value="Front-Load">{t("frontLoad")}</option>
          {/* Add more types as needed */}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="capacity" className="font-bold">
          {t("capacity")}
        </label>
        <select
          id="capacity"
          value={selectedCapacity}
          onChange={handleCapacityChange}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">{t("allCapacities")}</option>
          <option value="5.0 cu ft">{t("fiveCuFt")}</option>
          <option value="6.0 cu ft">{t("sixCuFt")}</option>
          <option value="7.0 cu ft">{t("sevenCuFt")}</option>
          {/* Add more capacities as needed */}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="priceRange" className="font-bold">
          {t("priceRange")}
        </label>
        <select
          id="priceRange"
          value={selectedPriceRange}
          onChange={handlePriceRangeChange}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">{t("allPrices")}</option>
          <option value="0-500">{t("priceRange0to500")}</option>
          <option value="500-1000">{t("priceRange500to1000")}</option>
          <option value="1000-1500">{t("priceRange1000to1500")}</option>
          <option value="1500-2000">{t("priceRange1500to2000")}</option>
          <option value="2000+">{t("priceRange2000plus")}</option>
          {/* Add more price ranges as needed */}
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;