import React from "react";

const TestimonialGrid = ({testimonialsData}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {testimonialsData?.map((item) => (
        <div
          key={item.id}
          className="relative bg-white rounded-xl border border-[#E5E7EB] shadow-[0px_0px_8px_0px_#00000040] flex flex-col justify-between  pt-10  min-h-[320px] mt-2 lg:mt-5 "
        >
          {/* Quote Icon */}
          <div
            className="absolute left-1/2 -top-6 transform -translate-x-1/2 rounded-full"
            style={{zIndex: 2}}
          >
            <img
              src={item.quote}
              alt="quote"
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-600 text-[15px] leading-relaxed mb-8 min-h-[90px] px-4 text-left">
            {item.text}
          </p>

          {/* Footer */}
          <div className="  bg-[#FFF7E9]">
            <div className="px-4 py-4 flex items-center justify-between">
              <div className="flex items-center ">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full border-2 border-white shadow mr-3 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-[15px] leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
              {/* Stars */}
              <img
                src={item.stars}
                alt="stars"
                className="w-20 h-5 object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialGrid;
