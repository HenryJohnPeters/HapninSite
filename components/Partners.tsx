import React from "react";
import Image, { StaticImageData } from "next/image";
import { Element } from "react-scroll";
import partners from "../partners/partners.json";
import { FaFacebook, FaInstagram } from "react-icons/fa";

interface Props {
  name: string;
  description: string;
  image: StaticImageData | string;
  instagramUrl?: string;
  facebookUrl?: string;
}
const basePath = "/static/partners";

const PartnerCard = ({
  image,
  name,
  description,
  instagramUrl,
  facebookUrl,
}: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:scale-105">
      <div className="relative bg-black">
        <Image
          src={image}
          alt="partner"
          className="object-contain w-full h-48 rounded-lg filter brightness-125 hover:brightness-100"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-[#70f1ae] opacity-0 transition duration-300 hover:opacity-70"></div>
      </div>
      <div className="p-4 text-center">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      {(instagramUrl || facebookUrl) && (
        <div className="p-4 text-center flex justify-center items-center space-x-4">
          {facebookUrl && (
            <a
              href={facebookUrl}
              className="text-2xl hover:text-[#70f1ae] transition-colors duration-300 cursor-pointer"
            >
              <FaFacebook />
            </a>
          )}
          {instagramUrl && (
            <a
              href={instagramUrl}
              className="text-2xl hover:text-[#70f1ae] transition-colors duration-300 cursor-pointer"
            >
              <FaInstagram />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const Partners = () => {
  return (
    <>
      <Element name="partners" />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-2">Our Partners</h2>
            <hr className="border-b-2 border-[#70f1ae] mx-auto w-20" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, idx) => (
              <PartnerCard
                image={`${basePath}/${partner.image}`}
                name={partner.name}
                description={partner.description}
                facebookUrl={partner.facebookUrl}
                instagramUrl={partner.instagramUrl}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
