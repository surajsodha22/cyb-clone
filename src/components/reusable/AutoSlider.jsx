import React, {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {Ai_Slide} from "../../data/data";
import {leftArrow, rightArrow} from "../../data/assetes";

const AutoSlider = ({reverse = false, slideData}) => {
  let Data = slideData || Ai_Slide;
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
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
                } from-[#fff] to-[#FFCF7F] items-center justify-center p-8 md:p-12 rounded-lg min-h-[300px] md:min-h-[400px]`}
              >
                {/* Text Section */}
                <div
                  className={`w-full md:w-1/2 ${
                    reverse ? "md:pl-8" : "md:pr-8"
                  } mb-8 md:mb-0`}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {item?.title}
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {item?.desc}
                    </p>
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex items-center justify-center w-full md:w-1/2">
                  <div className="relative">
                    <img
                      src={item?.img}
                      alt="Slider visual"
                      className="sm:w-80 w-64 h-auto drop-shadow-lg"
                    />
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="flex justify-center mt-5 sm:mt-6 space-x-3 sm:space-x-4 bg-white">
        <button
          onClick={handlePrev}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
        >
          <img src={leftArrow} alt="Previous" className="w-full h-full" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
        >
          <img src={rightArrow} alt="Next" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default AutoSlider;
