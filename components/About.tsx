import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";

import manImg from "../public/static/manImg.jpg";

const About = () => {
  return (
    <>
      <Element name="about"></Element>
      <div className="w-full px-6 sm:px-10 py-9">
        <div className="xl:mx-[6rem] 2xl:w-[1200px] 2xl:mx-auto">
          <div className="mb-4">
            <h2 className="font-bold text-2xl">Who We Are</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div className="p-4 rounded-2xl border-[0.50px] border-[#70f1ae] hover:bg-[#70f1ae] hover:text-black transition-colors duration-300">
              <div className="w-1/2 mx-auto mb-4">
                <Image src={manImg} alt="man" className="rounded-full" />
              </div>
              <div className="flex flex-col items-center ">
                <h3 className="font-bold text-xl my-2">Henry Peters (CTO)</h3>
                <p className="text-sm text-center">
                Henry is a highly skilled full stack developer. He has extensive experience in javascript mapping technologies and has successfully developed user-friendly and scalable applications. Henry's impressive track record includes creating a map-based interface for Solace Global, a leading travel risk management company, and working with Pavia.io, the largest virtual land retail site on the Cardano blockchain. His expertise with various software development tools and methodologies make him the ideal candidate to lead the technical development of the mobile events app.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-2xl border-[0.50px] border-[#70f1ae] hover:bg-[#70f1ae] hover:text-black transition-colors duration-300">
              <div className="w-1/2 mx-auto mb-4">
                <Image src={manImg} alt="man" className="rounded-full" />
              </div>
              <div className="flex flex-col items-center ">
                <h3 className="font-bold text-xl my-2">Jacob Walker (CFO )</h3>
                <p className="text-sm text-center">
                Jacob is an accomplished B2B sales professional with extensive experience selling SaaS and IT security solutions. With a proven track record of identifying new business opportunities and driving growth, Jacob has also excelled in Enterprise Account Management, working on business-critical IT security projects for high-profile clients. He is passionate about providing excellent customer service and believes in offering cost-effective solutions to customer problems. Jacob's strengths lie in his negotiating skills, ability to communicate with decision-makers, and collaborative approach to bringing ideas to life. As the person responsible for implementing and overseeing Hapnin's sales and marketing strategy, Jacob is committed to achieving and surpassing the company's ambitious growth targets.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-2xl border-[0.50px] border-[#70f1ae] hover:bg-[#70f1ae] hover:text-black transition-colors duration-300">
              <div className="w-1/2 mx-auto mb-4">
                <Image src={manImg} alt="man" className="rounded-full" />
              </div>
              <div className="flex flex-col items-center ">
                <h3 className="font-bold text-xl my-2">Joan (Full stack developer)</h3>
                <p className="text-sm text-center">
                Joan is a talented full-stack developer with a passion for creating efficient and user-friendly web applications. He has extensive experience in developing and implementing complex software solutions using various programming languages and frameworks. Joan is highly skilled in front-end technologies such as HTML, CSS, and JavaScript, as well as back-end technologies like Node.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default About;
