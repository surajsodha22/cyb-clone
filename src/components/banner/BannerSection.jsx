import React from "react";
import Button from "../reusable/Button";

const BannerSection = ({
  container = "container mx-auto px-6",
  title,
  highlight1,
  highlight2,
  subtitle,
  description,
  button,
  image,
  pathname,
}) => {
  return (
    <section
      className={`flex ${container} flex-col lg:flex-row items-center justify-between  py-16 sm:py-20 md:py-24 `}
    >
      {/* Left Content */}
      {pathname === "/" ? (
        <>
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {title} <span className="text-red-400">{highlight1}</span> of{" "}
              <br />
              Global <span className="text-secondary">{highlight2}</span>
            </h1>

            {subtitle && (
              <p className="text-gray-600 text-base sm:text-lg">{subtitle}</p>
            )}

            {description && (
              <p className="text-gray-500 text-sm sm:text-base">
                {description}
              </p>
            )}

            {button && (
              <div className="flex justify-center lg:justify-start">
                <Button
                  text={button.text}
                  onClick={button.onClick}
                  className=""
                />
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 flex justify-center">
            <div className="rounded-[20px] sm:rounded-[30px] overflow-hidden w-full max-w-sm sm:max-w-md">
              <img src={image} alt="banner" className="w-full h-auto" />
            </div>
          </div>
        </>
      ) : (
        <>
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
          <div className="w-full lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="rounded-[20px] sm:rounded-[30px] overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-xl lg:mr-5">
              <img src={image} alt="banner" className="w-full h-auto" />
            </div>
          </div>
        </>
      )}

      {/* Right Image */}
    </section>
  );
};

export default BannerSection;
