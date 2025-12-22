"use client";

import React from "react";
import { useTranslation } from "next-i18next";

const ShopDescription = () => {
  const { t } = useTranslation("common");

  return (
    <div className="prose prose-lg text-center mt-8">
      <p>{t("shopDescription")}</p>
      <p className="mt-4">{t("shopValues")}</p>
    </div>
  );
};

export default ShopDescription;