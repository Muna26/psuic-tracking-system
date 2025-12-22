"use client";

import React from "react";
import { useTranslation } from "next-i18next";

const Main = () => {
  const { t } = useTranslation("common");

  return (
    <main>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t("mainSectionTitle")}
          </h2>
          <p className="text-gray-600 text-center mb-8">
            {t("mainSectionDescription")}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;