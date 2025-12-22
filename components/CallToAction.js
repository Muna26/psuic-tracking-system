"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const CallToAction = ({ buttonText, buttonLink }) => {
  const { t } = useTranslation("common");

  return (
    <div className="text-center mt-8">
      <Link
        href={buttonLink}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        {buttonText || t("callToAction")}
      </Link>
    </div>
  );
};

export default CallToAction;