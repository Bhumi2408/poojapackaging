"use client";

import { useState } from "react";

export default function ProductFAQ({ faq }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="mt-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1E2126] mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faq.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6"
              >
                <span className="text-xl font-semibold">
                  {item.question}
                </span>

                <span
                  className={`text-[#C23E34] text-3xl transition duration-300 ${
                    openFaq === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index
                    ? "max-h-[500px]"
                    : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 border-t">
                  <p className="pt-5 text-gray-600 leading-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}