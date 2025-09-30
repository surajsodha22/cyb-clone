import React from "react";

const ServiceCard = ({feature, index}) => {
  return (
    <div
      key={index}
      className="bg-white border-[0.5px] border-[#F26064] rounded-xl shadow-sm p-3 sm:p-4 pb-8 sm:pb-12 text-center  transition"
    >
      {/* Icon */}
      <div className="mb-3 sm:mb-4 flex justify-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center">
          <img src={feature?.icon} alt={feature?.title} className="w-full" />
        </div>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
        {feature?.title}
      </h3>
      <p className="text-gray-600 text-xs sm:text-sm">{feature?.description}</p>
    </div>
  );
};

export default ServiceCard;
