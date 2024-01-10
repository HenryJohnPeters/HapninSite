
const gridContent = [

  {
    title: "Exclusive Discounts & Offers",
    desc: "Buy local or bye local. Help the independant buisnesses you love.",
    image: "discount.svg",

  },
  {
    title: "Discover Things to do",
    desc: "Wether you want a bite to eat or to find a new excursion look no further.",
    image: "music.svg",
  },
  {
    title: "Support your community",
    desc: "Buy local or bye local. Help the independant buisnesses you love.",
    image: "support.svg",
  },

]; import React from "react";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";

interface GridItemComponentProps {
  title: string;
  desc: string;
  image: string;
}

function GridItemComponent({ title, desc, image }: GridItemComponentProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 m-2 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl items-center">
      <Zoom>
        <div className="w-48 h-48 relative">
          <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
      </Zoom>
      <h3 className="text-lg font-bold text-center uppercase tracking-wider text-black mt-4">
        {title}
      </h3>
      <p className="text-base font-medium text-center mt-2">
        {desc}
      </p>
    </div>
  );
}

const ImageGrid = () => {


  return (
    <div className="bg-white m-12">
      <div className="mx-auto lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Get the most out of your community!
          </h2>
          <hr className="border-b-2 border-[#70f1ae] mx-auto w-40" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {gridContent.map((el, i) => (
            <GridItemComponent
              title={el.title}
              desc={el.desc}
              image={`/static/${el.image}`}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
