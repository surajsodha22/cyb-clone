import React, {useState} from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeartbeat,
  FaBuilding,
  FaCreditCard,
  FaShoppingCart,
  FaGraduationCap,
  FaIndustry,
} from "react-icons/fa";

const SoftwareCarusole = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const industries = [
    {
      id: 1,
      title: "Fintech Software Development",
      description:
        "With over 8 years of experience in the field, Cybdeer's expertise is a valuable asset for your organization. We develop fintech software that is secure, scalable, compliant, and user-friendly. By leveraging APIs, cloud computing, AI, and machine learning, we deliver customized features and ensure a superior outcome, following a clear development process from research to deployment.",
      icon: <FaCreditCard className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "HealthCare Software Development Services",
      description:
        "With over 8 years of experience in the field, Cybdeer's expertise is a valuable asset for your organization. We develop healthcare software that is secure, scalable, compliant, and user-friendly. By leveraging APIs, cloud computing, AI, and machine learning, we deliver customized features and ensure a superior outcome, following a clear development process from research to deployment.",
      icon: <FaHeartbeat className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Logistic Software Development Services",
      description:
        "With over 8 years of experience in the field, Cybdeer's expertise is a valuable asset for your organization. We develop logistics software that is secure, scalable, compliant, and user-friendly. By leveraging APIs, cloud computing, AI, and machine learning, we deliver customized features and ensure a superior outcome, following a clear development process from research to deployment.",
      icon: <FaBuilding className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "E-commerce Software Development",
      description:
        "With over 8 years of experience in the field, Cybdeer's expertise is a valuable asset for your organization. We develop e-commerce software that is secure, scalable, compliant, and user-friendly. By leveraging APIs, cloud computing, AI, and machine learning, we deliver customized features and ensure a superior outcome, following a clear development process from research to deployment.",
      icon: <FaShoppingCart className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "Education Software Development",
      description:
        "With over 8 years of experience in the field, Cybdeer's expertise is a valuable asset for your organization. We develop education software that is secure, scalable, compliant, and user-friendly. By leveraging APIs, cloud computing, AI, and machine learning, we deliver customized features and ensure a superior outcome, following a clear development process from research to deployment.",
      icon: <FaGraduationCap className="w-6 h-6" />,
    },
    {
      id: 6,
      title: "Manufacturing Software Development",
      description:
        "With over 8 years of experience in the field, Cybdeer's expertise is a valuable asset for your organization. We develop manufacturing software that is secure, scalable, compliant, and user-friendly. By leveraging APIs, cloud computing, AI, and machine learning, we deliver customized features and ensure a superior outcome, following a clear development process from research to deployment.",
      icon: <FaIndustry className="w-6 h-6" />,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === industries.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? industries.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Here is a list of industries for which we offer software development
            services.
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            As one of the top software development companies, we serve diverse
            industries globally. Our best and most experienced developers have
            deep knowledge in their respective fields.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{transform: `translateX(-${currentIndex * 33.333}%)`}}
            >
              {industries.map((industry) => (
                <div key={industry.id} className="w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-[#FEBB4D] to-[#FFF8E9] rounded-2xl shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300">
                    {/* Circular Icon - Top Left */}
                    <div className="">
                      <div className="w-16 h-16 bg-white  rounded-full flex items-center justify-center shadow-lg">
                        <div className="text-red-500 text-xl">
                          {industry.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-6">
                      <h3 className="text- font-bold text-[#231f20] mb-4 text-left leading-tight">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-left">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors duration-200"
            >
              <img
                src="../../src/assetes/MobileAppDev/Vector.png"
                alt="Previous"
                className="w-5 h-5 transform -rotate-180"
              />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors duration-200"
            >
              <img
                src="../../src/assetes/MobileAppDev/Vector.png"
                alt="Next"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareCarusole;
