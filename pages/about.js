"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AboutUsSection from "@/components/AboutUsSection";
import Testimonials from "@/components/Testimonials";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t("aboutUsTitle")}
        </h2>
        <AboutUsSection />
        <Testimonials />
      </div>
    </section>
  );
};

export default About;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}