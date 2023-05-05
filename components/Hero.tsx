import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";

import charity from "../public/static/charity.jpg";
import event from "../public/static/event.jpg";
import neighbours from "../public/static/neighbours.jpg";
import barbecue from "../public/static/barbecue-party.svg";

const Hero = () => {
  return (
    <>
      <Element name="hero" />
      <div className="bg-gradient-to-br from-green-500 to-blue-500 w-full min-h-screen flex flex-col justify-center items-center py-10 px-6 sm:px-10 lg:px-20">
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
            <div className="w-full sm:w-1/2 mt-10 sm:mt-0">
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

const ImageGrid = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-16 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
        <div className="w-full h-[200px] relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
          <Image
            src={neighbours}
            alt="Connect with your neighbours"
            className="h-full object-cover hover:border-[#70f1ae] hover:border-2"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-green-500 to-blue-500 opacity-90"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
            <h2 className="text-white font-bold text-lg lg:text-2xl p-4 text-center">
              Connect with your neighbours
            </h2>
          </div>
        </div>
        <div className="w-full h-[200px] relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
          <Image
            src={charity}
            alt="Support local charities"
            className="h-full object-cover hover:border-green-500 hover:border-2"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-green-500 to-blue-500 opacity-90"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
            <h2 className="text-white font-bold text-lg lg:text-2xl p-4 text-center">
              Support local charities
            </h2>
          </div>
        </div>
        <div className="w-full h-[200px] relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
          <Image
            src={event}
            alt="Find local events"
            className="h-full object-cover hover:border-[#f1c40f] hover:border-2"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-green-500 to-blue-500 opacity-90"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
            <h2 className="text-white font-bold text-lg lg:text-2xl p-4 text-center">
              Find local events
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
