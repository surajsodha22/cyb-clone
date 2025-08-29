import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {techItems} from "../../data/data";

const Section12 = () => {
  return (
    <section className="py-10 px-4 text-center">
      <h2 className="text-3xl font-bold mb-2">
        Technologies and Platforms We Use
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        follows the best app development practices while digitalizing your idea.
        Here are all the app development services offered by us:
      </p>

      <Swiper
        modules={[Grid, Pagination]}
        pagination={{clickable: true}}
        spaceBetween={20}
        grid={{rows: 2, fill: "row"}}
        breakpoints={{
          320: {
            slidesPerView: 2,
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
            slidesPerView: 5,
            grid: {rows: 2},
          },
        }}
        className=""
      >
        {techItems.map((item, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div
              className={`flex flex-col items-center text-center"
              }`}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="text-sm font-medium">{item.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Section12;
