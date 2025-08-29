import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import {Pagination} from "swiper/modules";
import {FaStar} from "react-icons/fa";

import {slider} from "../../data/data";

const Section8 = ({container}) => {
  return (
    <div className={`${container}`}>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{clickable: true}}
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
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slider.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  4.5
                  <FaStar className="text-secondary" />
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Experience in building iOS applications using Swift, ensuring
                  high performance and seamless user experience.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <img
                    src={slide.img}
                    alt={slide.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-col items-start">
                    <div className="text-base font-medium">{slide.name}</div>
                    <div className="text-sm text-gray-500">{slide.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section8;
