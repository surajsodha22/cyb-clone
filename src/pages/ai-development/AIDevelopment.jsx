import React from "react";
import {Ai_Process, Ai_Services, Ai_services2} from "../../data/data";
import PartnershipCTA from "../../components/reusable/PartnershipCTA";
import AutoSlider from "../../components/reusable/AutoSlider";
import {ai_img2} from "../../data/assetes";
import AutoSliderBox from "../../components/reusable/AutoSliderBox";
import MultiGridSlider from "../../components/reusable/MultiGridSlider";

const AIDevelopment = ({container}) => {
  return (
    <div>
      <div className={`${container}`}>
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Prompt Engineering Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Ai_Services.map((service, index) => (
            <div
              key={index}
              className="relative  p-6 rounded-xl shadow-md hover:shadow-lg transition border mt-2"
            >
              {/* Top-right image */}
              <div className="absolute -top-8 left-8 size-16">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold my-4 w-60">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                illum ducimus deserunt vel dolorum sed aut explicabo
                repellendus, sit similique, aliquid minus maxime esse quasi
                perferendis numquam quod eligendi accusamus!
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={`sm:mt-28 mt-10 ${container}`}>
        <PartnershipCTA />
      </div>

      <div className={`${container}`}>
        <div className="">
          <h2 className="text-2xl md:text-3xl font-bold text-center my-12">
            AI Development Process
          </h2>

          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6 relative">
            {Ai_Process.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div
                  className={`size-16 rounded-xl flex items-center justify-center `}
                >
                  <img src={step.img} alt={step.title} className="w-full" />
                </div>

                {/* Title */}
                <p className="text-sm md:text-base font-medium text-gray-800 max-w-36">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${container} mt-10`}>
        <AutoSlider />
      </div>

      <div className={`${container} mt-10`}>
        <section className="px-6 py-12 bg-white text-gray-800">
          {/* Title */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">
              Trending <span className="text-orange-500">AI Technologies</span>{" "}
              we used to Build an AI Apps
            </h2>
            <p className="text-gray-600">
              follows the best app development practices while digitalizing your
              idea. Here are all the app development services offered by us:
            </p>
          </div>

          {/* Content Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Left: Images */}
            <div className="flex flex-col items-center gap-6 w-full lg:w-1/2">
              <img src={ai_img2} alt="AI on laptop" className=" max-w-full" />
            </div>

            {/* Right: Text Services */}
            <div className="flex flex-col gap-8 w-full lg:w-1/2">
              {Ai_services2.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className={`${container} `}>
        <AutoSliderBox />
        <MultiGridSlider />
      </div>
    </div>
  );
};

export default AIDevelopment;
