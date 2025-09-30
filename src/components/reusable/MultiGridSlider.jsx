import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {techItems} from "../../data/data";
import SectionHeading from "./SectionHeading";
const MultiGridSlider = () => {
  return (
    <div className="relative max-w-[1500px] mx-auto">
      <section className="px-4 text-center relative">
        <SectionHeading
          title="Technologies and Platforms We Use"
          subtitle=" follows the best app development practices while digitalizing your
      idea. Here are all the app development services offered by us:"
          align="center"
        />
        {/* Left Gradient Overlay */}
        <div
          className="absolute top-18 xl:top-0 left-0 sm:w-[357px] w-[200px] sm:h-full h-[200px] z-10 pointer-events-none 
  bg-gradient-to-r from-white to-transparent"
        />
        {/* Right Gradient Overlay */}
        <div
          className="absolute xl:top-0 top-18 right-0 sm:w-[357px] w-[200px] sm:h-full h-[200px] z-10 pointer-events-none 
  bg-gradient-to-l from-white to-transparent"
        />
        <div className="flex flex-col sm:gap-10 gap-6 mt-5 sm:mt-0">
          {" "}
          <div>
            <Swiper
              modules={[Autoplay]}
              pagination={{clickable: true}}
              spaceBetween={20}
              loop={true}
              freeMode={true}
              speed={2500}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              breakpoints={{
                320: {slidesPerView: 3},
                640: {slidesPerView: 3},
                768: {slidesPerView: 4},
                1024: {slidesPerView: 8},
              }}
            >
              {techItems.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-sm font-medium">{item.name}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <Swiper
              modules={[Autoplay]}
              pagination={{clickable: true}}
              spaceBetween={20}
              loop={true}
              freeMode={true}
              speed={2500}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              breakpoints={{
                320: {slidesPerView: 3},
                640: {slidesPerView: 3},
                768: {slidesPerView: 4},
                1024: {slidesPerView: 8},
              }}
            >
              {techItems.concat(techItems).map(
                (
                  item,
                  index // duplicate slides for seamless scroll
                ) => (
                  <SwiperSlide
                    key={index}
                    className="flex items-center justify-center"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-sm font-medium">{item.name}</div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultiGridSlider;
