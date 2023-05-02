import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import googleDownload from "../public/google-badge.svg";
import iosDownload from "../public/app-store-badge.svg";
import DownloadAppCTA from "./DownloadAppCTA";

const NavBar = () => {
  const [openNavMenu, setOpenNavMenu] = useState(false);

  const handleToggleNavMenu = () => {
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
            <li>How it works</li>
            <li>Partners</li>
            <li>Who We Are</li>
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
        <ul className={openNavMenu ? "absolute w-full px-8 bg-white" : "hidden"}>
          <li className="border-b-2">How it works</li>
          <li className="border-b-2">Partners</li>
          <li className="border-b-2">Who We Are</li>
          <DownloadAppCTA style="flex" />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
