import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeroBanner from "@/components/HeroBanner";
import ShopDescription from "@/components/ShopDescription";
import CallToAction from "@/components/CallToAction";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <HeroBanner />
      <ShopDescription />
      <CallToAction buttonText={t("viewProducts")} buttonLink="/products" />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Home;