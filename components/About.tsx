import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";

import manImg from "../public/static/manImg.jpg";

const About = () => {
  return (
    <>
      <Element name="about"></Element>
      <div className="w-full px-6 sm:px-10 py-9 bg-gradient-to-br from-[#70f1ae] to-[#70f1ae]">
        <div className="xl:mx-[6rem] 2xl:w-[1200px] 2xl:mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-bold text-2xl mb-2">Who We Are</h2>
            <hr className="border-b-2 border-white mx-auto w-20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div className="p-4 rounded-2xl border-[0.50px] border-[#70f1ae] hover:bg-[#70f1ae] hover:text-black transition-colors duration-300">
              <div className="w-1/2 mx-auto mb-4">
                <Image src={manImg} alt="man" className="rounded-full" />
              </div>
              <div className="flex flex-col items-center ">
                <h3 className="font-bold text-xl my-2">Henry Peters (CTO)</h3>
                <p className="text-sm text-center">
                  Henry is a highly skilled full stack developer. He has
                  extensive experience in javascript mapping technologies and
                  has successfully developed user-friendly and scalable
                  applications. Henry likes a good night out and loves catching
                  his favourite bands playing live.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-2xl border-[0.50px] border-[#70f1ae] hover:bg-[#70f1ae] hover:text-black transition-colors duration-300">
              <div className="w-1/2 mx-auto mb-4">
                <Image src={manImg} alt="man" className="rounded-full" />
              </div>
              <div className="flex flex-col items-center ">
                <h3 className="font-bold text-xl my-2">Jacob Walker (CFO )</h3>
                <p className="text-sm text-center">
                  Jacob is an accomplished B2B sales professional with extensive
                  experience selling SaaS and IT security solutions. Jacob
                  enjoys attending networking events where he can connect with
                  fellow entrepreneurs who share his passion and drive.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-2xl border-[0.50px] border-[#70f1ae] hover:bg-[#70f1ae] hover:text-black transition-colors duration-300">
              <div className="w-1/2 mx-auto mb-4">
                <Image src={manImg} alt="man" className="rounded-full" />
              </div>
              <div className="flex flex-col items-center ">
                <h3 className="font-bold text-xl my-2">Joan (Developer)</h3>
                <p className="text-sm text-center">
                  Joan is a talented full-stack developer with a passion for
                  creating efficient and user-friendly web applications. Joan
                  likes to spend his weekends catching up with his friends at
                  the local pub and play board games.
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
