import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#1E2126] flex flex-wrap md:flex-nowrap gap-10 rounded-b-[100px] relative z-10 overflow-hidden">
      <div className="pt-32 md:pb-28 md:pt-52 md:w-[60%] lg:w-[50%] text-center md:text-left">
        <div className="px-5 md:px-0 md:pl-20 text-white">
         
          <h3 className="text-5xl lg:text-7xl font-semibold mt-6 leading-tight">
            About Us.
          </h3>
           <p className="mt-5 leading-7">
            At Pooja Packaging Industries, we deliver innovative packaging solutions that protect your products and strengthen your brand presence. With years of experience in laminated rolls, pouches, and zipper packs, we focus on quality, durability, and attractive designs that meet industry standards.
          </p>
           <p className="mt-6 leading-6">
            Our mission is simple — to provide packaging that keeps products fresh, safe, and visually appealing while ensuring timely service and customer satisfaction.
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
  );
}
