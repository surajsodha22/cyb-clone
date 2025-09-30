import SectionHeading from "../reusable/SectionHeading";
import {ourBusiness} from "../../data/data";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper/modules";

const Section1 = ({container}) => {
  return (
    <section className={` ${container}  `}>
      <SectionHeading title="Our Business" align="center" />

      <div className="bg-gradient-to-r from-[#FFF7E9] to-[#FFFFFF] px-4 sm:px-8 lg:px-14 py-8 sm:py-12 lg:py-72 shadow-md rounded-xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
          }}
        >
          {ourBusiness.map((business) => (
            <SwiperSlide key={business.id}>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-20">
                <div className="w-full lg:w-1/3 order-2 lg:order-1">
                  <div className="w-full max-w-[300px] sm:max-w-[390px] h-[300px] sm:h-[390px] mx-auto lg:mx-0 bg-white shadow-[0px_4px_16px_0px_#2A2A2A1A] rounded-xl overflow-hidden">
                    <img
                      src={business.image}
                      className="w-full h-full object-cover"
                      alt={`Business`}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/3 order-1 lg:order-2">
                  <div className="text-center lg:text-left">
                    <div className="w-[131px] mx-auto lg:mx-0">
                      <img
                        src={business.cardIcon}
                        alt={`Icon`}
                        className="w-full"
                      />
                    </div>
                    <div className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-xl font-sans text-gray-700 leading-relaxed">
                      {business.description.length > 550
                        ? business.description.slice(0, 550) + "..."
                        : business.description}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Section1;
