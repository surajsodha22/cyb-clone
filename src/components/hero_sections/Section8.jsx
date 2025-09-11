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
              <div className="bg-secondary shadow-sm border rounded-xl ">
                <div className="bg-white p-6 rounded-br-[50px] rounded-t-xl shadow-md">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    4.5
                    <FaStar className="text-secondary" />
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Experience in building iOS applications using Swift,
                    ensuring high performance and seamless user experience.
                  </p>
                </div>
                <div className="bg-white  ">
                  <div className="flex bg-secondary items-center gap-4 py-10 px-6 rounded-tl-[50px]  justify-center">
                    <img
                      src={slide.img}
                      alt={slide.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col items-start">
                      <div className="text-lg font-semibold">{slide.name}</div>
                      <div className="text-xs text-gray-500">{slide.role}</div>
                    </div>
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
