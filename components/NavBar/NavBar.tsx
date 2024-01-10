import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import logo from "../../public/static/logo.png";
import DownloadAppCTA from "../DownloadAppCTA";
import MobileViewNavMenu from "./MobileViewNavMenu";
import SocialLinks from "../SocialLinks";
import Image from "next/image";
const NavBar = () => {
  const [openNavMenu, setOpenNavMenu] = useState(false);

  const handleToggleNavMenu = () => {
    setOpenNavMenu(!openNavMenu);
  };

  return (
    <div className="w-screen h-[80px] z-10   bg-white drop-shadow-md">
      <div className="flex justify-between items-center px-4 w-full h-full">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              className="hover:rotate-12 hover:scale-115  hover:shadow-lg transition-all duration-500"
              style={{
                backgroundColor: 'black',
                borderRadius: '50px',
                maxWidth: '50px',
                maxHeight: '50px',
              }}
            />
            <h1 className="text-3xl font-bold mr-4 m-6">HAPNIN</h1>
            {/* <SocialLinks /> */}
          </div>
          <div>
            {/* <ul className="hidden lg:flex">
              <li>
                <Link to="hero" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="howItWorks"
                  smooth={true}
                  duration={500}
                  offset={-65}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="partners" smooth={true} duration={500} offset={-65}>
                  Our Partners
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} offset={-70}>
                  Who We Are
                </Link>
              </li>
            </ul> */}
          </div>
        </div>

        {/* <DownloadAppCTA style="hidden lg:flex" />
        <div className="lg:hidden mr-4" onClick={() => handleToggleNavMenu()}>
          {openNavMenu ? (
            <XMarkIcon className="w-5 hover:cursor-pointer" />
          ) : (
            <Bars3Icon className="w-5 hover:cursor-pointer" />
          )}
        </div> */}
      </div>
      {/* <MobileViewNavMenu
        openNavMenu={openNavMenu}
        setOpenNavMenu={setOpenNavMenu}
      /> */}
    </div>
  );
};

export default NavBar;
