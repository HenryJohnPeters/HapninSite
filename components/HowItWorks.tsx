import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";

import screen1 from "../public/static/screen1.png";
import screen2 from "../public/static/screen2.png";
import screen4 from "../public/static/screen4.png";
import map from "../public/static/map.png";
import HowItWorksMobileV from "./HowItWorksMobileV";

const HowItWorks = () => {
  return (
    <>
      <Element name="howItWorks"></Element>
      <div className="w-full px-6 sm:px-10 py-9">
        <div className="xl:mx-[6rem] 2xl:w-[1200px] 2xl:mx-auto">
          <div className="mb-4">
            <h2 className="font-bold text-2xl">How HAPNIN works</h2>
          </div>
          <HowItWorksMobileV />
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
