import React from "react";
import {mob_robo} from "../../../data/assetes";
import SectionHeading from "../../../components/reusable/SectionHeading";
// import botImage from "../../assetes/MobileAppDev/aibote2.png"; // update path according to your project

const AiServices = ({container}) => {
  const services = [
    {
      title: "Custom AI App Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Machine Learning Integration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Chatbot and Virtual Assistant Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Predictivity Analytics & Data Science",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className={`${container} `}>
      {/* Heading */}
      <div className="text-center mb-10">
        <SectionHeading
          title="Our AI App Development Services to help you to scale Your Idea"
          subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
          align="center"
        />
      </div>

      {/* Content Section */}
      <div className="bg-orange-50 rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-10 shadow">
        {/* Image */}
        <div className="w-96">
          <img
            src={mob_robo}
            alt="AI Bot"
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-end">
          {services.map((service, index) => (
            <div key={index}>
              <h3 className="text-lg text-left font-semibold text-red-500 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm text-left leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiServices;
