import Categories from '@/components/home/Categories'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "Products - Pooja Packaging Industries",
  description:
    "Custom packaging products in Delhi — laminated pouches, printed rolls, zipper pouches, mattress bags & tubes by Pooja Packaging Industries. Get a free quote!",
  alternates: {
    canonical: "https://www.poojapackagingindustries.com/products",
  },
};

const page = () => {
  return (
    <>
      <section className="bg-[#1E2126] flex flex-wrap md:flex-nowrap gap-10 rounded-b-[100px] relative z-10 overflow-hidden">
        <div className="pt-32 md:pb-36 md:pt-40 md:w-[60%] lg:w-[50%] text-center md:text-left">
          <div className="px-5 md:px-0 md:pl-20 text-white">

            <h3 className="text-5xl lg:text-7xl font-semibold mt-6 leading-tight">
              Our Products
            </h3>
            <p className="mt-5 leading-7">
              At Pooja Packaging Industries, we offer a wide range of packaging solutions designed to meet the diverse needs of FMCG, food, and retail brands. From printed laminated rolls to durable pouches and zipper packs, each product is crafted with precision to ensure strength, freshness, and attractive presentation.
            </p>
            <p className="mt-6 leading-6">
              Our products are trusted for their quality, reliability, and customization options, making them the perfect choice for businesses looking to enhance their brand value.
            </p>
          </div>
        </div>
        <div className="md:w-[40%] lg:w-[50%] flex items-center justify-center relative pt-10 pb-20 md:pt-0 md:pb-0 md:pr-24">
          {/* Grid */}
          <div
            className="absolute w-[300px] lg:w-[500px] h-full bg-contain bg-center bg-y-repeat"
            style={{
              backgroundImage: "url('/images/home/herogrid.webp')",
            }}
          />

          {/* Overlay only on grid */}
          <div className="absolute w-[300px] lg:w-[500px] h-full bg-[#1E2126]/90" />

          {/* Product */}
          <Image
            src="/images/about/about-hero-product.png"
            width={400}
            height={300}
            alt="Hero Product"
            className="relative z-10 object-contain"
          />
        </div>
      </section>
      <Categories />
    </>
  )
}

export default page