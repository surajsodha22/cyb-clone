import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import {Ai_Slide} from "../../data/data";

const AutoSlider = ({reverse = false, slideData}) => {
  let Data = slideData || Ai_Slide;

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{clickable: true}}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <section
                className={`flex flex-col md:flex-row ${
                  reverse
                    ? "md:flex-row-reverse bg-gradient-to-l"
                    : "bg-gradient-to-r "
                } from-[#fff] to-[#FFCF7F] items-center justify-center p-8 rounded-lg`}
              >
                {/* Image Section */}
                <div className="flex items-center justify-center w-full md:w-1/2 mb-8 md:mb-0">
                  <div className="relative">
                    <img
                      src={item?.img}
                      alt="Slider visual"
                      className="w-72 h-auto"
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className={`w-full md:w-1/2 `}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {item?.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{item?.desc}</p>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AutoSlider;
