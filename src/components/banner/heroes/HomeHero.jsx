import React from "react";
import Button from "../../reusable/Button";

const HomeHero = ({container = "container mx-auto px-6", button, image}) => {
  return (
    <section
      className={`flex ${container} flex-col lg:flex-row items-center justify-between py-8 sm:py-20 md:py-24 px-2 xl:px-0`}
    >
      {/* Left Content */}
      <div className="w-full lg:w-[60%] space-y-1 sm:space-y-4 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[52px]">
          A <span className="font-bold">collection</span> of
          <span className="text-[#F26064] font-bold"> Innovation,</span>
          <span className="font-bold text-[#FFAD32]"> Future Version</span> and
          your growth.
        </h1>

        <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
          Our team provides flexible AI solutions to drive your company's
          innovation and long-term success.{" "}
        </p>

        <p className="text-gray-500 text-sm sm:text-base">
          Our customers love to work with us Clutch 4.9{" "}
          <span className="text-[#F26064] text-lg">★★★★</span>
        </p>

        {button && (
          <div className="flex justify-center lg:justify-start">
            <Button
              text={button.text}
              onClick={button.onClick}
              className=""
              effect={true}
            />
          </div>
        )}
      </div>

      {/* Right Image - Fixed dimensions to prevent layout shift */}
      <div className="lg:w-1/3  mt-6 sm:mt-8 lg:mt-0 flex justify-center">
        <div className="rounded-[20px] sm:rounded-[30px] overflow-hidden w-full max-w-sm sm:max-w-md">
          <img
            src={image}
            alt="banner"
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
            style={{
              aspectRatio: "1/1",
              maxHeight: "400px",
              width: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
