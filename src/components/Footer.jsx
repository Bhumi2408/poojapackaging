import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#1E2126] -mt-[100px] pt-[100px] relative z-[2]">
      <div className="mx-auto w-[80%] grid md:grid-cols-2 lg:grid-cols-3 py-20">
        <div>
          <Image src="/logo.png" alt="logo" width={100} height={100} className="object-contain"/>
          <p className="text-lg mt-7 text-[#ffffff8c]">Specialist in custom packaging solutions. We combine advanced technology with creativity to help your brand stand out.</p>
        </div>
        <div className="flex justify-start md:justify-center mt-7 md:mt-0">
          <div>
            <h4 className="text-3xl text-white font-semibold">Quick Links</h4>
            <ul className="mt-4 text-lg text-[#ffffff8c] space-y-2">
              <li className="transition-all duration-300 hover:text-[#c23e34]"><Link href="/">Home</Link></li>
              <li className="transition-all duration-300 hover:text-[#c23e34]"><Link href="/about">About</Link></li>
              <li className="transition-all duration-300 hover:text-[#c23e34]"><Link href="/products">Products</Link></li>
              <li className="transition-all duration-300 hover:text-[#c23e34]"><Link href="/blogs">Blogs</Link></li>
              <li className="transition-all duration-300 hover:text-[#c23e34]"><Link href="/contact-us">Contact Us</Link></li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/PoojaPackagingIndustries" target="_blank"><FontAwesomeIcon icon={faFacebook} className="bg-[#c23e34] text-white text-2xl p-2 rounded-xl transition-all duration-300 hover:-translate-y-1"/></a>
              <a href="https://www.instagram.com/poojapackagingindustries/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="bg-[#c23e34] text-white text-2xl p-2 rounded-xl transition-all duration-300 hover:-translate-y-1"/></a>
            </div>
          </div>
        </div>
         <div className="flex justify-center mt-7 md:mt-0">
          <div>
            <h4 className="text-3xl text-white font-semibold">Contact Us</h4>
            <ul className="mt-4 text-lg text-[#ffffff8c] space-y-4">
              <li className="">G951, floor-, DSIDC, INDUSTRIAL AREA,<br/> Delhi, 110040, New Delhi - <br/>110040, Delhi, India</li>
              <li className="">+91 9810006555, +91 9266561910</li>
              <li className="">poojapackagingindustries951@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[80%] border-t border-gray-400 py-5 text-center">
        <p className="text-lg text-[#ffffff8c]">Copyright © 2025 Pooja Packaging | All rights reserved | Powered by <a href="https://www.cybertricksmedia.com/" target="_blank" className="text-[#c23e34]">Cybertrick Media Pvt Ltd</a></p>
      </div>
    </section>
  );
};

export default Footer;
