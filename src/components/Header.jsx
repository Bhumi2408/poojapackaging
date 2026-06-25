"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBars,
  faXmark,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-5 lg:px-24">
        {/* Left */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex h-14 w-14 overflow-hidden rounded-full bg-[#b7392b]"
          >
            <img
              src="/logo.png"
              alt="Pooja Packaging Industries"
              className="h-full w-full object-cover"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-7 font-medium text-white">
            {siteConfig.navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#b03a2e]"
              >
                {item.label}
              </Link>
            ))}

            {/* Products */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center gap-2 hover:text-[#b03a2e]">
                <Link href="/products">Products</Link>

                <svg
                  className={`h-4 w-4 transition ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isProductsOpen && (
                <div className="absolute left-1/2 top-full pt-3 w-72 -translate-x-1/2 rounded-xl bg-[#1c1e26] p-3">
                  {siteConfig.productCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products/${cat.slug}`}
                      className="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/5 hover:text-[#b03a2e]"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {siteConfig.afterProductsLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#b03a2e]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right */}

        {/* Desktop Call Button */}
        <div className="hidden lg:block rounded-full shadow-[0_0_5px_#5F5F5F] p-3 hover:shadow-[0_0_5px_#c1635d]">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1b1d24] hover:bg-[#c1635d] hover:text-white transition"
          >
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-white text-3xl"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Overlay */}

      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Drawer */}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#111827] p-6 transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <img src="/logo.png" className="h-12 w-12 rounded-full" />

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-3xl"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="space-y-5 text-white">
          {siteConfig.navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Products */}

          <div>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex w-full items-center justify-between"
            >
              <Link href="/products">Products</Link>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition ${
                  mobileProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileProductsOpen && (
              <div className="mt-3 ml-4 space-y-3">
                {siteConfig.productCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/products/${cat.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white/70"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {siteConfig.afterProductsLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
