import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";

import manImg from "../public/static/manImg.jpg";

const About = () => {
  return (
    <>
      <Element name="about"></Element>
      <div className="w-full px-6 sm:px-10 py-9">
        <div className="xl:mx-[6rem] 2xl:w-[1200px] 2xl:mx-auto">
          <div className="mb-4">
            <h2 className="font-bold text-2xl">Who We Are</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div className="p-4 rounded-2xl border-[0.50px] border-[#70f1ae] hover:bg-[#70f1ae] hover:text-black transition-colors duration-300">
              <div className="w-1/2 mx-auto mb-4">
                <Image src={manImg} alt="man" className="rounded-full" />
              </div>
              <div className="flex flex-col items-center ">
                <h3 className="font-bold text-xl my-2">Name</h3>
                <p className="text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-2xl border-[0.50px] border-[#70f1ae] hover:bg-[#70f1ae] hover:text-black transition-colors duration-300">
              <div className="w-1/2 mx-auto mb-4">
                <Image src={manImg} alt="man" className="rounded-full" />
              </div>
              <div className="flex flex-col items-center ">
                <h3 className="font-bold text-xl my-2">Name</h3>
                <p className="text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-2xl border-[0.50px] border-[#70f1ae] hover:bg-[#70f1ae] hover:text-black transition-colors duration-300">
              <div className="w-1/2 mx-auto mb-4">
                <Image src={manImg} alt="man" className="rounded-full" />
              </div>
              <div className="flex flex-col items-center ">
                <h3 className="font-bold text-xl my-2">Name</h3>
                <p className="text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default About;
