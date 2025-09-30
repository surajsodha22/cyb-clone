import React from "react";
import {
  FaPalette,
  FaCode,
  FaProjectDiagram,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import {woman3} from "../../../data/assetes";
import Button from "../../../components/reusable/Button";

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
    <section className=" bg-white">
      <div className="">
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

        <div className="flex flex-col lg:flex-row items-center gap-12 justify-between">
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
            <Button text="Get the cost of your software" />
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-end items-center">
            <img
              src={woman3}
              alt="img"
              className="w-96 mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpensesSoftware;
