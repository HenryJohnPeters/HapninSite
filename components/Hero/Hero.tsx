import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";

import barbecue from "../../public/static/barbecue-party.svg";
import logo from "../../public/static/logo.png";
import ImageGrid from "./ImageGrid";
import { AttentionSeeker, JackInTheBox, Hinge, Reveal, Flip } from "react-awesome-reveal";

const Hero = () => {
  return (
    <>
      <Element name="hero" />
      <div className="bg-gradient-to-br from-[#70f1ae] to-[#70f1ae] w-full flex flex-col justify-center items-center py-[6rem] sm:py-[3.5rem] px-6 sm:px-10">
        <div className="mx-auto sm:mx-4 md:mx-12 lg:mx-0 lg:w-3/4 2xl:w-[1200px]">

          <div className="flex flex-col sm:flex-row justify-between items-center sm:pt-[6rem] sm:pb-4 md:mb-6 lg:mb-8 2xl:pb-12">

       
            <div className="flex flex-col justify-center sm:w-1/2 sm:p-2">
              <h1 className="font-bold text-3xl lg:text-4xl text-black mb-6 leading-tight">
                The app that helps you find out what is HAPNIN in your area!
              </h1>
              <p className="mb-6">
                 
            
                <span className="font-bold">HAPNIN </span> 
                
           
                is an event discovery
                app that offers user-generated events and verified partner
                events in your area. The app&apos;s easy-to-use map-based
                interface makes it simple to find things to do and exclusive
                discounts. Download HAPNIN now to plan your next night out with
                friends and create memories that last a lifetime!
              </p>
              <div className="flex flex-col items-center w-full">
                <button className="bg-white w-full max-w-[350px] m-2 text-black hover:text-white hover:bg-black rounded-full py-3 px-6   shadow-lg transition-all duration-200 flex flex-col items-center md:flex-row md:justify-between">
                  Download for IOS <span>(Coming soon 🕑)</span>
                </button>
                <button className="bg-white w-full max-w-[350px] m-2 text-black hover:text-white hover:bg-black rounded-full py-3 px-6   shadow-lg transition-all duration-200 flex flex-col items-center md:flex-row md:justify-between">
                  Download for Android <span>(Coming soon 🕑)</span>
                </button>
              </div>
            </div>
         


            <div className="w-full sm:w-1/2 mt-10 sm:mt-0 p-1 sm:p-8">
            {/* <JackInTheBox>  */}
              <Image
                src={barbecue}
                alt="party"
                className="w-full rounded-lg shadow-lg hover:scale-105 transition-all duration-500"
              />
              {/* </JackInTheBox>  */}
            </div>
          </div>

          {/* <ImageGrid /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
