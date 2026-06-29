import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogSection = () => {
  return (
    <section className="bg-[#FAFBFC] -mt-[100px] pt-[100px] rounded-b-[100px] relative z-[4]">
      <div className="pt-20 pb-10">
        <div className="bg-[#F8F8F8] py-5 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between text-center md:text-left gap-10 px-5 md:px-7 rounded-3xl mx-auto w-[80%]">
          <div className="md:w-[45%] px-5 md:px-0">
            <p className="text-[#C23E34] text-lg font-medium">Insight</p>
            <h4 className="text-3xl md:text-5xl leading-tight font-medium mt-3">
              Innovative Packaging Solutions
            </h4>
            <p className="text-lg leading-8 mt-4 text-[#3A4F66]">
              We specialize in laminated rolls and pouches that combine
              strength, quality printing, and durability—ideal for food, FMCG,
              and retail brands.
            </p>
            <Link href="/blogs">
              <button className="text-lg py-3 px-5 bg-linear-to-b mt-4 cursor-pointer from-[#EBA2A2] to-[#C23E34] text-white font-semibold rounded-xl ">
                View More
              </button>
            </Link>
          </div>
          <div>
            <Image
              src="/images/home/laminated-rolls.png"
              alt="laminated rolls"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-white pt-10 pb-20 rounded-b-[100px]">
        <div className="mx-auto flex flex-wrap lg:flex-nowrap gap-20 justify-between w-[80%]">
          <div className="bg-[#F8F8F8] lg:w-[50%] flex flex-wrap lg:flex-nowrap gap-7 justify-center lg:justify-between items-center text-center lg:text-left p-7 rounded-3xl">
            <div className="lg:w-[50%] px-5 lg:px-0">
              <p className="text-xl text-medium">Printed Laminated Rolls</p>
              <p className="text-xl text-medium text-[#848587] leading-7 mt-4">
                Premium laminated rolls with vibrant printing and strong layers,
                perfect for snacks and confectionery
              </p>
            </div>
            <div className="lg:w-[50%] px-5 md:px-0">
              <Image
                src="/images/home/blog1.webp"
                alt="laminated pouch"
                width={400}
                height={400}
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
          <div className="bg-[#F8F8F8] lg:w-[50%] flex flex-wrap lg:flex-nowrap gap-7 justify-center lg:justify-between items-center text-center lg:text-left p-7 rounded-3xl">
            <div className="lg:w-[50%] px-5 lg:px-0">
              <p className="text-xl text-medium">Standy Zipper Pouch</p>
              <p className="text-lg text-medium text-[#848587] leading-7 mt-4">
                Premium Stand-Up Zipper Pouches designed for secure and attractive packaging of snacks, dry fruits, spices, confectionery, and other food products.
              </p>
            </div>
            <div className="lg:w-[50%] px-5 lg:px-0">
              <Image
                src="/images/home/blog2.png"
                alt="standy zipper pouch"
                width={400}
                height={400}
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
