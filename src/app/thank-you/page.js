import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Thank You | Pooja Packaging Industries",
  description: "Thank you for contacting Pooja Packaging Industries. Our team will get back to you shortly.",
  alternates: {
    canonical: "https://www.poojapackagingindustries.com/thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return (
    <>

      <section className="bg-[#1E2126] flex rounded-b-[100px] relative z-10 overflow-hidden">
        <div className="pt-44 pb-24 w-full">
          <div className="pl-20">
            <h3 className="text-7xl font-semibold text-white leading-tight">
              Thank You
            </h3>
          </div>
        </div>
      </section>

      <section className="bg-white pt-14 lg:pt-20 rounded-b-[100px] pb-20 lg:pb-28 relative z-[4]">
        <div className="max-w-3xl mx-auto text-center px-5">
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#C23E34] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
          </div>

          <h2 className="mt-8 text-3xl sm:text-4xl lg:text-[42px] leading-tight font-bold text-black">
            Your Message Has Been Sent
          </h2>

          <p className="mt-5 leading-7 text-gray-700 max-w-xl mx-auto">
            Thank you for reaching out to Pooja Packaging Industries. Our
            team has received your details and will get back to you
            shortly with the right support for your packaging needs.
          </p>

          <p className="mt-6 leading-7 text-gray-700">
            Need immediate assistance? Call us at{" "}
            <a href="tel:+919810006555" className="text-[#C23E34] font-semibold">
              +91 9810006555
            </a>
          </p>

          <Link
            href="/"
            className="inline-block mt-10 bg-gradient-to-b from-[#EBA2A2] to-[#C23E34] text-black font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default page;