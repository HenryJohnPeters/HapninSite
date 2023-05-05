import React from "react";
import Image, { StaticImageData } from "next/image";
import { Element } from "react-scroll";
import partners from "../partners/partners.json";

import slice_of_dice from "../public/static/partners/slice_of_dice.jpeg";

interface Props {
  name: string;
  description: string;
  image: string | StaticImageData;
}
const basePath = '/../public/static/partners'
function PartnerCard({ image, name, description }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:scale-105">
      <div className="relative">
        <Image
          src={image}
          alt="partner"
          className="w-full h-48 object-cover rounded-lg filter brightness-125 hover:brightness-100"
          width={200}
          height={200}
        />
        <div className="absolute inset-0 bg-[#70f1ae] opacity-0 transition duration-300 hover:opacity-70"></div>
      </div>
      <div className="p-4 text-center">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
}

const Partners = () => {
  return (
    <>
      <Element name="partners" />
      <div className="bg-gradient-to-br from-[#70f1ae] to-[#70f1ae]   py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-2">Our Partners</h2>
            <hr className="border-b-2 border-white mx-auto w-20" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="relative">
                <Image
                  src={slice_of_dice}
                  alt="partner"
                  className="w-full h-48 object-cover rounded-lg filter brightness-125 hover:brightness-100"
                />
                <div className="absolute inset-0 bg-[#70f1ae] opacity-0 transition duration-300 hover:opacity-70"></div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium">Partner</p>
                <p className="text-xs text-gray-500">
                  Description of the partner goes here.
                </p>
              </div>
            </div> */}

            {partners.map((partner, idx) => (
              <PartnerCard
                image={`${basePath}/${partner.image}`}
                name={partner.name}
                description={partner.description}
                key={idx}
              />
            ))}
            {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="relative">
                <Image
                  src={slice_of_dice}
                  alt="partner"
                  className="w-full h-48 object-cover rounded-lg filter brightness-125 hover:brightness-100"
                />
                <div className="absolute inset-0 bg-[#70f1ae] opacity-0 transition duration-300 hover:opacity-70"></div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium">Partner</p>
                <p className="text-xs text-gray-500">
                  Description of the partner goes here.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="relative">
                <Image
                  src={slice_of_dice}
                  alt="partner"
                  className="w-full h-48 object-cover rounded-lg filter brightness-125 hover:brightness-100"
                />
                <div className="absolute inset-0 bg-[#70f1ae] opacity-0 transition duration-300 hover:opacity-70"></div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium">Partner</p>
                <p className="text-xs text-gray-500">
                  Description of the partner goes here.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="relative">
                <Image
                  src={slice_of_dice}
                  alt="partner"
                  className="w-full h-48 object-cover rounded-lg filter brightness-125 hover:brightness-100"
                />
                <div className="absolute inset-0 bg-[#70f1ae] opacity-0 transition duration-300 hover:opacity-70"></div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium">Partner</p>
                <p className="text-xs text-gray-500">
                  Description of the partner goes here.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="relative">
                <Image
                  src={slice_of_dice}
                  alt="partner"
                  className="w-full h-48 object-cover rounded-lg filter brightness-125 hover:brightness-100"
                />
                <div className="absolute inset-0 bg-[#70f1ae] opacity-0 transition duration-300 hover:opacity-70"></div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium">Partner</p>
                <p className="text-xs text-gray-500">
                  Description of the partner goes here.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="relative">
                <Image
                  src={slice_of_dice}
                  alt="partner"
                  className="w-full h-48 object-cover rounded-lg filter brightness-125 hover:brightness-100"
                />
                <div className="absolute inset-0 bg-[#70f1ae] opacity-0 transition duration-300 hover:opacity-70"></div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium">Partner</p>
                <p className="text-xs text-gray-500">
                  Description of the partner goes here.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="relative">
                <Image
                  src={slice_of_dice}
                  alt="partner"
                  className="w-full h-48 object-cover rounded-lg filter brightness-125 hover:brightness-100"
                />
                <div className="absolute inset-0 bg-[#70f1ae] opacity-0 transition duration-300 hover:opacity-70"></div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium">Partner</p>
                <p className="text-xs text-gray-500">
                  Description of the partner goes here.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="relative">
                <Image
                  src={slice_of_dice}
                  alt="partner"
                  className="w-full h-48 object-cover rounded-lg filter brightness-125 hover:brightness-100"
                />
                <div className="absolute inset-0 bg-[#70f1ae] opacity-0 transition duration-300 hover:opacity-70"></div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium">Partner</p>
                <p className="text-xs text-gray-500">
                  Description of the partner goes here.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="relative">
                <Image
                  src={slice_of_dice}
                  alt="partner"
                  className="w-full h-48 object-cover rounded-lg filter brightness-125 hover:brightness-100"
                />
                <div className="absolute inset-0 bg-[#70f1ae] opacity-0 transition duration-300 hover:opacity-70"></div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium">Partner</p>
                <p className="text-xs text-gray-500">
                  Description of the partner goes here.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="relative">
                <Image
                  src={slice_of_dice}
                  alt="partner"
                  className="w-full h-48 object-cover rounded-lg filter brightness-125 hover:brightness-100"
                />
                <div className="absolute inset-0 bg-[#70f1ae] opacity-0 transition duration-300 hover:opacity-70"></div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-medium">Partner</p>
                <p className="text-xs text-gray-500">
                  Description of the partner goes here.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
