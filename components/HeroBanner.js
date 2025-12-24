"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const HeroBanner = () => {
  const { t } = useTranslation("common");

  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero-banner.jpg"
          alt="Hero Banner"
          fill
          style={{ objectFit: "cover" }}
          className="transform hover:scale-105 transition-transform duration-[20s]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10 relative mt-16">
        <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 text-primary-100 border border-primary-400/30 text-sm font-semibold mb-6 backdrop-blur-sm">
          {t("systemName")}
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          {t("heroBannerTitle")}
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t("heroBannerDescription")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/repairs/create" className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            {t("heroBannerButton")}
          </Link>
          <Link href="/repairs" className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {t("repairs")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;