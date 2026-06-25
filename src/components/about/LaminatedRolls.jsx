import { Award, Boxes, Leaf } from "lucide-react";
import Image from "next/image";
import React from "react";

const LaminatedRolls = () => {
  return (
    <div className="bg-white -mt-[100px] pt-[150px] rounded-b-[100px] relative z-[9] border border-gray-600 flex flex-col items-center justify-center text-center md:text-left px-5 md:px-0">
      <p className="3A4F66">
        Innovative Roll & Pouch Packaging for Lasting Freshness
      </p>
      <h4 className="text-3xl md:text-5xl font-semibold leading-tight text-center mt-4">
        Delivering strength, quality, and designs that
        <br />
        enhance your brand and protect{" "}
        <span className="text-[#c23e34]">*your products</span>
      </h4>
      <div className="grid md:grid-cols-[300px_1fr] gap-16 mt-16 md:mt-0 items-center justify-center mx-auto md:w-[75%] px-5 md:px-10">
        <div>
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
            <p className="w-16 h-16 rounded-xl bg-[#c23e34] flex items-center justify-center text-white">
              <Award className="w-7 h-7" />
            </p>
            <p className="text-2xl mt-2 font-medium">Premium Quality</p>
            <p className="text-[17px] text-[#848587] leading-7 mt-3">
              Our packaging is made using advanced materials to ensure
              durability, freshness, and safe product storage.
            </p>
          </div>
          <div className="mt-10 flex flex-col justify-center md:justify-start items-center md:items-start">
            <p className="w-16 h-16 rounded-xl bg-[#c23e34] flex items-center justify-center text-white">
              <Boxes className="w-7 h-7" />
            </p>
            <p className="text-2xl mt-2 font-medium">Customized Solutions</p>
            <p className="text-[17px] text-[#848587] leading-7 mt-3">
              We provide tailor-made laminated rolls and pouches to match your
              product needs and brand identity.
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          {/* Grid Background */}
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-60"
            style={{
              backgroundImage: "url('/images/home/laminated-grid.webp')",
              backgroundSize: "75%",
            }}
          />

          {/* Product */}
          <Image
            src="/images/home/laminated-rolls.png"
            alt="Laminated Rolls"
            width={800}
            height={500}
            className="relative z-10 w-[95%] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LaminatedRolls;
