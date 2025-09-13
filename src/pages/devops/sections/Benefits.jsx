import React from "react";
import {benefitsDevops} from "../../../data/data";

const Benefits = ({container}) => {
  return (
    <section
      className="py-16 px-4 mt-10 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(to bottom, #FFF8E7, #FFFFFF)",
      }}
    >
      <div className={container}>
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

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsDevops?.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="mb-6 flex justify-center">
                <div className=" rounded-lg overflow-hidden shadow-md">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
