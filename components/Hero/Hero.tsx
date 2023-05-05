import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";

import barbecue from "../../public/static/barbecue-party.svg";
import ImageGrid from "./ImageGrid";

const Hero = () => {
  return (
    <>
      <Element name="hero" />
      <div className="bg-gradient-to-br from-green-500 to-blue-500 w-full min-h-screen flex flex-col justify-center items-center py-[6rem] px-6 sm:px-10 lg:px-20">
        <div className="mx-auto sm:mx-4 md:mx-12 lg:mx-0 lg:w-1/2 xl:w-[800px] 2xl:w-[1200px]">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:py-12">
            <div className="flex flex-col justify-center sm:w-1/2">
              <h1 className="font-bold text-3xl lg:text-4xl text-white mb-6 leading-tight">
                The platform - where people are brought together
              </h1>
              <p className="text-lg text-white mb-8">
                At <span className="font-bold">HAPNIN</span>, we believe that
                local events and activities are the heart of any community.
                That&apos;s why we created our app to help you discover the best
                free and low cost events in your area.
              </p>
              <button className="bg-white text-purple-500 hover:text-white hover:bg-purple-500 rounded-full py-3 px-6 font-bold shadow-lg transition-all duration-200">
                Get Started
              </button>
            </div>
            <div className="w-full sm:w-1/2 mt-10 sm:mt-0 p-1">
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
