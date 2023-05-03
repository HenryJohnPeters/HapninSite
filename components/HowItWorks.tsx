import React from "react";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useMediaQuery } from "react-responsive";

import screen1 from "../public/static/screen1.png";
import screen2 from "../public/static/screen2.png";
import screen3 from "../public/static/screen3.png";
import screen4 from "../public/static/screen4.png";

const HowItWorks = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <div className="bg-red-400 w-full px-6 sm:px-10 py-9">
      <div className="mx-auto">
        <div className="">
          <h1 className="font-bold text-2xl">How HAPNIN works</h1>
        </div>

        {/* SCREENS */}
        {/* <div>
          <div>
            <Image src={screen2} alt="map with event pins" />
            <p>Create your event</p>
          </div>
          <div>
            <Image src={screen1} alt="map with event pins" />
            <p>Find an event</p>
          </div>
          <div>
            <Image src={screen4} alt="map with event pins" />
            <p>Join the event</p>
          </div>
        </div> */}
        <div className="">
          <CarouselProvider
            naturalSlideWidth={110}
            naturalSlideHeight={240}
            totalSlides={3}
            visibleSlides={1.5}
            className="sm:hidden bg-red-600"
          >
            <Slider>
              <Slide index={0} className="mr-6">
                <Image src={screen2} alt="map with event pins" />
                <p>Create your event</p>
              </Slide>
              <Slide index={1} className="mr-6">
                <Image src={screen1} alt="map with event pins" />
                <p>Find an event</p>
              </Slide>
              <Slide index={2} className="mr-6">
                <Image src={screen4} alt="map with event pins" />
                <p>Join the event</p>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
