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
      className={`flex ${container} flex-col md:flex-row items-center justify-between pt-5 md:h-[74vh]`}
    >
      {/* Left Content */}
      {pathname === "/" ? (
        <>
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              {title} <span className="text-red-400">{highlight1}</span> of{" "}
              <br />
              Global <span className="text-secondary">{highlight2}</span>
            </h1>

            {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}

            {description && <p className="text-gray-500">{description}</p>}

            {button && (
              <Button
                text={button.text}
                onClick={button.onClick}
                className=""
              />
            )}
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="rounded-[30px] overflow-hidden">
              <img src={image} alt="banner" className="w-full h-auto" />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Left Section */}
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
            <hr className="border-b-2 border-black w-20" />
            {description && (
              <p className="mt-4 text-gray-600 max-w-md">{description}</p>
            )}
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
            <div className="rounded-[30px] overflow-hidden max-w-xl mr-5">
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
