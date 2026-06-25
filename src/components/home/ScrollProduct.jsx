import { faBoxOpen } from "@fortawesome/free-solid-svg-icons/faBoxOpen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const products = [
  {
    image: "/images/about/about-hero-product.png",
    name: "Snack Packaging",
  },
  {
    image: "/images/home/detergent-scroll.jpeg",
    name: "Detergent",
  },
  {
    image: "/images/home/spice-scroll.jpeg",
    name: "Spice Packaging",
  },
  {
    image: "/images/home/mattress-scroll.jpeg",
    name: "Mattress",
  },
  {
    image: "/images/home/pillow-scroll.jpeg",
    name: "Pillow",
  },
];

const ScrollProduct = () => {
  return (
    <section className="relative z-[7] bg-[#1E2126] -mt-[100px] rounded-b-[100px] overflow-hidden">
      <div className="flex flex-wrap md:flex-nowrap gap-10 mx-auto md:w-[75%] px-5 md:px-0">
        <div className="md:w-[50%] pt-[150px] md:pt-[250px] md:pb-[100px] flex flex-col">
          <div className=" text-center md:text-left">
            <p className="text-[#848587] text-lg">Premium Snack Packaging</p>
            <h3 className="text-5xl lg:text-7xl font-semibold mt-6 text-white leading-tight">
              High Quality Laminated Pouches
              <span className="text-[#C23E34]">.</span>
            </h3>
          </div>
          <div className="mt-10 md:mt-40">
            <div className="flex flex-col md:flex-row gap-7 items-center text-center md:text-left mb-16">
              <div className="w-24 h-24 bg-[#C23E34] rounded-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faBoxOpen}
                  className="text-white text-5xl"
                />
              </div>
              <div>
                <h4 className="text-white text-[22px]">Custom Printed Packs</h4>
                <p className="text-lg text-[#848587] mt-1 max-w-[330px]">
                  Enhance your brand appeal with vibrant, high-resolution
                  printing and tailor-made pouch designs that connect with
                  customers.
                </p>
              </div>
            </div>
            <div className="border-t border-[#848587] md:max-w-[450px] flex justify-between items-center py-10">
              <p className=" text-[#848587] mt-1 md:max-w-[330px]">
                Trusted by FMCG brands <br /> across India
              </p>
              <Link href="/products">
                <button className="text-lg py-5 px-5 bg-linear-to-b cursor-pointer from-[#EBA2A2] to-[#C23E34] text-black font-medium rounded-xl ">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] relative py-3 md:py-10 flex items-center justify-center overflow-hidden">
          {/* Grid */}
          <div
            className="absolute w-[450px] h-full bg-contain bg-center bg-y-repeat py-40"
            style={{
              backgroundImage: "url('/images/home/herogrid.webp')",
            }}
          />

          {/* Overlay */}
          <div className="absolute w-[450px] h-full bg-[#1E2126]/90" />

          {/* Scroll Area */}
          <div className="relative z-10 md:-right-10 h-[1000px] overflow-y-auto pr-3 scrollbar-hide py-10 md:py-40">
            {products.map((product, index) => (
              <div key={index} className="flex flex-col items-center mb-16">
                <Image
                  src={product.image}
                  width={420}
                  height={550}
                  alt={product.name}
                  className="object-contain"
                />

                <div className="flex items-center gap-2 mt-3">
                  <span className="w-3 h-3 rounded-full bg-[#C23E34]" />
                  <p className="text-white">{product.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollProduct;
