import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section className="bg-[#1E2126] flex rounded-b-[100px] relative z-10 overflow-hidden">
        <div className="pt-44 w-[50%]">
          <div className="pl-20 pb-20">

            <h3 className="text-7xl font-semibold text-white leading-tight">
              Contact Us
            </h3>
          </div>
        </div>
        <div className="w-[50%] hidden  md:flex items-center justify-center relative pr-24">
          {/* Grid */}
          <div
            className="absolute md:w-[300px] lg:w-[450px] h-full bg-cover bg-center bg-y-repeat"
            style={{
              backgroundImage: "url('/images/home/herogrid.webp')",
            }}
          />

          {/* Overlay only on grid */}
          <div className="absolute md:w-[300px] lg:w-[450px] h-full bg-[#1E2126]/90" />
        </div>
      </section>
      <section className="bg-white pt-14 lg:pt-20 rounded-b-[100px] pb-16 lg:pb-24 relative z-[4]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 px-5 lg:px-8">

          {/* Left Side */}
          <div>
           <h2 className="text-4xl sm:text-5xl lg:text-[50px] leading-tight font-bold text-black">
              We’re Here to Solve
              <br />
              <span className="text-[#C23E34]">
                Your Needs
              </span>
            </h2>

            <p className="mt-5 leading-7 text-gray-700 max-w-xl">
              From quick assistance to complete custom solutions,
              share your details and our experts will provide the
              right support for you.
            </p>

            <div className="mt-10 space-y-8 lg:space-y-12">

              {/* Address */}
              <div className="flex items-start sm:items-center gap-4 lg:gap-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#C23E34] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>

                <div>
                  <h4 className="text-xl lg:text-2xl font-semibold text-[#0F2748]">
                    Address
                  </h4>

                 <p className="mt-2 text-sm lg:text-base leading-7 text-black">
                    G-951 and J-2802, DSIDC,
                    INDUSTRIAL AREA, Delhi, 110040,
                    New Delhi-110040, Delhi, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#C23E34] rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-8 h-8 lg:w-10 lg:h-10 text-white"/>
                </div>

                <div>
                  <h4 className="text-xl lg:text-2xl font-semibold text-[#0F2748]">
                    Email
                  </h4>

                  <p className="mt-2 text-sm lg:text-base leading-7 text-black">
                    poojapackagingindustries951@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#C23E34] rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>

                <div>
                 <h4 className="text-xl lg:text-2xl font-semibold text-[#0F2748]">
                    Phone Number
                  </h4>

                 <p className="mt-2 text-sm lg:text-base leading-7 text-black">
                    +91 9810006555
                    <br />
                    +91 9266561910
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-[#F7F7F7] rounded-[40px] p-10 shadow-sm h-fit">
            <h3 className="text-3xl lg:text-4xl font-semibold text-black mb-8">
              Send Us A Message
            </h3>

            <form className="space-y-5 lg:space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-16 rounded-xl border border-gray-300 px-5 text-black outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-16 rounded-xl border border-gray-300 px-5 text-black outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full h-16 rounded-xl border border-gray-300 px-5 text-black outline-none"
              />

              <textarea
                rows={6}
                placeholder="Message"
                className="w-full rounded-xl border border-gray-300 p-5 text-black outline-none resize-none focus:border-[#C23E34]"
              />

              <button
                type="submit"
               className="w-full sm:w-auto bg-gradient-to-b from-[#EBA2A2] to-[#C23E34] text-black font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Submit Now
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default page