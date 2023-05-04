import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-[#111827] text-gray-300 px-4 py-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 gap-2 sm:gap-0">
        <div className="">
          <h2 className="mb-4">Follow us</h2>
          <div className="flex gap-2">
            <FaFacebook className="text-2xl mr-2 hover:text-[#70f1ae]" />
            <FaInstagram className="text-2xl mr-2 hover:text-[#70f1ae]" />
            <FaTwitter className="text-2xl mr-2 hover:text-[#70f1ae]" />
            <FaTiktok className="text-2xl mr-2 hover:text-[#70f1ae]" />
          </div>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Index</h6>
          <ul>
            <li className="py-1">Mission</li>
            <li className="py-1">Partners</li>
            <li className="py-1">Blog</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Resources</h6>
          <ul>
            <li className="py-1">Trust and Safety</li>
            <li className="py-1">Contact Us</li>
            <li className="py-1">FAQ</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Cookie Policy</li>
            <li className="py-1">Privacy Policy</li>
            <li className="py-1">Terms</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase ">Suscribe to newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
          <form action="" className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email..."
            />
            <button className="p-2 mb-4 bg-white m-auto rounded-xl text-[#111827]">
              <span className="font-bold">Subscribe</span>
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">
          © HAPNIN {new Date().getFullYear()}. All rights reserved
        </p>
        {/* <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook className="" />
          <FaInstagram />
          <FaTwitter />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
