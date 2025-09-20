import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import {Pagination} from "swiper/modules";
import {FaStar} from "react-icons/fa";

import {slider} from "../../data/data";
import SectionHeading from "../reusable/SectionHeading";

const Section8 = ({container}) => {
  return (
    <div className={`${container}`}>
      <div className="py-16 sm:py-24 lg:py-72 rounded-[20px]">
        <SectionHeading title="Our clients views on our services" />

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{clickable: true}}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
              centeredSlides: false,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slider.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-secondary shadow-[0px_2px_12px_0px_#1F2D3D40] m-2  rounded-[20px] sm:w-[385px] h-[490px] ">
                <div className="bg-white p-6 rounded-br-[50px] rounded-t-[20px]">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-4">
                    <div className="flex items-center gap-2 text-[18px]">
                      <FaStar className="text-secondary" />
                      <FaStar className="text-secondary" />

                      <FaStar className="text-secondary" />
                      <FaStar className="text-secondary" />
                      <FaStar className="text-[#D9D9D9]" />
                    </div>
                    <div className="text-[18px] font-semibold mt-1">
                      {slide.rating}
                    </div>
                  </h3>
                  <p
                    className="font-dm-sans font-[400] text-[18px] leading-[24px] tracking-[0%] mt-4 h-[250px] overflow-hidden text-black"
                    style={{
                      letterSpacing: "0%",
                      verticalAlign: "middle",
                    }}
                  >
                    &quot;{slide.desc}
                    &quot;
                  </p>
                </div>
                <div className="bg-white rounded-b-[20px] shadow-[0_4px_6px_0px_#1F2D3D40]">
                  <div className="flex bg-secondary items-center gap-4 py-16 px-6 rounded-tl-[50px] justify-center  rounded-b-[20px]">
                    <img
                      src={slide.img}
                      alt={slide.name}
                      className="w-[48px] h-[48px] rounded-full"
                    />
                    <div className="flex flex-col items-start">
                      <div className="text-[18px] font-[700]">{slide.name}</div>
                      <div className="text-[16px] text-[#00000099] font-[400]">
                        {slide.role}
                      </div>
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
