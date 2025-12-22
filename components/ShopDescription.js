"use client";

import React from "react";
import { useTranslation } from "next-i18next";

const ShopDescription = () => {
  const { t } = useTranslation("common");

  return (
    <div className="max-w-4xl mx-auto mt-12 mb-16 px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
          {t("shopDescription")}
        </p>
        <div className="mt-8 flex justify-center">
          <span className="inline-block h-1 w-20 bg-primary-500 rounded-full"></span>
        </div>
        <p className="mt-8 text-xl md:text-2xl text-primary-800 font-semibold italic">
          "{t("shopValues")}"
        </p>
      </div>
    </div>
  );
};

export default ShopDescription;