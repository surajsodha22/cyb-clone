import React from "react";
import {cloud1, cloud2, cloud3} from "../../data/assetes";

const ManagementTools = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Best Cloud Management Tools for Enterprise DevOps
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            follows the best app development practices while digitalizing your
            idea. Here are all the app development services offered by us:
          </p>
        </div>

        {/* Cloud Tools Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* AWS Card 1 */}
          <div className="border border-red-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              {/* AWS Logo */}
              <div className="w-20 h-20 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-4">
                <img src={cloud1} alt="AWS" className="w-12 h-12" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AWS</h3>

              {/* Description */}
              <p className="text-gray-700 text-xs leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Microsoft Azure Card */}
          <div className="border border-red-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              {/* Azure Logo */}
              <div className="w-20 h-20 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-4">
                <img src={cloud2} alt="Microsoft Azure" className="w-12 h-12" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Microsoft Azure
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-xs leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Google Workspace Card */}
          <div className="border border-red-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              {/* Google Workspace Logo */}
              <div className="w-20 h-20 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={cloud3}
                  alt="Google Workspace"
                  className="w-12 h-12"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Google Workplace
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-xs leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* AWS Card 2 */}
          <div className="border border-red-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              {/* AWS Logo */}
              <div className="w-20 h-20 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-4">
                <img src={cloud1} alt="AWS" className="w-12 h-12" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AWS</h3>

              {/* Description */}
              <p className="text-gray-700 text-xs leading-relaxed">
                Lorem ipsum dolor consectetur adipiscin do eiusmod tempor ut
                labore et dolore aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementTools;
