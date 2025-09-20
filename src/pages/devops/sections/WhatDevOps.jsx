import React from "react";
import {FaRocket} from "react-icons/fa";
import {devops_1} from "../../../data/assetes";
import Button from "../../../components/reusable/Button";

const WhatDevOps = () => {
  return (
    <section className="py-72 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className=" relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl text-left font-bold text-gray-900 mb-6">
              What is DevOps ?
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            {/* Call to Action Button */}
            <Button text="Get Actual Cost of Development" />
          </div>

          {/* Right Side - Conceptual Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image Container with Orange Border */}
              <div className="relative rounded-2xl  overflow-hidden shadow-2xl">
                <img
                  src={devops_1}
                  alt="dev_img"
                  className="w-full max-w-lg h-auto object-contain"
                />

                {/* Overlay Elements to simulate holographic content */}
                <div className="absolute inset-0 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDevOps;
