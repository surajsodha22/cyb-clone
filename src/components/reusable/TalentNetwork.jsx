import React from "react";
import {techStacks} from "../../data/data";

const roles = [
  "FrontEnd Developers",
  "Backend Developers",
  "Digital Marketers",
  "Designers",
  "Salesforce Experts",
  "Email Marketers",
  "Software Engineers",
  "App Developers",
  "Data and QA",
];

const TalentNetwork = () => {
  return (
    <div className="">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        India's Largest Talent Network
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl  space-y-2">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition
               ${
                 index % 2 === 0 ? "bg-[#FEBB4D1A]" : "bg-[#feba4d5d]"
               }  text-black hover:bg-secondary`}
            >
              <span>{role}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#fff4e4] rounded-xl ">
          <div className=" p-6 flex flex-wrap gap-4 justify-center items-center max-w-md mx-auto">
            {techStacks.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition h-16 sm:w-44 w-32"
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="sm:size-10 size-6 object-contain"
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentNetwork;
