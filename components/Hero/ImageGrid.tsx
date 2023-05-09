import React from "react";
import Image from "next/image";

import charity from "../../public/static/charity.jpg";
import event from "../../public/static/event.jpg";
import neighbours from "../../public/static/neighbours.jpg";
import havingFun from "../../public/static/havingFun.svg";

interface GridItemComponentProps {
  title: string;
  desc: string;
  image: string;
}

function GridItemComponent({ title, desc, image }: GridItemComponentProps) {
  return (
    <div className="flex flex-row bg-white rounded-lg shadow-lg p-6 my-2 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-purple-50">
      <div className="h-full w-3/4 justify-between">
        <div className="">
          <i className="fas fa-percent text-4xl text-purple-500 mb-4 animate-bounce-on-hover"></i>
          <h3 className="sm:text-lg font-bold text-center uppercase tracking-wider hover:text-purple-600">
            {title}{" "}
          </h3>
        </div>
        <p className="text-base font-medium text-center hover:text-purple-600">
          {desc}
        </p>
      </div>
      <div className="h-full ml-2 w-1/4 flex items-center">
        <Image
          src={image}
          alt="party"
          className="w-full"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

const ImageGrid = () => {
  const gridContent = [
    {
      title: "Connect with like-minded people",
      desc: "Find others in your local area who share your hobbies and interests",
      image: "havingFun.svg",
    },
    {
      title: "Showcase your skills and talents",
      desc: "Host your own events and show off what makes you unique",
      image: "music.svg",
    },
    {
      title: "Discover exciting events",
      desc: "Find the hottest events and activities happening near you",
      image: "love.svg",
    },
    {
      title: "Support your community",
      desc: "Help make a difference in your local community through our platform",
      image: "support.svg",
    },
    {
      title: "Exclusive Discounts & Offers",
      desc: "Save on local events and activities",
      image: "discount.svg",
    },
  ];

  return (
    <div className=" bg-[#70f1ae] mt-12">
      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Get the most out of your community!
          </h2>
          <hr className="border-b-2 border-white mx-auto w-20" />
        </div>

        <div className="grid md:grid-cols-2 md:gap-4">
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
