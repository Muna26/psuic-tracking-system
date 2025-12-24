"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RepairServicesSection from "@/components/RepairServicesSection";
import BookingForm from "@/components/BookingForm";
import UploadForm from "@/components/UploadForm";

const Repairs = () => {
  const { t } = useTranslation("common");

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <RepairServicesSection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 bg-white p-8 rounded-2xl shadow-xl">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {t("bookRepair")}
            </h3>
            <BookingForm />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {t("uploadIssue")}
            </h3>
            <UploadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repairs;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}