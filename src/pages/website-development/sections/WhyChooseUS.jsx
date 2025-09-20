import React from "react";
import {
  FiSmartphone,
  FiSearch,
  FiZap,
  FiLayers,
  FiTarget,
} from "react-icons/fi";
import {coding} from "../../../data/assetes";

const WhyChooseUS = ({container}) => {
  const features = [
    {
      id: 1,
      title: "Mobile-friendly & responsive design",
      icon: FiSmartphone,
      description:
        "Our websites are designed to work perfectly on all devices and screen sizes.",
    },
    {
      id: 2,
      title: "SEO-optimized structure",
      icon: FiSearch,
      description:
        "Built with search engine optimization in mind for better visibility.",
    },
    {
      id: 3,
      title: "Fast loading & performance-focused",
      icon: FiZap,
      description:
        "Optimized for speed and performance to provide the best user experience.",
    },
    {
      id: 4,
      title: "Clean, modern UI/UX",
      icon: FiLayers,
      description:
        "Contemporary design that engages users and drives conversions.",
    },
    {
      id: 5,
      title: "Tailored to your business goals",
      icon: FiTarget,
      description:
        "Customized solutions that align with your specific business objectives.",
    },
  ];

  return (
    <div className="my-72 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className={`${container} py-72`}>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="order-1">
            <div className="relative">
              <img
                src={coding}
                alt="Web Development - Coding on laptop"
                className="w-full h-auto rounded-2xl shadow-2xl"
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
              {features.map((feature) => (
                <div key={feature.id} className="flex gap-4 items-center mt-4">
                  {/* Icon */}
                  <div className="">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center  shadow-lg">
                      <feature.icon className="w-5 h-5 text-red-500" />
                    </div>
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
