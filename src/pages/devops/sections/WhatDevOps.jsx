import React from "react";
import {FaRocket} from "react-icons/fa";
import {devops_1} from "../../../data/assetes";

const WhatDevOps = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto relative z-10">
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
            <button
              className="text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              style={{backgroundColor: "#F26064"}}
            >
              <span>Get Actual Cost of Development</span>
              <FaRocket className="w-5 h-5" />
            </button>
          </div>

          {/* Right Side - Conceptual Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image Container with Orange Border */}
              <div className="relative rounded-2xl  overflow-hidden shadow-2xl">
                <img
                  src={devops_1}
                  alt="DevOps conceptual image with holographic elements"
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
