import React from "react";
import {devLeft, devRight} from "../../../data/assetes";
import SectionHeading from "../../../components/reusable/SectionHeading";

const BenefitsServicesDevOps = () => {
  return (
    <section className="xl:px-0 px-2">
      <div className="">
        {/* Header Section */}

        <SectionHeading
          title="Benefits of our DevOps Services"
          subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
          align="center"
        />

        {/* Content Grid - 2x2 Layout */}
        <div className="">
          {/* Top-Left: Hire DevOps Engineer Text Box */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="bg-[#FDF7F2] rounded-lg  p-8 shadow-[0px_4px_20px_0px_#00000026] border-l-4 border-l-orange-300 max-w-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Hire DevOps Engineer
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. , sed do eiusmod tempor
                  incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt. sed do eiusmod tempor
                  incididunt. , sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>

            {/* Top-Right: Image 1 */}
            <div className="rounded-lg max-w-xl overflow-hidden ">
              <img
                src={devRight}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-6  mt-10 items-center justify-center">
            {/* Bottom-Left: Image 2 */}
            <div className="rounded-xl max-w-xl overflow-hidden ">
              <img
                src={devLeft}
                alt="Person holding tablet with search interface"
                className="w-full  object-cover"
              />
            </div>

            {/* Bottom-Right: Azure DevOps Services Text Box */}
            <div className="bg-[#FDF7F2] rounded-xl p-8 shadow-[0px_4px_20px_0px_#00000026] border-l-4 border-l-orange-300 relative max-w-xl ">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Azure DevOps Services
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. , sed do eiusmod tempor
                  incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt. sed do eiusmod tempor
                  incididunt. , sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsServicesDevOps;
