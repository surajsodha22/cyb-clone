import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Grid, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {techItems} from "../../data/data";
import SectionHeading from "./SectionHeading";
const MultiGridSlider = () => {
  return (
    <div>
      <section className="py-16  px-4 text-center">
        <SectionHeading
          title="Technologies and Platforms We Use"
          subtitle=" follows the best app development practices while digitalizing your
          idea. Here are all the app development services offered by us:"
          align="center"
        />

        <Swiper
          modules={[Grid, Pagination, Autoplay]}
          pagination={{clickable: true}}
          spaceBetween={20}
          grid={{rows: 2, fill: "row"}}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 3,
              grid: {rows: 2},
            },
            640: {
              slidesPerView: 3,
              grid: {rows: 2},
            },
            768: {
              slidesPerView: 4,
              grid: {rows: 2},
            },
            1024: {
              slidesPerView: 8,
              grid: {rows: 2},
            },
          }}
          className=""
        >
          {techItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div
                className={`flex flex-col items-center text-center"
              }`}
              >
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
      </section>
    </div>
  );
};

export default MultiGridSlider;
