import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import {
  FaHeartbeat,
  FaBuilding,
  FaCreditCard,
  FaShoppingCart,
  FaGraduationCap,
  FaIndustry,
} from "react-icons/fa";
import {leftArrow, rightArrow} from "../../../data/assetes";
import SectionHeading from "../../../components/reusable/SectionHeading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SoftwareCarusole = ({container}) => {
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

  return (
    <section className="py-72 px-4 sm:px-6 lg:px-8 bg-white">
      <div className={``}>
        {/* Header Section */}
        <div className={`max-w-4xl mx-auto`}>
          <SectionHeading
            title={
              "Here is a list of industries for which we offer software development services."
            }
            subtitle={
              "As one of the top software development companies, we serve diverse industries globally. Our best and most experienced developers have deep knowledge in their respective fields."
            }
          />
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {industries.map((industry) => (
              <SwiperSlide key={industry.id}>
                <div className="px-4">
                  <div className="bg-gradient-to-br from-[#FEBB4D] to-[#FFF8E9] rounded-2xl shadow-lg p-6 lg:p-8 relative hover:shadow-xl transition-shadow duration-300 h-96">
                    {/* Circular Icon - Top Left */}
                    <div className="">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <div className="text-red-500 text-lg sm:text-xl">
                          {industry.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-4 sm:pt-6">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#231f20] mb-3 sm:mb-4 text-left leading-tight">
                        {industry.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-left">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10 space-x-2 sm:space-x-4">
            <button className="swiper-button-prev-custom w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:opacity-70 transition-opacity duration-200">
              <img src={leftArrow} alt="Previous" className="w-full h-full" />
            </button>
            <button className="swiper-button-next-custom w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:opacity-70 transition-opacity duration-200">
              <img src={rightArrow} alt="Next" className="w-full h-full" />
            </button>
          </div>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center mt-4"></div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareCarusole;
