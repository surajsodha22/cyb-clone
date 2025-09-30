import React from "react";
import {
  devOffer1,
  devOffer2,
  devOffer3,
  devOffer4,
  devOffer5,
} from "../../data/assetes";
import SectionHeading from "../../components/reusable/SectionHeading";

const ServicesManagedDevOps = () => {
  const servicesData = [
    {
      id: 1,
      title: "Containerization and Orchestration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: devOffer1,
      imagePosition: "left", // Image on left, text on right
    },
    {
      id: 2,
      title: "Microservices",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: devOffer2,
      imagePosition: "right", // Image on right, text on left
    },
    {
      id: 3,
      title: "Release Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: devOffer3,
      imagePosition: "left", // Image on left, text on right
    },
    {
      id: 4,
      title: "Security Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: devOffer4,
      imagePosition: "right", // Image on right, text on left
    },
    {
      id: 5,
      title: "IT Infrastructure Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: devOffer5,
      imagePosition: "left", // Image on left, text on right
    },
  ];

  return (
    <div className="pb-72">
      <div className="">
        {/* Header Section */}
        <SectionHeading
          title="Our DevOps Services Managed Offering"
          subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us"
          align="center"
        />

        {/* Service Sections */}
        <div className="space-y-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-[#FEF8EF] rounded-2xl p-6 md:p-8 lg:p-12 shadow-[0px_2px_4px_0px_#00000029]"
            >
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                {/* Image Section */}
                <div
                  className={`${
                    service.imagePosition === "left"
                      ? "order-2 md:order-1"
                      : "order-2 md:order-2"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-[0px_4px_9.2px_0px_#00000036]"
                  />
                </div>

                {/* Text Section */}
                <div
                  className={`${
                    service.imagePosition === "left"
                      ? "order-1 md:order-2"
                      : "order-1 md:order-1"
                  } text-left`}
                >
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesManagedDevOps;
