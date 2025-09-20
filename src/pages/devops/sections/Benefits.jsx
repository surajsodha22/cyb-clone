import React from "react";
import {benefitsDevops} from "../../../data/data";
import SectionHeading from "../../../components/reusable/SectionHeading";

const Benefits = ({container}) => {
  return (
    <section
      className="py-72 mt-72 "
      style={{
        background: "linear-gradient(to bottom, #FFF8E7, #FFFFFF)",
      }}
    >
      <div className={container}>
        {/* Header Section */}
        <SectionHeading
          title="Benefits of our DevOps Services"
          subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
          align="center"
        />

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsDevops?.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-xl shadow-lg p-6  "
            >
              {/* Image */}
              <div className="mb-6 flex justify-center">
                <div className=" rounded-xl w-full h-44 overflow-hidden shadow-lg">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full  object-cover"
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
