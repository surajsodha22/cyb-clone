import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import {Ai_SecurityCards} from "../../data/data";

const AutoSliderBox = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          320: {slidesPerView: 1},
          640: {slidesPerView: 2},
          1024: {slidesPerView: 4},
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Ai_SecurityCards?.map((card, index) => {
          return (
            <SwiperSlide>
              <div
                key={index}
                className="bg-[#FFE5B4] rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300"
              >
                <img
                  src={card?.image}
                  alt={card?.title}
                  className=" h-16 w-16 object-contain mx-auto"
                />
                <h3 className="text-lg font-semibold mb-2 w-48 mx-auto">
                  {card?.title}
                </h3>
                <p className="text-sm text-gray-700">{card?.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AutoSliderBox;
