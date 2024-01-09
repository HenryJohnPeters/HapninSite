import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="w-full bg-[#111827] text-gray-300 px-4 py-2">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-6 border-b-2 border-gray-600 py-8 gap-2">
        <div className="md:col-span-1">
          <h2 className="mb-4">Follow us</h2>
          <SocialLinks />
        </div>
        {/* Additional columns can be added here if needed */}
      </div>
      <div className="px-2 py-4 mx-auto text-center text-gray-500">
        <p className="py-4">
          © HAPNIN {new Date().getFullYear()}. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
