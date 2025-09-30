import React from "react";
import HeadingSection from "../../../components/reusable/SectionHeading";

const VideoSection = ({img, container, playIcon}) => {
  const testimonialData = [
    {
      id: 1,
      title: "Paydeer Fintech Portal",
      image: img,
    },
    {
      id: 2,
      title: "Paydeer Fintech Portal",
      image: img,
    },
    {
      id: 3,
      title: "Paydeer Fintech Portal",
      image: img,
    },
  ];

  return (
    <div className={container}>
      <div className="relative overflow-hidden">
        <div className={``}>
          <HeadingSection
            title="Video Testimonials Of Partnerships That We Cherish"
            subtitle="From startups to established enterprises, these videos bring to life the experiences of partners who trusted us to transform their ideas into impactful solutions."
          />

          {/* Testimonial Cards */}
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center xl:justify-between p-2 xl:gap-4 gap-10">
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl border shadow-xl md:max-w-96 sm:w-80 lg:w-96 relative"
                style={{boxShadow: "0px 4px 4px 0px #00000040"}}
              >
                <div className="">
                  <img
                    src={testimonial.image}
                    alt="Client Testimonial"
                    className="w-full  object-cover rounded-lg"
                  />
                  {/* Play Button */}
                  <div className="absolute bottom-[53px] right-1">
                    <div className="w-12 h-12 bg-secondary border-[3px] border-solid border-[#FFF6E6] p-1 rounded-full flex items-center justify-center hover:scale-105 transition-all cursor-pointer">
                      <img src={playIcon} alt="Play" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold ">
                    {testimonial.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
