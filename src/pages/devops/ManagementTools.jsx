import React from "react";
import {cloud1, cloud2, cloud3} from "../../data/assetes";
import SectionHeading from "../../components/reusable/SectionHeading";

const ManagementTools = () => {
  const cloudToolsData = [
    {
      id: 1,
      title: "AWS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: cloud1,
      alt: "AWS",
    },
    {
      id: 2,
      title: "Microsoft Azure",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: cloud2,
      alt: "Microsoft Azure",
    },
    {
      id: 3,
      title: "Google Workplace",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: cloud3,
      alt: "Google Workspace",
    },
    {
      id: 4,
      title: "AWS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: cloud1,
      alt: "AWS",
    },
  ];

  return (
    <div className="pb-72">
      {/* Header Section */}
      <SectionHeading
        title="Best Cloud Management Tools for Enterprise DevOps"
        subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
        align="center"
      />

      {/* Cloud Tools Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cloudToolsData.map((tool) => (
          <div key={tool.id} className="border border-red-200 rounded-lg p-6">
            <div className="flex flex-col items-center text-center">
              {/* Tool Logo */}
              <div className="  rounded-lg flex items-center justify-center mb-4">
                <img src={tool.image} alt={tool.alt} className="w-full" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {tool.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-xs leading-relaxed">
                {tool.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagementTools;
