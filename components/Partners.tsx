import React from "react";
import Image, { StaticImageData } from "next/image";
import { Element } from "react-scroll";
import partners from "../partners/partners.json";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Fade, JackInTheBox, Hinge, Reveal, Zoom , AttentionSeeker } from "react-awesome-reveal";
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
    <div className="bg-[#70f1ae] m-2 p-1 h-68 rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col justify-between">

        <div className="relative rounded-md bg-black">
        <Image
  src={image}
  alt="partner"
  className="object-contain rounded-md w-full h-48 rounded-lg filter brightness-125 hover:brightness-100"
  width={1000}
  height={1000}
/>
          <div className="absolute inset-0    opacity-0 transition duration-300 hover:opacity-70"></div>
        </div>

<div  className=" h-32">
        <div className="p-4 text-center">
          <p className="text-sm font-bold text-xl">{name}</p>
          {/* <p className="text-sm text-gray-500">{description}</p> */}

      </div>
      {(instagramUrl || facebookUrl) && (
        <div className="p-4 text-center flex justify-center items-center space-x-4">
          {facebookUrl && (
            <a
              href={facebookUrl}
              className="text-2xl hover:text-black transition-colors duration-300 cursor-pointer"
            >
              <FaFacebook />
            </a>
          )}
          {instagramUrl && (
            <a
              href={instagramUrl}
              className="text-2xl hover:text-black transition-colors duration-300 cursor-pointer"
            >
              <FaInstagram />
            </a>
          )}
        </div>
      )}
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <>
      <Element name="partners" />
      <div className="m-10  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-2">Our Partners</h2>
            <hr className="border-b-2 border-white mx-auto w-20" />
          </div>
          <div className="text-center mb-4">
            <div className="text-xl text-black mb-2">We are proudly partnered with over 60 independant buisnesses on the south coast of the UK</div>

          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6"> */}
          <Swiper
                        // spaceBetween={100}
                        breakpoints={{
                          640: { slidesPerView: 1 },
                          768: { slidesPerView: 2, spaceBetween: 40 },
                          1024: { slidesPerView: 2, spaceBetween: 10 },
                          1280: { slidesPerView: 3, spaceBetween: 40 },
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
            {partners.map((partner, idx) => (
                <SwiperSlide>
                  <AttentionSeeker> 
              <PartnerCard
                image={`${basePath}/${partner.image}`}
                name={partner.name}
                description={partner.description}
                facebookUrl={partner.facebookUrl}
                instagramUrl={partner.instagramUrl}
                key={partner.facebookUrl}
              />
              </AttentionSeeker>
              </SwiperSlide>
            ))}
              </Swiper>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};



export default Partners;
