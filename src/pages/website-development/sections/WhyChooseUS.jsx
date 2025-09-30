import React from "react";

import {coding} from "../../../data/assetes";
import {webFeatures} from "../../../data/data";

const WhyChooseUS = ({container}) => {
  return (
    <div className="my-72 bg-gradient-to-b from-[#FFF8E7] to-white">
      <div className={`${container} py-72 xl:px-0 px-2`}>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="order-1 flex justify-center">
            <div className="relative w-[363px] h-[423px]">
              <img
                src={coding}
                alt="img"
                className="w-full h-full rounded-2xl "
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose This Service?
            </h2>

            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              As the complexity of buildings to increase, the field of
              architecture.
            </p>

            {/* Features List */}
            <div className="">
              {webFeatures.map((feature) => (
                <div key={feature.id} className="flex gap-4 items-center mt-4">
                  {/* Icon */}
                  <div className="w-[40px] h-[40px]">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base  text-left text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUS;
