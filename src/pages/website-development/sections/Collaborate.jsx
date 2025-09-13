import React from "react";
import {webColab} from "../../../data/assetes";

const Collaborate = () => {
  return (
    <div className="py-16 bg-white relative overflow-hidden">
      {/* Background dotted pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ff6b35 2px, transparent 2px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className=" mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Collaborate with the Experts
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Card - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-8 md:p-12 h-full relative">
              <div className="flex flex-col lg:flex-row items-start gap-8 h-full">
                {/* Left Side - Text Content */}
                <div className="flex-1 lg:w-2/3">
                  {/* Large Number 01 */}
                  <div className="text-2xl font-bold text-left text-red-500 mb-4">
                    01
                  </div>

                  <h4 className="text-sm md:text-lg font-bold text-left text-gray-900 mb-6 leading-tight">
                    Provide Complete web Development Solution
                  </h4>
                  <p className="text-gray-700 text-sm text-left">
                    From as low as $10 per day with limited time offer
                    discounts.
                  </p>
                </div>

                {/* Right Side - 3D Illustration */}
                <div className="flex-1 lg:w-1/3 flex justify-end items-center">
                  <img
                    src={webColab}
                    alt="Web Development 3D Illustration"
                    className="w-full max-w-md h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Smaller Cards - Right Side */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Card 02 */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-2xl font-bold text-red-500 mb-3 text-left">
                  02
                </div>
                <h4 className="text-md font-bold text-gray-900 mb-2 text-left">
                  Faster Load time
                </h4>
                <p className="text-gray-600 text-xs text-left">
                  Get ready to launch your real estate website without...
                </p>
              </div>

              {/* Card 03 */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-2xl font-bold text-red-500 mb-3 text-left">
                  03
                </div>
                <h4 className="text-md font-bold text-gray-900 mb-2 text-left">
                  Easy Onboarding
                </h4>
                <p className="text-gray-600 text-xs text-left">
                  Get ready to launch your real estate website without...
                </p>
              </div>

              {/* Card 04 */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-2xl font-bold text-red-500 mb-3 text-left">
                  04
                </div>
                <h4 className="text-md font-bold text-gray-900 mb-2 text-left">
                  User Latest Technologies
                </h4>
                <p className="text-gray-600 text-xs text-left">
                  Get ready to launch your real estate website without...
                </p>
              </div>

              {/* Card 05 */}
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-2xl font-bold text-red-500 mb-3 text-left">
                  05
                </div>
                <h4 className="text-md font-bold text-gray-900 mb-2 text-left">
                  Seo Friendly Web Development
                </h4>
                <p className="text-gray-600 text-xs text-left">
                  Get ready to launch your real estate website without...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
