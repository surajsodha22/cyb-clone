import React from "react";
import {bgBlur} from "../../../data/assetes";

const AboutHero = ({
  container = "container mx-auto px-6",
  title,

  description,

  image,
}) => {
  return (
    <section
      className={`flex ${container} flex-col lg:flex-row items-center justify-between  py-16 sm:py-20 md:py-24 relative 2xl:overflow-hidden`}
    >
      {/* Left Section */}
      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {title}
        </h1>
        <hr className="border-b-2 border-black w-20 mx-auto lg:mx-0" />
        {description && (
          <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
            {description}
          </p>
        )}
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 flex justify-center lg:justify-end md:mr-14">
        <div className="rounded-[20px] sm:rounded-[30px]  overflow-hidden w-full max-w-sm sm:max-w-lg  lg:mr-5">
          <img src={image} alt="banner" className="w-full h-auto" />
        </div>
      </div>

      {/* <img
        src={bgBlur}
        alt="bgBlur"
        className="absolute bottom-0 right-0 w-48  2xl:block hidden"
      /> */}
    </section>
  );
};

export default AboutHero;
