import React from "react";
import { Element } from "react-scroll";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

interface Props {
  name: string;
  description: string;
  image: StaticImageData;
}

function Card({ image, name, description }: Props) {
  return (
    <div className="cursor-pointer rounded-md overflow-hidden shadow-md mb-5 min-w-lg flex flex-row hover:bg-green-50 transition-colors duration-300 bg-blue-400">
      {/* IMAGE */}
      <div className="relative w-1/3 sm:w-1/4 h-full overflow-hidden bg-black rounded-xl p-1">
        {/* <div className="absolute inset-0 bg-green-50 transform -rotate-6 origin-top-left"></div>
        <div className="absolute inset-0 bg-green-50 transform rotate-6 origin-top-right"></div> */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-green-200 animate-pulse w-full h-full"> */}
        <Image
          src={image}
          alt="application screenshot"
          className="border-[0.5px] border-gray-200"
        />
        {/* </div>
        </div> */}
      </div>

      {/* TEXT */}
      <div className="p-6 flex-shrink-0 w-2/3 sm:w-3/4 overflow-hidden bg-red-400">
        <div className="font-medium mb-1 text-lg text-gray-800 hover:text-green-500 transition-colors duration-300">
          {name || "Coffee"}
        </div>
        <p className="text-gray-700 text-2 overflow-hidden">{description}</p>
        {/* <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-3 rounded-md transition-colors duration-300">
          Learn More
        </button> */}
      </div>
    </div>
  );
}

const HowItWorks = () => {
  const screen1 = require("../public/static/screen1.png");
  const screen2 = require("../public/static/screen2.png");
  const screen4 = require("../public/static/screen4.png");
  return (
    <>
      <Element name="howItWorks" />
      <div className="w-full px-6 sm:px-10 my-[6rem]">
        <div className="xl:mx-[6rem] 2xl:w-[1200px] 2xl:mx-auto">
          <div className="mb-4">
            <h2 className="font-bold text-2xl text-center mb-2">
              How HAPNIN works
            </h2>
            <hr className="border-b-2 border-[#70f1ae] mx-auto w-20" />
          </div>

          <Swiper
            spaceBetween={100}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              renderBullet: function (index, className) {
                return `<span class="${className} inline-block w-3 h-3 rounded-full bg-green mr-2"></span>`;
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card
                image={screen1}
                description={findEventDescShort}
                name={"Find Events"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                image={screen2}
                description={createEventDescShort}
                name={"Create Events"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                image={screen4}
                description={attendEventDescShort}
                name={"Attend Events"}
              />
            </SwiperSlide>
          </Swiper>
          {/* <div className="swiper-pagination mt-4 flex justify-center items-center">
      <span className="swiper-pagination-bullet inline-block w-3 h-3 rounded-full bg-white mr-2"></span>
      <span className="swiper-pagination-bullet inline-block w-3 h-3 rounded-full bg-white mr-2"></span>
      <span className="swiper-pagination-bullet inline-block w-3 h-3 rounded-full bg-white"></span>
    </div> */}
        </div>
      </div>
    </>
  );
};

const findEventDescShort =
  "Looking for something to do in your local area? With HAPNIN, you can easily find events that match your interests and location.";
const findEventDesc =
  "Looking for something to do in your local area? With HAPNIN, you can easily find events that match your interests and location. Whether you're into music, sports, or food, HAPNIN's user-friendly interface makes it easy to browse and discover new events that are happening near you. Simply search by category or location, and you'll be on your way to discovering new and exciting events in no time";
const createEventDescShort =
  "Looking to bring people together for a fun and exciting event? HAPNIN makes it easy to host events that are tailored to your interests and goals.";
const createEventDesc =
  "Looking to bring people together for a fun and exciting event? HAPNIN makes it easy to host events that are tailored to your interests and goals. Whether you're planning a birthday party, charity event, or conference, HAPNIN provides all the tools and resources you need to create an engaging and successful event. From event promotion to ticket sales, HAPNIN has you covered every step of the way.";
const attendEventDescShort =
  "Love attending events, but hate the hassle of buying tickets and organizing logistics? With HAPNIN, attending events has never been easier.";
const attendEventDesc =
  "Love attending events, but hate the hassle of buying tickets and organizing logistics? With HAPNIN, attending events has never been easier. Our streamlined process lets you easily purchase tickets and coordinate with friends and family, so you can focus on enjoying the event itself. Plus, with helpful features like event reminders and in-app messaging, you'll always stay in the loop and be able to make the most of your event experience.";

export default HowItWorks;
