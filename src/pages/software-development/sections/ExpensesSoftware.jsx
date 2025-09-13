import React from "react";
import {
  FaPalette,
  FaCode,
  FaProjectDiagram,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

const ExpensesSoftware = () => {
  const costFactors = [
    {
      title: "UI UX Design",
      description:
        "It is vital to consider factors to ensure the UI/UX design enhances customer retention and is a perfect fit for your industry.",
      icon: <FaPalette className="w-4 h-4" />,
    },
    {
      title: "Tech Stack of Software",
      description:
        "A tech stack is a set of technologies. The decision to choose one is a technical one, made after considering factors like developer availability, and future-proofing.",
      icon: <FaCode className="w-4 h-4" />,
    },
    {
      title: "Size of Project Development",
      description:
        "We determine the cost of a project by carefully considering its size, features, timeline, and the team needed to ensure a successful outcome.",
      icon: <FaProjectDiagram className="w-4 h-4" />,
    },
    {
      title: "Development Team Type",
      description:
        "Different team types, such as in-house, professional developers, and freelancers, each have their own cost structures and unique qualities.",
      icon: <FaUsers className="w-4 h-4" />,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header - Spans over both content and image */}
        <div className=" text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">
            What expenses are incurred in software development?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-left">
            The cost depends on various factors, such as the type, design, and
            other project
            <br />
            details and the cost detail is:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2">
            {/* Cost Factors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {costFactors.map((factor, index) => (
                <div key={index} className="text-left">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-left">
                    {factor.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-left">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
            <button className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3">
              <span>Get the cost of your software</span>
              <FaRocket className="w-5 h-5" />
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="../../src/assetes/MobileAppDev/Group 1000001847.png"
              alt="Professional woman with CYBDEER folder"
              className="w-full max-w-lg mx-auto lg:mx-0 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpensesSoftware;
