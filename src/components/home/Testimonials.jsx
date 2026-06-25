const testimonials = [
  {
    review:
      "We have been associated with Pooja Packaging Industries for a while now. The quality of their packaging materials is consistently good. Professional approach and easy to work with.",
    name: "Amit Verma",
  },
  {
    review:
      "Good experience working with Pooja Packaging Industries. The materials are well-made and consistent in quality. Easy communication and a professional team.",
    name: "Priya Mehta",
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-[5] rounded-b-[100px] -mt-[100px] pt-[150px] bg-[#1E2126] text-center">
      <h3 className="text-5xl md:text-7xl font-semibold mt-6 text-white leading-tight">
        Our Testimonials
        <span className="text-[#C23E34]">.</span>
      </h3>
      <div
        className="mt-10 md:mt-40 bg-bottom bg-repeat-x bg-contain pb-14 md:pb-40"
        style={{
          backgroundImage: "url('/images/home/herogrid.webp')",
        }}
      >
        <div className="lg:w-[75%] mx-auto grid gap-5 md:grid-cols-2 lg:gap-16 mt-5 px-5 lg:px-0 md:mt-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#3A404C] rounded-[24px] p-10 text-left md:-mt-28"
            >
              <p className="text-[#A9ADB5] text-[18px] leading-[1.8] min-h-[130px]">
                – "{item.review}"
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="p-3">
                  <p className="text-white text-2xl font-medium">{item.name}</p>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-[#F5B74D] text-2xl">★</span>
                  <span className="text-[#F5B74D] text-2xl">★</span>
                  <span className="text-[#F5B74D] text-2xl">★</span>
                  <span className="text-[#F5B74D] text-2xl">★</span>
                  <span className="text-[#F5B74D] text-2xl">★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
