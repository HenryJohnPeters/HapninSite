import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";


const SocialLinks = () => {
  return (
    <div className="flex gap-2">
      <a href="https://www.facebook.com/profile.php?id=100089445205259">
        <FaFacebook className="text-2xl mr-2 hover:text-[#70f1ae]" />
      </a>
      <a href="https://www.instagram.com/hapninuk">
        <FaInstagram className="text-2xl mr-2 hover:text-[#70f1ae]" />
      </a>
      <a href="https://www.twitter.com/HapninUK/">
        <FaTwitter className="text-2xl mr-2 hover:text-[#70f1ae]" />
      </a>
      <a href="https://www.tiktok.com/@hapninuk">
        <FaTiktok className="text-2xl mr-2 hover:text-[#70f1ae]" />
      </a>
    </div>
  );
};

export default SocialLinks;
