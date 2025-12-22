"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { usePathname } from "next/navigation";

const Header = () => {
  const { t } = useTranslation("common");
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 glass transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-primary-500 p-2 rounded-lg">
            <Image
              src="/assets/icons/logo.svg"
              alt="Washing Machine Shop Logo"
              width={32}
              height={32}
              className="invert brightness-0"
            />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-900">
            {t("shopName")}
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            {[
              { href: "/", label: "home" },
              { href: "/products", label: "products" },
              { href: "/repairs", label: "repairs" },
              { href: "/about", label: "about" },
              { href: "/blog", label: "blog" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative font-medium transition-colors duration-200 hover:text-primary-600 ${pathname === link.href ? "text-primary-600" : "text-gray-600"
                    }`}
                >
                  {t(link.label)}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="btn-primary"
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 text-gray-700"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div
          className={`md:hidden fixed inset-x-0 top-[73px] bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
            }`}
        >
          <div className="container mx-auto py-6 px-4">
            <ul className="flex flex-col space-y-4">
              {[
                { href: "/", label: "home" },
                { href: "/products", label: "products" },
                { href: "/repairs", label: "repairs" },
                { href: "/about", label: "about" },
                { href: "/blog", label: "blog" },
                { href: "/contact", label: "contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-3 px-4 rounded-lg font-medium ${pathname === link.href ? "bg-primary-50 text-primary-600" : "text-gray-700 hover:bg-gray-50"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;