import React from "react";
import {linkdin_frame, HandGroup, goal, bgBlur} from "../../data/assetes";
import {journeys} from "../../data/data";
import FAQ from "../../components/reusable/FAQ";
import SectionHeading from "../../components/reusable/SectionHeading";

const About = ({container}) => {
  const InfoSection = ({title, description, image, reverse = false}) => {
    return (
      <section
        className={`flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-12`}
      >
        <div
          className={`${
            reverse ? "order-2 md:order-2" : "order-2 md:order-1"
          } md:w-1/2`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          <hr className="border-b-2 border-secondary w-16 md:w-20 my-3 md:my-4" />
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        <div
          className={`${
            reverse
              ? "order-1 md:order-1  justify-start"
              : "order-1 md:order-2  justify-end"
          } md:w-1/2 flex max-w-80 md:max-w-96 lg:max-w-[500px]`}
        >
          <img src={image} alt={title} className="w-full" />
        </div>
      </section>
    );
  };

  const JourneyItem = ({year, description, image, isLeft}) => {
    return (
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
        {/* --- Mobile View --- */}
        <div className="flex flex-col items-center text-center md:hidden w-full">
          <span className="text-sm font-semibold text-gray-800 mt-0">
            {year}
          </span>
          <img
            src={image}
            alt={`Journey ${year}`}
            className="rounded-2xl w-full h-auto mt-2"
          />
          <p className="mt-1 text-sm text-gray-700">{description}</p>
        </div>

        {/* --- iPad View --- */}
        <div className="hidden md:flex lg:hidden flex-col items-center text-center w-full px-4">
          <span className="text-base font-bold text-gray-800 mb-4">{year}</span>
          <img
            src={image}
            alt={`Journey ${year}`}
            className="rounded-2xl w-full max-w-md h-auto"
          />
          <p className="mt-3 text-sm text-gray-700 max-w-md">{description}</p>
        </div>

        {/* --- Desktop View --- */}
        {isLeft ? (
          <div className="hidden lg:flex lg:flex-row items-start gap-24 w-full">
            {/* Left side */}
            <div className="w-5/12 flex flex-col items-end text-right pr-6">
              <img
                src={image}
                alt={`Journey ${year}`}
                className="rounded-2xl xl:w-[500px] h-auto"
              />
              <p className="mt-3 text-[15px] text-gray-700 xl:w-[500px]">
                {description}
              </p>
            </div>

            {/* Dot & Year */}
            <div className="relative z-10 flex flex-col items-center xl:mt-[80px] mt-[60px]">
              <div className="w-8 h-8 bg-white border-4 border-orange-400 rounded-full z-10 absolute xl:-left-1 -left-8" />
              <span className="text-lg font-bold  absolute -bottom-8 xl:left-12 left-4 whitespace-nowrap">
                {year}
              </span>
            </div>

            <div className="" />
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-row items-start justify-end gap-24 w-full">
            <div className="" />

            {/* Dot & Year */}
            <div className="relative z-10 flex flex-col items-center xl:mt-[80px] mt-[60px]">
              <div className="w-8 h-8 bg-white border-4 border-orange-400 rounded-full z-10 absolute xl:-right-1 -right-8" />
              <span className="text-lg font-bold  absolute -bottom-8 xl:right-12 right-4 whitespace-nowrap">
                {year}
              </span>
            </div>

            {/* Right side */}
            <div className="w-5/12 flex flex-col items-start text-right">
              <img
                src={image}
                alt={`Journey ${year}`}
                className="rounded-2xl xl:w-[500px] h-auto"
              />
              <p className="mt-3 text-[15px] text-gray-700 xl:w-[500px]">
                {description}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className={` `}>
        <div className="space-y-8">
          <div className={`${container} px-4 md:px-6 lg:px-8 sm:pt-72 pt-16 `}>
            <InfoSection
              title="Company Overview"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,."
              image={linkdin_frame}
            />
          </div>

          <div className="relative">
            <div className={`${container} px-4 md:px-6 `}>
              <InfoSection
                title="Who We Are"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                image={HandGroup}
                reverse={true}
              />
            </div>
            <img
              src={bgBlur}
              alt="bgBlur"
              className="absolute top-0 right-0 w-48 "
            />
          </div>

          <div className={`${container} px-4 md:px-6 `}>
            <InfoSection
              title="Company Overview"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
              image={goal}
            />
          </div>
        </div>
      </div>
      <div className="bg-primary mt-16 sm:mt-24 lg:mt-72 py-10 md:py-16 lg:py-72">
        <div className={`${container}`}>
          <SectionHeading
            title="Our Journey"
            subtitle="Cyboticx Journey"
            align="center"
          />

          <div className="relative px-6 xl:px-0">
            {/* Vertical dotted line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 lg:h-full h-[78%] border-l-2 border-dotted border-gray-300 z-0 lg:block hidden"></div>

            <div className="space-y-5 relative z-10">
              {journeys.map((item, index) => (
                <JourneyItem
                  key={index}
                  year={item.year}
                  description={item.description}
                  image={item.image}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${container} my-10 md:my-16 lg:my-72`}>
        <FAQ />
      </div>
    </>
  );
};

export default About;
