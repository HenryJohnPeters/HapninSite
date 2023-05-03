import React from "react";
import Image from "next/image";

import screen1 from "../public/static/screen1.png";
import screen2 from "../public/static/screen2.png";
import screen4 from "../public/static/screen4.png";

const HowItWorksMobileV = () => {
  return (
    <div className="overflow-auto mb-10">
      {/* CONTAINER 2 */}
      <div className="flex flex-row sm:justify-around 2xl:w-[1200px] 2xl:mx-auto ">
        {/* SLIDE 1 */}
        <div className="flex flex-col items-center pr-2 py-2 rounded-xl">
          <div className="border-[0.25px] border-grey shadow-sm rounded-xl w-[250px] sm:w-[200px]">
            <Image
              src={screen2}
              alt="map with event pins"
              //   className="border-[0.25px] border-gray-500"
            />
          </div>
          <div>
            <p>Create an event</p>
          </div>
        </div>
        {/* SLIDE 2 */}
        <div className="flex flex-col items-center p-2 rounded-xl">
          <div className="border-[0.25px] border-grey shadow-sm rounded-xl w-[250px] sm:w-[200px]">
            <Image
              src={screen1}
              alt="map with event pins"
              //   className="border-[0.25px] border-gray-500"
            />
          </div>
          <div>
            <p>Find an event</p>
          </div>
        </div>
        {/* SLIDE 3 */}
        <div className="flex flex-col items-center p-2 rounded-xl">
          <div className="border-[0.25px] border-grey shadow-sm rounded-xl w-[250px] sm:w-[200px]">
            <Image
              src={screen4}
              alt="map with event pins"
              //   className="border-[0.25px] border-gray-500"
            />
          </div>
          <div>
            <p>Join an event</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksMobileV;
