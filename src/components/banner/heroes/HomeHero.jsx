import React from "react";
import Button from "../../reusable/Button";

const HomeHero = ({container = "container mx-auto px-6", button, image}) => {
  return (
    <section
      className={`flex ${container} flex-col md:flex-row items-center justify-between pt-5 min-h-screen`}
    >
      {/* Left Content */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-5xl ">
          A <span className="font-bold">collection</span> of{" "}
          <span className="text-[#F26064] font-bold">Innovation,</span>{" "}
          <span className="font-bold text-[#FFAD32]">Future Version</span> and
          your growth. Version and your growth.
        </h1>

        <p className="text-gray-600 text-xl">
          Our team provides flexible AI solutions to drive your company's
          innovation and long-term success.{" "}
        </p>

        <p className="text-gray-500">
          Our customers love to work with us Clutch 4.9{" "}
          <span className="text-[#F26064] text-lg">★★★★</span>
        </p>

        {button && (
          <div>
            <Button text={button.text} onClick={button.onClick} className="" />
          </div>
        )}
      </div>

      {/* Right Image - Fixed dimensions to prevent layout shift */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="rounded-[30px] overflow-hidden w-full max-w-md">
          <img
            src={image}
            alt="banner"
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
            style={{
              aspectRatio: "1/1",
              maxHeight: "500px",
              width: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
