import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import {cloud1, cloud2, cloud3} from "../../data/assetes";
import SectionHeading from "../../components/reusable/SectionHeading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ManagementTools = () => {
  const cloudToolsData = [
    {
      id: 1,
      title: "AWS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: cloud1,
      alt: "AWS",
    },
    {
      id: 2,
      title: "Microsoft Azure",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: cloud2,
      alt: "Microsoft Azure",
    },
    {
      id: 3,
      title: "Google Workplace",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: cloud3,
      alt: "Google Workspace",
    },
    {
      id: 4,
      title: "AWS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: cloud1,
      alt: "AWS",
    },
    {
      id: 5,
      title: "AWS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: cloud1,
      alt: "AWS",
    },
    {
      id: 6,
      title: "Microsoft Azure",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: cloud2,
      alt: "Microsoft Azure",
    },
  ];

  return (
    <div className="pb-72">
      {/* Header Section */}
      <SectionHeading
        title="Best Cloud Management Tools for Enterprise DevOps"
        subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
        align="center"
      />

      {/* Cloud Tools Cards */}
      <div className="px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="mySwiper"
        >
          {cloudToolsData.map((tool) => (
            <SwiperSlide key={tool.id}>
              <div className="border border-red-200 rounded-lg p-6 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Tool Logo */}
                  <div className="rounded-lg flex items-center justify-center mb-4">
                    <img src={tool.image} alt={tool.alt} className="w-full" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {tool.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ManagementTools;
