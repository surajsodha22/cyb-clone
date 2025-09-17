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
          <div className="flex flex-wrap justify-between">
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl border shadow-xl max-w-[385px]"
                style={{boxShadow: "0px 4px 4px 0px #00000040"}}
              >
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt="Client Testimonial"
                    className="w-full  object-cover rounded-t-2xl"
                  />
                  {/* Play Button */}
                  <div className="absolute bottom-4 right-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all cursor-pointer"
                      style={{backgroundColor: "#FDC366"}}
                    >
                      <img src={playIcon} alt="Play" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800">
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
