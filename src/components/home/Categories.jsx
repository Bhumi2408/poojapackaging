import Image from "next/image";
import Link from "next/link";

const category = [
  {
    image: "/images/home/seed-category.webp",
    alt: "Seed packaging",
    name: "Seed Packaging",
    href: "/products/seeds-packaging",
  },
  {
    image: "/images/home/food-category.jpeg",
    alt: "Food packaging",
    name: "Food Packaging",
    href: "/products/food-packaging",
  },
  {
    image: "/images/home/spice-scroll.jpeg",
    alt: "Spices packaging",
    name: "Spices Packaging",
    href: "/products/Spices-pouch-manufacturer",
  },
  {
    image: "/images/home/tubes-category.png",
    alt: "Tubes packaging",
    name: "Tubes Packaging",
    href: "/products/tubes-packaging",
  },
  {
    image: "/images/home/flour-category.webp",
    alt: "Flour packaging",
    name: "Flour Packaging",
    href: "/products/atta-pouch-manufacturer",
  },
  {
    image: "/images/home/rice-category.png",
    alt: "Rice packaging",
    name: "Rice Packaging",
    href: "/products/rice-packaging",
  },
  {
    image: "/images/home/tea-category.png",
    alt: "Tea packaging",
    name: "Tea Packaging",
    href: "/products/tea-packaging",
  },
  {
    image: "/images/home/snacks-category.png",
    alt: "Snacks packaging",
    name: "Snacks Packaging",
    href: "/products/snacks-packaging",
  },
  {
    image: "/images/home/common-category.webp",
    alt: "Multi Purpose Aluminium Foil",
    name: "Multi Purpose Aluminium Foil",
     href: "/products/multi-purpose-aluminium-foil",
  },
  {
    image: "/images/home/common-category.webp",
    alt: "Printed Laminated Pouches",
    name: "Printed Laminated Pouches",
     href: "/products/printed-laminated-pouches",
  },
  {
    image: "/images/home/common-category.webp",
    alt: "Printed Laminated Rolls",
    name: "Printed Laminated Rolls",
     href: "/products/printed-laminated-rolls",
  },
  {
    image: "/images/home/common-category.webp",
    alt: "Cello Tapes",
    name: "Cello Tapes",
     href: "/products/cello-tapes",
  },
  {
    image: "/images/home/detergent-category.jpeg",
    alt: "Detergent",
    name: "Detergent",
     href: "/products/detergent-pouch-manufacturer",
  },
  {
    image: "/images/home/pillow-category.jpeg",
    alt: "Pillow",
    name: "Pillow",
     href: "/products/pillow",
  },
  {
    image: "/images/home/mattress-category.jpeg",
    alt: "Mattress",
    name: "Mattress",
     href: "/products/mattress",
  },
  {
    image: "/images/home/pufoam-category.jpeg",
    alt: "Pu foam sheet packing",
    name: "Pu foam sheet packing",
     href: "/products/pu-foam-sheet-packing",
  },
  {
    image: "/images/home/pvc-category.jpeg",
    alt: "PVC Sheet",
    name: "PVC Sheet",
     href: "/products/pvc-sheet",
  },
];

const Categories = () => {
  return (
    <section className="relative z-[6] rounded-b-[100px] -mt-[100px] pt-[150px] pb-20 bg-white">
      <div className="mx-auto w-[85%] text-center">
        <h3 className="text-4xl font-semibold">Our Categories</h3>
        <div className="mt-10 grid md:grid-cols-3 lg:grid-cols-4 gap-7">
          {category.map((items, index) => (
            <Link
              href={items.href}
              key={index}
              className="flex flex-col items-center justify-center bg-[#3F4146] group rounded-xl min-h-[250px] transition-all duration-300 hover:-translate-y-1 hover:bg-[#474950]"
            >
              <div className="w-[150px] h-[150px] rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src={items.image}
                  alt={items.alt || items.name}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>

              <p className="text-white font-medium mt-4 text-xl text-center px-3">
                {items.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
