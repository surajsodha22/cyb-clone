import React from "react";
import {linkdin_frame, HandGroup, goal} from "../../data/assetes";
import {journeys} from "../../data/data";
import Section11 from "../../components/hero_sections/Section11";

const About = () => {
  const InfoSection = ({title, description, image, reverse = false}) => {
    return (
      <section
        className={`flex flex-col md:flex-row items-center justify-between gap-10`}
      >
        <div
          className={`${
            reverse ? "order-2 md:order-2" : "order-2 md:order-1"
          } md:w-1/2`}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        <div
          className={`${
            reverse
              ? "order-1 md:order-1  justify-start"
              : "order-1 md:order-2  justify-end"
          } md:w-1/2 flex`}
        >
          <img src={image} alt={title} className="rounded-3xl shadow-md w-96" />
        </div>
      </section>
    );
  };

  const JourneyItem = ({year, description, image, isLeft}) => {
    return (
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
        {/* --- Mobile View --- */}
        <div className="flex flex-col items-center text-center md:hidden mb-10">
          <div className="w-6 h-6 bg-white border-4 border-orange-400 rounded-full" />
          <span className="text-sm font-semibold text-gray-800 mt-2">
            {year}
          </span>
          <img
            src={image}
            alt={`Journey ${year}`}
            className="rounded-2xl w-64 h-auto mt-4"
          />
          <p className="mt-3 text-sm text-gray-700 max-w-xs">{description}</p>
        </div>

        {/* --- Desktop View --- */}
        {isLeft ? (
          <div className="hidden md:flex md:flex-row items-center justify-between w-full">
            {/* Left side */}
            <div className="w-5/12 flex flex-col items-end text-right pr-6">
              <img
                src={image}
                alt={`Journey ${year}`}
                className="rounded-2xl w-80 h-auto"
              />
              <p className="mt-3 text-sm text-gray-700 max-w-xs">
                {description}
              </p>
            </div>

            {/* Dot & Year */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-6 h-6 bg-white border-4 border-orange-400 rounded-full z-10" />
              <span className="text-sm font-semibold text-gray-800 absolute bottom-0 left-8 mt-2 whitespace-nowrap">
                {year}
              </span>
            </div>

            <div className="w-5/12" />
          </div>
        ) : (
          <div className="hidden md:flex md:flex-row items-center justify-between w-full">
            <div className="w-5/12" />

            {/* Dot & Year */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-6 h-6 bg-white border-4 border-orange-400 rounded-full z-10" />
              <span className="text-sm font-semibold text-gray-800 absolute bottom-0 right-8 mt-2 whitespace-nowrap">
                {year}
              </span>
            </div>

            {/* Right side */}
            <div className="w-5/12 flex flex-col items-start text-left pl-6">
              <img
                src={image}
                alt={`Journey ${year}`}
                className="rounded-2xl w-80 h-auto"
              />
              <p className="mt-3 text-sm text-gray-700 max-w-xs">
                {description}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <div>
        <InfoSection
          title="Company Overview"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
          image={linkdin_frame}
        />

        <InfoSection
          title="Who We Are"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
          image={HandGroup}
          reverse={true}
        />

        <InfoSection
          title="Company Overview"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
          image={goal}
        />
      </div>

      <div className="bg-primary py-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Journey</h2>
          <p className="text-sm text-gray-500">Cyboticx Journey</p>
        </div>
        <div className="relative py-20 px-4 md:px-0">
          {/* Vertical dotted line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-l-2 border-dotted border-gray-300 z-0"></div>

          {/* Title */}

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

      <Section11 />
    </div>
  );
};

export default About;
