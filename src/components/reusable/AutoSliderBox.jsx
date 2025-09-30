import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {Ai_SecurityCards} from "../../data/data";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const AutoSliderBox = () => {
  return (
    <div className="relative max-w-[1500px] mx-auto">
      <SectionHeading
        title="How we Ensure Secure AI Software Development ?"
        subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
        align="center"
      />

      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: {slidesPerView: 1},
          640: {slidesPerView: 2, spaceBetween: 20},
          1200: {slidesPerView: 3, spaceBetween: 40},
          1500: {slidesPerView: 4, spaceBetween: 50},
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {Ai_SecurityCards?.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-[#FFE5B4] rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300 min-h-[250px] md:min-w-[385px]">
                <img
                  src={card?.image}
                  alt={card?.title}
                  className=" h-16 w-16 object-contain mx-auto"
                />
                <h3 className="text-[20px] font-semibold mb-2 w-60 mx-auto">
                  {card?.title}
                </h3>
                <p className="text-sm text-gray-700">
                  {card?.description?.length > 100
                    ? card?.description?.slice(0, 100) + "..."
                    : card?.description}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation buttons */}
      <div className="flex items-center absolute md:top-20 right-0 z-20 gap-2">
        <div className="size-10 cursor-pointer rounded-full flex items-center justify-center swiper-button-prev">
          <FaChevronLeft className="text-gray-600" />
        </div>
        <div className="size-10 cursor-pointer rounded-full flex items-center justify-center swiper-button-next">
          <FaChevronRight className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default AutoSliderBox;
