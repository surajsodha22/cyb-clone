import React from "react";
import {webColab} from "../../../data/assetes";
import SectionHeading from "../../../components/reusable/SectionHeading";

const Collaborate = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <SectionHeading title="Collaborate with the Experts" align="center" />

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-start gap-8 mt-12">
          {/* Main Card - Left Side */}
          <div className="w-full lg:w-1/2 relative h-96">
            <div className="bg-[#FFAD3214] rounded-xl p-8 h-full  relative">
              {/* Left Side - Text Content */}
              <div className="flex-1 w-1/2">
                <div className="text-2xl font-bold text-red-500 md:mb-4 mb-2">
                  01
                </div>

                <h4 className="text-xl font-bold text-gray-900 md:mb-4 mb-2 leading-tight">
                  Provide Complete web Development Solution
                </h4>
                <p className="text-gray-700 text-base">
                  From as low as $10 per day with limited time offer discounts.
                </p>
              </div>

              {/* Right Side - Illustration */}
              <div className="flex-1 flex justify-end items-end absolute right-0 bottom-0 md:w-1/2 w-44">
                <img
                  src={webColab}
                  alt="Web Development 3D Illustration"
                  className="w-full max-w-sm h-auto"
                />
              </div>
            </div>
          </div>

          {/* Smaller Cards - Right Side */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
            {/* Card 02 */}
            <div className="bg-white rounded-xl p-6 shadow-[0px_4px_10px_0px_#00000029] transition-shadow border border-[#E9E9E9]">
              <div className="text-2xl font-bold text-red-500 mb-2">02</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Faster Load time
              </h4>
              <p className="text-gray-600 text-sm">
                Get ready to launch your real estate website without...
              </p>
            </div>

            {/* Card 03 */}
            <div className="bg-white rounded-xl p-6 shadow-[0px_4px_10px_0px_#00000029] transition-shadow border border-[#E9E9E9]">
              <div className="text-2xl font-bold text-red-500 mb-2">03</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Easy Onboarding
              </h4>
              <p className="text-gray-600 text-sm">
                Get ready to launch your real estate website without...
              </p>
            </div>

            {/* Card 04 */}
            <div className="bg-white rounded-xl p-6 shadow-[0px_4px_10px_0px_#00000029] transition-shadow border border-[#E9E9E9]">
              <div className="text-2xl font-bold text-red-500 mb-2">04</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                User Latest Technologies
              </h4>
              <p className="text-gray-600 text-sm">
                Get ready to launch your real estate website without...
              </p>
            </div>

            {/* Card 05 */}
            <div className="bg-white rounded-xl p-6 shadow-[0px_4px_10px_0px_#00000029] transition-shadow border border-[#E9E9E9]">
              <div className="text-2xl font-bold text-red-500 mb-2">05</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Seo Friendly Web Development
              </h4>
              <p className="text-gray-600 text-sm">
                Get ready to launch your real estate website without...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
