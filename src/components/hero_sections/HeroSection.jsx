import React from "react";
import Section1 from "./Section1";
import {trustArr} from "../../data/data";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Section12 from "./Section12";
import Section13 from "./Section13";

const HeroSection = ({container}) => {
  return (
    <>
      {/* <div className="bg-primary sm:px-0 px-5 sm:pt-4 pt-4 sm:pb-16 pb-10 ">
        <Section1 container={container} />
      </div> */}
      {/* <div className="max-w-3xl relative sm:-top-10 -top-5 mx-4 md:mx-auto bg-white p-2  shadow-md rounded">
        <h1 className="text-center text-lg py-2">
          Trusted by Corporations, Enterprices, And Startups.
        </h1>
        <div className="flex flex-wrap justify-around items-center ">
          {trustArr.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Trusted logo ${index + 1}`}
              className="sm:size-32 size-20 object-contain"
            />
          ))}
        </div>
      </div> */}
      <div className={`sm:px-0 px-5  ${container} mt-5`}>
        <Section2 />
        <Section3 />
      </div>

      <div
        className={`bg-primary sm:px-0 px-5 sm:pt-4 pt-4 sm:pb-16 pb-10 mt-10 `}
      >
        <Section4 container={container} />
      </div>

      <div className={`sm:px-0 px-5  ${container} mt-10`}>
        <Section5 />
      </div>

      <div className="bg-primary sm:px-0 px-5 sm:pt-4 pt-4 sm:pb-16 pb-10 mt-10 ">
        <Section6 container={container} />
      </div>
      <div className={`sm:px-0 px-5  ${container} mt-10`}>
        <Section7 />
      </div>

      <div className="bg-primary sm:px-0 px-5 sm:pt-4 pt-4  pb-6 mt-10 ">
        <Section8 container={container} />
      </div>
      <div className={`sm:px-0 px-5  ${container} mt-10`}>
        <Section9 />
        <div className="sm:mt-10 mt-4">
          <Section10 />
        </div>
      </div>

      <div className="bg-primary sm:px-0 px-5 sm:pt-4 pt-0  pb-16 mt-10 ">
        <Section11 container={container} />
      </div>

      <div className={`sm:px-0 px-5  ${container} mt-10`}>
        <Section12 />
      </div>

      {/* <div className="bg-primary sm:px-0 px-5 sm:pt-4 pt-0  pb-4 mt-10 ">
        <Section13 container={container} />
      </div> */}
    </>
  );
};

export default HeroSection;
