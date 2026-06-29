import {  Boxes, Leaf } from "lucide-react";
import Image from "next/image";
import React from "react";

const LaminatedRolls = () => {
  return (
    <div className="bg-white -mt-[100px] pt-[150px] rounded-b-[100px] pb-24 relative z-[9] border border-gray-600 flex flex-col items-center justify-center">
      <p className="3A4F66">Top Custom Packaging Solution in India for Every Industry</p>
      <h4 className="text-3xl md:text-5xl font-semibold leading-tight text-center mt-4">
        High-Quality Laminated Rolls, <br />
        Designed for Perfect <span className="text-[#c23e34]">*Packaging</span>
      </h4>
      <div className="grid md:grid-cols-[0.6fr_1.3fr_0.6fr] gap-10 mt-20 mx-auto w-[75%]">
        <div className="flex flex-col items-center md:items-start">
          <p className="w-16 h-16 rounded-xl bg-[#c23e34] flex items-center justify-center text-white">
            <Leaf className="w-7 h-7" />
          </p>
          <p className="text-2xl mt-2 font-medium">Durable & Strong</p>
          <p className="text-[17px] text-[#848587] leading-7 mt-3">
            Our laminated rolls are built to withstand pressure and handling,
            ensuring your products remain safe and intact from production to
            delivery.
          </p>
        </div>
        <div className="bg-contain bg-no-repeat flex flex-col items-center justify-center" style={{
            backgroundImage: "url('/images/home/laminated-grid.webp')",
          }}>
            <Image src="/images/home/laminated-rolls.png" alt="laminated-rolls" width={450} height={300} className="object-contain"/>
          </div>
        <div className="flex flex-col items-center md:items-start justify-end">
          <p className="w-16 h-16 rounded-xl bg-[#c23e34] flex items-center justify-center text-white">
            <Boxes className="w-7 h-7" />
          </p>
          <p className="text-2xl mt-2 font-medium">Versatile Packaging</p>
          <p className="text-[17px] text-[#848587] leading-7 mt-3">
            Perfect for food, FMCG, and retail products, our rolls offer high strength, vibrant printing, and long-lasting appeal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaminatedRolls;
