import React from "react";
import {devLeft, devRight} from "../../../data/assetes";

const BenefitsServicesDevOps = () => {
  return (
    <section className="py-72 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefits of our DevOps Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            follows the best app development practices while digitalizing your
            idea. Here are all the app development services offered by us:
          </p>
        </div>

        {/* Content Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top-Left: Hire DevOps Engineer Text Box */}
          <div className="bg-[#FDF7F2] rounded-lg mx-6 my-12 p-8 shadow-lg relative border-l-4 border-l-orange-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Hire DevOps Engineer
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          {/* Top-Right: Image 1 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={devRight}
              alt="Person typing on laptop with code on screen"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>

          {/* Bottom-Left: Image 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={devLeft}
              alt="Person holding tablet with search interface"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>

          {/* Bottom-Right: Azure DevOps Services Text Box */}
          <div className="bg-[#FDF7F2] rounded-xl mx-6 my-12 p-8 shadow-lg border-l-4 border-l-orange-300 relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Azure DevOps Services
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsServicesDevOps;
