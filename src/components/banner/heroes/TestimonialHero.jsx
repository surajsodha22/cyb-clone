import React from "react";

const TestimonialHero = ({container, image}) => {
  return (
    <section
      className={`flex ${container} flex-col md:flex-row items-center justify-between py-5 md:h-[74vh]`}
    >
      {/* Left Section */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">Testimonial</h1>
        <hr className="border-b-2 border-black w-24" />
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
        <div className="rounded-[30px] overflow-hidden max-w-xl">
          <img src={image} alt="banner" className="w-full h-auto" />
        </div>
      </div>

      {/* Right Image */}
    </section>
  );
};

export default TestimonialHero;
