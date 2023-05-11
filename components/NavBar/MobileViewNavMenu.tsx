import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import DownloadAppCTA from "../DownloadAppCTA";

interface MobileViewNavMenuProps {
  setOpenNavMenu: (arg: boolean) => void;
  openNavMenu: boolean;
}
interface LinkComponentProps {
  handleClosenavMenu: () => void;
  destination: string;
  title: string;
  offset?: number;
}

function LinkComponent({
  handleClosenavMenu,
  destination,
  title,
  offset,
}: LinkComponentProps) {
  return (
    <li className="border-b-2">
      <Link
        to={destination}
        smooth={true}
        duration={500}
        onClick={() => handleClosenavMenu()}
        offset={offset}
      >
        {title}
      </Link>
    </li>
  );
}

const MobileViewNavMenu = ({
  setOpenNavMenu,
  openNavMenu,
}: MobileViewNavMenuProps) => {
  const handleClosenavMenu = () => {
    setOpenNavMenu(!openNavMenu);
  };

  return (
    <div className="lg:hidden">
      <ul className={openNavMenu ? "absolute w-full px-8 bg-white" : "hidden"}>
        <LinkComponent
          handleClosenavMenu={handleClosenavMenu}
          destination="hero"
          title="Home"
        />
        <LinkComponent
          handleClosenavMenu={handleClosenavMenu}
          destination="howItWorks"
          title="How it works"
          offset={-90}
        />
        <LinkComponent
          handleClosenavMenu={handleClosenavMenu}
          destination="partners"
          title="Our Partners"
          offset={-50}
        />
        <LinkComponent
          handleClosenavMenu={handleClosenavMenu}
          destination="about"
          title="Who We Are"
          offset={-80}
        />
        <DownloadAppCTA style="flex" />
      </ul>
    </div>
  );
};

export default MobileViewNavMenu;
