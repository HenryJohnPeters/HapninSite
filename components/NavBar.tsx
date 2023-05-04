import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, animateScroll as scroll } from "react-scroll";

import DownloadAppCTA from "./DownloadAppCTA";

const NavBar = () => {
  const [openNavMenu, setOpenNavMenu] = useState(false);

  const handleToggleNavMenu = () => {
    setOpenNavMenu(!openNavMenu);
  };

  const handleClosenavMenu = () => {
    setOpenNavMenu(!openNavMenu);
  };

  return (
    <div className="w-screen h-[80px] z-10 fixed bg-white drop-shadow-md">
      {/* DESKTOP NAV BAR */}
      <div className="flex justify-between items-center px-4 w-full h-full">
        {/* LOGO + NAV */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4">HAPNIN</h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="hero" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="howItWorks" smooth={true} duration={500} offset={-160}>
                How It Works
              </Link>
            </li>
            <li>
              <Link to="partners" smooth={true} duration={500} offset={-140}>
                Partners
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} offset={-160}>
                Who We Are
              </Link>
            </li>
          </ul>
        </div>

        <DownloadAppCTA style="hidden md:flex" />

        <div className="md:hidden mr-4" onClick={() => handleToggleNavMenu()}>
          {openNavMenu ? (
            <XMarkIcon className="w-5 hover:cursor-pointer" />
          ) : (
            <Bars3Icon className="w-5 hover:cursor-pointer" />
          )}
        </div>
      </div>

      {/* MOBILE VIEW NAV MENU */}
      <div>
        <ul
          className={openNavMenu ? "absolute w-full px-8 bg-white" : "hidden"}
        >
          <li className="border-b-2">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              onClick={() => handleClosenavMenu()}
            >
              Home
            </Link>
          </li>
          <li className="border-b-2">
            <Link
              to="howItWorks"
              smooth={true}
              duration={500}
              onClick={() => handleClosenavMenu()}
            >
              How it works
            </Link>
          </li>
          <li className="border-b-2">
            <Link
              to="partners"
              smooth={true}
              duration={500}
              onClick={() => handleClosenavMenu()}
            >
              Partners
            </Link>
          </li>
          <li className="border-b-2">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => handleClosenavMenu()}
            >
              Who We Are
            </Link>
          </li>
          <DownloadAppCTA style="flex" />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
