import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  console.log("Slug:", slug);
  console.log("Products:", products);

  const product = products.find((p) => p.slug === slug);

  console.log("Found:", product);

  if (!product) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1E2126] flex rounded-b-[100px] relative z-10 overflow-hidden">
        <div className="pt-44 w-1/2">
          <div className="pl-20 pb-20">
            <h1 className="text-7xl font-semibold text-white leading-tight">
              {product.title}
            </h1>
          </div>
        </div>

        <div className="w-1/2 hidden md:flex items-center justify-center relative pr-24">
          <div
            className="absolute md:w-[300px] lg:w-[450px] h-full bg-cover bg-center bg-y-repeat"
            style={{
              backgroundImage: "url('/images/home/herogrid.webp')",
            }}
          />
          <div className="absolute md:w-[300px] lg:w-[450px] h-full bg-[#1E2126]/90" />
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white rounded-b-[100px] -mt-[100px] relative z-[9] pt-[150px] pb-20">
        <div className="w-[85%] mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <p className="uppercase tracking-[6px] text-[#C23E34] text-sm font-semibold">
              OUR PACKAGING RANGE
            </p>

            <h2 className="text-5xl font-bold mt-3 text-[#1E2126]">
              {product.title}
            </h2>

            <div className="w-20 h-1 bg-[#C23E34] rounded-full mx-auto mt-5"></div>
          </div>

          {/* Products */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[30px] bg-white border border-[#ececec] shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
              >
                {/* Background Decoration */}
                <div className="absolute inset-0">
                  <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#f8f8f8]" />
                  <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#fafafa]" />
                </div>

                {/* Product */}
                <div className="relative z-10 flex items-center justify-center px-10 py-14 min-h-[360px]">
                  <Image
                    src={image}
                    alt={product.title}
                    width={340}
                    height={340}
                    className="w-auto h-[260px] object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Bottom Accent */}
                <div className="relative z-10 flex items-center justify-between px-8 pb-7">
                  <div className="h-[4px] w-20 rounded-full bg-[#C23E34]" />

                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d6d6d6]" />
                    <span className="w-2 h-2 rounded-full bg-[#d6d6d6]" />
                    <span className="w-2 h-2 rounded-full bg-[#d6d6d6]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}