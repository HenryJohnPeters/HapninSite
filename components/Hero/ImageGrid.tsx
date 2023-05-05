import React from "react";
import Image from "next/image";

import charity from "../../public/static/charity.jpg";
import event from "../../public/static/event.jpg";
import neighbours from "../../public/static/neighbours.jpg";

const ImageGrid = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-16 sm:mt-0 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
        <div className="w-full h-[200px] relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
          <Image
            src={neighbours}
            alt="Connect with your neighbours"
            className="h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-green-500 to-blue-500 opacity-60"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
            <h2 className="text-white font-bold text-lg lg:text-2xl p-4 text-center">
              Connect with your neighbours
            </h2>
          </div>
        </div>
        <div className="w-full h-[200px] relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
          <Image
            src={charity}
            alt="Support local charities"
            className="h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-green-500 to-blue-500 opacity-60"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
            <h2 className="text-white font-bold text-lg lg:text-2xl p-4 text-center">
              Support local charities
            </h2>
          </div>
        </div>
        <div className="w-full h-[200px] relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
          <Image
            src={event}
            alt="Find local events"
            className="h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-green-500 to-blue-500 opacity-60"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
            <h2 className="text-white font-bold text-lg lg:text-2xl p-4 text-center">
              Find local events
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
