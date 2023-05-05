import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";

import barbecue from "../../public/static/barbecue-party.svg";
import ImageGrid from "./ImageGrid";

const Hero = () => {
  return (
    <>
      <Element name="hero" />
      <div className="bg-gradient-to-br from-[#70f1ae] to-[#70f1ae] w-full flex flex-col justify-center items-center py-[6rem] sm:py-[3.5rem] px-6 sm:px-10">
        <div className="mx-auto sm:mx-4 md:mx-12 lg:mx-0 lg:w-3/4 2xl:w-[1200px]">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:pt-12 sm:pb-4 md:mb-6 lg:mb-8 2xl:pb-12">
            <div className="flex flex-col justify-center sm:w-1/2 sm:p-2">
              <h1 className="font-bold text-3xl lg:text-4xl text-black mb-6 leading-tight">
                The platform - where people are brought together
              </h1>
              <p className="text-lg text-black mb-8">
                At <span className="font-bold">HAPNIN</span>, we believe that
                local events and activities are the heart of any community.
                That&apos;s why we created our app to help you discover the best
                free and low cost events in your area.
              </p>
              <button className="bg-white m-2 text-black hover:text-[#70f1ae] hover:bg-black rounded-full py-3 px-6 font-bold shadow-lg transition-all duration-200">
                Download for IOS
              </button>
              <button className="bg-white m-2 text-black hover:text-[#70f1ae] hover:bg-black rounded-full py-3 px-6 font-bold shadow-lg transition-all duration-200">
                Download for Android
              </button>
            </div>
            <div className="w-full sm:w-1/2 mt-10 sm:mt-0 p-1 sm:p-8">
              <Image
                src={barbecue}
                alt="party"
                className="w-full rounded-lg shadow-lg hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>

          <ImageGrid />
        </div>
      </div>
    </>
  );
};

export default Hero;
