import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-[#111827] text-gray-300 px-4 py-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 gap-2 sm:gap-0">
        <div className="col-span-2 md:col-span-1">
          <h2 className="mb-4">Follow us</h2>
          <div className="flex gap-2">
          <a href="https://www.instagram.com/your_instagram_page/">
            <FaFacebook className="text-2xl mr-2 hover:text-[#70f1ae]" />
            </a>
            <a href="https://www.instagram.com/your_instagram_page/">
            <FaInstagram className="text-2xl mr-2 hover:text-[#70f1ae]" />
            </a>
            <a href="https://www.instagram.com/your_instagram_page/">
            <FaTwitter className="text-2xl mr-2 hover:text-[#70f1ae]" />
            </a>
            <a href="https://www.instagram.com/your_instagram_page/">
            <FaTiktok className="text-2xl mr-2 hover:text-[#70f1ae]" />
            </a>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          {/* <h6 className="font-bold uppercase pt-2">Index</h6>
          <ul>
            <li className="py-1">Mission</li>
            <li className="py-1">Partners</li>
            <li className="py-1">Blog</li>
          </ul> */}
        </div>
        <div className="col-span-2 md:col-span-1">
          {/* <h6 className="font-bold uppercase pt-2">Resources</h6>
          <ul>
            <li className="py-1">Trust and Safety</li>
            <li className="py-1">Contact Us</li>
            <li className="py-1">FAQ</li>
          </ul> */}
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">
          © HAPNIN {new Date().getFullYear()}. All rights reserved
        </p>
      </div>
    </div>
  );
};


export default Footer;
