import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";

import slice_of_dice from "../public/static/partners/slice_of_dice.jpeg";

const Partners = () => {
  return (
    <>
      <Element name="partners"></Element>
      <div className="w-full px-6 sm:px-10 py-9">
        <div className="xl:mx-[6rem] 2xl:w-[1200px] 2xl:mx-auto">
          <div className="mb-4">
            <h2 className="font-bold text-2xl">Our Partners</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-8 p-4">
            <Image src={slice_of_dice} alt="partner" className="w-[200px]" />
            <Image src={slice_of_dice} alt="partner" className="w-[200px]" />
            <Image src={slice_of_dice} alt="partner" className="w-[200px]" />
            <Image src={slice_of_dice} alt="partner" className="w-[200px]" />
            <Image src={slice_of_dice} alt="partner" className="w-[200px]" />
            <Image src={slice_of_dice} alt="partner" className="w-[200px]" />
            <Image src={slice_of_dice} alt="partner" className="w-[200px]" />
            <Image src={slice_of_dice} alt="partner" className="w-[200px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
