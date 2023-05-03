import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import screen1 from "../public/static/screen1.png";
import screen2 from "../public/static/screen2.png";
import screen4 from "../public/static/screen4.png";

const HowItWorks = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <div className="w-full px-6 sm:px-10 py-9">
      <div>
        <div className="mb-4">
          <h2 className="font-bold text-2xl">How HAPNIN works</h2>
        </div>

        {/* CONTAINER 1 */}
        <div className="overflow-auto mb-10">
          {/* CONTAINER 2 */}
          <div className="flex flex-row sm:space-y-0">
            {/* SLIDE 1 */}
            <div className="flex flex-col items-center space-y-2 pr-2 py-2 rounded-xl">
              <div className="border-[0.25px] border-black rounded-xl w-[250px]">
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
            <div className="flex flex-col items-center space-y-2 p-2 rounded-xl">
              <div className="border-[0.25px] border-black rounded-xl w-[250px]">
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
            <div className="flex flex-col items-center space-y-2 p-2 rounded-xl">
              <div className="border-[0.25px] border-black rounded-xl w-[250px]">
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
      </div>
    </div>
  );
};

export default HowItWorks;
