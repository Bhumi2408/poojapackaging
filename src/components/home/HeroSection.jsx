import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#1E2126] flex-wrap md:flex-nowrap flex gap-10 rounded-b-[100px] relative z-10 overflow-hidden">
      <div className="pt-32 lg:pt-56 md:w-[50%]">
        <div className="px-5 md:px-0 md:pl-20">
          <p className="text-[#848587] text-lg">
            Smart Packaging for Every Need
          </p>
          <h3 className="text-5xl lg:text-7xl font-semibold mt-6 text-white leading-tight">
            Trusted By <br /> Brands
          </h3>
        </div>
        <div className="bg-[#353B44] pt-[100px] p-[80px] rounded-bl-[100px] rounded-tr-[100px] relative leading-8 mt-24 text-lg text-[#D2D7DB]">
          <Link href="/about"><button className="text-lg py-5 px-12 bg-linear-to-b cursor-pointer from-[#EBA2A2] to-[#C23E34] text-black font-semibold rounded-xl absolute -top-7 left-20">
            Get Started
          </button></Link>
          <p className="text-thin">
            At <strong>Pooja Packaging Industries</strong>, we create
            innovative, durable, and attractive packaging solutions designed to
            protect your products and enhance your brand value.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-red-500"></span>
            <p className="font-extralight text-[#D2D7DB]">
              Quality You Can Trust.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-[50%] flex items-center justify-center relative md:pr-24">
        {/* Grid */}
        <div
          className="absolute w-[450px] h-full bg-contain bg-center bg-y-repeat"
          style={{
            backgroundImage: "url('/images/home/herogrid.webp')",
          }}
        />

        {/* Overlay only on grid */}
        <div className="absolute w-[450px] h-full bg-[#1E2126]/90" />

        {/* Product */}
        <Image
          src="/images/home/hero-product.png"
          width={500}
          height={700}
          alt="Hero Product"
          className="relative z-10 object-contain"
        />
      </div>
    </section>
  );
}
