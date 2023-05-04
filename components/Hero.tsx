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
      <Element name="hero"></Element>
      <div className="w-full sm:h-screen flex flex-col justify-between px-6 sm:px-10">
        <div className="mx-auto sm:mx-4 md:mx-12 mt-28 mb-8 sm:my-auto xl:mx-[6rem] 2xl:w-[1200px] 2xl:mx-auto">
          {/* TOP */}
          <div className="w-full sm:mb-9 sm:flex sm:items-center">
            <h1 className="font-bold text-2xl sm:mr-6 mb-4">
              The platform - where people are brought together
            </h1>
            <p className="">
              At <span className="font-bold">HAPNIN</span>, we believe that
              local events and activities are the heart of any community.
              That&apos;s why we created our app to help you discover the best
              free and low cost events in your area.
            </p>
            <Image src={barbecue} alt="party" className="hidden sm:block" />
          </div>

          {/* BOTTOM */}
          <div className="w-full relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {/* CARD 1 */}
              <div className="w-full h-[160px] mb-12">
                <Image
                  src={neighbours}
                  alt="charity"
                  className="h-[190px] object-cover hover:border-[#70f1ae] hover:border-2"
                />
                <p>Connect with your neighbours</p>
              </div>
              {/* CARD 2 */}
              <div className="w-full h-[160px] mb-12">
                <Image
                  src={charity}
                  alt="charity"
                  className="h-[190px] object-cover hover:border-[#70f1ae] hover:border-2"
                />
                <p>Support your local charity</p>
              </div>
              {/* CARD 3 */}
              <div className="w-full h-[160px] mb-12">
                <Image
                  src={event}
                  alt="charity"
                  className="h-[190px] object-cover hover:border-[#70f1ae] hover:border-2"
                />
                <p>Create your own event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
