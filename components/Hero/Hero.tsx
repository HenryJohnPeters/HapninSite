import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";
import barbecue from "../../public/static/barbecue-party.svg";
import { JackInTheBox } from "react-awesome-reveal";

const Hero = () => {
  return (
    <>
      <Element name="hero" />
      <section className="body-font" style={{ backgroundColor: '#70f1ae' }}>
        <div className="container mx-auto flex px-5 py-24 items-center flex-col lg:flex-row">
          <div className="flex flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left mb-16 lg:mb-0 lg:pr-10">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              The app that helps you find out what is HAPNIN in your area!
            </h1>
            <p className="mb-8 leading-relaxed">
              Score amazing discounts! It's not just an app. It's your ticket to exclusive deals. Download <b>HAPNIN</b> today and start your adventure!
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="inline-flex  bg-white text-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg max-w-[400px] transition duration-300 ease-in-out">
                Download for IOS
              </button>
              <button className="ml-4 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg max-w-[400px] transition duration-300 ease-in-out">
                Download for Android
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 lg:mt-0">
            <JackInTheBox>
              <Image src={barbecue} alt="party" className="object-cover object-center rounded-lg shadow-lg" layout="responsive" width={700} height={475} />
            </JackInTheBox>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
