import React from "react";

const ServiceCard = ({feature, index}) => {
  return (
    <div
      key={index}
      className="bg-white border-[0.5px] border-[#F26064] rounded-xl shadow-sm p-2 pb-12 text-center hover:shadow-lg transition"
    >
      {/* Icon */}
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16  rounded-lg flex items-center justify-center">
          <img src={feature?.icon} alt={feature?.title} className="w-full" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {feature?.title}
      </h3>
      <p className="text-gray-600 text-sm">{feature?.description}</p>
    </div>
  );
};

export default ServiceCard;
