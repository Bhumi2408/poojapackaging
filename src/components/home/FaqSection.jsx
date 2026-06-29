"use client";

import { useState } from "react";

const faq = [
  {
    question: "Who is the best flexible packaging manufacturer in Delhi NCR?",
    answer:
      "<a href='/contact-us'>Pooja Packaging Industries</a> is one of the most trusted flexible packaging manufacturers in Delhi NCR, located at DSIDC Industrial Area, Delhi. They offer custom printed laminated pouches, rolls, and bags for food, FMCG, mattress, and industrial brands — with low MOQ, bulk supply, and pan-India delivery.",
  },
  {
    question:
      "Which company provides custom printed pouch manufacturer in Delhi?",
    answer:
      "Pooja Packaging Industries is a leading custom printed pouch manufacturer in Delhi, offering multi-colour high-definition printing on laminated pouches for spices, atta, detergent, snacks, tea, rice, and all FMCG product categories — with matte, gloss, and metallic lamination options.",
  },
  {
    question:
      "Where can I find a packaging pouch manufacturer near me in Delhi?",
    answer:
      "Pooja Packaging Industries is conveniently located at G951, DSIDC Industrial Area, Delhi — 110040, making it one of the most accessible packaging manufacturers in Delhi for local FMCG brands, startups, and distributors looking for quality flexible pouches at competitive prices.",
  },
  {
    question:
      " Which is the best laminated pouch manufacturer in Delhi for food brands?",
    answer:
      "For food brands in Delhi, Pooja Packaging Industries is a top choice — offering FSSAI-compliant, food-grade laminated pouches for atta, rice, spices, snacks, tea, and all food categories. They provide custom sizes, multi-colour printing, and low MOQ options suited for both new food startups and established FMCG companies.",
  },
  {
    question:
      "What is the difference between a laminated pouch and a normal plastic bag?",
    answer:
      "A <a href='/products/food-packaging'>laminated pouch</a> is made from multiple bonded layers of films such as BOPP, PET, aluminium foil, and LDPE — providing superior barrier protection against moisture, oxygen, light, and contamination. A normal plastic bag is single-layer and offers minimal protection. Laminated pouches are food-grade, printable, and used for FMCG products requiring longer shelf life and branded packaging.",
  },
  {
    question: "How do I choose the right packaging pouch for my product?",
    answer:
      "Choosing the right pouch depends on four factors—product type (liquid, powder, or solid), required shelf life, retail display format, and budget. For example, spices and tea need aluminum foil barrier pouches; snacks need nitrogen-flush compatible pouches, atta needs heavy-duty puncture-resistant pouches; and premium brands prefer stand-up pouches with a zipper for consumer convenience. ",
  },
  {
    question: "What materials are used in food-grade flexible packaging?",
    answer:
      "Food-grade flexible packaging is made from multilayer laminated films combining materials like BOPP (for clarity and printability), PET (for strength and heat resistance), LDPE (for sealability and flexibility), aluminium foil (for maximum barrier against moisture and oxygen), and nylon (for puncture resistance). The combination is chosen based on the product's sensitivity, shelf life requirement, and packaging format.",
  },
  {
    question: "How much does custom printed packaging cost in India?",
    answer:
      "Custom printed packaging cost in India depends on pouch type, size, number of print colours, material combination, lamination finish, and order quantity. Generally, higher quantities reduce per-unit cost significantly. For an accurate quote, contact a manufacturer like Pooja Packaging Industries directly with your product specs and required quantity — most manufacturers offer free samples before bulk orders.",
  },
];

function FAQItem({ item, index, openFaq, setOpenFaq }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={() => setOpenFaq(openFaq === index ? null : index)}
        className="w-full flex justify-between items-center gap-5 p-6 text-left"
      >
        <span className="text-lg lg:text-xl font-semibold text-[#1E2126]">
          {item.question}
        </span>

        <span
          className={`text-[#C23E34] text-3xl shrink-0 transition duration-300 ${
            openFaq === index ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          openFaq === index ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div
  className=" px-6 pb-6 text-gray-600 leading-8"
  dangerouslySetInnerHTML={{ __html: item.answer }}
/>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const mid = Math.ceil(faq.length / 2);
  const leftFaq = faq.slice(0, mid);
  const rightFaq = faq.slice(mid);

  return (
    <section className="bg-white py-24 relative z-[3] rounded-b-[100px] -mt-[100px] pt-[150px]">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[6px] text-[#C23E34] text-sm font-semibold">
            FAQ
          </p>

          <h2 className="text-3xl lg:text-5xl font-bold text-[#1E2126] mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        {/* 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left */}
          <div className="space-y-5">
            {leftFaq.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                index={index}
                openFaq={openFaq}
                setOpenFaq={setOpenFaq}
              />
            ))}
          </div>

          {/* Right */}
          <div className="space-y-5">
            {rightFaq.map((item, index) => (
              <FAQItem
                key={index + mid}
                item={item}
                index={index + mid}
                openFaq={openFaq}
                setOpenFaq={setOpenFaq}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
