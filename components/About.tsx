import React from "react";
import Image from "next/image";

import manImg from "../public/static/manImg.jpg";

const About = () => {
  return (
    <div className="w-full px-6 sm:px-10 py-9">
      <div className="xl:mx-[6rem] 2xl:w-[1200px] 2xl:mx-auto">
        <div className="mb-4">
          <h2 className="font-bold text-2xl">Who We Are</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="p-4 rounded-2xl border-[#70f1ae] border-[0.50px]">
            <div className="w-1/2 m-auto">
              <Image src={manImg} alt="man" className="rounded-full" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-2xl border-[#70f1ae] border-[0.50px]">
            <div className="w-1/2 m-auto">
              <Image src={manImg} alt="man" className="rounded-full" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-2xl border-[#70f1ae] border-[0.50px]">
            <div className="w-1/2 m-auto">
              <Image src={manImg} alt="man" className="rounded-full" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
